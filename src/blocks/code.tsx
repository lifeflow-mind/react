import * as React from 'react';
import IModule from 'lifeflow-engine/dist/types/imodule';
import Html from './html';
import Latex from './latex';
import * as hljs from 'highlight.js';

import 'highlight.js/styles/railscasts.css';

const renderOutput = (output: any) => {
  if (!output) {
    return null;
  }
  return output.toString();
}

const renderCode = (code: string, language: string, settings: any) => {
  if (settings.hidden) {
    return null;
  }
  if (language === 'javascript') {
    const highlighted = hljs.highlight('javascript', code).value;
    return <pre><Html source={highlighted} tag="code" /></pre>;
  } else if (language === 'latex') {
    return <Latex source={code} />;
  } else {
    return (
      <pre>
        <code>
          {code}
        </code>
      </pre>
    );
  }
}

const Line = ({ source, output, settings, language }: IModule) => {
  return (
    <div>
      {renderCode(source, language, settings)}
      <div>
        {renderOutput(output)}
      </div>
    </div>
  );
};

export default Line;
