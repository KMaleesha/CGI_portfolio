const About = () => {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#f5f4f0] py-4"
    >
      <div className="pointer-events-none absolute -right-32 size-72 rounded-full bg-orange-200/50 opacity-40 blur-3xl" />

      <div className="relative">
        <div className="flex items-center gap-3">
          <span className="mb-8 size-2 rounded-full bg-orange-400" />

          <p className="mb-8 text-xs font-semibold uppercase tracking-[0.3em] text-gray-500">
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
              We are a UK-based technology company with a team bringing
              together more than 20 years of experience across technology,
              design, and digital solutions.
            </p>
          </div>
        </div>

        <div className="pt-8">
          <div className="border-t border-gray-300 py-4 md:py-4">
            <p className="max-w-5xl text-3xl font-medium leading-tight tracking-[-0.03em] text-gray-800 md:text-5xl">
              We combine{' '}
              <span className="text-gray-400">technology, design</span> and{' '}
              <span className="text-orange-500">strategy</span> to create
              digital solutions that make a difference.
            </p>

            <p className="mt-4 max-w-full text-sm leading-6 text-gray-500">
              Our team works closely with businesses to understand their goals,
              solve real challenges, and build reliable solutions that grow
              with them.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About