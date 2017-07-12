import * as React from 'react';
import * as PropTypes from 'prop-types';

export interface IProps {
  children: any,
  engine: any,
}

class Provider extends React.Component<IProps, any> {
  public static childContextTypes = {
    mindEngine: PropTypes.any,
  }

  getChildContext() {
    return {
      mindEngine: this.props.engine,
    };
  }

  render() {
    return this.props.children;
  }
}

export default Provider;
