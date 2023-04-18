import {axiosService, Ires} from "./axios.service";
import {urls} from "../configs/urls";
import {ICar} from "../interfaces/car.interface"

const  carService = {
    getAll:():Ires<ICar> => axiosService.get(urls.cars),
    create:(car:ICar):Ires<ICar> => axiosService.post(urls.cars, car),
    getById:(id:ICar) => axiosService.get(`${urls.cars}/${id}`),
    updateById:(id:number,car:ICar):Ires<ICar> => axiosService.put(`${urls.cars}/${id}`, car),
    deleteById:(id:number):Ires<ICar> => axiosService.delete(`${urls.cars}/${id}`)
}

export {
    carService
}