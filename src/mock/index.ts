import Mock from "mockjs"

Mock.setup({
    timeout: "200-600" //設置延遲時間
})

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
const productList = [
    {
        label: "茶類",
        children: [
            {
                label: "綠茶",
                children: [
                    { label: "茶包" },
                    { label: "茶葉" },
                    { label: "禮盒" },
                ]
            },
            {
                label: "紅茶",
                children: [
                    { label: "茶包" },
                    { label: "茶葉" },
                    { label: "禮盒" },
                ]
            }

        ]
    },
    {
        label: "咖啡類",
        children: [
            {
                label: "重",
                children: [
                    { label: "咖啡豆" },
                    { label: "咖啡包" },
                ]
            }, {
                label: "輕",
                children: [
                    { label: "咖啡豆" },
                    { label: "咖啡包" },
                ]
            }
        ]
    },
    {
        label: "果園",
        children: [
            {
                label: "觀光",
                children: [
                    { label: "紅肉李" }
                ]
            }, {
                label: "購買",
                children: [
                    { label: "紅肉李" }
                ]
            }
        ]
    }
]


Mock.mock('https://www.demo.com/productList', "get", () => {
    return {
        code: 200,
        message: "操作成功",
        data: productList
    }
})
