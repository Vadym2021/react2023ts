import {carsAxiosService} from "./axios.service";
import {IRes} from "../types/res.type";
import {urls} from "../constants/urls";
import {ICar} from "../interfaces/car.interface"

const  carService = {
    getAll:():IRes<ICar[]> => carsAxiosService.get(urls.carAPI.cars),
    create:(car:ICar):IRes<ICar> => carsAxiosService.post(urls.carAPI.cars, car),
    getById:(id:ICar) => carsAxiosService.get(`${urls.carAPI.cars}/${id}`),
    updateById:(id:number,car:ICar):IRes<ICar> => carsAxiosService.put(urls.carAPI.byId(id), car),
    deleteById:(id:number):IRes<ICar> => carsAxiosService.delete(urls.carAPI.byId(id))
}

export {
    carService
}