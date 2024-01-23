import { Button } from "@nextui-org/react"
import Link from "next/link"

export default function About() {
  const url = "/post"
  return (
    <div>
      About
      <Button color='success'>
        <Link href='/'>调转到根</Link>
        <Link href={`/blog/${encodeURIComponent(url)}`}></Link>
        <Link
          href={{
            pathname: "/url",
            query: { slug: "332" },
          }}
        ></Link>
      </Button>
    </div>
  )
}
