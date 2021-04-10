import * as http from '../utils/http'

export const userLogin = (values: {}) => {
    return http.post("login", values)
}