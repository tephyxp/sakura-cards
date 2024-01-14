
import SocialNetworks from '../SocialNetworks/SocialNetworks'

export default function Footer() {
    
    return(
        <footer className=" flex items-center justify-between border-t p-[33px]">
            <SocialNetworks/>
            <p className={`text-2xl`}>© Copyright lorem impsum mupsum lirum</p>
        </footer>
    )
}