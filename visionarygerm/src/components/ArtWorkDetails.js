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
    <div className="flex justify-center items-center h-screen ">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        {loading ? (
          <div className="flex justify-center items-center h-screen text-3xl font-bold text-purple-500">Loading, please wait...</div>
        ) : artwork ? (
          <div className="md:flex">
            {artwork.image_id && (
              <div className="md:shrink-0">
                <img
                  src={`https://www.artic.edu/iiif/2/${artwork.image_id}/full/843,/0/default.jpg`}
                  alt={artwork.title}
                  className="h-48 w-full object-cover md:h-full md:w-48"
                />
              </div>
            )}
            <div className="p-8">
              <div className=" tracking-wide  font-semibold">Title: {artwork.title}</div>
              <p className="italic mb-2 ">Artist: {artwork.artist_title}</p>
              <p className="italic mb-2 ">Department: {artwork.department_title}</p>
              <div>
                <p className="mb-2 italic">Origin: {artwork.place_of_origin}</p>
                <p className="mb-2 italic">Year: {artwork.date_display}</p>
                <p className="mb-2">Credit Line: {artwork.credit_line}</p>
              </div>
              <div>
                <p className="mb-2">Publication History: {artwork.publication_history}</p>
              </div>
            </div>
          </div>
        ) : (
          <div>Artwork not found.</div>
        )}
      </div>
    </div>
  );
};

export default ArtworkDetails;
