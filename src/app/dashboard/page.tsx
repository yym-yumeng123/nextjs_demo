import { Suspense } from "react";

export default function Dashboard() {
  return (
    <section>
      <Suspense fallback={<p>Loading feed...</p>}>
        你好
      </Suspense>
    </section>
  )
}
