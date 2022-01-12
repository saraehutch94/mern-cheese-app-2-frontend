import { useState } from "react";
import { Link } from "react-router-dom";

function Index(props) {
  const [formData, setFormData] = useState({
    variety: "",
    flavor: "",
    origin: "",
    image: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    props.createCheese(formData);
    setFormData({
      variety: "",
      flavor: "",
      origin: "",
      image: "",
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const loaded = () => {
    return (
      <div className="loaded">
        {props.mainState.map((cheese) => {
          return (
            <div className="cheese" key={cheese._id}>
              <Link to={`/cheese/${cheese._id}`}>
                <h3>{cheese.variety}</h3>
              </Link>
            </div>
          );
        })}
      </div>
    );
  };

  const loading = () => {
    return <h1>Loading...</h1>;
  };

  return (
    <div className="index">
      <form onSubmit={handleSubmit}>
        <label>
          Variety:
          <input
            type="text"
            name="variety"
            value={formData.variety}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Flavor:
          <input
            type="text"
            name="flavor"
            value={formData.flavor}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Origin:
          <input
            type="text"
            name="origin"
            value={formData.origin}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Image:
          <input
            type="text"
            name="image"
            value={formData.image}
            onChange={handleChange}
          />
        </label>
        <br />
        <input type="submit" value="Create Cheese" />
      </form>
      {props.mainState ? loaded() : loading()}
    </div>
  );
}

export default Index;
