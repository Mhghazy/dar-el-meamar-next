import {
  FaFacebookF,
  FaLinkedinIn,
  FaWhatsapp,
  FaInstagram,
  FaPhoneAlt,
  FaTiktok,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export type SocialIcon = {
  href: string;
  bg: string;
  icon: JSX.Element;
  label: string;
};

export const defaultIcons: SocialIcon[] = [
  {
    href: "https://www.facebook.com/share/1CkkfEbiKA/",
    bg: "bg-blue-600 hover:bg-blue-700",
    icon: <FaFacebookF size={20} />,
    label: "Facebook",
  },
  {
    href: "https://x.com/darelmeamar",
    bg: "bg-black hover:bg-gray-900",
    icon: <FaXTwitter size={20} />,
    label: "X (Twitter)",
  },
  {
    href: "https://www.linkedin.com/company/110319317/admin/settings/",
    bg: "bg-blue-800 hover:bg-blue-900",
    icon: <FaLinkedinIn size={20} />,
    label: "LinkedIn",
  },
  {
    href: "https://instagram.com",
    bg: "bg-pink-500 hover:bg-pink-600",
    icon: <FaInstagram size={20} />,
    label: "Instagram",
  },
  {
    href: "https://www.tiktok.com/@darelmeamar?lang=en",
    bg: "bg-black hover:bg-gray-800",
    icon: <FaTiktok size={20} />,
    label: "TikTok",
  },
  {
    href: "https://wa.me/201507412000",
    bg: "bg-green-500 hover:bg-green-600",
    icon: <FaWhatsapp size={20} />,
    label: "WhatsApp",
  },
  {
    href: "tel:+23131088",
    bg: "bg-red-500 hover:bg-red-600",
    icon: <FaPhoneAlt size={20} />,
    label: "Call",
  },
];
