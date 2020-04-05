import * as axios from 'axios'
const instance = axios.create({
  withCredentials: true,
  timeout: 1000,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "eb4884d1-22a9-4753-b224-5ea5fc049f6e"
  }
})

export const userApi = {
  getUsers: () => instance.get(`users`),
  getCurrentPAge: (number) => instance.get(`users?page=` + number),
  followStatus: (userid) => instance.get("follow/" + userid),
  followSuccess: (userid) => instance.post("follow/" + userid),
  unFollowSuccess: (userid) => instance.delete("follow/" + userid),
}
export const profileApi = {
  getProfile: (userid) => instance.get("profile/" + userid),
  editStatus: (status) => instance.put("profile/status",{status}),
  getStatus: (userId) => instance.get("profile/status/"+userId)
}

export const authApi = {
  getAuthStatus: () => instance.get("auth/me"),
  auth:(email,password) => instance.post("/auth/login",{email,password}),
  logOut:() => instance.delete("/auth/login")
}



export default userApi;
