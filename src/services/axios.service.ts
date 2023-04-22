import axios, {AxiosResponse} from "axios";
import {baseURL} from "../configs/urls";
import {placeBaseURL, carsBaseURL} from "../constants/urls";

const placeAxiosService = axios.create({baseURL: placeBaseURL});
const carsAxiosService = axios.create({baseURL: carsBaseURL});


type Ires<T> = Promise<AxiosResponse>


export {
    placeAxiosService,
    carsAxiosService
}

export type {
    Ires
}
