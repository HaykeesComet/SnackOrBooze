import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import SnackOrBoozeApi from "./SnackOrBoozeApi";

/**
 * AddItemForm Component
 * Handles the form submission for adding a new snack or drink item to the menu.
 * Redirects to /item-added upon successful submission.
 */
function AddItemForm() {
  const [formData, setFormData] = useState({ type: "snacks", name: "", description: "", recipe: "", serve: "" });
  const history = useHistory(); // useHistory hook for navigation

  /**
   * Handles form submission, sends the new item data to the API, and redirects to /item-added.
   */
  const handleSubmit = async (e) => {
    e.preventDefault();
    await SnackOrBoozeApi.addItem(formData.type, formData);
    history.push("/item-added"); // Redirect to /item-added after submission
  };

  /**
   * Updates form data state on input change.
   */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(data => ({ ...data, [name]: value }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <h4>Add an Item</h4>
        <label>Type: </label>
        <select name="type" onChange={handleChange} value={formData.type}>
          <option value="snacks">Snack</option>
          <option value="drinks">Drink</option>
        </select>
      </div>
      <div>
        <label>Name: </label>
        <input name="name" value={formData.name} onChange={handleChange} />
      </div>
      <div>
        <label>Description: </label>
        <input name="description" value={formData.description} onChange={handleChange} />
      </div>
      <div>
        <label>Recipe: </label>
        <input name="recipe" value={formData.recipe} onChange={handleChange} />
      </div>
      <div>
        <label>Serve: </label>
        <input name="serve" value={formData.serve} onChange={handleChange} />
      </div>
      <button type="submit">Add Item</button>
    </form>
  );
}

export default AddItemForm;
