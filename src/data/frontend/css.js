import { getRandomColor } from '@utils/getRandomColor'

const resources = [
  'https://web.stanford.edu/group/csp/cs21/csscheatsheet.pdf'
]

const data = [
  {
    title: 'Font Properties',
    description: 'Lorem impsum dolor',
    color: getRandomColor(),
    properties: [
      {
        name: 'font-family',
        secondName: 'Font Family',
        description: 'Changes the font family of certain words, sentences,paragraphs, etc.',
        usage: 'font-family: Arial, Helvetica, sans-serif;',
        url: 'https://developer.mozilla.org/es/docs/Web/CSS/font-family'
      },
      {
        name: 'font-style',
        secondName: 'Font Style',
        description: 'Sets whether a font should be styled with a normal, italic, or oblique face from its font-family',
        usage: 'font-style: italic;',
        url: 'https://developer.mozilla.org/es/docs/Web/CSS/font-style'
      },
      {
        name: 'font-variant',
        secondName: 'Font Variant',
        description: 'Specifies whether or not a text should be displayed in a small-caps font.',
        usage: 'font-variant: small-caps;',
        url: 'https://developer.mozilla.org/es/docs/Web/CSS/font-variant'
      },
      {
        name: 'font-weight',
        secondName: 'Font Weight',
        description: 'Sets the weight (or boldness) of the font.',
        usage: 'font-weight: bold;',
        url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/font-weight'
      },
      {
        name: 'font-size',
        secondName: 'Font Size',
        description: 'Sets the size of the font',
        usage: 'font-size: 1.2em;',
        url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/font-size'
      },
      {
        name: 'font',
        secondName: 'Font',
        description: 'Sets all the different properties of an element\'s font',
        usage: 'font: 1.2em "Fira Sans", sans-serif;',
        url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/font'
      }
    ]
  },
  {
    title: 'Text Properties',
    description: '',
    color: getRandomColor(),
    properties: [
      {
        name: 'word-spacing',
        secondName: 'Word Spacing',
        description: 'Defines an additional amount of space between words',
        usage: 'word-spacing: 1rem;',
        url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/word-spacing'
      },
      {
        name: 'letter-spacing',
        secondName: 'Letter Spacing',
        description: 'Sets the horizontal spacing behavior between text characters',
        usage: 'letter-spacing: .2rem;',
        url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/letter-spacing'
      },
      {
        name: 'vertical-align',
        secondName: 'Vertical Align',
        description: 'Used to alter the vertical positioning of an inline element, relative to its parent element or to the element\'s line.',
        usage: 'vertical-align: middle;',
        url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/vertical-align'
      },
      {
        name: 'text-decoration',
        secondName: 'Text Decoration',
        description: 'Allows text to be decorated through one of five properties: underline, overline, line-through, blink, none.',
        usage: 'text-decoration: underline overline #FF3028;',
        url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration'
      },
      {
        name: 'text-transform',
        secondName: 'Text Transform',
        description: 'Allows for capitalizing the first letter of each word (capitalize), capitalizing all letters of a word (uppercase), using all small letters in each word(lowercase), and the inital value(none).',
        usage: 'text-transform: uppercase;',
        url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/text-transform'
      },
      {
        name: 'text-align',
        secondName: 'Text Align',
        description: 'Sets the horizontal alignment of the inline-level content inside a block element or table-cell box.',
        usage: 'text-align: justify;',
        url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/text-align'
      },
      {
        name: 'text-indent',
        secondName: 'Text Indent',
        description: 'Sets the length of empty space (indentation) that is put before lines of text in a block.',
        usage: 'text-indent: 50px;',
        url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/text-indent'
      },
      {
        name: 'line-height',
        secondName: 'Line Height',
        description: 'Used to control the spacing between baselines of text',
        usage: 'line-height: 3em;',
        url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/line-height'
      }
    ]
  },
  {
    title: 'Color and Background Properties',
    description: '',
    color: getRandomColor(),
    properties: []
  }
]

export const config = {
  name: 'css',
  data,
  resources,
  description: 'Css is a language that describes how HTML elements should be displayed.'
}
