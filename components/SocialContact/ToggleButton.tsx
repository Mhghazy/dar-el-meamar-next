import React from "react";
import { FaPlus, FaTimes } from "react-icons/fa";

interface ToggleButtonProps {
  open: boolean;
  onClick: () => void;
}

const ToggleButton: React.FC<ToggleButtonProps> = ({ open, onClick }) => {
  return (
    <button
      onClick={onClick}
      aria-label="Toggle Social Contacts"
      className="bg-gray-800 dark:bg-gray-200 text-white dark:text-black p-4 rounded-full shadow-lg transition-transform duration-300 transform hover:scale-110"
    >
      {open ? <FaTimes size={20} /> : <FaPlus size={20} />}
    </button>
  );
};

export default ToggleButton;
