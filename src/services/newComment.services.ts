import { INewComment } from "../interfaces/INewComment";

export const newComent = async(comment:INewComment) =>{
    // eslint-disable-next-line no-useless-catch
    try{
        const response = await fetch(`${import.meta.env.VITE_COMMENTS_POST}`, {
            method: "POST",
            headers: {
                "apikey": `${import.meta.env.VITE_COMMENTS_APIKEY}`,
                "Content-Type": "application/json",
                "Authorization": `${import.meta.env.VITE_COMMENT_AUTHORIZATION}`
            },
            body: JSON.stringify(comment)      
        });

        const data = await response.json();
        return data;

    }catch(error){
        console.log("aaaaah")
        throw error;
    }
}