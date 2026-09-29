import Navbar from './components/Navbar'

const sections = [
  { id: 'services', title: 'Services' },
  { id: 'work', title: 'Work' },
  { id: 'about', title: 'About Us' },
  { id: 'blogs', title: 'Blogs' },
  { id: 'contact', title: "Let's Talk" },
]

export default function App() {
  return (
    <>
      <Navbar />

      <main>
        <section
          id="home"
          className="relative flex min-h-screen items-center overflow-hidden px-6 pt-20"
        >
          {/* soft orange glow */}
          <div className="pointer-events-none absolute left-1/2 top-1/3 size-[520px] -translate-x-1/2 rounded-full bg-orange-200/50 blur-3xl" />
          <div className="relative mx-auto max-w-6xl">
            <h1 className="max-w-3xl text-5xl font-bold leading-tight tracking-tight text-ink md:text-6xl">
              Building experiences that move ideas forward.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-slate-500">
              Full-stack engineer crafting clean, fast, and thoughtful web products.
            </p>
          </div>
        </section>

        {sections.map((s) => (
          <section
            key={s.id}
            id={s.id}
            className="flex min-h-screen scroll-mt-20 items-center px-6"
          >
            <h2 className="mx-auto w-full max-w-6xl text-4xl font-bold text-ink">
              {s.title}
            </h2>
          </section>
        ))}
      </main>
    </>
  )
}