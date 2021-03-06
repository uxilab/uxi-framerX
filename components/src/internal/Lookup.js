import React, { PureComponent } from 'react';
// import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import enhanceWithClickOutside from 'react-click-outside';
import styled from 'styled-components';
import { UnstyledButton } from '../Button';
// import debounce from 'lodash/debounce';

const ItemsWrapper = styled.div`
  pointer-events: none;
  /*transition: ${({ theme: { transition } }) => transition.defaultAll};*/
`;

const PopOverArrow = styled.div`
  clip: rect(-8px 38px 11px -8px);
  position: absolute;
  width: 20px;
  height: 20px;
  min-height: 29px;
  background: transparent;
  top: -11px;
  ${({ anchor }) => (anchor === 'right' ? 'right: 20px;' : 'left: 20px;')};

  &:after {
    ${({ isPopOver }) => (isPopOver ? 'content: ""' : '')};
    display: block;
    width: 20px;
    height: 20px;
    position: absolute;
    box-sizing: border-box;
    background: white;
    transform: rotate(-45deg);
    transform-origin: center center;
    border-style: solid;
    border-color: rgb(206, 206, 206);
    border-width: 1px;
  }
`;

const WrapperUI = styled.div`
  position: relative;
  display: inline-block;
  height: 100%;
  ${({ isFullWidth }) => (isFullWidth ? 'width: 100%' : '')};
`;

const getPosition = (
  cRectMain,
  cRectItems,
  anchor,
  isPopOver
) => {
  const ItemsLeft = cRectMain.left;
  const ItemsTop = cRectMain.bottom;
  const top = isPopOver
    ? (ItemsTop + 20)
    : ItemsTop;

  const left = (anchor === 'left') ? `${ItemsLeft}px` : `${ItemsLeft - (cRectItems.width - cRectMain.width)}px`;

  return {
    left,
    top: `${top}px`,
  };
};

const getStyleForIsOpen = (isOpen, itemsHeight) => ({
  maxHeight: `${itemsHeight}px`,
  opacity: isOpen ? 1 : 0,
  borderColor: isOpen ? '#cecece' : 'transparent',
  pointerEvents: isOpen ? 'all' : 'none',
});


/**
 * DropDown
 *
 * default to right aligning the droped down part
 */
const styles = {
  triggerWrapper: {
    cursor: 'pointer',
  },
  itemsWrapper: {
    zIndex: 9,
    minWidth: '100px',
    background: 'white',
    position: 'absolute',
    border: '1px solid #cecece',
    borderColor: 'transparent',
    marginTop: '1px',
    borderRadius: '3px',
    opacity: 0,
    display: 'flex',
    flexDirection: 'column',
  },
  triggerInnerWrapper: {
    height: '100%',
    display: 'flex',
    alignItems: 'stretch',
  },
};

export class DropDown extends PureComponent {
  static propTypes = {
    main: PropTypes.node,
    inertMain: PropTypes.bool,
    items: PropTypes.array,
  }

  static defaultProps = {
    main: null,
    items: [],
    inertMain: false,
    anchor: 'left',
  }

  constructor(props) {
    super(props);

    this.isOpenControlled = this.props.isOpen !== undefined;

    this.state = {
      isOpen: this.isOpenControlled ? this.props.isOpen : false,
      windowWidth: (window.innerWidth),
      windowHeight: (window.innerHeight),
      position: null,
      dynamicStyle: null,
    };

    this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
    this.closeDropdown = this.closeDropdown.bind(this);
    this.attachListeners = this.attachListeners.bind(this);
    this.detachListeners = this.detachListeners.bind(this);
    this.mainRef = React.createRef();
    this.itemsRef = React.createRef();
  }

  componentDidMount() {
    // const { style } = this.props;

    this.htmlNodeRef = this.getDomElementToListenTo();

    const isOpen = this.getOpenState();

    if (isOpen) {
      this.setState({
        dynamicStyle: this.getFullStyle(),
      });
    }
  }

  componentDidUpdate({ isOpen: prevOpen }, { isOpen: prevOpenState }) {
    const isOpen = this.getOpenState();
    const wasOpen = this.isOpenControlled ? prevOpen : prevOpenState;
    // const { positioning, dynamicStyle } = this.state;

    if (isOpen !== wasOpen) {
      this.setState({
        dynamicStyle: this.getFullStyle(),
      });
    }
  }

  componentWillUnmount() {
    this.detachListeners();
  }

  getOpenState() {
    return this.isOpenControlled ? this.props.isOpen : this.state.isOpen;
  }

  getDomElementToListenTo() {
    const { mainScrollingElementSelector } = this.props;
    let elToListen = document;

    if (mainScrollingElementSelector) {
      const htmlNodeRef = document.querySelector(mainScrollingElementSelector);
      if (htmlNodeRef) {
        elToListen = htmlNodeRef;
      }
    }

    return elToListen;
  }

  getFullStyle() {
    const {
      mainRef,
      itemsRef,
    } = this;

    const {
      // itemsStyle,
      anchor,
      isFullWidth,
      isPopOver,
    } = this.props;

    const isOpen = this.getOpenState();

    if (
      !mainRef ||
      !itemsRef ||
      !itemsRef.current ||
      !mainRef.current ||
      !mainRef.current.getBoundingClientRect
    ) {
      return {};
    }

    let itemsHeight = 0;

    if (isOpen) {
      itemsHeight = this.calculateItemsHeight();
    }

    const cRectMain = mainRef.current.getBoundingClientRect();
    const cRectItems = itemsRef.current.getBoundingClientRect();

    const width = cRectMain.width;

    const positioning = getPosition(
      cRectMain,
      cRectItems,
      anchor,
      isPopOver,
    );

    const styleChangingWithIsOpen = getStyleForIsOpen(
      isOpen,
      itemsHeight
    );

    return {
      width: isFullWidth ? `${width}px` : 'auto',
      position: 'fixed',
      ...styleChangingWithIsOpen,
      ...positioning,
    };
  }

  setupMainElement() {
    const { main } = this.props;

    return React.cloneElement(main, {
      ref: this.mainRef,
    });
  }

  setupItems() {
    const { items } = this.props;

    return React.Children.map(items, child => React.cloneElement(child, {
      ...child.props,
      style: {
        ...(child && child.props.style ? child.props.style : {}),
        ':hover': {
          backgroundColor: '#bebebe',
        },
      },
      onClose: () => {
        this.handleToggleVisibility();
      },
    }));
  }

  handleClickOutside() {
    const { onClickOutside, onIsOpenChange } = this.props;
    const isOpen = this.getOpenState();
    if (onClickOutside) {
      onClickOutside();
    }

    if (!isOpen) {
      return;
    }


    if (!this.isOpenControlled) {
      this.setState({
        isOpen: false,
      });

      if (onIsOpenChange) {
        onIsOpenChange(false);
      }
    }

    this.detachListeners();
  }

  handleToggleVisibility() {
    const { onIsOpenChange } = this.props;
    const isOpen = this.getOpenState();

    const nextOpenState = !isOpen;
    this.setState({
      isOpen: nextOpenState,
    });

    if (onIsOpenChange) {
      onIsOpenChange(nextOpenState);
    }

    if (nextOpenState) {
      this.attachListeners();
    } else {
      this.detachListeners();
    }
  }

  closeDropdown() {
    const { onIsOpenChange } = this.props;

    if (this.isOpenControlled) {
      if (onIsOpenChange) {
        onIsOpenChange(false);
      }
    } else {
      this.setState({
        isOpen: false,
      });
    }

    this.detachListeners();
  }

  attachListeners() {
    window.addEventListener('resize', this.closeDropdown);
    document.addEventListener('scroll', this.closeDropdown, true);
  }

  detachListeners() {
    window.removeEventListener('resize', this.closeDropdown);
    document.removeEventListener('scroll', this.closeDropdown, true);
  }

  calculateItemsHeight() {
    // const { itemsStyle } = this.props;
    const { itemsRef } = this;

    return [...itemsRef.current.children].reduce(
      (acc, el) => acc + el.getBoundingClientRect().height, 0
    );
  }

  render() {
    const {
      isFullWidth,
      anchor,
      inertMain,
      style,
      itemsStyle,
      triggerWrapperStyle,
      isPopOver,
      isOpen: isOpenProp,
    } = this.props;

    const {
      isOpen: isOpenState,
      shouldFocusTrigerrer,
      // positioning,
      dynamicStyle,
    } = this.state;

    const isOpen = isOpenProp || isOpenState;

    const dropDownMain = this.setupMainElement();
    const decoratedItems = this.setupItems();

    const cleanedItemsStyle = {
      ...itemsStyle,
      ...(isOpen && itemsStyle && 'maxHeight' in itemsStyle
        ? { maxHeight: itemsStyle.maxHeight }
        : {}
      ),
    };

    const tabIndexButtonattr = (shouldFocusTrigerrer ? { tabIndex: inertMain ? '-1' : '0' } : {});

    return (
      <WrapperUI style={style} isFullWidth={isFullWidth}>
        <UnstyledButton
          inert={inertMain}
          data-drop-down-main
          role={inertMain === false ? undefined : 'menu'}
          isFullWidth={isFullWidth}
          style={{ ...styles.triggerWrapper, ...triggerWrapperStyle }}
          onClick={() => {
            this.handleToggleVisibility();
          }}
          {...tabIndexButtonattr}
        >
          <div style={styles.triggerInnerWrapper}>
            {dropDownMain}
          </div>
        </UnstyledButton>
        <ItemsWrapper
          data-drop-down-items
          isPopOver={isPopOver}
          style={{ ...styles.itemsWrapper, ...dynamicStyle, ...cleanedItemsStyle }}
          innerRef={this.itemsRef}
        >
          {isPopOver && <PopOverArrow isPopOver={isPopOver} anchor={anchor} />}
          {decoratedItems}
        </ItemsWrapper>
      </WrapperUI>
    );
  }
}

export default enhanceWithClickOutside(DropDown);
