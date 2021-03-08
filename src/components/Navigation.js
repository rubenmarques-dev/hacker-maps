import React, { Component, useState } from "react";
import "./Navigation.css";

const Navigation = (props) => {
  // Used for rendering
  const getClasses = (ctx, index) => {
    let classes = `material-icons ${ctx}`;
    if (ctx === "dots") {
      if (isLast(index)) {
        classes += " hidden";
      }
    } else {
      classes += isLast(index) ? " small" : " x-small";
      if (index === 0) {
        classes += " first";
      }
    }
    return classes;
  };

  // Used for rendering
  const isLast = (index) => {
    return index === props.locations.length - 1;
  };

  const locations = () => {
    return props.locations.map((location, index) => (
      <li
        key={"row" + index}
        data-testid={"location-" + index}
        className="layout-row justify-content-between align-items-center mr-8 pl-40 relative"
      >
        <div className="layout-column justify-content-start align-items-center handle">
          <i className={getClasses("marker", index)}>
            {isLast(index) ? "room" : "radio_button_checked"}
          </i>
          <i className={getClasses("dots", index)}>more_vert</i>
        </div>
        <div className="location-name">
          <p className="caption text-start mb-4" data-testid="location">
            {location}
          </p>
        </div>
        <div>
          <button className="icon-only small mx-0" data-testid="up-button">
            <i className="material-icons">arrow_upward</i>
          </button>
          <button className="icon-only small mx-0" data-testid="down-button">
            <i className="material-icons">arrow_downward</i>
          </button>
        </div>
      </li>
    ));
  };

  return (
    <div className="layout-row align-items-center justify-content-center navigation-screen">
      <div className="card layout-row flat map-card">
        <section className="card pb-16 pr-16 flex-auto layout-column justify-content-center">
          <ul className="pl-0" data-testid="location-list">
            {locations}
          </ul>
        </section>
        <section className="flex-auto">
          <img src="images/map.svg" className="fill" alt="map" />
        </section>
      </div>
    </div>
  );
};

export default Navigation;
