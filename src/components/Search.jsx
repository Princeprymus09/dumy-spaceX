import axios from "axios";
import { useState } from "react";

import Toggle from "react-toggle"

const Search = () => {
  const [inputdata, setInputdata] = useState("");
  const [result, setResult] = useState();

  const handleChange = async () => {
    try {
      let response = await axios.post(
        "https://api.spacexdata.com/v4/launches/query",
        {
          query: {
            name: inputdata,
          },
        }
      );
      setResult(response.data.docs);
    } catch (error) {
      console.log("eroor while fetching data", error);
    }
  };

  return (
    <>
      <input
        type="text"
        placeholder="search"
        onChange={(e) => setInputdata(e.target.value)}
      />

      <button onClick={handleChange}>Search</button>

      {
        <section>
          <div className="left">
            <h1>Name:{curr_item.name}</h1>
            <h3>First Flight-{curr_item.first_flight}</h3>
            <p>{curr_item.description}</p>
          </div>
          {/* <div className="right">
            <img src={curr_item.flickr_images?.[0]} />
          </div> */}
        </section>
      }
      <label>
        <Toggle
          defaultChecked={this.state.tofuIsReady}
          icons={false}
          onChange={this.handleTofuChange}
        />
        <span>No icons</span>
      </label>
    </>
  );
};

export default Search;
