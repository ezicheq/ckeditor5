/**
 * @license Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

// The editor creator to use.
import ClassicEditorBase from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';
import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import Underline from '@ckeditor/ckeditor5-basic-styles/src/underline';
import Strikethrough from '@ckeditor/ckeditor5-basic-styles/src/strikethrough';
import Superscript from '@ckeditor/ckeditor5-basic-styles/src/superscript';
import Subscript from '@ckeditor/ckeditor5-basic-styles/src/subscript';
import Link from '@ckeditor/ckeditor5-link/src/link';
import SpecialCharacters from '@ckeditor/ckeditor5-special-characters/src/specialcharactersessentials';
import SpecialCharactersEssentials from '@ckeditor/ckeditor5-special-characters/src/specialcharacters';
import Heading from '@ckeditor/ckeditor5-heading/src/heading';
import List from '@ckeditor/ckeditor5-list/src/list';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote';
import Indent from '@ckeditor/ckeditor5-indent/src/indent';
import IndentBlock from '@ckeditor/ckeditor5-indent/src/indentblock';
import Clipboard from '@ckeditor/ckeditor5-clipboard/src/clipboard';
import PasteFromOffice from '@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice';
import TextTransformation from '@ckeditor/ckeditor5-typing/src/texttransformation';
import HorizontalLine from '@ckeditor/ckeditor5-horizontal-line/src/horizontalline';
import Alignment from '@ckeditor/ckeditor5-alignment/src/alignment';

export default class EzicheqEditor extends ClassicEditorBase {}

// Plugins to include in the build.
EzicheqEditor.builtinPlugins = [
    Essentials,
    Autoformat,
    Bold,
    Italic,
    Underline,
    Strikethrough,
    Superscript,
    Subscript,
    Link,
    HorizontalLine,
    SpecialCharacters,
    SpecialCharactersEssentials,
    Heading,
    List,
    Paragraph,
    BlockQuote,
    Indent,
    IndentBlock,
    PasteFromOffice,
    Clipboard,
    TextTransformation,
    Alignment
];

// Editor configuration.
EzicheqEditor.defaultConfig = {
    toolbar: {
	items: [
	    'undo',
	    'redo',
	    '|',
	    'bold',
	    'italic',
            'underline',
            'strikethrough',
            'specialCharacters',
	    '|',
	    'bulletedList',
	    'numberedList',
//	    'blockQuote',
//	    'outdent',
//	    'indent',
            'alignment',
//	    '|',
//	    'heading',
	    'link',
//          'horizontalLine',
//          'superscript',
//          'subscript',
	]
    },
    // This value must be kept in sync with the language defined in webpack.config.js.
    language: 'en',
    shouldNotGroupWhenFull: true
};
