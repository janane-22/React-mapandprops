import "./App.css";

import Card from "./Card.jsx";

const pets = [
  { id: 1, title: "Julie's Rabbit Ears", image: "rabbit-ears.jpg" },
  { id: 2, title: "The Innocent Look", image: "innocent-look.jpg" },
  { id: 3, title: "Big Eyed Buggy", image: "bigeyed-buggy.jpg" },
  { id: 4, title: "The Saint Doggo", image: "saint-doogo.jpg" },
  { id: 5, title: "Big Eyed Buggy", image: "bigeyed-buggy.jpg" },
  { id: 6, title: "The Innocent Look", image: "innocent-look.jpg" },
  { id: 7, title: "The Saint Doggo", image: "saint-doogo.jpg" },
  { id: 8, title: "Julie's Rabbit Ears", image: "rabbit-ears.jpg" },
];

function App() {
  return (
    <div className="page">
      <div className="gallery-box">
        <div className="cards-container">
          {pets.map((pet) => (
            <Card
              key={pet.id}
              title={pet.title}
              image={pet.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
