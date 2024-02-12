import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const DetailPage = () => {
  const { id } = useParams();
  const [details, setDetails] = useState(null);
  const [credits, setCredits] = useState(null);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        
        const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=1119df6b82c7089f8f9fa3e2208c4128`);
        const data = await response.json();
        setDetails(data);

        
        const creditsResponse = await fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=1119df6b82c7089f8f9fa3e2208c4128`);
        const creditsData = await creditsResponse.json();
        setCredits(creditsData);
      } catch (error) {
        console.error('Error fetching details:', error);
      }
    };

    fetchDetails();
  }, [id]);

  return (
    <div className="container mx-auto my-8 text-center">
      {details && credits && (
        <>
          <img
            src={`https://image.tmdb.org/t/p/w500${details.poster_path}`}
            alt={details.title}
            className="w-full h-80 object-fit rounded-md mb-4"
          />
          <h2 className="text-black text-lg font-bold mb-2">{details.title}</h2>
          <h3 className="text-gray-400 mb-4">Cast & Crew:</h3>
          <div className="flex flex-wrap">
            {credits.cast.map((cast) => (
              <div key={cast.id} className="mx-3 mb-4 text-center">
                <img
                  src={`https://image.tmdb.org/t/p/w500${cast.profile_path}`}
                  alt={cast.name}
                  className="w-24 h-36 object-fill rounded-md mb-2"
                />
                <p className="text-black">{cast.name}</p>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default DetailPage;
