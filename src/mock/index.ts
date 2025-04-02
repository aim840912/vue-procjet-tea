import Mock from "mockjs"

Mock.setup({
    timeout: "200-600" //設置延遲時間
})
const menulist = [
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
    },
    {
        name: "personal",
        url: "/personal",
        icon: "Phone"
    },
    {
        name: "contact",
        url: "/contact",
        icon: "Magnet"
    },
    {
        name: "addproduct",
        url: "/addproduct",
        icon: "Document"
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
                menulist

            }
        }
    } else if (username === "custome" && password === "custome666") {
        return {
            code: 200,
            message: "登入成功",
            data: {
                token: "usertokenkkljbuo2w9xla2",
                user: {
                    username: "普通路人",
                    roles: ["user"]
                },
                menulist

            }
        }
    } else {
        return {
            code: 401,
            message: "帳號或密碼有錯誤"
        }
    }
})

// 新增產品
Mock.mock("https://www.demo.com/product/edit", 'post', (options: any) => {
    const res: any = JSON.parse(options.body);
    console.log("新增/編輯接口收到數據：", res)
    return {
        code: 200,
        success: true,
        data: "操作成功",
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

Mock.mock('https://www.demo.com/productList', "post", (options: any) => {
    const { pageSize } = JSON.parse(options.body);
    console.log("產品列表接口收到參數", JSON.parse(options.body))
    return {
        code: 200,
        message: "成功",
        data: Mock.mock({
            [`list|${pageSize}`]: [{
                'orderNo': '@string("number",3)',
                'date': '@date("yyyy-MM-dd")',
                'startTime': '08:00:23',
                'endTime': '09:10:11',
                'money|1': [100, 200, 300],
                'category|1': ["茶類", "咖啡類", "果園"],
                'title|1': ["綠茶包", "綠茶葉", "綠茶禮盒", "紅茶包", "紅茶葉", "紅茶禮盒", "咖啡豆", "咖啡包", "紅肉李"],
                'content|1': ["這是綠茶茶包的內容", "這是綠茶茶葉的內容", "這是綠茶禮盒的內容", "這是紅茶茶包的內容", "這是紅茶茶葉的內容", "這是紅茶禮盒的內容", "這是咖啡豆的內容", "這是咖啡包的內容", "這是紅肉李的內容"],
                'image|1': [fruit, fruit2, tea, tea2, teabag],
            }],
            "total": 50,
        })
    }
})
import fruit from "@/assets/picture/fruit.jpg";
import fruit2 from "@/assets/picture/fruit2.jpg";
import tea from "@/assets/picture/tea.jpg";
import tea2 from "@/assets/picture/tea2.jpg";
import teabag from "@/assets/picture/teabag.jpg";

const productList = [
    {
        category: "茶類",
        children: [
            {
                title: "綠茶包",
                price: 100,
                content: "這是綠茶茶包的內容",
            },
            {
                title: "綠茶葉",
                print: 200,
                content: "這是綠茶茶葉的內容",
            },
            {
                title: "綠茶禮盒",
                print: 300,
                content: "這是綠茶禮盒的內容",
            },
            {
                title: "紅茶包",
                price: 100,
                content: "紅這是紅茶茶包的內容",
            },
            {
                title: "紅茶葉",
                print: 200,
                content: "這是紅茶茶葉的內容",
            },
            {
                title: "紅茶禮盒",
                print: 300,
                content: "這是紅茶禮盒的內容",
            }


        ]
    },
    {
        category: "咖啡類",
        children: [
            {
                title: "咖啡豆",
                print: 200,
                content: "這是咖啡豆的內容",
            },
            {
                title: "咖啡包",
                print: 200,
                content: "這是咖啡包的內容",
            },
        ]
    },
    {
        category: "果園",
        children: [
            {
                label: "紅肉李",
                print: 200,
                content: "這是紅肉李的內容",
            }

        ]
    }
]


