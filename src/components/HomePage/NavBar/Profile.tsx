import profilePic from "../../../assets/LoginLogoBackgroundRemoved.png"

const Profile=()=>{
    const user="Athul"
    return (
        <>
            <div className="flex gap-2 items-center basis-1/4">
                <img className="rounded-full h-8 w-10 border-1 border-brand-primary" src={profilePic} />
                <span className="font-semibold">{`${user}`}</span>
            </div>
        
        </>
    )
}

export default Profile;