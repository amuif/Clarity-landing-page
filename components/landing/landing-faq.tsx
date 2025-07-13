import { Plus, HelpCircle, MessageCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqData = [
  {
    question: "How does the AI-powered insights feature work?",
    answer:
      "Our AI analyzes your spending patterns, income trends, and financial behavior to provide personalized recommendations. It can identify potential savings opportunities, predict future expenses, and suggest budget optimizations tailored to your lifestyle.",
  },
  {
    question: "Can I cancel my subscription anytime?",
    answer:
      "Yes, you can cancel your subscription at any time with no cancellation fees. Your data will remain accessible for 30 days after cancellation, giving you time to export your information if needed.",
  },
  {
    question: "Do you offer customer support?",
    answer:
      "We provide 24/7 customer support through live chat, email, and phone. Our premium users also get access to dedicated account managers and priority support with guaranteed response times.",
  },
  {
    question: "How accurate is the expense categorization?",
    answer:
      "Our AI-powered categorization is over 95% accurate and learns from your preferences. You can easily correct any miscategorized transactions, and the system will remember your preferences for future similar transactions.",
  },
  {
    question: "Can I set up custom budget categories?",
    answer:
      "Yes! You can create unlimited custom budget categories that fit your lifestyle. Whether it's 'Coffee Shop Visits' or 'Pet Expenses', you have complete control over how you organize and track your spending.",
  },
];

export default function LandingFAQ() {
  return (
    <section id="faq" className="w-full py-16 bg-background">
      <div className="container px-4 md:px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="relative">
            <div className="sticky top-8">
              <div className="flex justify-center lg:justify-start mb-8">
                <div className="relative">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-emerald-600 flex items-center justify-center text-white shadow-xl">
                    <HelpCircle className="w-10 h-10" />
                  </div>
                  <div className="absolute inset-0 rounded-full border-2 border-primary opacity-20 animate-ping" />
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-300 flex items-center justify-center text-white shadow-lg animate-bounce">
                    <MessageCircle className="w-4 h-4" />
                  </div>
                </div>
              </div>
              <p className="text-primary font-bold border rounded-full px-4 shadow-md py-2 w-fit bg-white">
                FAQ
              </p>
              <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-6 pt-3">
                What people ask about Clarity
              </h3>
              <p className="text-base text-muted-foreground leading-relaxed mb-8">
                Get answers to the most common questions about our personal
                finance platform. Can&apos;t find what you&apos;re looking for?
                Our support team is here to help 24/7.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-primary rounded-full opacity-15 animate-bounce hidden lg:block" />
            <Accordion type="multiple" className="space-y-4">
              {faqData.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-white rounded-xl border-2 border-border hover:border-primary/30 transition-all duration-300 shadow-sm hover:shadow-lg overflow-hidden"
                >
                  <AccordionTrigger className="px-6 py-6 text-left hover:no-underline group [&[data-state=open]]:border-b [&[data-state=open]]:border-border">
                    <div className="flex items-center gap-4 w-full">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-emerald-600 flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                        {index + 1}
                      </div>
                      <span className="font-semibold text-foreground group-hover:text-primary transition-colors text-lg">
                        {faq.question}
                      </span>
                    </div>
                    <div className="ml-4 flex-shrink-0">
                      <div className="w-8 h-8 rounded-full bg-muted group-hover:bg-primary flex items-center justify-center transition-all duration-300">
                        <Plus className="w-4 h-4 text-muted-foreground group-hover:text-white transition-all duration-300 group-data-[state=open]:rotate-45" />
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6">
                    <div className="flex gap-4">
                      <div className="w-8 flex justify-center pt-1">
                        <div className="w-1 h-full bg-gradient-to-b from-primary to-emerald-400 rounded-full opacity-30" />
                      </div>
                      <div className="flex-1">
                        <p className="text-muted-foreground leading-relaxed">
                          {faq.answer}
                        </p>
                        <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
                          <div className="w-2 h-2 rounded-full bg-green-500" />
                          <span>Was this helpful?</span>
                        </div>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
