import CTA from "./CTA"

interface Service {
  title: string
  description: string
  tags: string[]
}

const services: Service[] = [
  {
    title: 'Web Development',
    description:
      'Modern, scalable websites and web applications tailored to your business needs.',
    tags: ['Web Apps', 'SaaS', 'E-commerce'],
  },
  {
    title: 'Mobile App Development',
    description:
      'High-quality iOS and Android applications designed for seamless user experiences.',
    tags: ['iOS', 'Android', 'Cross-platform'],
  },
  {
    title: 'UI/UX Design',
    description:
      'User-focused digital experiences combining intuitive design with a strong visual identity.',
    tags: ['Research', 'UI Design', 'Prototyping'],
  },
  {
    title: 'Custom Software Solutions',
    description:
      'Purpose-built software designed to solve specific business challenges and improve efficiency.',
    tags: ['Automation', 'Systems', 'Integrations'],
  },
  {
    title: 'Cybersecurity',
    description:
      'Security solutions that help protect your applications, systems, and business data.',
    tags: ['Security', 'Audits', 'Protection'],
  },
  {
    title: 'AI & Automation',
    description:
      'Intelligent solutions that automate processes and help businesses work smarter.',
    tags: ['AI', 'Automation', 'Workflows'],
  },
  {
    title: 'SEO & Digital Growth',
    description:
      'Strategies to improve online visibility, search rankings, and your digital presence.',
    tags: ['SEO', 'Analytics', 'Growth'],
  },
  {
    title: 'Technology Consulting',
    description:
      'Technology guidance and digital strategies aligned with your business goals.',
    tags: ['Strategy', 'Architecture', 'Planning'],
  },
]

const Services = () => {
  return (
    <section id="services" className="bg-white py-8">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mb-20 grid gap-8 lg:grid-cols-2">
          <div>
            <p className="mb-5 text-sm font-medium uppercase tracking-[0.2em] text-gray-500">
              What we do
            </p>

            <h2 className="max-w-xl text-4xl font-semibold tracking-tight text-gray-950 md:text-6xl">
              Digital solutions built around your business.
            </h2>
          </div>

          <div className="flex items-end lg:justify-end">
            <p className="max-w-md text-lg leading-relaxed text-gray-500">
              From strategy and design to development and automation, we create
              digital solutions that solve real business problems.
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid gap-4 md:grid-cols-2">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="
  group relative overflow-hidden rounded-2xl
  border border-gray-200
  bg-gray-50
  p-8 md:p-10
  transition-all duration-500
  hover:-translate-y-1
  hover:bg-orange-200/50
  hover:shadow-xl
"
            >
              {/* Top row */}
              <div className="relative z-10 flex items-center justify-between">
                <span
                  className={`text-xs font-medium uppercase tracking-[0.18em] text-gray-400}`}
                >
                  Service
                </span>

                <span
                  className={`
                    flex h-10 w-10 items-center justify-center
                    rounded-full border
                    transition-all duration-300
                    group-hover:rotate-45
                   
                         "border-gray-300 text-gray-700"
                    
                  `}
                >
                  ↗
                </span>
              </div>

              {/* Main content */}
              <div className="relative z-10 mt-20">
                <h3
                  className={`
                    text-2xl font-semibold tracking-tight md:text-3xl
                 
                      "text-gray-950"
              
                  `}
                >
                  {service.title}
                </h3>

                <p
                  className={`
                    mt-4 max-w-lg text-base leading-relaxed
                  'text-gray-600'
                  `}
                >
                  {service.description}
                </p>
              </div>

              {/* Tags */}
              <div className="relative z-10 mt-8 flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`
                      rounded-full border px-3 py-1.5
                      text-xs font-medium
                 
                           'border-gray-200 bg-white/70 text-gray-500'
                      
                    `}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Decorative circle */}
              <div
                className={`
                  absolute -bottom-20 -right-20
                  h-48 w-48 rounded-full
                  transition-transform duration-700
                  group-hover:scale-125
                  ${index === 0 ? 'bg-white/3' : 'bg-orange-300/20'}
                `}
              />
            </div>
          ))}
        </div>
       <CTA />
      </div>
    </section>
  )
}

export default Services
