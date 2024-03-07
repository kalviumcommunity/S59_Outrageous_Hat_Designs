import React, { useEffect, useState } from 'react';
import HatCard from '../components/Card';

const Wishlist = () => {
  const [hats, setHats] = useState([]);

  useEffect(() => {
    const fetchHats = async () => {
      try {
        const response = await fetch("https://hat-bxol.onrender.com/crude-api");
        const hatsData = await response.json();
        setHats(hatsData);
      } catch (error) {
        console.error('Error fetching hats:', error);
      }
    };

    fetchHats();
  }, []);

  const wishlistHats = hats.filter(hat => hat.isLiked);

  return (
    <div>
      <h2>Wishlist</h2>
      {wishlistHats.map((hat) => (
        <HatCard key={hat._id} hat={hat} />
      ))}
    </div>
  );
};

export default Wishlist;
