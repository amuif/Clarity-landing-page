import { Sparkles, Rocket, Star } from 'lucide-react';

export default function ComingSoon() {
  const floatingElements = [
    { icon: '🚀', top: '10%', left: '15%', delay: '0s', size: 'text-3xl' },
    { icon: '💎', top: '20%', right: '10%', delay: '1s', size: 'text-2xl' },
    { icon: '⭐', bottom: '25%', left: '8%', delay: '2s', size: 'text-xl' },
    { icon: '🎯', top: '60%', right: '12%', delay: '0.5s', size: 'text-2xl' },
    {
      icon: '💰',
      bottom: '15%',
      right: '20%',
      delay: '1.5s',
      size: 'text-3xl',
    },
    { icon: '📊', top: '40%', left: '5%', delay: '2.5s', size: 'text-xl' },
    { icon: '🔥', top: '70%', left: '25%', delay: '3s', size: 'text-2xl' },
    { icon: '✨', bottom: '40%', right: '8%', delay: '0.8s', size: 'text-xl' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {floatingElements.map((element, index) => (
        <div
          key={index}
          className="absolute hidden lg:block pointer-events-none"
          style={{
            top: element.top,
            bottom: element.bottom,
            left: element.left,
            right: element.right,
            animationDelay: element.delay,
          }}
        >
          <div
            className={`${element.size} opacity-20 animate-bounce`}
            style={{
              animationDelay: element.delay,
              animationDuration: '4s',
            }}
          >
            {element.icon}
          </div>
        </div>
      ))}

      <div className="absolute top-20 left-20 w-6 h-6 bg-[#194e3e] rounded-full opacity-20 animate-bounce hidden lg:block" />
      <div
        className="absolute top-40 right-32 w-4 h-4 bg-[#4a9d7a] rounded-full opacity-30 animate-bounce hidden lg:block"
        style={{ animationDelay: '0.5s' }}
      />
      <div
        className="absolute bottom-32 left-32 w-5 h-5 bg-[#67c095] rounded-full opacity-25 animate-bounce hidden lg:block"
        style={{ animationDelay: '1s' }}
      />

      <div className="container mx-auto px-4 md:px-6 max-w-6xl min-h-screen flex items-center justify-center">
        <div className="text-center space-y-16">
          <div className="space-y-8">
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-[#194e3e] to-[#2d7a5f] flex items-center justify-center text-white shadow-2xl animate-pulse">
                  <Rocket className="w-16 h-16" />
                </div>

                <div className="absolute inset-0 rounded-full border-4 border-[#194e3e] opacity-20 animate-ping" />
                <div
                  className="absolute inset-0 rounded-full border-2 border-[#4a9d7a] opacity-30 animate-pulse"
                  style={{ animationDelay: '0.5s' }}
                />
                <div
                  className="absolute inset-0 rounded-full border border-[#67c095] opacity-40 animate-ping"
                  style={{ animationDelay: '1s' }}
                />

                {[0, 1, 2].map((i) => (
                  <div
                    key={i}
                    className="absolute w-4 h-4 bg-[#4a9d7a] rounded-full opacity-60"
                    style={{
                      animation: `orbit 6s linear infinite`,
                      animationDelay: `${i * 2}s`,
                      transformOrigin: '64px 64px',
                    }}
                  />
                ))}

                <div className="absolute -top-4 -right-4 w-8 h-8 bg-[#67c095] rounded-full opacity-80 animate-bounce flex items-center justify-center text-white">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div
                  className="absolute -bottom-4 -left-4 w-6 h-6 bg-[#84e3b0] rounded-full opacity-60 animate-bounce flex items-center justify-center text-white"
                  style={{ animationDelay: '0.5s' }}
                >
                  <Star className="w-3 h-3" />
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h1 className="text-3xl md:text-7xl font-bold text-gray-900 leading-tight">
                Something
                <span className="text-transparent bg-clip-text px-3 bg-gradient-to-r from-[#194e3e] via-[#2d7a5f] to-[#4a9d7a]">
                  Amazing
                </span>
                <br />
                is Coming
              </h1>

              <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                We&apos;re putting the finishing touches on the next generation of{' '}
                <span className="font-semibold text-[#194e3e]">
                  Clarity Finance
                </span>
                . Get ready for an incredible financial management experience.
              </p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes orbit {
          from {
            transform: rotate(0deg) translateX(64px) rotate(0deg);
          }
          to {
            transform: rotate(360deg) translateX(64px) rotate(-360deg);
          }
        }
      `}</style>
    </div>
  );
}
