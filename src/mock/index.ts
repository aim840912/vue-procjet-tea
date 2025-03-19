import Mock from "mockjs"

Mock.setup({
    timeout: "200-600" //设置延迟时间
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
    } else if (username === "user" && password === "user666") {
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