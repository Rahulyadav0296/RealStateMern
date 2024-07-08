import React, { useEffect, useState } from "react";
import Form from "./components/Form";
import Header from "./components/Header";
import Property from "./components/Property";

function App() {
  const [propertyDetails, setPropertyDetails] = useState({
    title: "",
    description: "",
    image: "",
    contact: "",
  });

  const [property, setProperty] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPropertyDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleProperty = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/property", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: propertyDetails.title,
          description: propertyDetails.description,
          image: propertyDetails.image,
          contact: propertyDetails.contact,
        }),
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetch("http://localhost:3000/api/property")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProperty(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <>
      <Header />
      <div className="container">
        <div className="form-container">
          <Form
            propertyDetailOne={propertyDetails.title}
            propertyDetailTwo={propertyDetails.description}
            labelOne="title"
            labelTwo="description"
            handleChange={handleChange}
          />
          <Form
            propertyDetailOne={propertyDetails.image}
            propertyDetailTwo={propertyDetails.contact}
            labelOne="image"
            labelTwo="contact"
            handleChange={handleChange}
          />
        </div>
        <button className="add-property-button" onClick={handleProperty}>
          Add Property
        </button>
      </div>
      <div className="properties-list">
        {property.map((home) => (
          <Property home={home} />
        ))}
      </div>
    </>
  );
}

export default App;
