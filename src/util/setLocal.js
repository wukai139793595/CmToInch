export const mySetLocal = function (item, value) {
  localStorage.setItem(item, JSON.stringify(value))
}

export const myGetLocal = function (item) {
  return JSON.parse(localStorage.getItem(item))
}

export const myRemoveLocal = function (item) {
  localStorage.removeItem(item)
}
