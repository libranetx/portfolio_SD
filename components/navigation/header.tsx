"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const pathname = usePathname();

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/pages/about", label: "About" },
    { href: "/pages/projects", label: "Projects" },
    { href: "/pages/contact", label: "Contact" },
    { href: "/pages/skills", label: "Skills" },
    { href: "/pages/resume", label: "Resume" },
  ];

  // Extracted active link styling logic
  const getLinkClass = (href: string) => {
    const baseClasses = "hover:text-muted-foreground transition-colors";
    const isActive = pathname === href;

    return `${baseClasses} ${
      isActive ? "text-gray-500 font-bold" : "text-gray-300 font-medium"
    }`;
  };

  return (
    <nav className="fixed top=0 left-0 right-0 z-50 bg-black card-class">
      <div className="container-max">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="text-2xl font-bold gradient-text ml-5">
            Tadios Tsegaye
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 mr-5">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={getLinkClass(item.href)}
                {...(pathname === item.href && {
                  "aria-current": "page",
                })}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-muted-foreground"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <>
            {/* Background Overlay */}
            <div
              className="fixed inset-0 bg-black/50 z-40 md:hidden"
              onClick={() => setIsOpen(false)}
            />

            {/* Mobile Sidebar Menu with Enhanced Frosted Glass */}
            <div
              className="sidebar fixed top-0 right-0 h-100 w-full z-50 shadow-lg transform transition-transform duration-300 ease-in-out md:hidden"
              style={{
                background: "rgba(0, 0, 0, 0.3)",
                backdropFilter: "blur(5px)",
                WebkitBackdropFilter: "blur(10px)",
              }}
            >
              <div className="flex flex-col h-full pt-20 pb-6">
                {/* Close Button */}
                <button
                  className="absolute top-6 right-5 p-2 text-gray-300 hover:text-white"
                  onClick={() => setIsOpen(false)}
                >
                  <X size={24} />
                </button>

                {/* Navigation Links */}
                <div className="flex flex-col space-y-6 px-6">
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`text-lg hover:text-muted-foreground transition-colors ${
                        pathname === item.href
                          ? "text-gray-500 font-bold"
                          : "text-gray-300 font-medium"
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </nav>
  );
};

export default Header;
