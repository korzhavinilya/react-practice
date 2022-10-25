import { useEffect, useState } from 'react';
import Image from '../interfaces/image.interface';

export default function useImages() {
  const [images, setImages] = useState<Image[]>([]);

  useEffect(() => {
    fetch('https://picsum.photos/v2/list')
      .then((response) => response.json())
      .then((images) => {
        setImages(images);
      });
  }, []);

  return images;
}
