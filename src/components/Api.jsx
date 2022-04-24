import React, { useState, useEffect } from "react";
import Api_navbar from "./pokemon/Api_navbar";
import axios from "axios";
import Card from "./pokemon/Card";

const Api = () => {
  const [pokeData, setPokeData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/");
  //when we get the response, we also get link for next url in promise
  const [nextUrl, setNextUrl] = useState();
  const [prevUrl, setPrevUrl] = useState();

  const pokeFun = async () => {
    setLoading(true);
    const response = await axios.get(url); //we also get url for next page from here
    // console.log(response.data);

    //we get both of these value from api (promise)
    setNextUrl(response.data.next);
    setPrevUrl(response.data.previous);
    getPokemon(response.data.results); //results stores data of all pokemon
    setLoading(false);
    // console.log(pokeData);
  };

  //we used async because all of these code should be asynchronous
  const getPokemon = async (data) => {
    data.map(async (item) => {
      const result = await axios.get(item.url); //this will store url of each pokemon now
      setPokeData((state) => {
        //the data contains name and url of the pokemon and it will be saved in state array
        state = [...state, result.data];
        let unique = [...new Set(state)]; //this will remove duplicate pokemons
        return unique; //setPokeData will return the state array which has data of pokemon
      });
    });
  };

  useEffect(() => {
    pokeFun();
  }, [url]); //it will re-render the DOM when there is change in url

  return (
    <>
      <Api_navbar />
      <Card pokemon={pokeData} loading={loading} />
    </>
  );
};

export default Api;
