import ContentLoader from 'react-content-loader';

const CardLoader = () => (
  <ContentLoader
    speed={2}
    viewBox="0 0 300 450"
    height={450}
    width={300}
    backgroundColor="#f3f3f3"
    foregroundColor="#d6d2d2"
  >
    <rect x="30" y="20" rx="8" ry="8" width="250" height="200" />
    <rect x="30" y="250" rx="0" ry="0" width="250" height="18" />
    <rect x="30" y="275" rx="0" ry="0" width="120" height="20" />
  </ContentLoader>
);

export default CardLoader;
