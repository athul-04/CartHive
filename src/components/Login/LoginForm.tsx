
import React from "react"
import { Form, type ActionFunctionArgs,useActionData,NavLink } from "react-router-dom"
import {MailIcon, Lock } from "lucide-react"

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

    const actionData=useActionData<typeof formAction>()
    if(actionData) console.log(actionData)
    return <>
        <div className="flex flex-col items-center gap-5 pl-[5%]">
            <div className="w-full flex justify-end mt-[4%] pr-[4%]">
                <p className=""> New here? <NavLink to=""><span className="text-brand-primary">Create Account</span></NavLink></p>
            </div>

            <div className="w-full mt-9">
                <h2 className="text-3xl font-bold">Welcome back</h2>
                <p className="text-[#A6A4A4]">Login to your account to continue</p>

            </div>
        
            <Form method="POST">
                <Field className="max-w-sm">
                    <FieldLabel htmlFor="email">Email address</FieldLabel>
                    <InputGroup className="rounded-none">
                        <InputGroupInput type="email" id="email" placeholder="Enter your email" />
                        <InputGroupAddon>
                            <MailIcon />
                        </InputGroupAddon>
                    </InputGroup>
                </Field>
                <Field className="max-w-sm">
                    <FieldLabel htmlFor="password">Password</FieldLabel>
                    <InputGroup>
                        <InputGroupInput
                            id="password"
                            type="password"
                            placeholder="Enter your password"
                        />
                        <InputGroupAddon>
                            <Lock />
                        </InputGroupAddon>
                    </InputGroup>
                </Field>
                <input type="checkbox" id="remember" name="remember"/>
                <label htmlFor="remember">Remember Me</label>
                <button type="submit">Login</button>
            </Form>

            <NavLink to="">Forgot Password</NavLink>

        </div>
        
    
    </>
}

export default LoginForm;


export const formAction = async ({ request,params }:ActionFunctionArgs) => {
  const formData = await request.formData();
  const entries=Object.fromEntries(formData)
  return entries
}