import React, { useEffect, useState } from "react";
import { getCharacters, getEpisodes, getLocations } from "../services/apiService";

function useFetch(endpoint) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
       if(endpoint === "character") {
        let characters = await getCharacters();
        setData(characters);
       } else if (endpoint === "location") {
        let locations = await getLocations();
        setData(locations);
       } else if (endpoint === "episode") {
        let episodes = await getEpisodes();
        setData(episodes);
       }
      } catch (error) {
        setError(error);
      }
    };

    fetchData();
  }, [endpoint]);

  return { data, error };
}

export default useFetch;
