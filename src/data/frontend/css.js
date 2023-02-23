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
        description: 'This property specifies whether or not a text should be displayed in a small-caps font.',
        usage: 'font-variant: small-caps;',
        url: 'https://developer.mozilla.org/es/docs/Web/CSS/font-variant'
      }
    ]
  }
]

export const config = {
  name: 'css',
  data,
  resources,
  description: 'Css is a language that describes how HTML elements should be displayed.'
}
