import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {type IconProp } from '@fortawesome/fontawesome-svg-core';

interface FooterProps{
    logo: IconProp,
    title:string,
    description:string
}


const LoginFooterLogo=({logo,title,description}:FooterProps):React.ReactNode=>{


    return<>
        <div className="flex flex-col items-center w-[30%] gap-2 p-3">
            <div><FontAwesomeIcon size="lg" icon={logo} style={{color: "#6366f1",}} /></div>
            <div>
                <p className="text-sm font-bold">{title}</p>
            </div>
            <div className="w-full">
                <p className="text-sm max-w-xs text-center">{description}</p>
            </div>
        </div>
    
    </>
}

export default LoginFooterLogo;