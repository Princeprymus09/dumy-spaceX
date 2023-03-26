import { fetchData } from "../services/api";
import { useEffect, useState } from "react";

const Launch = () => {
  const [launch, setLaunch] = useState([]);

  useEffect(() => {
    (async () => {
      const result = await fetchData("https://api.spacexdata.com/v3/launches");
      console.log(result);
      setLaunch(result.data);
    })();
  }, []);

  const defalutImg =
    "https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80";
  return (
    //mission_name
    //mission_succes
    //missin_details
    //mission_imgs
    //mission_date

    <>
      {launch.map((curr_item, index) => (
        <section className="section-1" key={curr_item.mission_name}>
          <div className="left">
            <h1>Name:{curr_item.mission_name}</h1>
            <h3>Launch date-{curr_item.launch_date_local}</h3>
            <p>{curr_item.details}</p>
          </div>
          <div className="right">
            <img src={curr_item.links.flickr_images?.[0] || defalutImg} />
          </div>
        </section>
      ))}
    </>
  );
};
export default Launch;
