import Image from "next/image"
import { UserButton } from "@clerk/nextjs"
import { Button, Spacer } from "@nextui-org/react"
import { ThemeSwitcher } from "./components/ThemeSwitcher"
import { Send } from "lucide-react"

export default function Home() {
  return (
    <div>
      <header className='w-full h-14'>
        <div className='fixed top-4 right-8 flex justify-center items-center'>
          <Button color='success' endContent={<Send />}>
            发布
          </Button>
          <Spacer x={4} />
          <ThemeSwitcher />
          <Spacer x={4} />
          <UserButton afterSignOutUrl='/' />
        </div>
      </header>
      <div className='flex items-center justify-center m-4'>
        <main className='flex flex-col items-center justify-center w-full border-x-2 sm:w-full md:w-9/12'>
          <p>Hello, Home page</p>
        </main>
      </div>
    </div>
  )
}
