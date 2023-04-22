import {Ires} from "../types/axiosRes.type";
import {IUser} from "../interfaces/user.interface";
import {axiosService} from "./axios.service";
import {urls} from "../interfaces/urls";

const userService = {
    getAll: (): Ires<IUser[]> => axiosService.get(urls.users.users),
    getById: (id: string): Ires<IUser> => axiosService.get(urls.users.byId(id))
}

export {
    userService
}