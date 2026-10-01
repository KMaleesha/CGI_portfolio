const CTA = () => {
  return (
    <section className="bg-[#f5f4f0] py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col gap-6 border-t border-gray-200 pt-8 md:flex-row md:items-center md:justify-between">
          <p className="max-w-xl text-sm leading-relaxed text-gray-500">
            Have a specific challenge in mind? Let&apos;s create a solution
            around your business and your goals.
          </p>

          <a
            href="#contact"
            className="group inline-flex items-center gap-3 text-sm font-semibold text-gray-950"
          >
            Start a conversation

            <span
              className="
                flex h-9 w-9 items-center justify-center
                rounded-full bg-gray-900 text-white
                transition-transform duration-300
                group-hover:translate-x-1
              "
            >
              ↗
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA;