import * as React from 'react';
import * as PropTypes from 'prop-types';

interface IState {
  documents: any[] | undefined;
  status: string;
}

interface IContext {
  mindEngine: any;
}

const withDocument = (WrappedComponent: any) => class WithDocument extends React.Component<any, IState> {
  state: IState = {
    documents: [],
    status: 'not loaded',
  };

  public static contextTypes = {
    mindEngine: PropTypes.any,
  };

  componentDidMount() {
    const engine = (this.context as IContext).mindEngine;
    engine.documents.search.subscribe((documents: any) => {
      this.setState({
        documents,
        status: 'loaded',
      });
    });
  }

  render() {
    return (
      <WrappedComponent {...this.props} {...this.state} />
    );
  }
} as any;

export default withDocument;
