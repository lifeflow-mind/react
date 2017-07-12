import * as React from 'react';
import * as katex from 'katex';

import Html from './html';

import 'katex/dist/katex.min.css';

export default ({ source, displayMode = true }: { source: string, displayMode?: boolean}) => {
  try {
    const latex = katex.renderToString(source, { displayMode });
    return (
      <Html source={latex} />
    );
  } catch (err) {
    return (
      <Html source={err.toString()} />
    );
  }
};
