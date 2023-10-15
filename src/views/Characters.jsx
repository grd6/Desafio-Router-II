import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Characters = () => {
  const { name } = useParams();
  const [pokemones, setPokemones] = useState([]);

  const data_Url = "https://pokeapi.co/api/v2/pokemon";

  const getChatacters = async (name) => {
    try {
      const response = await axios.get(`${data_Url}/${name}`);
      console.log(response);
      if (response.status !== 200) {
        throw new error("No hay Data que mostrar");
      }
      const r = response.data;
      console.log(r);

      const src = r.sprites.other.dream_world.front_default;
      console.log(src);
      const stats = r.stats.map((s) => ({
        name: s.stat.name,
        base: s.base_stat,
      }));
      console.log(stats);
      const type = r.types.map(({ type }) => type.name).join('');
      setPokemones({ name, stats, src, type });
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    getChatacters(name);
  }, [name]);

  return (
    <>
    <div className="d-flex justify-content-center p-3 mt-5">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={pokemones.src} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            {pokemones.stats?.map((stat,i)=>(
              <li key={i}>
                {stat.name}:{stat.base}
              </li>
            ))}
          </Card.Text>
          <Card.Text><strong>Tipo: {pokemones.type}</strong></Card.Text>
    
        </Card.Body>
      </Card>
      </div>
    </>
  );
};

export default Characters;
