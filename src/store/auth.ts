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
        products: sessionStorage.getItem("products") ? JSON.parse(sessionStorage.getItem("products")!) : [],

    }),
    actions: {
        async login(data: LoginParams) {
            try {
                const { data: { token, user: { username, roles }, menulist, carts, products } } = await loginApi(data);
                this.token = token;
                this.roles = roles;
                this.username = username;
                this.menu = menulist;
                this.carts = carts;
                this.products = products;
                sessionStorage.setItem("token", token);
                sessionStorage.setItem("roles", JSON.stringify(roles))
                sessionStorage.setItem("username", username)
                sessionStorage.setItem("menu", JSON.stringify(menulist))
                sessionStorage.setItem("carts", JSON.stringify(carts))
                sessionStorage.setItem("products", JSON.stringify(products))
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
            this.products = [];
            sessionStorage.clear()
        },
        addToCarts(cart: string) {
            const existingCart = this.carts.find((item: any) => item === cart);
            if (existingCart) {
                return
            } else {
                this.carts.push(cart);
            }
            sessionStorage.setItem("carts", JSON.stringify(this.carts))
        },
        removeCart(cart: string) {
            const index = this.carts.findIndex((item: any) => item === cart);
            if (index !== -1) {
                this.carts.splice(index, 1);
            }
            sessionStorage.setItem("carts", JSON.stringify(this.carts))
        },

    },


})