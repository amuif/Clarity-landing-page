import {
  ArrowDown,
  BarChart3,
  CreditCard,
  Target,
  TrendingUp,
} from 'lucide-react';

const LandingHowItWorks = () => {
  const steps = [
    {
      step: '01',
      title: 'Connect Your Accounts',
      description:
        'Link your bank accounts and credit cards securely in under 2 minutes.',
      icon: <CreditCard className="w-8 h-8" />,
      color: 'from-[#194e3e] to-[#2d7a5f]',
    },
    {
      step: '02',
      title: 'Track Automatically',
      description:
        'Watch as your transactions are categorized and analyzed in real-time.',
      icon: <BarChart3 className="w-8 h-8" />,
      color: 'from-[#2d7a5f] to-[#4a9d7a]',
    },
    {
      step: '03',
      title: 'Set Smart Goals',
      description:
        'Create personalized budgets and savings targets with AI assistance.',
      icon: <Target className="w-8 h-8" />,
      color: 'from-[#4a9d7a] to-[#67c095]',
    },
    {
      step: '04',
      title: 'Achieve Success',
      description:
        'Monitor progress and get insights to reach your financial goals faster.',
      icon: <TrendingUp className="w-8 h-8" />,
      color: 'from-[#67c095] to-[#84e3b0]',
    },
  ];

  return (
    <section id="steps" className="w-full py-16 bg-background">
      <div className="container px-4 md:px-6 max-w-5xl mx-auto">
        <div className="text-center mb-20">
          <p className="text-primary font-bold border rounded-full px-4 shadow-md py-2 w-fit mx-auto bg-white">
            How it works
          </p>
          <div className="mb-16 pt-3">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 tracking-tight">
              Your Path to Financial Freedom
            </h2>
          </div>
        </div>
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 hidden md:block">
            <svg
              className="w-full h-full"
              viewBox="0 0 4 800"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 0 Q2 100 2 200 Q2 300 2 400 Q2 500 2 600 Q2 700 2 800"
                stroke="url(#gradient)"
                strokeWidth="2"
                strokeDasharray="8,4"
                className="animate-pulse"
              />
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#194e3e" />
                  <stop offset="50%" stopColor="#4a9d7a" />
                  <stop offset="100%" stopColor="#84e3b0" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="space-y-16 md:space-y-24">
            {steps.map((step, index) => (
              <div
                key={step.step}
                className={`flex flex-col md:flex-row items-center gap-8 ${
                  index % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className="flex-1 text-center md:text-left">
                  <div className="inline-flex items-center gap-3 mb-4">
                    <span className="text-xs font-bold text-muted-foreground tracking-wider">
                      STEP
                    </span>
                    <span className="text-3xl font-bold text-primary">
                      {step.step}
                    </span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-semibold text-foreground mb-4">
                    {step.title}
                  </h3>
                  <p className="text-base text-muted-foreground leading-relaxed max-w-md mx-auto md:mx-0">
                    {step.description}
                  </p>
                </div>
                <div className="flex-1 flex justify-center">
                  <div className="relative group">
                    <div
                      className={`w-28 h-28 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center text-white shadow-xl group-hover:scale-105 transition-all duration-300 relative z-10`}
                    >
                      {step.icon}
                    </div>
                    <div className="absolute inset-0 rounded-full border-2 border-primary opacity-20 animate-ping" />
                    <div
                      className="absolute inset-0 rounded-full border border-primary opacity-30 animate-pulse"
                      style={{ animationDelay: '0.5s' }}
                    />
                  </div>
                </div>
                {index < steps.length - 1 && (
                  <div className="md:hidden flex justify-center">
                    <ArrowDown className="w-6 h-6 text-primary animate-bounce" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default LandingHowItWorks;
