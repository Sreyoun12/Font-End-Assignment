// src/App.jsx
import data from "./data";
import "./index.css";

function Card({ person }) {
  return (
    <div className="card">
      <img src={person.image} alt={person.name} />
      <h2>{person.name}</h2>
      <p><strong>Role:</strong> {person.role}</p>
      <p><strong>Hobbies:</strong> {person.hobbies.join(", ")}</p>
      <p><strong>Price:</strong> {person.price}</p>
    </div>
  );
}

function App() {
  return (
    <div className="app">
      <h1>Our Team</h1>
      <div className="card-container">
        {data.map((person) => (
          <Card key={person.id} person={person} />
        ))}
      </div>
    </div>
  );
}

export default App;
