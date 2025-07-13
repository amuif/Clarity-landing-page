export default function LandingFooter() {
  return (
    <footer className="bg-primary text-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="py-16 flex flex-col lg:flex-row w-full lg:w-[80%] mx-auto justify-between items-center gap-4">
          <span className="text-2xl lg:text-5xl font-bold">Clarity</span>

          <p className="text-white/80 leading-relaxed mb-6 max-w-sm">
            Take charge of your financial future with crystal-clear control over
            your finances. Simplify budgeting and track spending with AI-powered
            insights.
          </p>
        </div>

        <div className=" border-black/60 py-8 flex items-center justify-center lg:justify-start">
          <span>© 2025 Clarity. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
