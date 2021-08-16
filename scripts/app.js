const displayElement = document.getElementById('calculator-display')

const addText = (text) => {
  if (validateInput(text)) {
    const displayText = displayElement.value
    const newText = displayText + text
    setDisplay(newText)
  }
}

const validateInput = (input) => {
  const forbiddens = ['+', '-', '*', '/', '.']
  const displayText = displayElement.value
  const symbolWithSymbol = forbiddens.includes(input) && forbiddens.includes(displayText[displayText.length - 1])
  const symbolWithoutNumber = forbiddens.includes(input) && displayText === '' && input !== '-'

  return !(symbolWithSymbol || symbolWithoutNumber)
}

const setDisplay = (text) => {
  displayElement.value = text
}

const clearDisplay = () => {
  setDisplay('')
}

const deleteLastCharacter = () => {
  const displayText = displayElement.value
  const newText = displayText.slice(0, displayText.length - 1)
  setDisplay(newText)
}

const compute = () => {
  const displayText = displayElement.value
  if (displayText) {
    const newText = eval(displayText)
    setDisplay(newText)
  }
}