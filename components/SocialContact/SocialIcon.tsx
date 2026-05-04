import React from "react";

interface SocialIconProps {
  href: string;
  bg: string;
  icon: JSX.Element;
  label: string;
  open: boolean;
  index: number;
}

const SocialIcon: React.FC<SocialIconProps> = ({ href, bg, icon, label, open, index }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      title={label}
      className={`${bg} text-white  p-3 rounded-full shadow-md transition-transform duration-300 transform ${open
        ? `delay-[${index * 100}ms] scale-100 translate-x-0`
        : "scale-0 translate-x-5"
        }`}
    >
      {icon}
    </a>
  );
};

export default SocialIcon;
