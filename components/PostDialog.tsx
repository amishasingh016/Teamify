import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle
} from "@/components/ui/dialog"
import { createPostAction } from "@/lib/serveractions"
import { readFileAsDataUrl } from "@/lib/utils"
import { Images } from "lucide-react"
import Image from "next/image"
import { useRef, useState } from "react"
import ProfilePhoto from "./shared/ProfilePhoto"
import { Textarea } from "./ui/textarea"


export function PostDialog({ setOpen, open, src }: { setOpen: any, open: boolean, src: string }) {
    const inputRef = useRef<HTMLInputElement>(null);
    const [selectedFile, setSelectedFile] = useState<string>("");
    const[inputText, setInputText]=useState<string>("");

    const changeHandler =(e:any)=>{
        setInputText(e.target.value);
    }

    const fileChangeHandler = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const dataUrl = await readFileAsDataUrl(file)
            setSelectedFile(dataUrl);
        }
    }

const postActionsHandler=async(formData:FormData)=>{
    const inputText=formData.get('inputText') as string;
    try{
        await createPostAction(inputText,selectedFile);
    }catch(error){
        console.log('error occurred',error);
    }
    setInputText("");
    setOpen(false);
}

    return (
        <Dialog open={open}>

            <DialogContent onInteractOutside={() => setOpen(false)} className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle className="flex gap-2">
                        <ProfilePhoto src={src} />
                        <div>
                            <h1>Hackix</h1>
                            <p className='text-xs'>Post to Anyone</p>
                        </div>
                    </DialogTitle>

                </DialogHeader>
                <form action={postActionsHandler}>
                    <div className="flex flex-col">
                        <Textarea
                            id="name"
                            name="inputText"
                            value={inputText}
                            onChange={changeHandler}
                            className="border-none text-lg focus-visible:ring-0"
                            placeholder="Type your message here."
                        />
                        <div className="my-4">
                            {
                                selectedFile && (
                                    <Image
                                        src={selectedFile}
                                        alt="Preview-image"
                                        width={400}
                                        height={400}
                                    />
                                )
                            }
                        </div>
                    </div>

                    <DialogFooter>
                        <div className="flex items-center gap-4">
                            <input ref={inputRef} onChange={fileChangeHandler} type="file" name="image" className="hidden" accept="image/*" />
                            <Button type="submit">Post</Button>
                        </div>

                    </DialogFooter>
                </form>
                <Button className="gap-2" onClick={() => inputRef?.current?.click()} variant={'ghost'}>
                    <Images className="text-blue-500" />
                    <p>Media</p>
                </Button>
            </DialogContent>
        </Dialog>
    )
}