import React from 'react';

const ArtworkItem = ({ artwork }) => {
  return (
<div key={artwork.id} className="mt-8 bg-white rounded h-full w-60 m-2 border-2 flex flex-col ">
      {artwork.image_id && (
        <img
          src={`https://www.artic.edu/iiif/2/${artwork.image_id}/full/843,/0/default.jpg`}
          alt={artwork.title}
          className='rounded w-60 h-40  object-cover'
        />
      )}
      <h2>{artwork.title}</h2>

    </div>
  )};

export default ArtworkItem;

