import { useState } from "react";

function Show(props) {
  const id = props.match.params.id;
  const cheese = props.cheese;
  const foundCheese = cheese.find((c) => c._id === id);

  const [newForm, setNewForm] = useState(foundCheese);

  const handleChange = (e) => {
    setNewForm({
      ...newForm,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.updateCheese(newForm, id);
    props.history.push("/cheese");
  };

  const handleClick = () => {
    props.deleteCheese(id);
    props.history.push("/cheese");
  };

  return (
    <div className="show-cheese">
      <h1>{foundCheese.variety}</h1>
      {foundCheese.flavor && <h2>{foundCheese.flavor}</h2>}
      {foundCheese.origin && <h2>{foundCheese.origin}</h2>}
      {foundCheese.image && (
        <img src={foundCheese.image} alt={foundCheese.variety} />
      )}
      <button onClick={handleClick}>Delete Cheese</button>
      <form onSubmit={handleSubmit}>
        <label>
          Variety:
          <input
            type="text"
            name="variety"
            value={newForm.variety}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Flavor:
          <input
            type="text"
            name="flavor"
            value={newForm.flavor}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Origin:
          <input
            type="text"
            name="origin"
            value={newForm.value}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Image:
          <input
            type="text"
            name="image"
            value={newForm.image}
            onChange={handleChange}
          />
        </label>
        <br />
        <input type="submit" value="Update Cheese" />
      </form>
    </div>
  );
}

export default Show;
