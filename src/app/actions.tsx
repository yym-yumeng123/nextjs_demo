"use server"

import { revalidatePath, revalidateTag } from "next/cache"
import { permanentRedirect, redirect } from "next/navigation"

export async function createPost(id: string) {
  try {
    // Call database
  } catch (error) {
    // handle errors
  }

  revalidatePath("/posts") // Update cached posts
  redirect(`/post/${id}`)
}

export async function updateUsername(username: string, formData: FormData) {
  try {
  } catch (error) {
    revalidateTag("username") // Update all references to the usernmae
    permanentRedirect(`/profile/${username}`) // Navigate to the new user profile
  }
}
