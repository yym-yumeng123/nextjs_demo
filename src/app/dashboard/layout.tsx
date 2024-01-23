import { ReactNode } from "react"

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <section>
      <nav>你好</nav>
      {children}
    </section>
  )
}
