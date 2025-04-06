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
        carts: sessionStorage.getItem("carts") ? JSON.parse(sessionStorage.getItem("carts")!) : [],
    }),
    actions: {
        async login(data: LoginParams) {
            try {
                // console.log(data.username)
                const { data: { token, user: { username, roles }, menulist, carts } } = await loginApi(data);
                this.token = token;
                this.roles = roles;
                this.username = username;
                this.menu = menulist;
                this.carts = carts;
                sessionStorage.setItem("token", token);
                sessionStorage.setItem("roles", JSON.stringify(roles))
                sessionStorage.setItem("username", username)
                sessionStorage.setItem("menu", JSON.stringify(menulist))
                sessionStorage.setItem("carts", JSON.stringify(carts))
            } catch (error) {
                console.log("登入失敗", error)
            }
        },
        logout() {
            this.token = ""
            this.roles = [];
            this.username = ""
            this.menu = [];
            this.carts = [];
            sessionStorage.clear()
        },
        addProduct(product: string) {
            const existingProduct = this.carts.find((item: any) => item === product);
            if (existingProduct) {
                return
            } else {
                this.carts.push(product);
            }
            sessionStorage.setItem("carts", JSON.stringify(this.carts))
        },
        removeProduct(product: string) {
            const index = this.carts.findIndex((item: any) => item === product);
            if (index !== -1) {
                this.carts.splice(index, 1);
            }
            sessionStorage.setItem("carts", JSON.stringify(this.carts))
        },

    },


})