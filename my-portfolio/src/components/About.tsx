const About = () => {
  const values = [
    {
      number: '01',
      title: 'Think clearly',
      description:
        'We understand the problem first, then find the right technology to solve it.',
    },
    {
      number: '02',
      title: 'Build thoughtfully',
      description:
        'We care about every detail, from the first interaction to the final line of code.',
    },
    {
      number: '03',
      title: 'Grow together',
      description:
        'We build lasting partnerships and solutions that evolve with your business.',
    },
  ]

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#f5f4f0] py-4"
    >
      <div className="pointer-events-none absolute -right-32 size-72 rounded-full bg-orange-200/50 opacity-40 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex items-center gap-3">
          <span className="size-2 rounded-full bg-orange-400 mb-8" />

          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gray-500 mb-8">
            About us
          </p>
        </div>

        {/* Main heading */}
        <div className="grid gap-8 md:grid-cols-[1fr_0.65fr] md:items-end">
          <div>
            <h2 className="max-w-5xl text-xl font-semibold leading-[0.9] tracking-[-0.055em] text-gray-900 sm:text-2xl md:text-6xl">
              Technology with
              <br />
              <span className="text-gray-400">purpose.</span>
            </h2>
          </div>

          <div className="max-w-sm">
            <div className="mb-6 h-px w-20 bg-orange-400" />

            <p className="text-base leading-7 text-gray-500 md:text-lg">
              We are a UK-based technology company creating digital products
              and solutions that help ambitious businesses move forward.
            </p>
          </div>
        </div>

        {/* Large statement */}
        <div>
          <div className="border-y border-gray-300 py-12 md:py-16">
            <p className="max-w-5xl text-3xl font-medium leading-tight tracking-[-0.03em] text-gray-800 md:text-5xl">
              We combine{' '}
              <span className="text-gray-400">technology, design</span> and{' '}
              <span className="text-orange-500">strategy</span> to create
              digital experiences that make a difference.
            </p>
            <p className="max-w-full text-sm leading-6 text-gray-500">
              Working with ambitious businesses to create meaningful digital
              experiences and scalable technology.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About