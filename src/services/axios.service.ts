import axios, {AxiosResponse} from "axios";
import {baseURL} from "../configs/urls";

const axiosService = axios.create({baseURL});
type Ires<T> = Promise<AxiosResponse>


export {
    axiosService
}

export type {
    Ires
}
