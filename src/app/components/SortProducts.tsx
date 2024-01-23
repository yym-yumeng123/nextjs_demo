"use client"

import { Button } from "@nextui-org/react"
import { useSearchParams } from "next/navigation"

export default function SortProducts() {
  const searchParams = useSearchParams()

  function updateSorting(sortOrder: string) {
    const params = new URLSearchParams(searchParams.toString())
    params.set("sort", sortOrder)
    window.history.pushState(null, "", `?${params.toString()}`)
  }

  return (
    <>
      <Button onClick={() => updateSorting("asc")}>Sort Asc</Button>
      <Button onClick={() => updateSorting("desc")}>Sort Desc</Button>
    </>
  )
}
