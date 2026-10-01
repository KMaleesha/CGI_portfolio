const reasons = [
  {
    number: '01',
    title: 'We listen first',
    description:
      'We understand your business, challenges, and goals before we start building.',
  },
  {
    number: '02',
    title: 'Your users matter',
    description:
      'We create experiences that are useful, intuitive, and enjoyable for the people using them.',
  },
  {
    number: '03',
    title: 'Built with care',
    description:
      'We pay attention to the details that make a product feel polished and thoughtful.',
  },
  {
    number: '04',
    title: 'Your goals come first',
    description:
      'We work closely with you and focus on decisions that bring real value to your business.',
  },
  {
    number: '05',
    title: 'Made to grow with you',
    description:
      'We build solutions that can evolve as your business and customers grow.',
  },
]

const WhyWorkWithUs = () => {
  return (
    <section className="py-12 md:py-16">
      <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
        {/* Left side */}
        <div>
          <div className="mb-4 flex items-center gap-3">
            <span className="size-2 rounded-full bg-orange-400" />

            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gray-500">
              Why work with us
            </p>
          </div>

          <h2 className="max-w-lg text-3xl font-semibold leading-tight tracking-tight text-gray-950 md:text-5xl">
            We think beyond the product.
          </h2>

          <p className="mt-4 max-w-md text-sm leading-6 text-gray-500 md:text-base">
            We think about your business, your goals, and the people who will
            use what we create.
          </p>
        </div>

        {/* Right side */}
        <div className="border-t border-gray-200">
          {reasons.map((reason) => (
            <div
              key={reason.number}
              className="grid grid-cols-[40px_1fr] gap-4 border-b border-gray-200 py-4 md:grid-cols-[48px_1fr] md:gap-5"
            >
              <span className="pt-1 text-xs font-medium text-orange-500">
                {reason.number}
              </span>

              <div>
                <h3 className="text-base font-semibold text-gray-950 md:text-lg">
                  {reason.title}
                </h3>

                <p className="mt-1 text-sm leading-6 text-gray-500">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyWorkWithUs
