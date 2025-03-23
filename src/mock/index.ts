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