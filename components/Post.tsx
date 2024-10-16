"use client"
import { deletePostAction } from '@/lib/serveractions'
import { IPostDocument } from '@/models/post.model'
import { useUser } from '@clerk/nextjs'
import { Trash2 } from 'lucide-react'
import ReactTimeago from "react-timeago"
import PostContent from './PostContent'
import ProfilePhoto from './shared/ProfilePhoto'
import SocialOptions from './SocialOptions'
import { Badge } from './ui/badge'
import { Button } from './ui/button'

const Post = ({ post }: { post: IPostDocument }) => {
    const { user } = useUser();
    const fullName = post?.user?.firstName + " " + post?.user?.lastName;
    const loggedInUser = user?.id === post?.user?.userId;

    return (
        <div className='bg-white my-2 mx-2 md:mx-0 rounded-lg border border-gray-300'>
            <div className=' flex gap-2 p-4'>
                <ProfilePhoto src={post?.user?.profilePhoto!} />
                <div className='flex items-center justify-between w-full'>
                    <div>
                        <h1 className='text-sm font-bold'>{fullName} <Badge variant={'secondary'} className='ml-2'>You</Badge></h1>
                        <p className='text-xs text-gray-500'>@{user ? user?.username : "username"}</p>

                        <p className='text-xs text-gray-500'>
                            <ReactTimeago date={new Date(post.createdAt)} />
                        </p>
                    </div>
                </div>
                <div>
                    {
                        loggedInUser && (
                            <Button onClick={() => {
                                const res = deletePostAction((post._id).toString())
                            }} size={'icon'} className='rounded-full' variant={'outline'}>
                                <Trash2 />
                            </Button>
                        )
                    }
                </div>
            </div>
            <PostContent post ={post} />
            <SocialOptions post={post}/>
        </div>
    )
}

export default Post