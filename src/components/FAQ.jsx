import React, { useState } from 'react';
import { HelpCircle, ChevronDown } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import { SectionHeading } from './ui/SectionHeading';
import { Card } from './ui/Card';
import { FAQS_DATA } from '../data/content';

export function FAQ() {
  const [ref, isInView] = useInView({ threshold: 0.15 });
  const [openIndex, setOpenIndex] = useState(0); // Open first by default

  const toggleAccordion = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <section id="faqs" className="section-wrapper">
      <div className="content-container">
        <div ref={ref} className={`reveal-init ${isInView ? 'reveal-visible' : ''}`}>
          <SectionHeading
            badge="Got Questions?"
            badgeIcon={HelpCircle}
            title="Frequently Asked"
            titleHighlight="Questions."
            subtitle="Transparent answers regarding our educational philosophy, prerequisites, and learning roadmap."
          />

          <div className="faq-container">
            {FAQS_DATA.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={faq.question}
                  className={`faq-item glass-card ${isOpen ? 'open' : ''}`}
                  onClick={() => toggleAccordion(idx)}
                >
                  <button
                    type="button"
                    className="faq-question-btn"
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${idx}`}
                  >
                    <span className="faq-question-text">{faq.question}</span>
                    <span className={`faq-chevron ${isOpen ? 'rotate' : ''}`}>
                      <ChevronDown size={18} />
                    </span>
                  </button>

                  <div
                    id={`faq-answer-${idx}`}
                    className={`faq-answer-wrap ${isOpen ? 'show' : ''}`}
                  >
                    <p className="faq-answer-text">{faq.answer}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
