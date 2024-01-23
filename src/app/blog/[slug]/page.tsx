export default function Page({ params }: { params: { slug: string } }) {
  return <div>My Post: {params.slug}</div>
}

/**
 * Example URL  params
 * /blog/a  { slug: 'a' }
 * /blog/b	{ slug: 'b' }
 */

export async function generateStaticParams() {
  let posts = []
  try {
    posts = await fetch("https://.../posts").then((res) => res.json())
  } catch (error) {
    console.error(error)
  }

  return posts
    ? posts.map((post: { slug: string }) => {
        slug: post.slug
      })
    : null
}
