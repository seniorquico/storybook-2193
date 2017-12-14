/* @noflow */
import { configure } from '@storybook/react'

// Load stories in "__stories__" folders and ".stories.js" files
const context = require.context('../src', true, /(__stories__\/.*|\.stories)\.js$/)
configure(loadStories(context), module)

function loadStories(context) {
  context.keys().forEach(filename => context(filename))
}

require('../src/index.css')
