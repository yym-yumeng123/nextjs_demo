export default function Page({ params }: { params: { slug: string[] } }) {
  return (
    <div>
      My Post:
      {params.slug.map((i) => (
        <strong>{i}</strong>
      ))}
    </div>
  )
}
