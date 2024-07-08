import React from "react";

function Property({ home }) {
  return (
    <div key={home._id} className="property-card">
      <strong>
        <p>{home.title}</p>
      </strong>
      <img src={home.image} alt={home.title} className="property-image" />
      <p>{home.description}</p>
      <p>{home.contact}</p>
    </div>
  