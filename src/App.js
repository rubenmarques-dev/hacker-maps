import React, { Component, useState } from "react";
import Navigation from "./components/Navigation";
import "./App.css";

const title = "HackerMaps";

const App = () => {
  const [locations, setLocations] = useState([
    "Lombard St, San Francisco, CA, USA",
    "PIER 39, The Embarcadero, San Francisco, CA, USA",
    "Golden Gate Bridge, San Francisco, CA, USA",
    `Fisherman's Wharf, San Francisco, CA, USA`,
    "Alcatraz Island, San Francisco, CA, USA",
  ]);

  const moveUp = (from, to) => {
    let start = locations.slice(0, to);
    let movingUp = locations[from];
    let movingDown = locations[to];
    let end = locations.slice(from + 1, locations.length);
    setLocations([...start, movingUp, movingDown, ...end]);
  };
  const moveDown = (from, to) => {
    let start = locations.slice(0, from);
    let movingUp = locations[to];
    let movingDown = locations[from];
    let end = locations.slice(to + 1, locations.length);
    setLocations([...start, movingUp, movingDown, ...end]);
  };

  return (
    <div className="App">
      <h8k-navbar header={title}></h8k-navbar>
      <div>
        <Navigation locations={locations} moveUp={moveUp} moveDown={moveDown} />
      </div>
    </div>
  );
};

export default App;
