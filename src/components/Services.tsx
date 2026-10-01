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

const technologies = [
  'React',
  'Next.js',
  'Node.js',
  'NestJS',
  'Java',
  'Flutter',
  'REST APIs',
  'Docker',
  'AWS',
  'n8n',
  'Git / GitHub',
]

const Services = () => {
  return (
    <section id="services" className="bg-[#f5f4f0]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mb-14 grid gap-8 lg:grid-cols-2 lg:items-end">
          <div>
            <div className="flex items-center gap-3">
              <span className="mb-8 size-2 rounded-full bg-orange-400" />

              <p className="mb-8 text-xs font-semibold uppercase tracking-[0.3em] text-gray-500">
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
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service, index) => (
            <a
              key={service.title}
              href="#contact"
              aria-label={`Discuss ${service.title}`}
              className="group relative flex min-h-[23rem] flex-col overflow-hidden rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-orange-300 hover:shadow-[0_24px_60px_-24px_rgba(124,45,18,0.28)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-4 md:p-7"
            >
              {/* Decorative circle */}
              <div className="pointer-events-none absolute -right-14 -top-14 size-40 rounded-full bg-linear-to-br from-orange-100 to-amber-50 transition-transform duration-500 group-hover:scale-125" />

              {/* Top */}
              <div className="relative z-10 flex items-center">
                <div className="flex items-center gap-3">
                  <span className="flex size-10 items-center justify-center rounded-2xl bg-orange-100 text-sm font-bold text-orange-700 transition-colors group-hover:bg-orange-500 group-hover:text-white">
                    {String(index + 1).padStart(2, '0')}
                  </span>

                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-400">
                    Service
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="relative z-10 mt-8">
                <h3 className="text-xl font-semibold tracking-tight text-gray-950 transition-colors group-hover:text-orange-700">
                  {service.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-600">
                  {service.description}
                </p>
              </div>

              {/* Tags */}
              <div className="relative z-10 mt-auto flex flex-wrap gap-2 pt-6">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-gray-200 bg-gray-50 px-2.5 py-1 text-[11px] font-medium text-gray-500"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <div className="relative z-10 mt-5 flex items-center justify-between border-t border-gray-100 pt-4 text-xs font-semibold text-gray-700">
                <span>Let&apos;s talk about this</span>

                <span
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                >
                  →
                </span>
              </div>
            </a>
          ))}
        </div>

        {/* Technologies */}
        <div className="mt-20 border-t border-gray-300 pt-10 pb-16">
          <div className="grid gap-8 md:grid-cols-[0.7fr_1.3fr] md:items-start">
            <div>
              <div className="flex items-center gap-3">
                <span className="size-2 rounded-full bg-orange-400" />

                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gray-500">
                  Technologies
                </p>
              </div>

              <h3 className="mt-4 text-2xl font-semibold tracking-tight text-gray-900 md:text-3xl">
                The tools behind our solutions.
              </h3>
            </div>

            <div>
              <p className="mb-6 max-w-xl text-sm leading-6 text-gray-500 md:text-base">
                We choose the right technologies for each project, with a focus
                on reliable, scalable, and maintainable solutions.
              </p>

              <div className="flex flex-wrap gap-3">
                {technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full border border-gray-300 bg-white px-4 py-2.5 text-sm font-medium text-gray-600 transition-colors hover:border-orange-300 hover:bg-orange-200/50 hover:text-gray-900"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services