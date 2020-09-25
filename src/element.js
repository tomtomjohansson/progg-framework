import uuid from "u-uid"

const element = el => {
  const { type, content, attributes = {}, children = [] } = el
  const newElement = document.createElement(type)
  content && newElement.append(document.createTextNode(content))
  for (const attr of Object.keys(attributes)) {
    newElement[attr] = attributes[attr]
  }
  newElement.id = uuid()
  for (let child of children) {
    if (child.exclude) continue
    if (typeof child === "function") {
      newElement.appendChild(element(child()))
    } else {
      newElement.appendChild(element(child))
    }
  }
  return newElement
}

export default element
