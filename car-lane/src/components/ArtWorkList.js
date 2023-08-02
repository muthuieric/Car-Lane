import React, { useState, useEffect } from 'react';
import ArtworkItem from './ArtWorkItem';

const ArtworkList = () => {
  const [artworks, setArtworks] = useState([]);

  useEffect(() => {
    const fetchArtworks = async () => {
      try {
        const response = await fetch('https://api.artic.edu/api/v1/artworks');
        const data = await response.json();
        setArtworks(data.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchArtworks();
  }, []);

  return (
    <div>
      <h1 className='text-3xl font-bold mb-4 text-purple-500'>Artworks</h1>
      <div className=" flex flex-wrap flex-row  ">   
        {artworks.map((artwork) => (
          <ArtworkItem key={artwork.id} artwork={artwork} />
        ))}
      </div>
    </div>
  );
};

export default ArtworkList;
