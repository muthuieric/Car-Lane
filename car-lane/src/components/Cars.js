import React from 'react';

const Cars = ({ carData }) => {
  return (
    <div>
      <h1>Car Listings</h1>
      <ul>
        {carData.map((car) => (
          <li key={car.that}>
            <h2>{car.model}</h2>
            <p>Make: {car.Make_id}</p>
            <p>Year: {car.Year}</p>
            <p>Price: {car.Price}</p>
            {/* Add more details if needed */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cars;
