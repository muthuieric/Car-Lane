import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ArtworkDetails = () => {
  const { id } = useParams();
  const [artwork, setArtwork] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArtworkDetails = async () => {
      try {
        const response = await fetch(`https://api.artic.edu/api/v1/artworks/${id}`);
        const data = await response.json();
        setArtwork(data.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching artwork details:', error);
        setLoading(false);
      }
    };

    fetchArtworkDetails();
  }, [id]);

  return (
    <div className="flex justify-center items-center">
      <div className="w-11/12 mt-20  mx-4 my-auto ">
        {loading ? (
          <div className="flex justify-center items-center h-screen text-3xl font-bold text-purple-500">Loading, please wait...</div>
        ) : artwork ? (
          <div className=" bg-white rounded-xl shadow-md overflow-hidden">
            {artwork.image_id && (
              <img
                src={`https://www.artic.edu/iiif/2/${artwork.image_id}/full/843,/0/default.jpg`}
                alt={artwork.title}
                className="w-full h-80 object-cover"
              />
            )}
            <div className="p-5">
              <p className="tracking-wide font-semibold text-xl">Title: {artwork.title}</p>
              <p className="details">Artist: {artwork.artist_title}</p>
              <p className="details">Department: {artwork.department_title}</p>
              <p className="details">Origin: {artwork.place_of_origin}</p>
              <p className="details">Year: {artwork.date_display}</p>
              <p className="details">Credit Line: {artwork.credit_line}</p>
              <p className="mb-1 text-lg">Publication History: {artwork.publication_history}</p>
            </div>
          </div>
        ) : (
          <div className="text-3xl font-bold text-purple-500">Artwork not found.</div>
        )}
      </div>
    </div>
  );
};

export default ArtworkDetails;
