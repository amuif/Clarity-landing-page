import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check, Crown, Star, Zap } from 'lucide-react';

export default function LandingPricing() {
  const plans = [
    {
      name: 'Starter',
      price: '$9',
      period: '/month',
      description: 'Perfect for individuals getting started',
      features: ['Up to 5 projects', '10GB storage', 'Advanced templates'],
      popular: false,
      buttonText: 'Get Started',
      planIndex: 0,
      icon: Star,
    },
    {
      name: 'Professional',
      price: '$29',
      period: '/month',
      description: 'Ideal for growing businesses and teams',
      features: [
        'Unlimited projects',
        '100GB storage',
        'Priority support',
        'Advanced templates',
      ],
      popular: true,
      buttonText: 'Start Free Trial',
      planIndex: 1,
      icon: Crown,
    },
    {
      name: 'Enterprise',
      price: '$99',
      period: '/month',
      description: 'For large organizations with advanced needs',
      features: [
        'Unlimited everything',
        '1TB storage',
        '24/7 dedicated support',
      ],
      popular: false,
      buttonText: 'Contact Sales',
      planIndex: 2,
      icon: Zap,
    },
  ];

  const colors = [
    'from-[#194e3e] to-[#2d7a5f]',
    'from-[#2d7a5f] to-[#4a9d7a]',
    'from-[#4a9d7a] to-[#67c095]',
  ];
  return (
    <section id="pricing" className="w-full py-20 lg:py-32 bg-background">
      <p className="text-center text-primary font-bold border rounded-full px-4 shadow-md py-2 w-fit mx-auto bg-white">
        Pricing
      </p>
      <div className="container px-4 md:px-6 max-w-7xl mx-auto pt-3">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 tracking-tight">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose the perfect plan for your needs. Upgrade or downgrade at any
            time.
          </p>
        </div>
        <div className="grid lg:grid-cols-3 gap-6 lg:gap-6">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={`relative bg-white rounded-2xl border-2 transition-all duration-300 hover:shadow-xl group ${
                plan.popular
                  ? 'border-primary shadow-lg scale-105 bg-gradient-to-br from-primary to-emerald-600 text-white'
                  : 'border-border hover:border-primary/30'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-white text-primary border-2 border-primary px-4 py-2 font-semibold shadow-lg">
                    Most Popular
                  </Badge>
                </div>
              )}
              <CardHeader className="text-center pb-8 pt-12">
                <div className="flex justify-center mb-6">
                  <div className="relative">
                    <div
                      className={`w-16 h-16 rounded-full flex items-center justify-center shadow-lg group-hover:scale-105 transition-all duration-300 relative z-10 ${
                        plan.popular
                          ? 'bg-white text-primary'
                          : `bg-gradient-to-br ${colors[plan.planIndex]} text-white`
                      }`}
                    >
                      <plan.icon className="w-8 h-8" />
                    </div>
                    <div
                      className={`absolute inset-0 rounded-full border-2 opacity-20 animate-ping ${
                        plan.popular ? 'border-white' : 'border-primary'
                      }`}
                    />
                    <div
                      className={`absolute inset-0 rounded-full border opacity-30 animate-pulse ${
                        plan.popular ? 'border-white' : 'border-primary'
                      }`}
                      style={{ animationDelay: `${plan.planIndex * 0.2}s` }}
                    />
                    <div
                      className={`absolute -top-1 -right-1 w-3 h-3 rounded-full opacity-60 animate-bounce ${
                        plan.popular ? 'bg-white' : 'bg-primary'
                      }`}
                      style={{ animationDelay: `${plan.planIndex * 0.3}s` }}
                    />
                  </div>
                </div>
                <CardTitle
                  className={`text-2xl font-bold ${plan.popular ? 'text-white' : 'text-foreground'}`}
                >
                  {plan.name}
                </CardTitle>
                <div className="mt-4">
                  <span
                    className={`text-5xl font-bold ${plan.popular ? 'text-white' : 'text-foreground'}`}
                  >
                    {plan.price}
                  </span>
                  <span
                    className={`text-lg ${plan.popular ? 'text-gray-200' : 'text-muted-foreground'}`}
                  >
                    {plan.period}
                  </span>
                </div>
                <CardDescription
                  className={`mt-2 ${plan.popular ? 'text-gray-200' : 'text-muted-foreground'}`}
                >
                  {plan.description}
                </CardDescription>
                <div className="mt-4 inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium">
                  <div
                    className={`w-2 h-2 rounded-full ${
                      plan.popular
                        ? 'bg-white'
                        : `bg-gradient-to-r ${colors[plan.planIndex]}`
                    }`}
                  />
                  <span
                    className={
                      plan.popular ? 'text-gray-200' : 'text-muted-foreground'
                    }
                  >
                    {plan.popular ? 'RECOMMENDED' : 'POPULAR CHOICE'}
                  </span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4 px-8">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center gap-3">
                    <div
                      className={`w-5 h-5 rounded-full flex items-center justify-center ${
                        plan.popular ? 'bg-white' : 'bg-primary'
                      }`}
                    >
                      <Check
                        className={`w-3 h-3 ${plan.popular ? 'text-primary' : 'text-white'}`}
                      />
                    </div>
                    <span
                      className={`${plan.popular ? 'text-white' : 'text-foreground'}`}
                    >
                      {feature}
                    </span>
                  </div>
                ))}
              </CardContent>
              <CardFooter className="pt-8 px-8 pb-8">
                <Button
                  className={`w-full py-5 text-lg font-semibold transition-all duration-300 rounded-xl group ${
                    plan.popular
                      ? 'bg-white text-primary hover:bg-gray-100 border-2 border-white shadow-lg'
                      : 'bg-primary text-white hover:bg-primary/90 shadow-lg hover:shadow-xl'
                  }`}
                >
                  <span className="relative z-10">{plan.buttonText}</span>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="text-center mt-8">
          <p className="text-muted-foreground mb-6">
            All plans include a 14-day free trial. No credit card required.
          </p>
        </div>
      </div>
    </section>
  );
}
