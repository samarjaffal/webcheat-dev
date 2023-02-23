import { getRandomColor } from '@utils/getRandomColor'

const resources = [
  'https://web.stanford.edu/group/csp/cs21/htmlcheatsheet.pdf',
  'https://www.pinterest.com/pin/191332684147746741/',
  'https://www.w3schools.com/tags/ref_byfunc.asp'
]

const data = [
  {
    title: 'Basic Structure',
    description: 'Lorem impsum dolor',
    color: getRandomColor(),
    properties: [
      {
        name: 'DOCTYPE',
        secondName: 'Document Type',
        description: 'The <!DOCTYPE> declaration is an instruction to the web browser about what version of HTML the page is written in. It is not an HTML tag; it is an "information" to the browser.',
        usage: '<!DOCTYPE html>',
        url: 'https://developer.mozilla.org/en-US/docs/Glossary/Doctype'
      },
      {
        name: 'html',
        secondName: 'Html Tag',
        description: 'The <html> HTML element represents the root (top-level element) of an HTML document, so it is also referred to as the root element. All other elements must be descendants of this element.',
        usage: '<html></html>',
        url: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/HTML'
      },
      {
        name: 'head',
        secondName: 'Head Tag',
        description: 'The <head> HTML element contains machine-readable information (metadata) about the document, like its title, scripts, and style sheets.',
        usage: '<head></head>',
        url: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/head'
      },
      {
        name: 'body',
        secondName: 'Body Tag',
        description: 'The <body> HTML element represents the content of an HTML document. There can be only one <body> element in a document.',
        usage: '<body> --content -- </body>',
        url: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/body'
      },
      {
        name: 'h[1-6]',
        secondName: 'Heading Tag',
        description: 'The <h1> to <h6> HTML elements represent six levels of section headings. <h1> is the highest section level and <h6> is the lowest.',
        usage: '<h1>Hello World!</h1>, <h2>Hello World!</h2>, ... , <h6>Hello World!</h6>',
        url: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements'
      },
      {
        name: 'p',
        secondName: 'Paragraph Tag',
        description: 'The <p> HTML element represents a paragraph. Paragraphs are usually represented in visual media as blocks of text separated from adjacent blocks by blank lines and/or first-line indentation, but HTML paragraphs can be any structural grouping of related content, such as images or form fields.',
        usage: '<p>Paragraph text goes here!</p>',
        url: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/p'
      },
      {
        name: 'br',
        secondName: 'Line Break Tag',
        description: 'The <br> HTML element produces a line break in text (carriage-return). It is useful for writing a poem or an address, where the division of lines is significant.',
        usage: '<p>Line 1<br>Line 2</p>',
        url: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/br'
      },
      {
        name: 'hr',
        secondName: 'Horizontal Rule Tag',
        description: 'The <hr> HTML element represents a thematic break between paragraph-level elements: for example, a change of scene in a story, or a shift of topic within a section.',
        usage: '<p>Paragraph 1</p><hr><p>Paragraph 2</p>',
        url: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/hr'
      },
      {
        name: '!-- --',
        secondName: 'Comment Tag',
        description: 'The HTML comment tag is used to add comments to an HTML document. Comments are not displayed in the browser, but they can be viewed by anyone who views the source code.',
        usage: '<!-- This is a comment -->',
        url: 'https://www.w3schools.com/html/html_comments.asp'
      }
    ]
  },
  {
    title: 'Formatting',
    description: '',
    color: getRandomColor(),
    properties: [
      {
        name: 'b',
        secondName: 'Bold Tag',
        description: 'The <b> HTML element represents a span of text to be stylistically offset from the normal text without conveying any extra importance or seriousness. It is typically rendered in boldface.',
        usage: '<b>some text here!</b>',
        url: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/b'
      },
      {
        name: 'i',
        secondName: 'Italic Tag',
        description: 'The <i> HTML element represents a range of text that is set off from the normal text for some reason. Some examples include technical terms, foreign language phrases, or fictional character thoughts. It is typically displayed in italic type.',
        usage: '<i>This can\'t be real!</i>',
        url: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/i'
      },
      {
        name: 'tt',
        secondName: 'Teletype Tag',
        description: 'The <tt> HTML element creates inline text which is presented using the user agent\'s default monospace font face.',
        usage: '<tt>Local Echo is on!</tt>',
        url: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/tt'
      },
      {
        name: 'code',
        secondName: 'Code Tag',
        description: 'The <code> HTML element displays its contents styled in a fashion intended to indicate that the text is a short fragment of computer code. By default, the content text is displayed using the user agent\'s default monospace font.',
        usage: '<code>const hello = "Hello World!"</code>',
        url: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/code'
      },
      {
        name: 'cite',
        secondName: 'Cite Tag',
        description: 'The <cite> HTML element is used to mark up the title of a cited creative work.',
        usage: '<cite>Harry Potter and the Sorcerer\'s Stone</cite>',
        url: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/cite'
      },
      {
        name: 'address',
        secondName: 'Address Tag',
        description: 'The <address> HTML element indicates that the enclosed HTML provides contact information for a person or people, or for an organization.',
        usage: '<address><a href="mailto:jim@rock.com">jim@rock.com</a></address>',
        url: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/address'
      },
      {
        name: 'em',
        secondName: 'Emphasis Tag',
        description: 'The <em> HTML element marks text that has stress emphasis. The <em> element can be nested, with each level of nesting indicating a greater degree of emphasis.',
        usage: '<em>It\'s a beautiful day!</em>',
        url: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/em'
      },
      {
        name: 'strong',
        secondName: 'Strong Tag',
        description: 'The <strong> HTML element indicates that its contents have strong importance, seriousness, or urgency. Browsers typically render the contents in bold type.',
        usage: '<strong>Don\'t forget to eat your vegetables!</strong>',
        url: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/strong'
      },
      {
        name: 'pre',
        secondName: 'Preformatted Tag',
        description: 'The <pre> HTML element represents preformatted text which is to be presented exactly as written in the HTML file. The text is typically rendered using a non-proportional ("monospace") font. White space inside this element is displayed as written.',
        usage: '<pre>const hello = "Hello World!"</pre>',
        url: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/pre'
      },
      {
        name: 'abbr',
        secondName: 'Abbreviation Tag',
        description: 'The <abbr> HTML element represents an abbreviation or acronym; the optional title attribute can provide an expansion or description for the abbreviation.',
        usage: '<abbr title="World Health Organization">WHO</abbr>',
        url: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/abbr'
      },
      {
        name: 'blockquote',
        secondName: 'Blockquote Tag',
        description: 'The <blockquote> HTML element indicates that the enclosed text is an extended quotation.',
        usage: ' <blockquote cite="https://www.huxley.net/bnw/four.html"><p>Words can be like X-rays, if you use them properly—they’ll go through anything. You read and you’re pierced.</p></blockquote>',
        url: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/blockquote'
      },
      {
        name: 'span',
        secondName: 'Span Tag',
        description: 'The <span> HTML element is a generic inline container for phrasing content, which does not inherently represent anything. It can be used to group elements for styling purposes (using the class or id attributes), or because they share attribute values, such as lang.',
        usage: '<span class="ingredient">Olive oil</span>',
        url: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/span'
      },
      {
        name: 'progress',
        secondName: 'Progress Tag',
        description: 'The <progress> HTML element is used to represent the completion progress of a task, typically displayed as a progress bar.',
        usage: '<progress value="22" max="100"></progress>',
        url: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/progress'
      },
      {
        name: 'q',
        secondName: 'Inline Quotation Tag',
        description: 'The <q> HTML element indicates that the enclosed text is a short inline quotation. Most modern browsers implement this by surrounding the text in quotation marks.',
        usage: '<q>It\'s a beautiful day!</q>',
        url: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/q'
      },
      {
        name: 'small',
        secondName: 'Small Tag',
        description: 'The <small> HTML element is used to render text at a smaller font size, for example, for side comments and small print.',
        usage: '<small>Don\'t forget to eat your vegetables!</small>',
        url: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/small'
      },
      {
        name: 'sub',
        secondName: 'Subscript Tag',
        description: 'The <sub> HTML element defines a span of text that should be displayed, for typographic reasons, lower, and often smaller, than the main span of text.',
        usage: '<p> H<sub>2</sub>O</p>',
        url: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/sub'
      },
      {
        name: 'sup',
        secondName: 'Superscript Tag',
        description: 'The <sup> HTML element defines a span of text that should be displayed, for typographic reasons, higher, and often smaller, than the main span of text.',
        usage: '<p> 2<sup>nd</sup> place</p>',
        url: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/sup'
      },
      {
        name: 'template',
        secondName: 'Template Tag',
        description: 'The <template> HTML element is a mechanism for holding client-side content that is not to be rendered when a page is loaded but may subsequently be instantiated during runtime using JavaScript.',
        usage: '<template><p>My name is <span class="name"></span>.</p></template>',
        url: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/template'
      },
      {
        name: 'time',
        secondName: 'Time Tag',
        description: 'The <time> HTML element represents either a time on a 24-hour clock or a precise date in the proleptic Gregorian calendar (with optional time and timezone information).',
        usage: '<time datetime="2013-04-06T12:32+00:00">2 weeks ago</time>',
        url: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/time'
      },
      {
        name: 'var',
        secondName: 'Variable Tag',
        description: 'The <var> HTML element represents a variable in a mathematical expression or a programming context.',
        usage: '<p>The variable <var>x</var> is now <var>y</var>.</p>',
        url: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/var'
      }
    ]
  },
  {
    title: 'Lists Tags',
    description: '',
    color: getRandomColor(),
    properties: [
      {
        name: 'ul',
        secondName: 'Unordered List Tag',
        description: 'The <ul> HTML element represents an unordered list of items, typically rendered as a bulleted list.',
        usage: '<ul><li>Item 1</li><li>Item 2</li></ul>',
        url: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ul'
      },
      {
        name: 'li',
        secondName: 'List Item Tag',
        description: 'The <li> HTML element is used to represent an item in a list. It must be contained in a parent element: an ordered list (<ol>), an unordered list (<ul>), or a menu (<menu>).',
        usage: '<ul><li>Milk</li><li>Cheese</li></ul>',
        url: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/li'
      },
      {
        name: 'ol',
        secondName: 'Ordered List Tag',
        description: 'The <ol> HTML element represents an ordered list of items — typically rendered as a numbered list.',
        usage: '<ol><li>Item 1</li><li>Item 2</li></ol>',
        url: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ol'
      },
      {
        name: 'dl',
        secondName: 'Description List Tag',
        description: 'The <dl> HTML element represents an association list consisting of zero or more name-value groups (a description list).',
        usage: '<dl><dt>Definition List Title</dt><dd>Definition list division.</dd></dl>',
        url: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dl'
      },
      {
        name: 'dt',
        secondName: 'Description Term Tag',
        description: 'The <dt> HTML element specifies a term in a description or definition list, and as such must be used inside a <dl> element.',
        usage: '<dl><dt>Firefox</dt><dd>A free, open source, cross-platform, graphical web browser developed by the Mozilla Corporation and hundreds of volunteers.</dd></dl>',
        url: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dt'
      },
      {
        name: 'dd',
        secondName: 'Description Details Tag',
        description: 'The <dd> HTML element provides the description, definition, or value for the preceding term (<dt>) in a description list (<dl>).',
        usage: '<dl><dt>Beast of Bodmin</dt><dd>A large feline inhabiting Bodmin Moor.</dd></dl>',
        url: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dd'
      }
    ]
  },
  {
    title: 'Images and Multimedia',
    description: '',
    color: getRandomColor(),
    properties: [
      {
        name: 'img',
        secondName: 'Image Tag',
        description: 'The <img> HTML element embeds an image into the document.',
        usage: '<img src="https://mdn.mozillademos.org/files/6457/mdn_logo_only_color.png" alt="MDN Logo">',
        url: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img'
      },
      {
        name: 'map',
        secondName: 'Image Map Tag',
        description: 'The <map> HTML element is used with <area> elements to define an image map (a clickable link area).',
        usage: '<img src="smiley.gif" alt="Smiley face" usemap="#smileymap"><map name="smileymap"><area shape="rect" coords="0,0,82,126" alt="Smiley" href="smiley.gif"></map>',
        url: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/map'
      },
      {
        name: 'area',
        secondName: 'Image Map Area Tag',
        description: 'The <area> HTML element defines a hot-spot region on an image, and optionally associates it with a hypertext link. This element is used only within a <map> element.',
        usage: '<img src="smiley.gif" alt="Smiley face" usemap="#smileymap"><map name="smileymap"><area shape="rect" coords="0,0,82,126" alt="Smiley" href="smiley.gif"></map>',
        url: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/area'
      },
      {
        name: 'canvas',
        secondName: 'Canvas Tag',
        description: 'The <canvas> HTML element is used to draw graphics, on the fly, via scripting (usually JavaScript).',
        usage: '<canvas id="tutorial" width="150" height="150"></canvas>',
        url: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/canvas'
      },
      {
        name: 'figcaption',
        secondName: 'Figure Caption Tag',
        description: 'The <figcaption> HTML element represents a caption or legend describing the rest of the contents of its parent <figure> element.',
        usage: '<figure><img src="images/elephant-660-480.jpg" alt="Elephant at sunset"><figcaption>An elephant at sunset</figcaption></figure>',
        url: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/figcaption'
      },
      {
        name: 'figure',
        secondName: 'Figure Tag',
        description: 'The <figure> HTML element represents self-contained content, potentially with an optional caption, which is specified using the <figcaption> element.',
        usage: '<figure><img src="images/elephant-660-480.jpg" alt="Elephant at sunset"><figcaption>An elephant at sunset</figcaption></figure>',
        url: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/figure'
      },
      {
        name: 'picture',
        secondName: 'Picture Tag',
        description: 'The <picture> HTML element contains zero or more <source> elements and one <img> element to offer alternative versions of an image for different display/device scenarios.',
        usage: '<picture><source media="(min-width: 650px)" srcset="img_pink_flowers.jpg"><source media="(min-width: 465px)" srcset="img_white_flower.jpg"><img src="img_orange_flowers.jpg" alt="Flowers" style="width:auto;"></picture>'
      },
      {
        name: 'svg',
        secondName: 'SVG Tag',
        description: 'The <svg> HTML element is used to embed vector graphics in an HTML document. SVG is an XML-based markup language for describing two-dimensional vector graphics.',
        usage: '<svg width="100" height="100"><circle cx="50" cy="50" r="40" stroke="green" stroke-width="4" fill="yellow" /></svg>',
        url: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/svg'
      }
    ]
  },
  {
    title: 'Audio / Video',
    description: '',
    color: getRandomColor(),
    properties: [
      {
        name: 'audio',
        secondName: 'Audio Tag',
        description: 'The <audio> HTML element is used to embed sound content in documents. It may contain one or more audio sources, represented using the src attribute or the <source> element: the browser will choose the most suitable one.',
        usage: '<audio controls><source src="horse.ogg" type="audio/ogg"><source src="horse.mp3" type="audio/mpeg">Your browser does not support the audio element.</audio>',
        url: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio'
      },
      {
        name: 'video',
        secondName: 'Video Tag',
        description: 'The <video> HTML element is used to show video streams or videos stored on an archive (such as a hard drive or optical disc).',
        usage: '<video width="320" height="240" controls><source src="movie.mp4" type="video/mp4"><source src="movie.ogg" type="video/ogg">Your browser does not support the video tag.</video>',
        url: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video'
      },
      {
        name: 'source',
        secondName: 'Source Tag',
        description: 'The <source> HTML element specifies multiple media resources for the <picture>, the <audio> element, or the <video> element. It is an empty element. It is commonly used to serve the same media content in multiple formats supported by different browsers.',
        usage: '<video width="320" height="240" controls><source src="movie.mp4" type="video/mp4"><source src="movie.ogg" type="video/ogg">Your browser does not support the video tag.</video>',
        url: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/source'
      },
      {
        name: 'track',
        secondName: 'Track Tag',
        description: 'The <track> HTML element is used as a child of the media elements <audio> and <video>. It lets you specify timed text tracks (or time-based data), for example to automatically handle subtitles.',
        usage: '<video width="320" height="240" controls><source src="movie.mp4" type="video/mp4"><source src="movie.ogg" type="video/ogg"><track src="subtitles_en.vtt" kind="subtitles" srclang="en" label="English"></video>',
        url: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/track'
      }
    ]
  },
  {
    title: 'Links',
    description: '',
    color: getRandomColor(),
    properties: [
      {
        name: 'a',
        secondName: 'Anchor Tag',
        description: 'The <a> HTML element (or anchor element), with its href attribute, creates a hyperlink to web pages, files, email addresses, locations in the same page, or anything else a URL can address.',
        usage: '<a href="https://developer.mozilla.org/en-US/docs/Web/HTML">HTML</a>',
        url: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a'
      },
      {
        name: 'link',
        secondName: 'Link Tag',
        description: 'The <link> HTML element specifies relationships between the current document and an external resource. Possible uses for this element include defining a relational framework for navigation.',
        usage: '<link rel="stylesheet" href="mystyles.css">',
        url: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/link'
      },
      {
        name: 'nav',
        secondName: 'Nav Tag',
        description: 'The <nav> HTML element represents a section of a page whose purpose is to provide navigation links, either within the current document or to other documents.',
        usage: '<nav><a href="/html/">HTML</a> | <a href="/css/">CSS</a> | <a href="/js/">JavaScript</a> | <a href="/python/">Python</a></nav>',
        url: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/nav'
      }
    ]
  },
  {
    title: 'Forms',
    description: '',
    color: getRandomColor(),
    properties: [
      {
        name: 'form',
        secondName: 'Form Tag',
        description: 'The <form> HTML element represents a document section containing interactive controls for submitting information.',
        usage: '<form action="/action_page.php"> <!--...content --> </form>',
        url: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form'
      },
      {
        name: 'input',
        secondName: 'Input Tag',
        description: 'The <input> HTML element is used to create interactive controls for web-based forms in order to accept data from the user.',
        usage: '<input type="text" name="firstname" value="Mickey">',
        url: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input'
      },
      {
        name: 'select',
        secondName: 'Select Tag',
        description: 'The <select> HTML element represents a control that provides a menu of options.',
        usage: '<select name="cars"><option value="volvo">Volvo</option><option value="saab">Saab</option><option value="mercedes">Mercedes</option><option value="audi">Audi</option></select>',
        url: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select'
      },
      {
        name: 'optgroup',
        secondName: 'Optgroup Tag',
        description: 'The <optgroup> HTML element creates a grouping of options within a <select> element.',
        usage: '<select name="cars"><optgroup label="Swedish Cars"><option value="volvo">Volvo</option><option value="saab">Saab</option></optgroup><optgroup label="German Cars"><option value="mercedes">Mercedes</option><option value="audi">Audi</option></optgroup></select>',
        url: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/optgroup'
      },
      {
        name: 'option',
        secondName: 'Option Tag',
        description: 'The <option> HTML element is used to define an item contained in a <select>, an <optgroup>, or a <datalist> element. As such, <option> can represent menu items in popups and other lists of items in an HTML document.',
        usage: '<select name="cars"><option value="volvo">Volvo</option><option value="saab">Saab</option><option value="mercedes">Mercedes</option><option value="audi">Audi</option></select>',
        url: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/option'
      },
      {
        name: 'textarea',
        secondName: 'Textarea Tag',
        description: 'The <textarea> HTML element represents a multi-line plain-text editing control, useful when you want to allow users to enter a sizeable amount of free-form text, for example a comment on a review or feedback form.',
        usage: '<textarea name="message" rows="10" cols="30">The cat was playing in the garden.</textarea>',
        url: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea'
      },
      {
        name: 'button',
        secondName: 'Button Tag',
        description: 'The <button> HTML element represents a clickable button, used to submit forms or anywhere in a document for accessible, standard button functionality.',
        usage: '<button type="button" onclick="alert(\'Hello world!\')">Click Me!</button>',
        url: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button'
      },
      {
        name: 'fieldset',
        secondName: 'Fieldset Tag',
        description: 'The <fieldset> HTML element is used to group several controls as well as labels (<label>) within a web form.',
        usage: '<fieldset> <legend>Personal Info:</legend> First name: <input type="text" name="firstname"><br> Last name: <input type="text" name="lastname"><br> Age: <input type="text" name="age"><br> </fieldset>',
        url: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/fieldset'
      },
      {
        name: 'legend',
        secondName: 'Legend Tag',
        description: 'The <legend> HTML element represents a caption for the content of its parent <fieldset>.',
        usage: '<fieldset> <legend>Personal Info:</legend>  <!--...content --> </fieldset>',
        url: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/legend'
      },
      {
        name: 'label',
        secondName: 'Label Tag',
        description: 'The <label> HTML element represents a caption for an item in a user interface.',
        usage: '<div class="preference"><label for="cheese">Do you like cheese?</label><input type="checkbox" name="cheese" id="cheese"></div>',
        url: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label'
      },
      {
        name: 'datalist',
        secondName: 'Datalist Tag',
        description: 'The <datalist> HTML element contains a set of <option> elements that represent the values available for other controls.',
        usage: '<input list="browsers"> <datalist id="browsers"> <option value="Internet Explorer"> <option value="Firefox"> <option value="Chrome"> <option value="Opera"> <option value="Safari"> </datalist>',
        url: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/datalist'
      },
      {
        name: 'output',
        secondName: 'Output Tag',
        description: 'The <output> HTML element represents the result of a calculation (like one performed by a script).',
        usage: '<p>Calculate <output name="a">0</output> + <output name="b">0</output> = <output name="result">0</output></p>',
        url: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/output'
      }
    ]
  },
  {
    title: 'Tables ',
    description: '',
    color: getRandomColor(),
    properties: [
      {
        name: 'table',
        secondName: 'Table Tag',
        description: 'The <table> HTML element represents tabular data that is, information presented in a two-dimensional table comprised of rows and columns of cells containing data.',
        usage: '<table> <tr> <th>Month</th> <th>Savings</th> </tr> <tr> <td>January</td> <td>$100</td> </tr> </table>',
        url: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table'
      },
      {
        name: 'caption',
        secondName: 'Caption Tag',
        description: 'The <caption> HTML element represents the title of the table that is its parent, if it has a parent and that is a table.',
        usage: '<table> <caption>Monthly savings</caption> <tr> <th>Month</th> <th>Savings</th> </tr> <tr> <td>January</td> <td>$100</td> </tr> </table>',
        url: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/caption'
      },
      {
        name: 'thead',
        secondName: 'Thead Tag',
        description: 'The <thead> HTML element defines a set of rows defining the head of the columns of the table.',
        usage: '<table> <thead> <tr> <th>Month</th> <th>Savings</th> </tr> </thead> <tr> <td>January</td> <td>$100</td> </tr> </table>',
        url: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/thead'
      },
      {
        name: 'tbody',
        secondName: 'Tbody Tag',
        description: 'The <tbody> HTML element defines a set of rows defining the body of the columns of the table.',
        usage: '<table> <thead> <tr> <th>Month</th> <th>Savings</th> </tr> </thead> <tbody> <tr> <td>January</td> <td>$100</td> </tr> </tbody> </table>',
        url: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/tbody'
      },
      {
        name: 'tfoot',
        secondName: 'Tfoot Tag',
        description: 'The <tfoot> HTML element defines a set of rows summarizing the columns of the table.',
        usage: '<table> <thead> <tr> <th>Month</th> <th>Savings</th> </tr> </thead> <tbody> <tr> <td>January</td> <td>$100</td> </tr> </tbody> <tfoot> <tr> <td>Sum</td> <td>$100</td> </tr> </tfoot> </table>',
        url: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/tfoot'
      },
      {
        name: 'colgroup',
        secondName: 'Colgroup Tag',
        description: 'The <colgroup> HTML element defines a group of columns within a table.',
        usage: '<table> <colgroup> <col span="2" style="background-color:yellow"> <col style="background-color:lightblue"> </colgroup> <tr> <th>Month</th> <th>Savings</th> <th>More info</th> </tr> <tr> <td>January</td> <td>$100</td> <td>More text</td> </tr> </table>',
        url: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/colgroup'
      },
      {
        name: 'col',
        secondName: 'Col Tag',
        description: 'The <col> HTML element defines a column within a table and is used for defining common semantics on all common cells. It is generally found within a <colgroup> element.',
        usage: '<table> <colgroup> <col span="2" style="background-color:yellow"> <col style="background-color:lightblue"> </colgroup> <tr> <th>Month</th> <th>Savings</th> <th>More info</th> </tr> <tr> <td>January</td> <td>$100</td> <td>More text</td> </tr> </table>',
        url: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/col'
      },
      {
        name: 'th',
        secondName: 'Th Tag',
        description: 'The <th> HTML element defines a cell as header of a group of table cells. The exact nature of this group is defined by the scope and headers attributes.',
        usage: '<table> <tr> <th>Month</th> <th>Savings</th> </tr> <tr> <td>January</td> <td>$100</td> </tr> </table>',
        url: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/th'
      },
      {
        name: 'tr',
        secondName: 'Tr Tag',
        description: 'The <tr> HTML element defines a row of cells in a table.',
        usage: '<table> <tr> <th>Month</th> <th>Savings</th> </tr> <tr> <td>January</td> <td>$100</td> </tr> </table>',
        url: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/tr'
      },
      {
        name: 'td',
        secondName: 'Td Tag',
        description: 'The <td> HTML element defines a cell of a table that contains data. It participates in the table model.',
        usage: '<table> <tr> <th>Month</th> <th>Savings</th> </tr> <tr> <td>January</td> <td>$100</td> </tr> </table>',
        url: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/td'
      }
    ]
  },
  {
    title: 'Frames',
    description: '',
    color: getRandomColor(),
    properties: [
      {
        name: 'iframe',
        secondName: 'Iframe Tag',
        description: 'The <iframe> HTML element represents a nested browsing context, effectively embedding another HTML page into the current page.',
        usage: '<iframe src="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe"></iframe>',
        url: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe'
      }
    ]
  },
  {
    title: 'Styles and Semantics',
    description: '',
    color: getRandomColor(),
    properties: [
      {
        name: 'style',
        secondName: 'Style Tag',
        description: 'The <style> HTML element contains style information for a document, or part of a document. By default, the style instructions written inside that element are expected to be CSS.',
        usage: '<style> body { background-color: lightblue; } h1 { color: navy; margin-left: 20px; } </style>',
        url: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/style'
      },
      {
        name: 'div',
        secondName: 'Division Tag',
        description: 'The <div> HTML element is the generic container for flow content. It has no effect on the content or layout until styled using CSS.',
        usage: '<div>Some text</div>',
        url: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div'
      },
      {
        name: 'span',
        secondName: 'Span Tag',
        description: 'The <span> HTML element is a generic inline container for phrasing content, which does not inherently represent anything. It can be used to group elements for styling purposes (using the class or id attributes), or because they share attribute values, such as lang.',
        usage: '<span>Some text</span>',
        url: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/span'
      },
      {
        name: 'header',
        secondName: 'Header Tag',
        description: 'The <header> HTML element represents introductory content, typically a group of introductory or navigational aids.',
        usage: '<header> <h1>My Website</h1> <p>Some text about the site.</p> </header>',
        url: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/header'
      },
      {
        name: 'footer',
        secondName: 'Footer Tag',
        description: 'The <footer> HTML element represents a footer for its nearest sectioning content or sectioning root element.',
        usage: '<footer> <p>Some text about the site.</p> </footer>',
        url: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/footer'
      },
      {
        name: 'main',
        secondName: 'Main Tag',
        description: 'The <main> HTML element represents the dominant content of the <body> of a document. The main content area consists of content that is directly related to or expands upon the central topic of a document, or the central functionality of an application.',
        usage: '<main> <h1>My Website</h1> <p>Some text about the site.</p> </main>',
        url: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/main'
      },
      {
        name: 'section',
        secondName: 'Section Tag',
        description: 'The <section> HTML element represents a standalone section — which doesn’t have a more specific semantic element to represent it — contained within an HTML document.',
        usage: '<section> <h1>My Website</h1> <p>Some text about the site.</p> </section>',
        url: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/section'
      },
      {
        name: 'article',
        secondName: 'Article Tag',
        description: 'The <article> HTML element represents a self-contained composition in a document, page, application, or site, which is intended to be independently distributable or reusable (e.g., in syndication).',
        usage: '<article> <h1>My Website</h1> <p>Some text about the site.</p> </article>',
        url: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/article'
      },
      {
        name: 'aside',
        secondName: 'Aside Tag',
        description: 'The <aside> HTML element represents a portion of a document whose content is only indirectly related to the document’s main content.',
        usage: '<aside> <h1>My Website</h1> <p>Some text about the site.</p> </aside>',
        url: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/aside'
      },
      {
        name: 'details',
        secondName: 'Details Tag',
        description: 'The <details> HTML element is used as a disclosure widget from which the user can retrieve additional information.',
        usage: '<details> <summary>Summary</summary> <p>Some text about the site.</p> </details>',
        url: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details'
      },
      {
        name: 'dialog',
        secondName: 'Dialog Tag',
        description: 'The <dialog> HTML element represents a dialog box or other interactive component, such as an inspector or window.',
        usage: '<dialog> <p>Some text about the site.</p> </dialog>',
        url: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog'
      },
      {
        name: 'summary',
        secondName: 'Summary Tag',
        description: 'The <summary> HTML element is used as a summary, caption, or legend for the content of a <details> element.',
        usage: '<details> <summary>Summary</summary> <p>Some text about the site.</p> </details>',
        url: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/summary'
      },
      {
        name: 'data',
        secondName: 'Data Tag',
        description: 'The <data> HTML element links a given content with a machine-readable translation. If the content is time- or date-related, the <time> element must be used.',
        usage: '<data value="42">The answer to life, the universe, and everything</data>'
      }
    ]
  },
  {
    title: 'Meta Information',
    description: '',
    color: getRandomColor(),
    properties: [
      {
        name: 'head',
        secondName: 'Head Tag',
        description: 'The <head> HTML element contains machine-readable information (metadata) about the document, like its title, scripts, and style sheets.',
        usage: '<head></head>',
        url: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/head'
      },
      {
        name: 'meta',
        secondName: 'Meta Tag',
        description: 'The <meta> HTML element represents metadata that cannot be represented by other HTML meta-related elements, like <base>, <link>, <script>, <style> or <title>.',
        usage: '<meta name="description" content="Free Web tutorials">',
        url: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta'
      },
      {
        name: 'base',
        secondName: 'Base Tag',
        description: 'The <base> HTML element specifies the base URL to use for all relative URLs contained within a document. There can be only one <base> element in a document.',
        usage: '<base href="https://www.w3schools.com/images/">',
        url: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/base'
      }
    ]
  },
  {
    title: 'Programming',
    description: '',
    color: getRandomColor(),
    properties: [
      {
        name: 'script',
        secondName: 'Script Tag',
        description: 'The <script> HTML element is used to embed or reference an executable script.',
        usage: '<script src="myscript.js"></script>',
        url: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script'
      },
      {
        name: 'noscript',
        secondName: 'Noscript Tag',
        description: 'The <noscript> HTML element defines a section of HTML to be inserted if a script type on the page is unsupported or if scripting is currently turned off in the browser.',
        usage: '<noscript> <p>JavaScript is not enabled.</p> </noscript>',
        url: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/noscript'
      },
      {
        name: 'embed',
        secondName: 'Embed Tag',
        description: 'The <embed> HTML element represents an integration point for an external application or interactive content (in other words, a plug-in).',
        usage: '<embed src="https://www.youtube.com/embed/1p3vcRhsYGo">',
        url: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/embed'
      },
      {
        name: 'object',
        secondName: 'Object Tag',
        description: 'The <object> HTML element represents an external resource, which can be treated as an image, a nested browsing context, or a resource to be handled by a plugin.',
        usage: '<object data="https://www.w3schools.com/images/w3schools_green.jpg" width="104" height="142"></object>',
        url: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/object'
      },
      {
        name: 'param',
        secondName: 'Param Tag',
        description: 'The <param> HTML element defines parameters for plugins invoked by object elements. It is generally found within a <object> element.',
        usage: '<object data="movie.swf" type="application/x-shockwave-flash"> <param name="quality" value="high"> </object>',
        url: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/param'
      }
    ]
  }
]

export const config = {
  name: 'html',
  data,
  resources,
  description: 'HTML is the standard markup language for creating Web pages.'
}
