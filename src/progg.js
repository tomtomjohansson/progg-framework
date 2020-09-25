import element from "./element"

export default (() => {
  const hooks = []
  let hookIndex = 0
  let C
  let child

  const renderRoot = component => {
    C = component
    child = element(C())
    document.getElementById("app").appendChild(child)
  }
  const render = () => {
    hookIndex = 0
    const newC = C
    const newChild = element(newC())
    child.replaceWith(newChild)
    child = newChild
  }

  const useState = init => {
    const _freezeIndex = hookIndex
    const state = hooks[_freezeIndex] || init

    const setState = newVal => {
      hooks[_freezeIndex] = newVal
      render()
    }
    hookIndex++
    return [state, setState]
  }
  return { render, useState, element, renderRoot }
})()
