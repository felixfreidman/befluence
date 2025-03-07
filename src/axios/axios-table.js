import axios from "axios";

export default axios.create({
    baseURL: 'https://streamerapp-ce5cc-default-rtdb.europe-west1.firebasedatabase.app/'
})