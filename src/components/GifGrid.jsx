import { useEffect, useState } from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifItem } from './GifItem';

export const GifGrid = ({ category }) => {
  const { images, isLoading } = useFetchGifs(category);

  return (
    <>
      {isLoading && <h2>Cargando...</h2>}
      <div className="card-grid">
        <ol>
          {images.map((image) => (
            <GifItem key={image.id} {...image} />
          ))}
        </ol>
      </div>
    </>
  );
};
