import React, { useEffect, useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Pokemones = () => {
  const [pokemones, setPokemones] = useState([]);
  const [pokemonOption, setpokemonOption] = useState("");
  const navigate = useNavigate();
  const data_Url = "https://pokeapi.co/api/v2/pokemon";
  const getData = async () => {
    try {
      const response = await axios.get(data_Url);
      console.log(response);
      if (response.status !== 200) {
        throw new error("No hay Data que mostrar");
      }
      setPokemones(response.data.results);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  const searchCharters = async () => {
    pokemonOption
      ? navigate(`/pokemones/${pokemonOption}`)
      : Swal.fire({
          title: "Error!",
          text: "aun no selecionas tu Pokemon",
          icon: "warning",
          timer: 3000,
        });
  };

  return (
    <div className="d-flex flex-column">
      <h3 className="d-flex justify-content-center p-3">
        Quien es ese Pokemon
      </h3>
      <div className="d-flex  justify-content-center mt-2">
        <div className="d-flex flex-column">
          <select
            value={pokemonOption}
            onChange={({ target }) => setpokemonOption(target.value)}
          >
            <option value="">Pokemon</option>
            {pokemones.map(({ name }, i) => (
              <option key={i} value={name}>
                {name}
              </option>
            ))}
          </select>
          <Button
            variant="primary"
            type="submit"
            className="mt-3"
            onClick={searchCharters}
          >
            Buscar
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Pokemones;
