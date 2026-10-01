
import {
  Lightbulb,
  ClipboardList,
  Palette,
  CheckCircle2,
  Rocket,
  Headphones,
} from "lucide-react";
import CTA from "./CTA";

const processSteps = [
  {
    number: "01",
    title: "Discover",
    heading: "We understand your vision",
    description:
      "We start by learning about your business, goals, challenges, and the people you want to reach.",
    icon: Lightbulb,
  },
  {
    number: "02",
    title: "Plan",
    heading: "We turn ideas into a clear plan",
    description:
      "Together, we define the scope, priorities, timeline, and key milestones so everyone knows what to expect.",
    icon: ClipboardList,
  },
  {
    number: "03",
    title: "Design",
    heading: "We bring your ideas to life",
    description:
      "We create a thoughtful visual direction and experience that reflects your brand and connects with your audience.",
    icon: Palette,
  },
  {
    number: "04",
    title: "Review & Approve",
    heading: "We make sure we're aligned",
    description:
      "You review the proposed solution, share your feedback, and we refine the details together before moving forward.",
    icon: CheckCircle2,
  },
  {
    number: "05",
    title: "Build",
    heading: "We turn the plan into reality",
    description:
      "Once everything is approved, our team brings your vision to life while keeping you informed throughout the journey.",
    icon: Rocket,
  },
  {
    number: "06",
    title: "Launch & Support",
    heading: "We help you move forward",
    description:
      "We help you launch with confidence and remain available for improvements, support, and future growth.",
    icon: Headphones,
  },
];

export default function HowWeWork() {
  return (
    <section className="relative overflow-hidden bg-[#f5f4f0] pt-4 pb-0 sm:pt-8 border-t border-gray-100">
      <div className="pointer-events-none absolute left-0 top-20 h-72 w-72 rounded-full bg-gray-100/70 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-96 w-96 rounded-full bg-gray-100/70 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">

          <h2 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            A process built
            <span className="block text-gray-400">around you.</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
            Great projects start with great collaboration. We keep our process
            simple, transparent, and focused on turning your vision into
            something meaningful.
          </p>
        </div>

        <div className="relative mt-20">
          <div className="absolute left-[8%] right-[8%] top-12 hidden h-px bg-gray-200 lg:block" />

          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-6 lg:gap-6">
            {processSteps.map((step) => {
              const Icon = step.icon;

              return (
                <div key={step.number} className="group relative">
                  {/* Number + Icon */}
                  <div className="relative z-10 mx-auto flex h-24 w-24 items-center justify-center rounded-full border border-gray-200 bg-white shadow-sm transition-all duration-300 group-hover:-translate-y-2 group-hover:border-gray-900 group-hover:shadow-xl">
                    <Icon
                      size={30}
                      strokeWidth={1.5}
                      className="text-gray-700 transition-transform duration-300 group-hover:scale-110"
                    />

                    <span className="absolute -right-1 -top-1 flex h-7 w-7 items-center justify-center rounded-full bg-gray-900 text-xs font-semibold text-white">
                      {step.number}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="mt-7 text-center">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-400">
                      {step.title}
                    </p>

                    <h3 className="mt-2 text-lg font-semibold leading-7 text-gray-900">
                      {step.heading}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-gray-500">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

       <CTA />
      </div>
    </section>
  );
}

