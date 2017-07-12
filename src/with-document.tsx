import * as React from 'react';
import * as PropTypes from 'prop-types';

interface IState {
  document: any | undefined;
  status: string;
  module?: any;
}

interface IContext {
  mindEngine: any;
}

const withDocument = (WrappedComponent: any) => class WithDocument extends React.Component<any, IState> {
  state: IState = {
    document: undefined,
    status: 'not loaded',
    module: undefined,
  };

  public static contextTypes = {
    mindEngine: PropTypes.any,
  };

  componentDidMount() {
    const engine = (this.context as IContext).mindEngine;
    engine.documents.current.subscribe((document: any) => {
      if (!document) {
        this.setState({
          document: undefined,
          status: 'not loaded',
          module: undefined,
        });
      } else {
        const json = document.toJSON ? document.toJSON() : document;
        this.setState({
          document: json,
          status: 'loaded',
        }, async () => {
          const module = await engine.parse(json.content);
          this.setState({
            module,
          })
        });
      }
    });
  }

  render() {
    const engine = (this.context as IContext).mindEngine;
    return (
      <WrappedComponent
        {...this.props}
        {...this.state}
        setDocument={engine.documents.setDocument}
      />
    );
  }
} as any;

export default withDocument;
