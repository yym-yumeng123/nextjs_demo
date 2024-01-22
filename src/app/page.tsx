import Image from "next/image"
import { UserButton } from "@clerk/nextjs"
import { Button } from "@nextui-org/react"
import { ThemeSwitcher } from "./components/ThemeSwitcher"

export default function Home() {
  return (
    <div>
      <ThemeSwitcher />
      <UserButton afterSignOutUrl='/' />
      <Button color='primary'>Click me</Button>
    </div>
  )
}
