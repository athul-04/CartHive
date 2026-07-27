import React from "react"
import { faHeadset } from "@fortawesome/free-solid-svg-icons";
import { faIndianRupeeSign } from "@fortawesome/free-solid-svg-icons";
import { faReceipt } from "@fortawesome/free-solid-svg-icons";
import LoginLogo from "../../assets/LoginLogoBackgroundRemoved.png"
import LoginFooterLogo from "./LoginFooterLogo"



const LoginDesign=():React.ReactNode=>{
    return <>
        <div className="flex flex-col gap-5">
            <div className="flex items-center gap-1 ml-1 mt-1">
                <div className="w-10 h-10">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path fill="#6366f1" d="M24 48C10.7 48 0 58.7 0 72C0 85.3 10.7 96 24 96L69.3 96C73.2 96 76.5 98.8 77.2 102.6L129.3 388.9C135.5 423.1 165.3 448 200.1 448L456 448C469.3 448 480 437.3 480 424C480 410.7 469.3 400 456 400L200.1 400C188.5 400 178.6 391.7 176.5 380.3L171.4 352L475 352C505.8 352 532.2 330.1 537.9 299.8L568.9 133.9C572.6 114.2 557.5 96 537.4 96L124.7 96L124.3 94C119.5 67.4 96.3 48 69.2 48L24 48zM208 576C234.5 576 256 554.5 256 528C256 501.5 234.5 480 208 480C181.5 480 160 501.5 160 528C160 554.5 181.5 576 208 576zM432 576C458.5 576 480 554.5 480 528C480 501.5 458.5 480 432 480C405.5 480 384 501.5 384 528C384 554.5 405.5 576 432 576z"/></svg>
                </div>
                <h2 className="font-bold">Cart<span className="text-brand-primary">Hive</span></h2>
            </div>
            <div>
                <h1 className="text-4xl font-bold mb-1">Shop <span className="text-brand-primary">Smarter ,</span></h1>
                <h1 className="text-4xl font-bold">Live <span className="text-brand-primary">Better</span></h1>
            </div>
            <div>
                <p className="font-light w-[56%]">Discover amazing products, unbetable deals, and smooth shopping experience.</p>
            </div>
            <div className="ml-20 overflow-hidden">
                <div><img className="pt-1 h-45 w-[55%]" src={LoginLogo} /></div>
            </div>
            <div>
                <div className="h-30 flex border-[#737373] border-1 w-fit items-center overflow-hidden justify-between rounded-xl shadow-lg">
                    <LoginFooterLogo logo={faIndianRupeeSign} title="Best Prices" description="Unbeatable deals every day"/>
                    <LoginFooterLogo logo={faReceipt} title="Secure Payment" description="100% secure checkout"/>
                    <LoginFooterLogo logo={faHeadset} title="24/7 Support" description="We're here to help you"/>
                </div>
            </div>

        </div>
    
    </>
}

export default LoginDesign;