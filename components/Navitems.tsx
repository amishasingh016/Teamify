import { Bell, BriefcaseBusiness, Home, MessageCircleMore, Users } from "lucide-react";
import Link from 'next/link';

interface NAVITEMS {
    src: string
    icon: JSX.Element,
    text: string
}

const navItems: NAVITEMS[] = [
    {
        src: "/home",
        icon: <Home />,
        text: "Home",
    },
    {
        src: "/MyProjects",
        icon: <Users />,
        text: "MyProject",
    },
    {
        src: "/Projects",
        icon: <BriefcaseBusiness />,
        text: "Projects",
    },
    {
        src: "/message",
        icon: <MessageCircleMore />,
        text: "Messaging",
    },
    {
        src: "/notifications",
        icon: <Bell />,
        text: "Notifications",
    },

]


const Navitems = () => {
    return (
        <div className='flex gap-8'>
            {
                navItems.map((navItem, index) => {
                    return (
                        <div key={index} className='flex flex-col items-center cursor-pointer text-[#666666] hover:text-black'>
                            <span>{navItem.icon}</span>
                            <Link className='text-xs' href={navItem.src}> {navItem.text} </Link>
                        </div>
                    )
                })
            }

        </div>
    )
}

export default Navitems