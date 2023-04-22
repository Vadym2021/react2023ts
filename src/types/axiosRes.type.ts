import {AxiosResponse} from "axios";

export type Ires<T> = Promise<AxiosResponse<T>>