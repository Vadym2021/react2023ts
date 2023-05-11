import {Ires} from "../types";
import {ICar} from "../interfaces";
import {axiosService} from "./axios.service";
import {urls} from "../constants";

const carService = {
    getAll: (): Ires<ICar[]> => axiosService.get(urls.cars.cars),
    create: (car: ICar): Ires<ICar> => axiosService.post(urls.cars.cars, car),
    updateBuId: (id: number, car: ICar): Ires<ICar> => axiosService.put(urls.cars.byId(id), car),
    deleteById: (id: number): Ires<void> => axiosService.delete(urls.cars.byId(id))
}

export {
    carService
}