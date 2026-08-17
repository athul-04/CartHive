
import React from "react"
import { Form, redirect, type ActionFunctionArgs,useActionData,NavLink } from "react-router-dom"
import {MailIcon, Lock,Eye,EyeOff } from "lucide-react"
import {useState} from "react"

import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "../ui/input-group"

import {
  Field,
  FieldDescription,
  FieldLabel,
} from "@/components/ui/field"
const LoginForm=():React.ReactNode=>{

    const [show,setShow]=useState<boolean>(false)

    const actionData=useActionData<typeof formAction>()
    if(actionData) console.log(actionData)

        
    return <>
        <div className="flex flex-col items-start gap-5 pl-[10%] pr-[8%]">
            <div className="w-full flex justify-end mt-[4%] pr-[4%]">
                <p className=""> New here? <NavLink to=""><span className="text-brand-primary">Create Account</span></NavLink></p>
            </div>

            <div className="w-full mt-9">
                <h2 className="text-3xl font-bold">Welcome back</h2>
                <p className="text-[#A6A4A4]">Login to your account to continue</p>

            </div>
        
            <div className="w-[80%]">
                <Form method="POST" >
                    <Field className="mb-5">
                        <FieldLabel htmlFor="email">Email address</FieldLabel>
                        <InputGroup className="">
                            <InputGroupInput type="email" id="email" placeholder="Enter your email" name="email" />
                            <InputGroupAddon >
                                <MailIcon />
                            </InputGroupAddon>
                        </InputGroup>
                    </Field>
                    <Field className="">
                        <FieldLabel htmlFor="password">Password</FieldLabel>
                        <InputGroup>
                            <InputGroupInput
                                id="password"
                                type={show?"text":"password"}
                                placeholder="Enter your password"
                                name="password"
                            />
                            <InputGroupAddon>
                                <Lock />
                            </InputGroupAddon>
                            <InputGroupAddon align="inline-end" className="cursor-pointer" onClick={()=>setShow(!show)}>
                                {show ? <Eye/>:<EyeOff/>}
                            </InputGroupAddon>

                        </InputGroup>
                    </Field>
                    <div className="flex justify-between mt-4">
                        <div>
                            <input type="checkbox" id="remember" name="remember"/>
                            <label className="m-2" htmlFor="remember">Remember Me</label>
                        </div>
                        <div>
                            <NavLink to="">Forgot Password</NavLink>
                        </div>
                    </div>
                    <div className="flex justify-center w-full mt-5 h-10">
                        <button className="rounded-lg border-2 w-full bg-brand-primary text-white" type="submit">Login</button>
                    </div>
                </Form>
            </div>

            <div className="w-[80%] text-center mt-8 text-bold">
                <p className="text-[#A6A4A4]">By continuing, you agree to our <span className="text-brand-primary">Terms of Service</span><br/> and <span className="text-brand-primary">Privacy Policy</span></p>
            </div>

        </div>
        
    
    </>
}

export default LoginForm;


export const formAction = async ({ request,params }:ActionFunctionArgs) => {
  const formData = await request.formData();
  
  const entries=Object.fromEntries(formData);
  if (Object.keys(entries).length==0){
    return null
  }
  
  return redirect("/homepage")
}