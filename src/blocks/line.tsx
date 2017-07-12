import * as React from 'react';
import IBlock from 'lifeflow-engine/dist/types/iblock';

const Line = ({ level, text }: IBlock) => {
  return <span>{text}<br /></span>;
};

export default Line;
