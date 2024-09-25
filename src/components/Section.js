import React, { useEffect, useRef } from 'react';

const Section = ({ id, children }) => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const currentRef = sectionRef.current; // Store the current ref value

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          currentRef.classList.add('animate-slide-up');
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
        observer.unobserve(currentRef); // Use the local variable in the cleanup function
      }
    };
  }, []);

  return (
    <section ref={sectionRef} id={id} className="opacity-0">
      {children}
    </section>
  );
};

export default Section;
