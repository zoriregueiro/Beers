import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getBeer } from "../sevices";

function Detalles() {
  const { id } = useParams();

  const [beer, setBeer] = useState({});

  useEffect(() => {
    const loadData = () => loadBeer(id);
    loadData();
  }, [id]);

  const loadBeer = async (e) => {
    try {
      const beer = await getBeer(e);

      setBeer(beer);
    } catch (error) {
      console.error("error", e);
    }
  };

  return (
    <div className="beer">
      <div>
        <div key={beer.id}>
          <p>{beer.name}</p> <p>{beer.description}</p>
          <img alt={beer.name} src={beer.image_url} />
        </div>
      </div>
    </div>
  );
}

export default Detalles;
