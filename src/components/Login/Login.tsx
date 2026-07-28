import React from "react"
import LoginDesign from "./LoginDesign"
import LoginForm from "./LoginForm"

const Login=():React.ReactNode=>{
    return <>
        <div className="h-screen p-2 text-white bg-[#F7F5F5]">
            <div className="flex h-full rounded-lg overflow-hidden">
                <div className="basis-[45%] bg-[#01081C] pl-8 pt-4">
                    <LoginDesign />
                </div>
                <div className="basis-[55%] bg-white text-black">
                    <LoginForm/>
                </div>

            </div>
        </div>
    </>
}

export default Login;