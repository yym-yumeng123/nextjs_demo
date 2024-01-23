export default function Blog({ posts }) {
  return (
    <ul>
      {posts.map((post: any) => {
        return <li>{posts.title}</li>
      })}
    </ul>
  )
}

export async function getStaticProps() {
  const res = await fetch("/")
  const posts = await res.json()

  return {
    props: {
      posts,
    },
  }
}

// 服务端渲染
export async function getServerSideProps() {
  const res = await fetch("/")
  const data = await res.json()

  return {
    props: {
      data,
    },
  }
}
