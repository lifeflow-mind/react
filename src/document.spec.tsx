import * as React from 'react';
import * as PropTypes from 'prop-types';
import { Document } from './main';
import { mount } from 'enzyme';
import { expect } from 'chai';

describe('<Document />', () => {
  it('should be able to parse a document', () => {
    const blocks = [
      { type: 'headline', level: 1, text: 'Hello world' },
      { type: 'line', text: 'this is a test' },
      { type: 'line', text: '' },
      { type: 'headline', level: 2, text: 'document' },
      { type: 'line', text: '' },
      { type: 'line', text: 'with' },
      { type: 'line', text: '' },
      {
        type: 'code',
        source: 'let aLittleBitOf = \'Everythin\';\nmodule.exports = document.here;\ndocument.there = document.here;',
        language: 'javascript',
        settings: { output: true, module: true },
        module: true,
        output: 'test',
      },
      { type: 'line', text: '' },
      { type: 'line', text: '' },
      { type: 'line', text: 'in it' },
    ];

    const root = mount(<Document blocks={blocks} />);
    expect(root.html()).to.be.equal('<div><h1>Hello world</h1><span><!-- react-text: 4 -->this is a test<!-- /react-text --><br></span><span><!-- react-text: 7 --><!-- /react-text --><br></span><h2>document</h2><span><!-- react-text: 11 --><!-- /react-text --><br></span><span><!-- react-text: 14 -->with<!-- /react-text --><br></span><span><!-- react-text: 17 --><!-- /react-text --><br></span><div><pre><code>let aLittleBitOf = \'Everythin\';\nmodule.exports = document.here;\ndocument.there = document.here;</code></pre><div>test</div></div><span><!-- react-text: 24 --><!-- /react-text --><br></span><span><!-- react-text: 27 --><!-- /react-text --><br></span><span><!-- react-text: 30 -->in it<!-- /react-text --><br></span></div>')
  })
});
