import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";

function DockItem({
  children,
  className = "",
  onClick,
  isActive = false,
}) {
  const itemRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const item = itemRef.current;
    if (!item) return;

    // Set initial size
    gsap.set(item, {
      width: 50,
      height: 50
    });
  }, []);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (itemRef.current) {
      gsap.to(itemRef.current, {
        width: 70,
        height: 70,
        duration: 0.3,
        ease: "power2.out"
      });
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (itemRef.current) {
      gsap.to(itemRef.current, {
        width: 50,
        height: 50,
        duration: 0.3,
        ease: "power2.out"
      });
    }
  };

  return (
    <div
      ref={itemRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      className={`dock-item relative inline-flex items-center justify-center rounded-full cursor-pointer transition-all duration-300 ${
        isActive 
          ? 'bg-emerald-500/20 border-2 border-emerald-400 shadow-lg shadow-emerald-400/30' 
          : 'bg-black/60 border-2 border-neutral-700 hover:border-emerald-400/50'
      } ${className}`}
      tabIndex={0}
      role="button"
    >
      <DockIcon isActive={isActive}>{children.icon}</DockIcon>
      <DockLabel isVisible={isHovered}>{children.label}</DockLabel>
    </div>
  );
}

function DockLabel({ children, isVisible, className = "" }) {
  const labelRef = useRef(null);

  useEffect(() => {
    if (labelRef.current) {
      if (isVisible) {
        gsap.to(labelRef.current, {
          opacity: 1,
          y: -10,
          scale: 1,
          duration: 0.2,
          ease: "power2.out"
        });
      } else {
        gsap.to(labelRef.current, {
          opacity: 0,
          y: 0,
          scale: 0.8,
          duration: 0.2,
          ease: "power2.out"
        });
      }
    }
  }, [isVisible]);

  return (
    <div
      ref={labelRef}
      className={`${className} absolute -top-8 left-1/2 w-fit whitespace-nowrap rounded-lg border border-neutral-600 bg-black/90 backdrop-blur-sm px-3 py-1 text-sm text-white font-medium pointer-events-none z-10`}
      style={{ transform: "translateX(-50%)", opacity: 0 }}
    >
      {children}
    </div>
  );
}

function DockIcon({ children, isActive, className = "" }) {
  return (
    <div className={`flex items-center justify-center text-xl ${
      isActive ? 'text-emerald-400' : 'text-white hover:text-emerald-300'
    } ${className}`}>
      {children}
    </div>
  );
}

export default function Dock({
  items,
  className = "",
  position = "bottom" // "bottom", "top", "left", "right"
}) {
  const dockRef = useRef(null);

  useEffect(() => {
    const dock = dockRef.current;
    if (!dock) return;

    // Add dock container hover effect
    const handleDockMouseEnter = () => {
      gsap.to(dock, {
        scale: 1.05,
        duration: 0.3,
        ease: "power2.out"
      });
    };

    const handleDockMouseLeave = () => {
      gsap.to(dock, {
        scale: 1,
        duration: 0.3,
        ease: "power2.out"
      });
    };

    dock.addEventListener('mouseenter', handleDockMouseEnter);
    dock.addEventListener('mouseleave', handleDockMouseLeave);

    return () => {
      dock.removeEventListener('mouseenter', handleDockMouseEnter);
      dock.removeEventListener('mouseleave', handleDockMouseLeave);
    };
  }, []);

  const getPositionClasses = () => {
    switch (position) {
      case "top":
        return "fixed top-4 left-1/2 transform -translate-x-1/2";
      case "left":
        return "fixed left-4 top-1/2 transform -translate-y-1/2 flex-col";
      case "right":
        return "fixed right-4 top-1/2 transform -translate-y-1/2 flex-col";
      case "top-right":
        return "sticky z-20 top-0 left-0 w-full flex justify-end";
      case "bottom":
      default:
        return "fixed bottom-4 left-1/2 transform -translate-x-1/2";
    }
  };

  return (
    <div className={`${getPositionClasses()} ${position === 'top-right' ? 'z-20' : 'z-50'}`}>
      <div
        ref={dockRef}
        className={`${className} flex items-center gap-3 rounded-2xl border-2 border-neutral-700/50 bg-black/80 backdrop-blur-lg p-3 shadow-2xl shadow-black/50 ${
          position === 'top-right' ? 'mr-6 mt-4' : ''
        }`}
        role="toolbar"
        aria-label="Navigation dock"
      >
        {items.map((item, index) => (
          <DockItem
            key={index}
            onClick={item.onClick}
            className={item.className}
            isActive={item.isActive}
          >
            {{
              icon: item.icon,
              label: item.label
            }}
          </DockItem>
        ))}
      </div>
    </div>
  );
}
