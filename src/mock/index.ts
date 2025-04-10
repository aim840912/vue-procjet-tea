import Mock from "mockjs"

Mock.setup({
    timeout: "200-600" //設置延遲時間
})
const menulist = [
    {
        name: "首頁",
        url: "/dashboard",
        icon: "DataLine"
    },
    {
        name: "所有產品",
        url: "/product/all",
        icon: "Lightning",
    },
    {
        name: "位置",
        url: "/appearmap",
        icon: "MapLocation"
    },
    // {
    //     name: "產品詳情",
    //     url: "/product/detail",
    //     icon: "Files",
    // },
    {
        name: "個人",
        url: "/personal",
        icon: "Phone"
    },
    {
        name: "產品管理",
        url: "/product/edit",
        icon: "Magnet"
    },
    {
        name: "新增產品",
        url: "/addproduct",
        icon: "Document"
    }, {
        name: "管理產品",
        url: "/manageproduct",
        icon: "Document"
    }
]
const menulistforcustome = [
    {
        name: "dashboard",
        url: "/dashboard",
        icon: "DataLine"
    },
    {
        name: "product",
        url: "/product",
        icon: "Lightning",
    },
    {
        name: "appearmap",
        url: "/appearmap",
        icon: "MapLocation"
    },
    {
        name: "detail",
        url: "/product/detail",
        icon: "Files",
    }
]

Mock.mock("https://www.demo.com/login", "post", (options: any) => {
    const { username, password } = JSON.parse(options.body);

    if (username === "admin" && password === "admin") {
        return {
            code: 200,
            message: "登入成功",
            data: {
                token: "admintokenkkljbuo2w9xla2",
                user: {
                    username: "最高權限的人",
                    roles: ["admin"],
                },
                menulist,
                carts: ["123", "456", "789"],
                products: ["111", "222", "333"],
            }
        }
    } else if (username === "custome" && password === "custome") {
        return {
            code: 200,
            message: "登入成功",
            data: {
                token: "usertokenkkljbuo2w9xla2",
                user: {
                    username: "遊客",
                    roles: ["custome"]
                },
                menulist: menulistforcustome,
                carts: ["123"]

            }
        }
    } else {
        return {
            code: 401,
            message: "帳號或密碼有錯誤"
        }
    }
})


Mock.mock("https://www.demo.com/product/edit", 'post', (options: any) => {
    const res: any = JSON.parse(options.body);
    console.log("新增/編輯接口收到數據：", res)
    return {
        code: 200,
        success: true,
        data: {
            orderNo: res.orderNo,
            price: 100,
            category: "茶類",
            title: "綠茶包",
            content: "這是綠茶包的內容",
            image: tea,
        },
    };
});

Mock.mock("https://www.demo.com/product/delete", "post", (options: any) => {
    console.log("刪除接口收到參數", JSON.parse(options.body))
    return {
        code: 200,
        success: true,
        data: "操作成功",
    };
})

Mock.mock('https://www.demo.com/product', "post", (options: any) => {
    const { pageSize, title, category, price } = JSON.parse(options.body);

    return {
        code: 200,
        message: "成功",
        data: Mock.mock({
            [`list|${pageSize}`]: [{
                'orderNo': '@string("number",3)',
                'date': '@date("yyyy-MM-dd")',
                'startTime': '08:00:23',
                'endTime': '09:10:11',
                'price|1': function () { return price != 0 ? specificPriceList(price)[Math.floor(Math.random() * specificPriceList(price).length)] : priceList[Math.floor(Math.random() * priceList.length)]; },
                'category': function () { return category != "" ? category : categoryList[Math.floor(Math.random() * categoryList.length)]; },
                'title|1': function () { return title != "" ? specificList(title)[Math.floor(Math.random() * specificList(title).length)] : productList[Math.floor(Math.random() * productList.length)]; },
                'content|1': ["這是綠茶茶包的內容", "這是綠茶茶葉的內容", "這是綠茶禮盒的內容", "這是紅茶茶包的內容", "這是紅茶茶葉的內容", "這是紅茶禮盒的內容", "這是咖啡豆的內容", "這是咖啡包的內容", "這是紅肉李的內容"],
                'image|1': [fruit, fruit2, tea, tea2, teabag],
            }],
            "total": 50,
        })
    }
})

const productList = ["綠茶包", "綠茶葉", "綠茶禮盒", "紅茶包", "紅茶葉", "紅茶禮盒", "咖啡豆", "咖啡包", "紅肉李"];
const priceList = [100, 200, 300];
const categoryList = ["茶類", "咖啡類", "果園"];

const specificList = (specificItem: string) => productList.filter((word) => word.includes(specificItem));
const specificPriceList = (specificItem: number) => priceList.filter((word) => word >= specificItem);



Mock.mock('https://www.demo.com/product/detail', "post", (options: any) => {
    const { orderNo } = JSON.parse(options.body);
    console.log("產品列表接口收到參數", JSON.parse(options.body))
    return {
        code: 200,
        message: "成功",
        data: Mock.mock({
            'orderNo': `${orderNo}`,
            'price|1': [100, 200, 300],
            'category|1': ["茶類", "咖啡類", "果園"],
            'title|1': ["綠茶包", "綠茶葉", "綠茶禮盒", "紅茶包", "紅茶葉", "紅茶禮盒", "咖啡豆", "咖啡包", "紅肉李"],
            'content|1': ["這是綠茶茶包的內容", "這是綠茶茶葉的內容", "這是綠茶禮盒的內容", "這是紅茶茶包的內容", "這是紅茶茶葉的內容", "這是紅茶禮盒的內容", "這是咖啡豆的內容", "這是咖啡包的內容", "這是紅肉李的內容"],
            'image': [fruit, fruit2, tea, tea2, teabag],
        })
    }
})

import fruit from "@/assets/picture/fruit.jpg";
import fruit2 from "@/assets/picture/fruit2.jpg";
import tea from "@/assets/picture/tea.jpg";
import tea2 from "@/assets/picture/tea2.jpg";
import teabag from "@/assets/picture/teabag.jpg";



