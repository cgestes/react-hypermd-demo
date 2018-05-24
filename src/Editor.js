import React, {Component} from 'react';
import ReactCodeMirror from 'react-codemirror';

import 'codemirror/lib/codemirror.css';
import 'hypermd/mode/hypermd.css';
import 'hypermd/theme/hypermd-light.css';

import 'codemirror/lib/codemirror';

import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/markdown/markdown';
import 'codemirror/mode/gfm/gfm';

import 'hypermd/core';
import 'hypermd/mode/hypermd';

import 'hypermd/addon/hide-token';
import 'hypermd/addon/cursor-debounce';
import 'hypermd/addon/fold';
import 'hypermd/addon/read-link';
import 'hypermd/addon/click';
import 'hypermd/addon/hover';
import 'hypermd/addon/paste';
import 'hypermd/addon/insert-file';
import 'hypermd/addon/mode-loader';
import 'hypermd/addon/table-align';


export default class Editor extends Component {
  constructor(...args) {
    super(...args);
    this.codeMirrorRef = React.createRef();
  }

  render() {
    const options = {
      mode: 'hypermd',
      // mode: 'gfm',
      theme: 'hypermd-light',

      hmdFold: {
        image: true,
        link: true,
        math: true,
      },
      hmdHideToken: true,
      hmdCursorDebounce: true,
      hmdPaste: true,
      hmdClick: true,
      hmdHover: true,
      hmdTableAlign: true,
    };

    const defaultText = "# Heading\n\nSome **bold** and _italic_ text\nBy [Jed Watson](https://github.com/JedWatson)\n";

    return <ReactCodeMirror value={defaultText} ref={this.codeMirrorRef} className="code-mirror_editor" options={options} />;
  }
}
