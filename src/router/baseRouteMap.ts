

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
                name: "dashboard",
                component: () => import("@/views/DashBoard.vue")
            },
            {
                path: "/personal",
                name: "personal",
                component: () => import("@/views/Personal.vue"),

            },
            {
                path: "/product/detail",
                name: "detail",
                component: () => import("@/views/Detail.vue"),
                props(route) { return route.query }
            },
            {
                path: "/product/all",
                name: "allproduct",
                component: () => import("@/views/Product.vue"),

                meta: { keepAlive: true }
            },
            {
                path: "/product/edit",
                name: "edit",
                component: () => import("@/views/EditProduct.vue"),
            },
            {
                path: "/manageproduct",
                name: "manageproduct",
                component: () => import("@/views/ManageProduct.vue"),
            },
            {
                path: "/appearmap",
                name: "appearmap",
                component: () => import("@/views/AppearMap.vue"),
            },
            {
                path: "/contact",
                name: "contact",
                component: () => import("@/views/Contact.vue"),
            },
            {
                path: "/addproduct",
                name: "addproduct",
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


