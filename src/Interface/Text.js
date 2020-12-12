const textId = 'text'
const textElement = document.getElementById(textId)
const descriptionElement = document.getElementById('describe')

/**
 * Text to say
 * @param {string} textContent
 */
export const say = (textContent) => {
  textElement.innerHTML = textContent
}

/**
 * Text to describe room
 * @param {string} textContent
 */
export const describe = (textContent) => {
  descriptionElement.innerHTML = textContent
}