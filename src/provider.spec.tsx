import Engine from 'lifeflow-engine/dist/engine';
import spawner from 'lifeflow-engine/dist/runtime/node-spawner';
import * as React from 'react';
import * as PropTypes from 'prop-types';
import { Provider } from './main';
import { mount } from 'enzyme';
import { expect } from 'chai';

class ChildComponent extends React.Component<any, any> {
  public static contextTypes = {
    mindEngine: PropTypes.any,
  }

  render() {
    return <div>{this.context.mindEngine}</div>;
  }
}

describe('provider', () => {
  let engine: Engine;

  beforeEach(() => {
    //engine = new Engine(spawner);
  });

  it('should parse engine as child context', () => {
    const val = 'hello';

    const comp = mount(
      <Provider engine={val as any}>
        <ChildComponent hello="world" />
      </Provider>
    );

    expect(comp.find(ChildComponent).html()).to.be.equal('<div>hello</div>');
  });
})
