import * as React from 'react';
import IBlock from 'lifeflow-engine/dist/types/iblock';
import IModule from 'lifeflow-engine/dist/types/iblock';

import Code from './blocks/code';
import Headline from './blocks/headline';
import Line from './blocks/line';

export interface IProps {
  blocks: Array<IBlock | IModule>,
}

const Blocks: {[name: string]: any} = {
  code: Code,
  headline: Headline,
  line: Line,
};

class Document extends React.Component<IProps, any> {
  renderBlock(block: IBlock | IModule) {
    const BlockView = Blocks[block.type];
    return <BlockView {...block} />;
  }

  render() {
    const { blocks } = this.props;
    return (
      <div>
        {blocks.map(this.renderBlock.bind(this))}
      </div>
    );
  }
}

export default Document;
