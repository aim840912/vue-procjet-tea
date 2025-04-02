import { loginApi } from "@/api/user";
import { defineStore } from "pinia";

interface LoginParams {
    username: string,
    password: string,
}

export const useUserStore = defineStore('user', {
    state: () => ({
        token: sessionStorage.getItem('token') || null,
        roles: sessionStorage.getItem('roles') ? JSON.parse(sessionStorage.getItem('roles')!) : [],
        username: sessionStorage.getItem('username') || '',
        menu: sessionStorage.getItem("menu") ? JSON.parse(sessionStorage.getItem("menu")!) : [],
    }),
    actions: {
        async login(data: LoginParams) {
            try {
                console.log(data.username)
                const { data: { token, user: { username, roles }, menulist } } = await loginApi(data);
                this.token = token;
                this.roles = roles;
                this.username = username
                this.menu = menulist
                sessionStorage.setItem("token", token);
                sessionStorage.setItem("roles", JSON.stringify(roles))
                sessionStorage.setItem("username", username)
                sessionStorage.setItem("menu", JSON.stringify(menulist))
            } catch (error) {
                console.log("登入失敗", error)
            }
        },
        logout() {
            this.token = ""
            this.roles = [];
            this.username = ""
            this.menu = [];
            sessionStorage.clear()
        }
    }
})