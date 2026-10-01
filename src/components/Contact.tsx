const serviceOptions = [
  'Web Development',
  'Mobile App Development',
  'UI/UX Design',
  'Custom Software Solutions',
  'Cybersecurity',
  'AI & Automation',
  'SEO & Digital Growth',
  'Technology Consulting',
  'Not sure yet',
]

const Contact = () => {
  return (
    <div className="py-16 md:py-24">
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div>
          <div className="mb-6 flex items-center gap-3">
            <span className="size-2 rounded-full bg-orange-400" />

            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gray-500">
              Let&apos;s talk
            </p>
          </div>

          <h2 className="max-w-lg text-4xl font-semibold leading-tight tracking-tight text-gray-950 md:text-6xl">
            Tell us what you&apos;re looking to build.
          </h2>

          <p className="mt-5 max-w-md text-base leading-7 text-gray-500 md:text-lg">
            Share a little about your idea or challenge. We&apos;ll get back to
            you to discuss how we can help.
          </p>

          <a
            className="mt-8 inline-flex text-sm font-semibold text-gray-800 underline decoration-orange-400 underline-offset-4 transition hover:text-orange-700"
            href="mailto:maleemapalagama@gmail.com"
          >
            maleemapalagama@gmail.com
          </a>
        </div>

        <form
          action="https://formsubmit.co/maleemapalagama@gmail.com"
          className="grid gap-5 rounded-3xl border border-gray-200 bg-white p-6 shadow-sm md:p-8"
          method="POST"
        >
          {/* Email subject */}
          <input name="_subject" type="hidden" value="New Portfolio Enquiry" />

          {/* Email template */}
          <input name="_template" type="hidden" value="table" />

          {/* Spam protection */}
          <input
            aria-hidden="true"
            autoComplete="off"
            className="hidden"
            name="_honey"
            tabIndex={-1}
          />

          <div className="grid gap-5 sm:grid-cols-2">
            <label className="grid gap-2 text-sm font-medium text-gray-700">
              Name or organization
              <input
                autoComplete="name"
                className="min-h-12 rounded-xl border border-gray-200 bg-gray-50 px-4 text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-orange-400 focus:ring-2 focus:ring-orange-400/20"
                name="name"
                placeholder="Your name or company"
                required
                type="text"
              />
            </label>

            <label className="grid gap-2 text-sm font-medium text-gray-700">
              Email address
              <input
                autoComplete="email"
                className="min-h-12 rounded-xl border border-gray-200 bg-gray-50 px-4 text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-orange-400 focus:ring-2 focus:ring-orange-400/20"
                name="email"
                placeholder="you@example.com"
                required
                type="email"
              />
            </label>
          </div>

          <label className="grid gap-2 text-sm font-medium text-gray-700">
            Service you&apos;re interested in
            <select
              className="min-h-12 rounded-xl border border-gray-200 bg-gray-50 px-4 text-gray-900 outline-none transition focus:border-orange-400 focus:ring-2 focus:ring-orange-400/20"
              defaultValue=""
              name="service"
              required
            >
              <option disabled value="">
                Choose a service
              </option>

              {serviceOptions.map((service) => (
                <option key={service} value={service}>
                  {service}
                </option>
              ))}
            </select>
          </label>

          <label className="grid gap-2 text-sm font-medium text-gray-700">
            How can we help?
            <textarea
              className="min-h-36 resize-y rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-orange-400 focus:ring-2 focus:ring-orange-400/20"
              name="message"
              placeholder="Tell us about your goals, requirements, or questions..."
              required
              rows={5}
            />
          </label>

          <button
            className="group mt-1 inline-flex min-h-12 items-center justify-center gap-3 justify-self-start rounded-full bg-gray-950 px-6 font-semibold text-white transition hover:bg-orange-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2"
            type="submit"
          >
            Send your enquiry
            <span
              aria-hidden="true"
              className="transition-transform group-hover:translate-x-1"
            >
              →
            </span>
          </button>
        </form>
      </div>
    </div>
  )
}

export default Contact
