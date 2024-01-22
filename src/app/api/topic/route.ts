import { PrismaClient } from "@prisma/client"
import { NextRequest, NextResponse } from "next/server"

const prisma = new PrismaClient()

interface TopicRequest {
  userId: string
  avatar: string
  content: string
  images: string
  options: string[]
}

export async function POST(req: NextRequest) {
  try {
    const data = (await req.json()) as TopicRequest
    
    const topic = await prisma.topic.create({
      data: {
        userId: data.userId,
        avatar: data.avatar,
        content: data.content
      }
    })

    return NextResponse.json({
      data: topic
    })
  } catch (error) {
    
  }
}
