import { PrismaClient } from "@prisma/client"
import { NextRequest, NextResponse } from "next/server"

const prisma = new PrismaClient()
interface UserRequest {
  userId: string
}

export async function POST(req: NextRequest) {
  try {
    const { userId } = (await req.json()) as UserRequest
    if (!userId) {
      return NextResponse.json(
        {
          message: "Bad Request",
        },
        { status: 400 }
      )
    }
    let user = await prisma.userN.findUnique({
      where: {
        userId: userId,
      },
    })

    if (!user) {
      user = await prisma.userN.create({
        data: {
          userId,
        },
      })
    }

    return NextResponse.json(
      {
        user,
      },
      { status: 200 }
    )
  } catch (e) {
    console.error("🚀 ~ POST ~ e:", e)
    return NextResponse.json(
      {
        message: "Internal Error",
      },
      {
        status: 500,
      }
    )
  }
}
