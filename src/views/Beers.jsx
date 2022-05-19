import { useState, useEffect } from "react";
import { getBeers } from "../sevices";

const Beers = () => {
  const [beers, setBeers] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    const loadData = () => loadBeers();
    loadData();
  }, []);

  const filterData = (e) => setFilter(e.target.value.toUpperCase());

  const loadBeers = async (e) => {
    try {
      const beers = await getBeers();

      setBeers(beers);
    } catch (error) {
      console.error("error", e);
    }
  };

  return (
    <div className="beer">
      <input
        className="toolBar"
        placeholder="SEARCH HERE"
        type="text"
        onChange={filterData}
        value={filter}
      ></input>
      <div>
        {beers
          .filter((beer) => beer.filterName.includes(filter))
          .map((beer) => (
            <div key={beer.id}>
              <p>{beer.name}</p> <p>{beer.description}</p>
              <img alt={beer.name} src={beer.image_url} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Beers;
