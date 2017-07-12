import * as React from 'react';

const Html = ({ source, tag: Tag = 'div' }: { source: string, tag?: string}) => (
  <Tag dangerouslySetInnerHTML={{ __html: source }} />
);

export default Html;
