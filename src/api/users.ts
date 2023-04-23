import axios, {AxiosResponse} from "axios";


const BASE_URL = `http://localhost:3004`

const basicAuth = 'Basic admin:qwerty';

export interface IUser {
    id: string;
    login: string;
    email: string;
    createdAt: string;
}
interface GetUsersResponse {
    items: IUser[];
    pagesCount: number;
    page: number;
    pageSize: number;
    totalCount: number;
}

export const getUsers = async (): Promise<AxiosResponse<GetUsersResponse>> => {
    return await axios.get<GetUsersResponse>(`${BASE_URL}/users`, {headers: {'Authorization': 'Basic YWRtaW46cXdlcnR5'}})
}

export const registerUser = async (email: string, login: string, password: string) => {
    return await axios.post(`${BASE_URL}/users`, {login, email, password}, {headers: {'Authorization': 'Basic YWRtaW46cXdlcnR5'}})
}