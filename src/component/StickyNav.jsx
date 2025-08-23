import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { VscHome, VscAccount, VscTools, VscCode, VscMail } from "react-icons/vsc";

gsap.registerPlugin(ScrollTrigger);

const StickyNav = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [showNav, setShowNav] = useState(false);
  const navRef = useRef(null);
  const itemsRef = useRef([]);
  const progressRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      // Show nav when scrolled past home page viewport
      const homeViewportHeight = window.innerHeight;
      setShowNav(window.pageYOffset > homeViewportHeight * 0.8);

      // Determine active section based on scroll position
      const scrollPosition = window.scrollY + 100;
      
      const aboutSection = document.querySelector('.about-image')?.closest('div');
      const techSection = document.querySelector('.tech-container')?.closest('div');
      const projectSection = document.querySelector('.projects-section') || document.querySelector('[class*="project"]');
      const contactSection = document.querySelector('.contact-container');
      
      if (contactSection && scrollPosition >= contactSection.offsetTop) {
        setActiveSection('contact');
      } else if (projectSection && scrollPosition >= projectSection.offsetTop) {
        setActiveSection('projects');
      } else if (techSection && scrollPosition >= techSection.offsetTop) {
        setActiveSection('technologies');
      } else if (aboutSection && scrollPosition >= aboutSection.offsetTop) {
        setActiveSection('about');
      } else {
        setActiveSection('home');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // GSAP ScrollTrigger for progress bar
    if (progressRef.current) {
      // Set initial width to 0
      gsap.set(progressRef.current, { width: '0%' });
      
      gsap.to(progressRef.current, {
        width: '100%',
        ease: 'none',
        scrollTrigger: { 
          trigger: "body",
          scrub: 0.3,
          start: "top top",
          end: "bottom bottom",
          onUpdate: self => {
            // Only update progress when sticky nav is visible
            if (showNav) {
              gsap.set(progressRef.current, { width: `${self.progress * 100}%` });
            } else {
              gsap.set(progressRef.current, { width: '0%' });
            }
          }
        }
      });
    }

    // Initialize dock items with GSAP
    itemsRef.current.forEach(item => {
      if (item) {
        gsap.set(item, {
          scale: 1
        });
      }
    });

    // Add hover effects
    itemsRef.current.forEach((item, index) => {
      if (item) {
        const handleMouseEnter = () => {
          gsap.to(item, {
            scale: 1.2,
            duration: 0.3,
            ease: "power2.out"
          });
        };

        const handleMouseLeave = () => {
          gsap.to(item, {
            scale: 1,
            duration: 0.3,
            ease: "power2.out"
          });
        };

        item.addEventListener('mouseenter', handleMouseEnter);
        item.addEventListener('mouseleave', handleMouseLeave);
      }
    });
  }, []);

  const scrollToSection = (targetSection) => {
    if (targetSection === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    let element;
    if (targetSection === 'about') {
      element = document.querySelector('.about-image')?.closest('div');
    } else if (targetSection === 'technologies') {
      element = document.querySelector('.tech-container')?.closest('div');
    } else if (targetSection === 'projects') {
      element = document.querySelector('.projects-section') || document.querySelector('[class*="project"]');
    } else if (targetSection === 'contact') {
      element = document.querySelector('.contact-container');
    }

    if (element) {
      const navHeight = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - navHeight;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const NavItem = ({ icon, label, isActive, onClick, index }) => {
    const [showTooltip, setShowTooltip] = useState(false);
    const tooltipRef = useRef(null);

    const handleMouseEnter = () => {
      setShowTooltip(true);
      if (tooltipRef.current) {
        gsap.to(tooltipRef.current, {
          opacity: 1,
          y: -10,
          scale: 1,
          duration: 0.2,
          ease: "power2.out"
        });
      }
    };

    const handleMouseLeave = () => {
      setShowTooltip(false);
      if (tooltipRef.current) {
        gsap.to(tooltipRef.current, {
          opacity: 0,
          y: 0,
          scale: 0.8,
          duration: 0.2,
          ease: "power2.out"
        });
      }
    };

    return (
      <li
        ref={el => itemsRef.current[index] = el}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={onClick}
        className={`relative flex items-center justify-center w-11 h-11 rounded-full cursor-pointer transition-all duration-300 shadow-lg mx-1 ${
          isActive 
            ? 'bg-gradient-to-br from-emerald-500/40 to-emerald-600/30 border-2 border-emerald-400 shadow-emerald-400/50' 
            : 'bg-gradient-to-br from-neutral-800/80 to-neutral-900/60 border-2 border-neutral-600/50 hover:border-emerald-400/60 hover:shadow-emerald-400/20'
        }`}
        tabIndex={0}
        role="button"
      >
        <div className={`flex items-center justify-center text-base ${
          isActive ? 'text-emerald-300' : 'text-neutral-200 hover:text-emerald-200'
        }`}>
          {icon}
        </div>
        
        {/* Tooltip */}
        <div
          ref={tooltipRef}
          className="absolute -top-10 left-1/2 w-fit whitespace-nowrap rounded-xl border border-neutral-500/60 bg-gradient-to-r from-black/95 to-neutral-900/90 backdrop-blur-sm px-4 py-2 text-sm text-neutral-100 font-medium pointer-events-none z-10 opacity-0 shadow-lg"
          style={{ transform: "translateX(-50%)" }}
        >
          {label}
        </div>
      </li>
    );
  };

  const navItems = [
    { 
      icon: <VscHome size={16} />, 
      label: 'Home', 
      onClick: () => scrollToSection('home'),
      isActive: activeSection === 'home'
    },
    { 
      icon: <VscAccount size={16} />, 
      label: 'About Me', 
      onClick: () => scrollToSection('about'),
      isActive: activeSection === 'about'
    },
    { 
      icon: <VscTools size={16} />, 
      label: 'Technologies', 
      onClick: () => scrollToSection('technologies'),
      isActive: activeSection === 'technologies'
    },
    { 
      icon: <VscCode size={16} />, 
      label: 'Projects', 
      onClick: () => scrollToSection('projects'),
      isActive: activeSection === 'projects'
    },
    { 
      icon: <VscMail size={16} />, 
      label: 'Contact', 
      onClick: () => scrollToSection('contact'),
      isActive: activeSection === 'contact'
    },
  ];

  return (
    <div className={`sticky top-6 z-40 w-full flex justify-center transition-all duration-500 ${
      showNav ? 'opacity-100' : 'opacity-0 pointer-events-none'
    }`}>
      <div className="relative">
        {/* Progress Bar */}
        <div className="absolute -bottom-2 left-0 w-full h-1 bg-neutral-700/50 rounded-full">
          <div
            ref={progressRef}
            className="h-full bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-full"
            style={{ width: '0%' }}
          />
        </div>
        
        {/* Navigation Dock */}
        <nav
          ref={navRef}
          className="flex items-center gap-3 rounded-3xl border-2 border-neutral-600/60 bg-gradient-to-r from-black/90 to-neutral-900/80 backdrop-blur-xl px-6 py-3 shadow-2xl shadow-black/60"
          role="toolbar"
          aria-label="Navigation dock"
        >
          <ul className="flex items-center gap-3">
          {navItems.map((item, index) => (
            <NavItem
              key={index}
              icon={item.icon}
              label={item.label}
              isActive={item.isActive}
              onClick={item.onClick}
              index={index}
            />
          ))}
        </ul>
      </nav>
      </div>
    </div>
  );
};

export default StickyNav;
