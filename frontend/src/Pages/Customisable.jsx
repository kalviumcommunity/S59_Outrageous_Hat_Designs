import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../PagesStyles/customForm.css";

function AddCustomisable() {
  const [designName, setDesignName] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [entities, setEntities] = useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    let obj = {
      design_name: designName || "",
      description: description || "",
      imageUrl: imageUrl || "",
    };

    try {
      const response = await fetch(
        "http://localhost:3000/crude-api/add_customizable_hat",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(obj),
        }
      );

      if (response.ok) {
        const data = await response.json();
        toast.success("Response Submitted Successfully");
        console.log("Response:", data);
        setEntities([...entities, data]);
      } else {
        const errorMessage = await response.text();
        setErrorMessage("Failed to add customisable hat: " + errorMessage);
        toast.error("Error occured. Try again after Sometime.");
        console.error("Error:", errorMessage);
      }
    } catch (error) {
      setErrorMessage("An error occurred: " + error.message);
      toast.error("Error occured. Api not working.");
      console.error("Error:", error);
    }
  };

  return (
    <>
      <div className="Formcontainer">
        <h1>Add Your Hat Designs</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Design Name:</label>
            <input
              type="text"
              id="designName"
              value={designName}
              onChange={(e) => setDesignName(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Description:</label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Image URL:</label>
            <input
              type="text"
              id="imageUrl"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              required
            />
          </div>
          <button type="submit">Add Customisable Hat</button>
        </form>
        {errorMessage && <p id="error">{errorMessage}</p>}
        {entities.map((entity, index) => (
          <div key={index}>
            <p>{"design_name:  "   }
            {entity.design_name}</p>
            <p>{"description:  "   }
            {entity.description}</p>
            <p>{"imageUrl:    "}
            {entity.imageUrl}</p>
          </div>
        ))}
      </div>
      <ToastContainer />
    </>
  );
}

export default AddCustomisable;
