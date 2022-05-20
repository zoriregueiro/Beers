import { useParams } from "react-router-dom";

function Detalles() {
  const { id } = useParams();
  return <div> detalles {id} </div>;
}

export default Detalles;
