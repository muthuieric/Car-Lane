import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const ArtWorkItem = ({ artwork }) => {
  return (
    <div key={artwork.id} className="mt-8 bg-white rounded h-100 w-80 m-2 border-2 flex flex-col">
      {artwork.image_id && (
        <img
          src={`https://www.artic.edu/iiif/2/${artwork.image_id}/full/843,/0/default.jpg`}
          alt={artwork.title}
          className="rounded h-52 w-80 object-cover"
        />
      )}
      <div className="p-4 flex flex-col justify-between ">
        <div>
        <Link to={`/art/${artwork.id}`}>

          <p className="font-bold ">Title: {artwork.title}</p>
          <p className="italic ">Artist: {artwork.artist_title}</p>
      </Link>

        </div>
        <div>
          <p className="">Origin: {artwork.place_of_origin}</p>
          <p className="">Year: {artwork.date_display}</p>
        </div>
      </div>
    </div>
  );
};

export default ArtWorkItem;
