"use client";
import React, { useState } from "react";
import SocialIcon from "./SocialIcon";
import ToggleButton from "./ToggleButton";
import { defaultIcons } from "./socialIconsData";

interface SocialContactProps {
  position?: "left" | "right";
  contacts?: { href: string; bg: string; icon: JSX.Element; label: string }[];
}

const SocialContact: React.FC<SocialContactProps> = ({
  position = "right",
  contacts,
}) => {
  const [open, setOpen] = useState(false);
  const sideClass = position === "left" ? "left-4" : "right-4";
  const icons = contacts || defaultIcons;

  return (
    <div
      className={`fixed ${sideClass} bottom-4 flex flex-col items-center gap-3 z-50`}
    >
      {/* Social Icons */}
      <div
        className={`flex flex-col gap-3 mb-2 transition-all duration-500 ease-in-out ${open
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-5 pointer-events-none"
          }`}
      >

        {icons.map((item, index) => (
          <SocialIcon key={index} {...item} open={open} index={index} />
        ))}
      </div>

      {/* Toggle Button */}
      <ToggleButton open={open} onClick={() => setOpen(!open)} />
    </div>
  );
};

export default SocialContact;

