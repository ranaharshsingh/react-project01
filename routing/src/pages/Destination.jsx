const places = [
  { id: 1, name: "Manali", country: "India" },
  { id: 2, name: "Paris", country: "France" },
  { id: 3, name: "Dubai", country: "UAE" },
];

function Destinations() {
  return (
    <div>
      <h1>Destinations</h1>

      {places.map((place) => (
        <div key={place.id}>
          <h2>{place.name}</h2>
          <p>{place.country}</p>
        </div>
      ))}
    </div>
  );
}

export default Destinations;