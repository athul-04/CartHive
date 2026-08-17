import cartHiveLogo from "../../../assets/LoginLogoBackgroundRemoved.png"

const Logo=()=>{
    return <>
        <div className="flex items-center h-[4rem] basis-1/4">
            <img className="h-15 w-20 object-contain" src={cartHiveLogo} />
            <h1 className="text-2xl font-bold">Cart<span className="text-brand-primary">Hive</span></h1>
        </div>
    </>
}

export default Logo;