
interface Service {
  title: string
  description: string
  tags: string[]
}

const services: Service[] = [
  {
    title: 'Web Development',
    description:
      'Fast, accessible websites and web apps that turn visitors into customers and grow with your business.',
    tags: ['Web Apps', 'SaaS', 'E-commerce'],
  },
  {
    title: 'Mobile App Development',
    description:
      'iOS and Android apps that make it easy for customers to connect with your business wherever they are.',
    tags: ['iOS', 'Android', 'Cross-platform'],
  },
  {
    title: 'UI/UX Design',
    description:
      'Clear, intuitive interfaces that help people find what they need and enjoy using your product.',
    tags: ['Research', 'UI Design', 'Prototyping'],
  },
  {
    title: 'Custom Software Solutions',
    description:
      'Tailored tools and integrations that replace repetitive work and fit the way your team operates.',
    tags: ['Automation', 'Systems', 'Integrations'],
  },
  {
    title: 'Cybersecurity',
    description:
      'Practical security reviews and protections that reduce risk and safeguard your systems and data.',
    tags: ['Security', 'Audits', 'Protection'],
  },
  {
    title: 'AI & Automation',
    description:
      'Automate time-consuming workflows and apply AI where it makes everyday work faster and simpler.',
    tags: ['AI', 'Automation', 'Workflows'],
  },
  {
    title: 'SEO & Digital Growth',
    description:
      'Improve search visibility and attract the right people with measurable SEO and digital marketing.',
    tags: ['SEO', 'Analytics', 'Growth'],
  },
  {
    title: 'Technology Consulting',
    description:
      'Make confident technology decisions with expert guidance on architecture, planning, and delivery.',
    tags: ['Strategy', 'Architecture', 'Planning'],
  },
]

const Services = () => {
  return (
    <section id="services" className="bg-[#f5f4f0]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mb-14 grid gap-8 lg:grid-cols-2 lg:items-end">
          <div>
            <div className="flex items-center gap-3">
              <span className="size-2 rounded-full bg-orange-400 mb-8" />
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gray-500 mb-8">
                What we do
              </p>
            </div>
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
        <div className="grid gap-5 md:grid-cols-2">
          {services.map((service, index) => (
            <a
              key={service.title}
              href="#contact"
              aria-label={`Discuss ${service.title}`}
              className="group relative flex min-h-92 flex-col overflow-hidden rounded-3xl border border-gray-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-orange-300 hover:shadow-[0_24px_60px_-24px_rgba(124,45,18,0.28)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-4 md:p-9"
            >
              <div className="pointer-events-none absolute -right-16 -top-16 size-48 rounded-full bg-linear-to-br from-orange-100 to-amber-50 transition-transform duration-500 group-hover:scale-125" />

              <div className="relative z-10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="flex size-11 items-center justify-center rounded-2xl bg-orange-100 text-sm font-bold text-orange-700 transition-colors group-hover:bg-orange-500 group-hover:text-white">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-400">
                    Service
                  </span>
                </div>

                <span className="flex size-11 items-center justify-center rounded-full bg-gray-950 text-lg text-white transition-all duration-300 group-hover:rotate-45 group-hover:bg-orange-500">
                  <span aria-hidden="true">↗</span>
                </span>
              </div>

              <div className="relative z-10 mt-12">
                <h3 className="max-w-md text-2xl font-semibold tracking-tight text-gray-950 transition-colors group-hover:text-orange-700 md:text-3xl">
                  {service.title}
                </h3>
                <p className="mt-4 max-w-lg text-base leading-relaxed text-gray-600">
                  {service.description}
                </p>
              </div>

              <div className="relative z-10 mt-auto flex flex-wrap gap-2 pt-8">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1.5 text-xs font-medium text-gray-500"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="relative z-10 mt-7 flex items-center justify-between border-t border-gray-100 pt-5 text-sm font-semibold text-gray-700">
                <span>Let&apos;s talk about this</span>
                <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
