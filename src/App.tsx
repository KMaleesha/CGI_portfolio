import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Process from './components/Process'
import Services from './components/Services'
import About from './components/About'
import Contact from './components/Contact'
import WhyWorkWithUs from './components/WhyWorkWithUs'
import Home from './components/Home'
import BlogPosts from './components/BlogPosts'

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
        <Home />

        {/* OTHER SECTIONS */}
        {sections.map((section) => (
          <section
            key={section.id}
            id={section.id}
            className=""
          >
            <div className="mx-auto max-w-330 px-4 md:px-7">
              {section.id === 'about' ? (
                <About />
              ) : section.id === 'services' ? (
                <Services />
              ) : section.id === 'process' ? (
                <Process />
              ) : section.id === 'why-us' ? (
                <WhyWorkWithUs />
              ) : section.id === 'blogs' ? (
                <BlogPosts />
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
