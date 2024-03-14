import axios from "axios";
import { apiUrl } from "../constants/apiConstant"

export const checkUser = async (userInfo) => {
    try {
        // on récupère l'utilisateur dans la bdd avec l'id en session
        const response = await axios.get(`${apiUrl}/users/${userInfo.userId}`);
        const user = response.data;
        // maintenant on compare les données de la bdd avec celles en session
        if (user.email === userInfo.email && user.nickname === userInfo.nickname) {
            return true;
        } else {
            return false;
        }
    } catch (error) {
        console.log(`erreur lors du checkUser : ${error}`)
        return false;
    }
}