import {
  Data,
  // animate,
  Override,
  // Animatable
} from "framer";

const data = Data({
  // scale: Animatable(1),
  text: 'Save changes',
  onClick: () => {

  },
})

export const ButtonOverride: Override = () => {
    return {
        text: data.text,
        onClick: () => {
          setTimeout(() => {
            data.text = 'Saved!'
          }, 1000)
          data.text = 'Saving...'
        }
    }
}
