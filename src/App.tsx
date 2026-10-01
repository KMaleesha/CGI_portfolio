import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Process from './components/Process'
import Services from './components/Services'
import About from './components/About'
import Contact from './components/Contact'
import WhyWorkWithUs from './components/WhyWorkWithUs'

const sections = [
  {id: 'about', title: 'About Us'},
  {id: 'services', title: 'Services'},
  {id: 'process', title: 'How we work'},
  {id: 'why-us', title: 'Why Work with Us'},
  {id: 'work', title: 'Work'},
  {id: 'blogs', title: 'Blogs'},
  {id: 'contact', title: "Let's Talk"},
]

export default function App() {
  return (
    <>
      <Navbar />

      <main className="bg-[#f5f4f0]">
        <section
          id="home"
          className="relative flex min-h-screen items-center overflow-hidden px-6 pt-20"
        >
          <div className="pointer-events-none absolute left-1/2 top-1/3 size-130 -translate-x-1/2 rounded-full bg-orange-200/50 blur-3xl" />
          <div className="relative mx-auto max-w-6xl">
            <h1 className="max-w-3xl text-5xl font-bold leading-tight tracking-tight text-ink md:text-6xl">
              Building experiences that move ideas forward.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-slate-500">
              Turning ideas into meaningful solutions that make a real difference.
            </p>
          </div>
        </section>

        {/* OTHER SECTIONS */}
        {sections.map((section) => (
          <section
            key={section.id}
            id={section.id}
            className=" px-6 "
          >
            <div className="mx-auto max-w-6xl">    
              {section.id === 'about' ? (
                <About />
              ) : section.id === 'services' ? (
                <Services />
              ) : section.id === 'process' ? (
                <Process />
              ) : section.id === 'why-us' ? (
                <WhyWorkWithUs />
              ) : section.id === 'contact' ? (
                <Contact />
              ) : 
              <h2 className="text-4xl font-bold text-ink">{section.title}</h2>
              }
            </div>
          </section>
        ))}
      </main>
      <Footer />
    </>
  )
}
