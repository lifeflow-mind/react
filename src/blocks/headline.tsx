import * as React from 'react';
import IBlock from 'lifeflow-engine/dist/types/iblock';

const Headline = ({ level, text }: IBlock) => {
  const Tag = `h${level}`;
  return <Tag>{text}</Tag>;
};

export default Headline;
