import { ISpotify } from "../interfaces/spotify.interfaces";

const options =  {
	method: 'GET',
	headers: {
		'x-rapidapi-key': `${import.meta.env.VITE_X_RAPIDAPI_KEY}`,
		'x-rapidapi-host': `${import.meta.env.VITE_RAPIDAPI_HOST}`
	}
};


export const getSpotify = async (type:string) => {
    try {
        const response = await fetch(`https://spotify23.p.rapidapi.com/search/?q=test&type=${type}&offset=0&limit=20&numberOfTopResults=5`, options);
        const data:ISpotify = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
}
