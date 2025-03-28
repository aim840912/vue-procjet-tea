

import type { RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
    {
        path: "/",
        name: "Home",
        component: () => import("@/layouts/DefaultLayout.vue"),
        redirect: "/dashboard",
        children: [
            {
                path: "/dashboard",
                name: "Dashboard",
                component: () => import("@/views/DashBoard.vue")
            },
            {
                path: "/personal",
                name: "Personal",
                component: () => import("@/views/Personal.vue"),

            },
            {
                path: "/shop",
                name: "Shop",
                component: () => import("@/views/Shop.vue"),
            },
            {
                path: "/appearmap",
                name: "Appearmap",
                component: () => import("@/views/AppearMap.vue"),
            },
            {
                path: "/contact",
                name: "Contact",
                component: () => import("@/views/Contact.vue"),
            },
            {
                path: "/addproduct",
                name: "Addproduct",
                component: () => import("@/views/AddProduct.vue"),
            }
        ]
    },
    {
        path: "/login",
        name: "Login",
        component: () => import("@/views/Login.vue"),
    },
    {
        path: "/signup",
        name: "Signup",
        component: () => import("@/views/SignUp.vue"),
    },
    {
        path: "/:pathMatch(.*)*",
        name: "NotFound",
        component: () => import("@/views/NotFound.vue"),
    }

];

export default routes;


