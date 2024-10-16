import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs"
import Image from "next/image"
import Navitems from "./Navitems"
import SearchInput from "./SearchInput"
import { Button } from "./ui/button"

const Navbar = () => {
    return (
        <div className='fixed w-full bg-white z-50 shadow-sm'>
            <div className='flex items-center max-w-6xl justify-between h-14 mx-auto px-3'>
                <div className='flex items-cenetr gap-2'>
                    <Image
                        src={'/appicon.jpg'}
                        alt="Logo"
                        width={35}
                        height={40}
                    />
                    <div className='md:block hidden'>
                        <SearchInput />
                    </div>
                </div>
                <div className='flex items-center gap-5'>
                    <div className='md:block hidden'>
                        <Navitems />
                    </div>

                </div>
                <div>
                    <SignedIn>
                        <UserButton />
                    </SignedIn>

                    <SignedOut>
                        <Button className='rounded-full' variant={'secondary'}>
                            <SignInButton />
                        </Button>
                    </SignedOut>

                </div>
            </div>

        </div>
    )
}

export default Navbar