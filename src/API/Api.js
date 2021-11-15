import * as axios from 'axios';


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers:{ 'API-KEY':'f3adaae2-5e62-462e-964c-9f3a722443c7'}
})


  export const userAPI = {

    getUsers (currentPage, pageSize) {
        return instance.get (`users?page=${currentPage}&count=${pageSize}`)
        .then (responce => {
            return responce.data;
        });
    },

    AddDelFriend (followed, id) {
        if (followed) {
            return instance.delete(`follow/${id}`)
            .then (responce => {
                return responce.data;
            });
        } else if (followed == false) {
            return instance.post(`follow/${id}`)
            .then (responce => {
                return responce.data;
            });
        }
    },

    AuthMe () {
        return instance.get (`auth/me`)
        .then (responce => {
            return responce.data;
        });
    },
    
    login (email, password, rememberMe = false) {
        return instance.post(`auth/login`, {email, password, rememberMe});
    },

    logout () {
        return instance.delete(`auth/login`);
    },

    getProfile (userId) {
        return instance.get(`profile/` + userId)
    },

    getStatus (userId) {
        return instance.get(`profile/status/` + userId);
    },

    updateStatus (status) {
        return instance.put(`profile/status/`, {status: status});
    }

  }
