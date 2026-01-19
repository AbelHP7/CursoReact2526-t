import { API_CONFIG, type Plato } from "../types";

export const fetchPlatos = async ():Promise<Plato[]> => {
    const url = `${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.PLATOS}`;
    try{
        const response = await fetch(url);
        if(!response.ok){
            throw new Error(`Error fetching platos: ${response.statusText}`);
        }
        return await response.json();
    }
        catch(error){
            console.error("Fetch error: ", error);
            throw error;
        }
    throw new Error("Unreachable code");
}