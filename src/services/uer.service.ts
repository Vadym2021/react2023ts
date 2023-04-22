import {IUser} from "../interfaces/user.interface";
import {placeAxiosService} from "./axios.service";
import {urls} from "../constants/urls";
import {IRes} from "../types/res.type";

const uerService = {
    getAll:():IRes<IUser> => placeAxiosService.get(urls.placeAPI.users),
    create:(user:IUser):IRes<IUser>=>placeAxiosService.post(urls.placeAPI.users,user)
}

export {
    uerService
}