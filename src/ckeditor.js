/**
 * @license Copyright (c) 2014-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
import ClassicEditorBase from "@ckeditor/ckeditor5-editor-classic/src/classiceditor";
import SourceEditing from "@ckeditor/ckeditor5-source-editing/src/index";
import Alignment from "@ckeditor/ckeditor5-alignment/src/alignment";
import AutoLink from "@ckeditor/ckeditor5-link/src/autolink";
import Autosave from "@ckeditor/ckeditor5-autosave/src/autosave";
import BlockQuote from "@ckeditor/ckeditor5-block-quote/src/blockquote";
import Bold from "@ckeditor/ckeditor5-basic-styles/src/bold";
import Code from "@ckeditor/ckeditor5-basic-styles/src/code";
import DataFilter from "@ckeditor/ckeditor5-html-support/src/datafilter";
import DataSchema from "@ckeditor/ckeditor5-html-support/src/dataschema";
import Essentials from "@ckeditor/ckeditor5-essentials/src/essentials";
import FontBackgroundColor from "@ckeditor/ckeditor5-font/src/fontbackgroundcolor";
import FontColor from "@ckeditor/ckeditor5-font/src/fontcolor";
import FontFamily from "@ckeditor/ckeditor5-font/src/fontfamily";
import FontSize from "@ckeditor/ckeditor5-font/src/fontsize";
import Heading from "@ckeditor/ckeditor5-heading/src/heading";
import HorizontalLine from "@ckeditor/ckeditor5-horizontal-line/src/horizontalline";
import Italic from "@ckeditor/ckeditor5-basic-styles/src/italic";
import Link from "@ckeditor/ckeditor5-link/src/link";
import List from "@ckeditor/ckeditor5-list/src/list";
import ListStyle from "@ckeditor/ckeditor5-list/src/liststyle";
import PageBreak from "@ckeditor/ckeditor5-page-break/src/pagebreak";
import Paragraph from "@ckeditor/ckeditor5-paragraph/src/paragraph";
import PasteFromOffice from "@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice";
import RemoveFormat from "@ckeditor/ckeditor5-remove-format/src/removeformat";
import SpecialCharacters from "@ckeditor/ckeditor5-special-characters/src/specialcharacters";
import SpecialCharactersArrows from "@ckeditor/ckeditor5-special-characters/src/specialcharactersarrows";
import SpecialCharactersCurrency from "@ckeditor/ckeditor5-special-characters/src/specialcharacterscurrency";
import SpecialCharactersEssentials from "@ckeditor/ckeditor5-special-characters/src/specialcharactersessentials";
import SpecialCharactersLatin from "@ckeditor/ckeditor5-special-characters/src/specialcharacterslatin";
import SpecialCharactersMathematical from "@ckeditor/ckeditor5-special-characters/src/specialcharactersmathematical";
import SpecialCharactersText from "@ckeditor/ckeditor5-special-characters/src/specialcharacterstext";
import Strikethrough from "@ckeditor/ckeditor5-basic-styles/src/strikethrough";
import Subscript from "@ckeditor/ckeditor5-basic-styles/src/subscript";
import Superscript from "@ckeditor/ckeditor5-basic-styles/src/superscript";
import Table from "@ckeditor/ckeditor5-table/src/table";
import TableCaption from "@ckeditor/ckeditor5-table/src/tablecaption";
import TableCellProperties from "@ckeditor/ckeditor5-table/src/tablecellproperties";
import TableProperties from "@ckeditor/ckeditor5-table/src/tableproperties";
import TableToolbar from "@ckeditor/ckeditor5-table/src/tabletoolbar";
import TextTransformation from "@ckeditor/ckeditor5-typing/src/texttransformation";
import Underline from "@ckeditor/ckeditor5-basic-styles/src/underline";
import WordCount from "@ckeditor/ckeditor5-word-count/src/wordcount";
 
class SitEditor extends ClassicEditorBase  {}

const hue = [0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330];
const lightness = [10, 20, 30, 40, 50, 60, 70, 80, 90];
const saturation = [50, 100];
const alpha = [10, 50, 100];

const colors = saturation.flatMap((s) =>
  lightness.flatMap((l) =>
    hue.flatMap((h) => {
      return {
        label: `hsla(${h}, ${s}%, ${l}%, ${alpha[2]}%)`,
        color: `hsla(${h}, ${s}%, ${l}%, ${alpha[2]}%)`,
        hasBorder: true,
      };
    })
  )
);
const greyscale = [0, 9, 18, 27, 36, 45, 54, 63, 72, 81, 90, 100];
colors.splice(
  colors.length / 2,
  0,
  ...greyscale.map((l) => ({
    label: `hsl(0, 0%, ${l}%)`,
    color: `hsl(0, 0%, ${l}%)`,
    hasBorder: true,
  }))
);
colors.push(
  ...greyscale
    .map((l) => ({
      label: `hsl(0, 0%, ${l}%)`,
      color: `hsl(0, 0%, ${l}%)`,
      hasBorder: true,
    }))
    .reverse()
);

// Plugins to include in the build.
SitEditor.builtinPlugins = [
  Alignment,
  AutoLink,
  Autosave,
  BlockQuote,
  Bold,
  Code,
  DataFilter,
  DataSchema,
  Essentials,
  FontBackgroundColor,
  FontColor,
  FontFamily,
  FontSize,
  Heading,
  HorizontalLine,
  Italic,
  // Outdent,
  // Indent,
  Link,
  List,
  ListStyle,
  PageBreak,
  Paragraph,
  PasteFromOffice,
  RemoveFormat,
  SpecialCharacters,
  SpecialCharactersArrows,
  SpecialCharactersCurrency,
  SpecialCharactersEssentials,
  SpecialCharactersLatin,
  SpecialCharactersMathematical,
  SpecialCharactersText,
  Strikethrough,
  Subscript,
  Superscript,
  Table,
  TableCaption,
  TableCellProperties,
  TableProperties,
  TableToolbar,
  TextTransformation,
  Underline,
  WordCount
];
SitEditor.defaultConfig = {
  
  toolbar: [
    "heading",
    "|",
    "bold",
    "italic",
    "underline",
    "strikethrough",
    "subscript",
    "superscript",
    "code",
    "|",
    "link",
    "horizontalLine",
    "|",
    "alignment",
    "pageBreak",
    // "outdent",
    // "indent",
    "|",
    "fontBackgroundColor",
    "fontColor",
    "fontSize",
    "|",
    "specialCharacters",
    "blockQuote",
    "insertTable",
    "bulletedList",
    "numberedList",
    // "|",
    // "textPartLanguage",
    "|",
    "removeFormat",
    "undo",
    "redo",
    "|",
    "sourceEditing"
],
  fontSize: {
    options: [9, 11, 13, "default", 17, 19, 21],
  },
  fontColor: {
    colors,
    columns: 12,
  },
  alignment: {
    options: ["left", "center", "right"],
  },
  fontBackgroundColor: {
    colors,
    columns: 12,
  },
  language: "de",
  	table: {
					contentToolbar: [
						'tableColumn',
						'tableRow',
						'mergeTableCells',
						'tableCellProperties',
						'tableProperties'
					]
				},
  link: {
    decorators: {
      openInNewTab: {
        mode: "manual",
        label: "Öffnen in neuen Tab",
        attributes: {
          target: "_blank",
          rel: "noopener noreferrer",
        },
      },
      toggleDownloadable: {
        mode: "manual",
        label: "Ist Download?",
        attributes: {
          download: "download",
        },
      },
    },
  },
};
export default SitEditor;
