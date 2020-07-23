const {
  getSavedData
} = require('./utilities/helper.js')

const {
  render,
  html,
  svg
} = require('lighterhtml')

class Code {
  constructor (customOptions) {
    const defaultOptions = {
      i18n: {
        locale: 'en-US',
        rtl: 'ltr',
        translations: {

        }
      },
      controllers: [

      ]
    }

    this.options = {
      ...defaultOptions,
      ...customOptions
    }
  }

  // Data attribute is a must
  render (i18n, savedData) {
    return html.node`<div class="freedom-editor-blocks ${this.constructor.name}-block" data-block-type="${this.constructor.name}">
    <pre>
    <code contenteditable>${getSavedData(savedData)}</code>
    </pre>
    </div>`
  }

  save (block) {
    const codeField = block.querySelector('code')
    if (codeField.textContent === '') {
      return
    }
    return {
      type: this.constructor.name,
      data: {
        code: codeField.textContent
      }
    }
  }
}

module.exports = {
  Code
}
