const Cars = () => {

const BotCard = ({ bot, onEnlistBot }) => {

    return ( 
        <div>
        <h1>Car List</h1>
        <ul>
          {carData.map((car) => (
            <li key={car.id}>
              {/* Display car information here */}
              <p>{car.make}</p>
              <p>{car.model}</p>
              {/* Add more properties you want to display */}
            </li>
          ))}
        </ul>
      </div>
     );
}
 
export default Cars;




