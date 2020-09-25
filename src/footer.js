import "./styles.css"
import progg from "./progg"

const { useState } = progg

export default ({ word, setWord }) => {
  const [boolean, setBoolean] = useState(false)
  return {
    type: "div",
    children: [
      {
        type: "hr",
        attributes: {
          className: "standardMargin"
        }
      },
      {
        type: "h2",
        content: boolean ? "It is removed" : "It is not removed"
      },
      {
        type: "button",
        content: `Remove me`,
        exclude: boolean,
        attributes: {
          onclick: () => setBoolean(true)
        }
      },
      {
        type: "button",
        content: `Make ${word} foos`,
        attributes: {
          onclick: () => setWord("foos")
        }
      }
    ]
  }
}
