import React, { useEffect, useRef } from 'react';

const Section = ({ id, children }) => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const currentRef = sectionRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          currentRef.classList.remove('opacity-0', 'translate-y-10');
          currentRef.classList.add('opacity-100', 'translate-y-0');
        }
      },
      {
        threshold: 0.1, // Trigger when 10% of the section is visible
      }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} id={id} className="transition-opacity transition-transform duration-1000 opacity-0 translate-y-10">
      {children}
    </section>
  );
};

export default Section;
