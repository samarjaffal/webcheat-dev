import { getRandomColor } from '@utils/getRandomColor'

const resources = [
  'https://web.stanford.edu/group/csp/cs21/csscheatsheet.pdf'
]

const data = [
  {
    title: 'Selectors',
    description: '',
    color: getRandomColor(),
    properties: [
      {
        name: 'Type Selector',
        secondName: 'p',
        description: 'Selects all <p> elements',
        usage: 'p { color: red; }',
        url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/Type_selectors'
      },
      {
        name: 'Class Selector',
        secondName: '.my-class',
        description: "Selects all elements with class='my-class'",
        usage: '.my-class { background-color: yellow; }',
        url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/Class_selectors'
      },
      {
        name: 'ID Selector',
        secondName: '#my-id',
        description: "Selects the element with id='my-id'",
        usage: '#my-id { color: blue; }',
        url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/ID_selectors'
      },
      {
        name: 'Attribute Selector',
        secondName: '[href]',
        description: 'Selects all elements with href attribute',
        usage: '[href] { color: green; }',
        url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/Attribute_selectors'
      },
      {
        name: 'Universal Selector',
        secondName: '*',
        description: 'Selects all elements',
        usage: '* { font-size: 18px; }',
        url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/Universal_selectors'
      }
    ]
  },
  {
    title: 'Combinators',
    description: '',
    color: getRandomColor(),
    properties: [
      {
        name: 'Descendant Combinator',
        secondName: 'div p',
        description: 'Selects all <p> elements that are descendants of a <div> element',
        usage: 'div p { font-size: 18px; }',
        url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/Descendant_combinator'
      },
      {
        name: 'Child Combinator',
        secondName: 'ul > li',
        description: 'Selects all <li> elements that are direct children of a <ul> element',
        usage: 'ul > li { font-weight: bold; }',
        url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/Child_combinator'
      },
      {
        name: 'Adjacent Sibling Combinator',
        secondName: 'h1 + p',
        description: 'Selects the <p> element that is immediately after an <h1> element',
        usage: 'h1 + p { color: purple; }',
        url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/Adjacent_sibling_combinator'
      },
      {
        name: 'General Sibling Combinator',
        secondName: 'h1 ~ p',
        description: 'Selects all <p> elements that are siblings of an <h1> element',
        usage: 'h1 ~ p { font-style: italic; }',
        url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/General_sibling_combinator'
      },
      {
        name: 'Column Combinator',
        secondName: 'col.selected||td',
        description: 'Select all table cells that belong to the "selected" column',
        usage: 'col.selected||td { background-color: yellow; }',
        url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/Column_combinator'
      },
      {
        name: 'Selector List',
        secondName: 'h1, h2, h3',
        description: 'Selects all <h1>, <h2>, and <h3> elements (comma-separated list of selectors)',
        usage: 'h1, h2, h3 { color: red; }',
        url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/Selector_list'
      }
    ]
  },
  {
    title: 'Pseudo-classes',
    description: '',
    color: getRandomColor(),
    properties: [
      {
        name: ':active',
        secondName: '',
        description: 'Represents an element (such as a button or an anchor) that is being activated by the user. When using a mouse, "activation" typically starts when the user presses down the primary mouse button',
        usage: 'a:active { color: red; }',
        url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/:active'
      },
      {
        name: ':checked',
        secondName: '',
        description: 'Represents any radio, checkbox, or option element that is checked or toggled to an on state.',
        usage: 'input:checked { border: none; }',
        url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/:checked'
      },
      {
        name: ':disabled',
        secondName: '',
        description: 'Represents any disabled element',
        usage: 'input:disabled { background-color: yellow; }',
        url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/:disabled'
      },
      {
        name: ':empty',
        secondName: '',
        description: 'Represents any element that has no children at all',
        usage: 'div:empty { outline: 2px solid deeppink; }',
        url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/:empty'
      },
      {
        name: ':enabled',
        secondName: '',
        description: 'Represents any enabled element. An element is enabled if it can be activated (selected, clicked on, typed into, etc.) or accept focus',
        usage: 'input:enabled { background-color: yellow; }',
        url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/:enabled'
      },
      {
        name: ':first-child',
        secondName: '',
        description: 'Represents any element that is the first child of its parent',
        usage: 'p:first-child { color: red; }',
        url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/:first-child'
      },
      {
        name: ':first-of-type',
        secondName: '',
        description: 'Represents any element that is the first sibling of its type in the list of children of its parent element',
        usage: 'p:first-of-type { color: red; }',
        url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/:first-of-type'
      },
      {
        name: ':focus',
        secondName: '',
        description: 'Represents any element that currently has focus',
        usage: 'input:focus { background-color: yellow; }',
        url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/:focus'
      },
      {
        name: ':hover',
        secondName: '',
        description: 'Represents any element that is being hovered by the cursor',
        usage: 'a:hover { color: red; }',
        url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/:hover'
      },
      {
        name: ':target',
        secondName: '',
        description: 'Represents any element that is the target of the current URI fragment identifier',
        usage: 'a:target { color: red; }',
        url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/:target'
      }
    ]
  },
  {
    title: 'Attribute Selectors',
    description: '',
    color: getRandomColor(),
    properties: [
      {
        name: '[attr=value]',
        secondName: '',
        description: 'Represents elements with an attribute name of attr whose value is exactly value.',
        usage: 'a[href="https://example.org"]{ color: red; }',
        url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/Attribute_selectors'
      },
      {
        name: '[attr~=value]',
        secondName: '',
        description: 'Represents elements with an attribute name of attr whose value is a whitespace-separated list of words, one of which is exactly value.',
        usage: 'a[href~="https://example.org"]{ color: red; }',
        url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/Attribute_selectors'
      },
      {
        name: '[attr|=value]',
        secondName: '',
        description: 'Matches all elements whose attribute value beginning with exactly "value" word immediately followed by "-"',
        usage: 'a[href|="https://example.org"]{ color: red; }',
        url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/Attribute_selectors'
      },
      {
        name: '[attr^=value]',
        secondName: '',
        description: 'Represents elements with an attribute name of attr whose value is prefixed (preceded) by value.',
        usage: 'a[href^="https://example.org"]{ color: red; }',
        url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/Attribute_selectors'
      },
      {
        name: '[attr$=value]',
        secondName: '',
        description: 'Represents elements with an attribute name of attr whose value is suffixed (followed) by value.',
        usage: 'a[href$="https://example.org"]{ color: red; }',
        url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/Attribute_selectors'
      },
      {
        name: '[attr*=value]',
        secondName: '',
        description: 'Represents elements with an attribute name of attr whose value contains at least one occurrence of value.',
        usage: 'a[href*="https://example.org"]{ color: red; }',
        url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/Attribute_selectors'
      },
      {
        name: '[attr operator value i]',
        secondName: '',
        description: 'Adding an i (or I) before the closing bracket causes the value to be compared case-insensitively. ',
        usage: 'a[href*="insensitive" i]{ color: red; }',
        url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/Attribute_selectors'
      },
      {
        name: '[attr operator value s]',
        secondName: '',
        description: 'Adding an s (or S) before the closing bracket causes the value to be compared case-sensitively.',
        usage: 'a[href*="cAsE" s]{ color: red; }',
        url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/Attribute_selectors'
      }
    ]
  },
  {
    title: 'Fonts',
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
    title: 'Text',
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
    title: 'Color and Background',
    description: '',
    color: getRandomColor(),
    properties: [
      {
        name: 'color',
        secondName: 'Color',
        description: 'Changes the color of text',
        usage: 'color: #FF3028;',
        url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/color'
      },
      {
        name: 'border-color',
        secondName: 'Border Color',
        description: 'Sets the color of the four borders',
        usage: 'border-color: red;',
        url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/border-color'
      },
      {
        name: 'outline-color',
        secondName: 'Outline Color',
        description: 'Sets the color of an outline',
        usage: 'outline-color: red;',
        url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/outline-color'
      },
      {
        name: 'background-color',
        secondName: 'Background Color',
        description: 'Sets the background color of an element',
        usage: 'background-color: #FF3028;',
        url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/background-color'
      },
      {
        name: 'background-image',
        secondName: 'Background Image',
        description: 'Sets the background image of an element',
        usage: 'background-image: url("https://i.imgur.com/1Q2g1YR.jpg");',
        url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/background-image'
      },
      {
        name: 'background-repeat',
        secondName: 'Background Repeat',
        description: 'Sets how background images are repeated. A background image can be repeated along the horizontal and vertical axes, or not repeated at all.',
        usage: 'background-repeat: no-repeat;',
        url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/background-repeat'
      },
      {
        name: 'background-position',
        secondName: 'Background Position',
        description: 'Sets the starting position of a background image',
        usage: 'background-position: 50% 50%;',
        url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/background-position'
      },
      {
        name: 'background-size',
        secondName: 'Background Size',
        description: 'Sets the size of the background image',
        usage: 'background-size: cover;',
        url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/background-size'
      },
      {
        name: 'background-attachment',
        secondName: 'Background Attachment',
        description: 'Sets whether a background image is fixed or scrolls with the rest of the page',
        usage: 'background-attachment: fixed;',
        url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/background-attachment'
      },
      {
        name: 'background',
        secondName: 'Background',
        description: 'Sets all the different properties of an element\'s background',
        usage: 'background: url(../backgrounds/example.png) #f0f8ff fixed; ',
        url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/background'
      }
    ]
  },
  {
    title: 'Box Model',
    description: '',
    color: getRandomColor(),
    properties: [
      {
        name: 'margin-top',
        secondName: 'Margin Top',
        description: 'Sets the top margin of an element',
        usage: 'margin-top: 1rem;',
        url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/margin-top'
      },
      {
        name: 'margin-right',
        secondName: 'Margin Right',
        description: 'Sets the right margin of an element',
        usage: 'margin-right: 1rem;',
        url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/margin-right'
      },
      {
        name: 'margin-bottom',
        secondName: 'Margin Bottom',
        description: 'Sets the bottom margin of an element',
        usage: 'margin-bottom: 1rem;',
        url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/margin-bottom'
      },
      {
        name: 'margin-left',
        secondName: 'Margin Left',
        description: 'Sets the left margin of an element',
        usage: 'margin-left: 1rem;',
        url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/margin-left'
      },
      {
        name: 'margin',
        secondName: 'Margin',
        description: 'Sets all the different properties of an element\'s margin',
        usage: 'margin: 1rem 2rem 3rem 4rem;',
        url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/margin'
      },
      {
        name: 'padding-top',
        secondName: 'Padding Top',
        description: 'Sets the top padding of an element',
        usage: 'padding-top: 1rem;',
        url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/padding-top'
      },
      {
        name: 'padding-top',
        secondName: '',
        description: 'Defines the padding of the top side of an element',
        usage: 'padding-top: 10px;',
        url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/padding-top'
      },
      {
        name: 'padding-right',
        secondName: 'Padding Right',
        description: 'Defines the padding of the right side of an element',
        usage: 'padding-right: 10px;',
        url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/padding-right'
      },
      {
        name: 'padding-left',
        secondName: 'Padding Left',
        description: 'Defines the padding of the left side of an element',
        usage: 'padding-left: 10px;',
        url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/padding-left'
      },
      {
        name: 'padding-bottom',
        secondName: 'Padding Bottom',
        description: 'Defines the padding of the bottom side of an element',
        usage: 'padding-bottom: 10px;',
        url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/padding-bottom'
      },
      {
        name: 'padding',
        secondName: 'Padding',
        description: 'Defines the padding of all four sides of an element',
        usage: 'padding: 10px;',
        url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/padding'
      },
      {
        name: 'border-width',
        secondName: 'Border Width',
        description: 'Defines the width of the border of an element',
        usage: 'border-width: 2px;',
        url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/border-width'
      },
      {
        name: 'border-style',
        secondName: 'Border Style',
        description: 'Defines the style of the border of an element',
        usage: 'border-style: solid;',
        url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/border-style'
      },
      {
        name: 'border-top',
        secondName: 'Border Top',
        description: 'Defines the properties of the top border of an element',
        usage: 'border-top: 2px solid red;',
        url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/border-top'
      },
      {
        name: 'border-right',
        secondName: 'Border Right',
        description: 'Defines the properties of the right border of an element',
        usage: 'border-right: 2px solid red;',
        url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/border-right'
      },
      {
        name: 'border-bottom',
        secondName: 'Border Bottom',
        description: 'Defines the properties of the bottom border of an element',
        usage: 'border-bottom: 2px solid red;',
        url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/border-bottom'
      },
      {
        name: 'border-left',
        secondName: 'Border Left',
        description: 'Defines the properties of the left border of an element',
        usage: 'border-left: 2px solid red;',
        url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/border-left'
      },
      {
        name: 'border',
        secondName: 'Border',
        description: 'Defines the properties of all four borders of an element',
        usage: 'border: 2px solid red;',
        url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/border'
      },
      {
        name: 'width',
        secondName: 'Width',
        description: 'Defines the width of an element',
        usage: 'width: 100px;',
        url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/width'
      },
      {
        name: 'height',
        secondName: 'Height',
        description: 'Defines the height of an element',
        usage: 'height: 100px;',
        url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/height'
      }
    ]
  },
  {
    title: 'Layout',
    description: '',
    color: getRandomColor(),
    properties: [
      {
        name: 'display',
        secondName: 'Display',
        description: 'Specifies the display behavior of an element',
        usage: 'display: inline | block | inline-block | flex | grid | none;',
        url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/display'
      },
      {
        name: 'position',
        secondName: 'Position',
        description: 'Specifies the type of positioning used for an element',
        usage: 'position: static | relative | absolute | fixed | sticky;',
        url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/position'
      },
      {
        name: 'top',
        secondName: 'Top',
        description: 'Specifies the top position of a positioned element',
        usage: 'top: auto | length | %;',
        url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/top'
      },
      {
        name: 'right',
        secondName: 'Right',
        description: 'Specifies the right position of a positioned element',
        usage: 'right: auto | length | %;',
        url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/right'
      },
      {
        name: 'bottom',
        secondName: 'Bottom',
        description: 'Specifies the bottom position of a positioned element',
        usage: 'bottom: auto | length | %;',
        url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/bottom'
      },
      {
        name: 'left',
        secondName: 'Left',
        description: 'Specifies the left position of a positioned element',
        usage: 'left: auto | length | %;',
        url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/left'
      },
      {
        name: 'float',
        secondName: 'Float',
        description: 'Specifies whether an element should be floated to the left or right of its container',
        usage: 'float: left | right | none;',
        url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/float'
      },
      {
        name: 'clear',
        secondName: 'Clear',
        description: 'Specifies whether an element should be moved below any floating elements',
        usage: 'clear: left | right | both | none;',
        url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/clear'
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
