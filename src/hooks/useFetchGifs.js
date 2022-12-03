import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = (category) => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsloading] = useState(true);

  useEffect(() => {
    getGifs(category).then((resp) => setImages(resp));
    setIsloading(false);
  }, [category]);

  return {
    images,
    isLoading,
  };
};
