"use client";

import React, { useState } from "react";

export default function FAQ() {
  const questions = [
    {
      question: "Do I need to entrust the entire project to LetsProject?",
      answer:
        "You can entrust only specific parts of the project or the entire development cycle, depending on your needs.",
    },
    {
      question: "How can I take the project over?",
      answer:
        "The project can be taken over on the basis of detailed technical specifications prepared by our team.",
    },
    {
      question:
        "Do you guarantee a full cycle (designing, development, testing, maintaining)?",
      answer:
        "Yes, we provide end-to-end services, ensuring every phase is handled professionally.",
    },
    {
      question: "What project management methods do you use?",
      answer: "We use Agile and Scrum methodologies for efficient project management.",
    },
    {
      question:
        "How can I control the software designing process if I cooperate with you?",
      answer:
        "You'll have access to our project management tools and regular updates during the process.",
    },
    {
      question:
        "Who is entitled to the code in your body leasing model?",
      answer:
        "The ownership of the code depends on the terms agreed in the contract.",
    },
  ];

  const [activeQuestion, setActiveQuestion] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setActiveQuestion(activeQuestion === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 bg-[#F6F4F1]">
      <div className="w-full max-w-[500px] mx-auto px-4">
        <h2 className="text-[36px] font-extrabold text-center text-[#1A1A1A] mb-12">
          FAQ
        </h2>
        <div className="space-y-4">
          {questions.map((item, index) => (
            <div
              key={index}
              className="bg-[#F0EEEC] rounded-lg p-4"
            >
              <button
                className="w-full text-left flex justify-between items-center"
                onClick={() => toggleQuestion(index)}
              >
                <span className="text-[18px] font-semibold text-[#1A1A1A]">
                  {item.question}
                </span>
                <span className="text-[#3257A5] text-lg">
                  {activeQuestion === index ? "-" : "+"}
                </span>
              </button>
              {activeQuestion === index && (
                <div className="mt-2 text-gray-600 text-[16px]">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
