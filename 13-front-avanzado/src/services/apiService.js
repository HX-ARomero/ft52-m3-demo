import axios from "axios";

let API_URL = "https://rickandmortyapi.com/api/";

const apiService = axios.create({
  baseURL: API_URL,
});

export let getCharacters = async () => {
  try {
    const response = await apiService.get("character");
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export let getLocations = async () => {
  try {
    let response = await apiService.get("location");
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export let getEpisodes = async () => {
  try {
    let response = await apiService.get("episode");
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};
