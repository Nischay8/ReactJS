const API_KEY="14653b64";
const BASE_URL="https://www.omdbapi.com/";

export const getSearchMovies=async (query)=>{
    const response=await fetch(`${BASE_URL}/?apikey=${API_KEY}&s=${query}`);
    const data= await response.json();
    return data['Search'];
};


