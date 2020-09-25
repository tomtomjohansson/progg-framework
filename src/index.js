import "./styles.css"
import progg from "./progg"
import Footer from "./footer"

const { useState, renderRoot } = progg

const Component = () => {
  const [count, setCount] = useState(0)
  const [word, setWord] = useState("things")
  return {
    type: "div",
    children: [
      {
        type: "h1",
        content: `We have ${count} ${word}`,
        attributes: {
          className: "red"
        }
      },
      {
        type: "div",
        children: [
          { type: "p", content: `Increase the ${word}` },
          {
            type: "p",
            content: "here",
            attributes: {
              className: "action",
              onclick: () => setCount(count + 1)
            }
          },
          {
            type: "label",
            content: "What are we counting: "
          },
          {
            type: "input",
            attributes: {
              onchange: (e) => setWord(e.target.value)
            }
          }
        ]
      },
      () => Footer({ word, setWord })
    ]
  }
}

renderRoot(Component)
