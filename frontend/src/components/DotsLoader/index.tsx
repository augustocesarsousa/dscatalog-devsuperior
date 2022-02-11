import React from 'react';
import ContentLoader from 'react-content-loader';

const DotsLoader = () => (
  <ContentLoader
    viewBox="0 0 280 200"
    height={200}
    width={280}
    backgroundColor="transparent"
  >
    <circle cx="90" cy="86" r="8" />
    <circle cx="134" cy="86" r="8" />
    <circle cx="178" cy="86" r="8" />
  </ContentLoader>
);

DotsLoader.metadata = {
  name: 'RioF',
  github: 'clariokids',
  description: 'Three Dots',
  filename: 'ThreeDots',
};

export default DotsLoader;
