import Image from "next/image"
import { UserButton } from "@clerk/nextjs"
import { Button } from "@nextui-org/react"

export default function Home() {
  return (
    <div>
      <h1>Hello</h1>
      <UserButton afterSignOutUrl='/' />
      <Button color='primary'>Click me</Button>
    </div>
  )
}
