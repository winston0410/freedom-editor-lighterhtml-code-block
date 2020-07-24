const getSavedData = (savedData) => {
  if (savedData) {
    return savedData.data.code
  }
  return ''
}

const stringToHTML = (nodeString) => {
  const placeholder = document.createElement('template')
  placeholder.innerHTML = nodeString
  return placeholder.content.firstElementChild
}

module.exports = {
  stringToHTML,
  getSavedData
}
