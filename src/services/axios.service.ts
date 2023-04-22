import axios from "axios";
import {baseURL} from "../interfaces/urls";

const axiosService = axios.create({baseURL});

export {
    axiosService
}