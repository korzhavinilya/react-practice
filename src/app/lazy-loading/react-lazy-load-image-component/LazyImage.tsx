import { LazyLoadImage } from 'react-lazy-load-image-component';
import LowResolutionImage from '../images/800x400.jpg';

type ImageProps = {
  src: string;
  alt: string;
  height: number;
  width: number;
};

export default function LazyImage({ src, alt, height, width }: ImageProps) {
  return (
    <LazyLoadImage
      src={src}
      placeholderSrc={LowResolutionImage}
      alt={alt}
      width={height}
      height={width}
    />
  );
}
