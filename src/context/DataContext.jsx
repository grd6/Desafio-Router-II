import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const DataContext = createContext();

const data_Url = "https://pokeapi.co/api/v2/pokemon";

const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);
  
  const getData = async () => {
    try {
      const response = await axios.get(data_Url);
      console.log(response);
      if (response.status !== 200) {
        throw new error("No hay Data que mostrar");
      }
      const  data = response.data;
      console.log(data);
      setData(data)
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <DataContext.Provider
      value={{
        data,
        setData,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
