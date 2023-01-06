import LazyImage from './LazyImage';
import useImages from '../hooks/useImages';

export default function ReactLazyLoadImageComponent() {
  const images = useImages();

  console.log(images);

  function renderImages() {
    return images.map(({ id, download_url, author, height, width }) => (
      <LazyImage
        key={id}
        src={download_url}
        alt={author}
        height={600}
        width={300}
      />
    ));
  }

  return <div className="flex flex-wrap justify-around">{renderImages()}</div>;
}
