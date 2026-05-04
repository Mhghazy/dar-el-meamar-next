import { Variants } from 'framer-motion';
import { easeInOut, easeOut } from "framer-motion";

export const scaleIn: Variants = {
  hidden: {
    scale: 0.8,
    opacity: 0,
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: 'easeInOut',
      type: 'tween',
    },
  },
};

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut', type: 'tween' },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5, ease: 'easeOut', type: 'tween' },
  },
};

export const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: 'easeOut', type: 'tween' },
  },
};

export const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: 'easeOut', type: 'tween' },
  },
};

export const rotateIn: Variants = {
  hidden: { opacity: 0, rotate: -90 },
  visible: {
    opacity: 1,
    rotate: 0,
    transition: { duration: 0.5, ease: 'easeOut', type: 'tween' },
  },
};

export const zoomIn: Variants = {
  hidden: { scale: 0.5, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.5, ease: 'easeOut', type: 'tween' },
  },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};
export const textVariant: Variants = {
  hidden: {
    y: 50,
    opacity: 0,
  },
visible: {
  y: 0,
  opacity: 1,
  transition: {
    duration: 0.6,
    ease: 'easeOut',
    type: 'tween',
  },
}
};

export const hoverScale: Variants = {
  rest: { scale: 1, rotate: 0 },
  hover: {
    scale: 1.08,
    rotate: 2,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 15,
    },
  },
};

export const hoverGlow: Variants = {
  rest: { scale: 1, boxShadow: "0px 0px 0px rgba(0,0,0,0)" },
  hover: {
    scale: 1.05,
    boxShadow: "0px 8px 25px rgba(20, 184, 166, 0.5)",
    transition: { duration: 0.3, ease: "easeInOut" },
  },
};

export const hoverLift: Variants = {
  rest: { y: 0 },
  hover: {
    y: -8,
    transition: { duration: 0.25, ease: "easeOut" },
  },
};

export const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeOut },
  },
  rest: { scale: 1, boxShadow: "0px 0px 0px rgba(0,0,0,0)" },
  hover: {
    scale: 1.05,
    boxShadow: "0px 8px 25px rgba(20, 184, 166, 0.5)",
    transition: { duration: 0.3, ease: easeInOut },
  },
};

// Building Construction Animations
export const buildingRise: Variants = {
  hidden: {
    scaleY: 0,
    originY: 1,
    opacity: 0
  },
  visible: {
    scaleY: 1,
    originY: 1,
    opacity: 1,
    transition: {
      duration: 1.5,
      ease: [0.43, 0.13, 0.23, 0.96],
      opacity: { duration: 0.5 }
    },
  },
};

export const floorByFloor: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

export const floor: Variants = {
  hidden: {
    scaleY: 0,
    originY: 1,
    opacity: 0
  },
  visible: {
    scaleY: 1,
    originY: 1,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export const blueprintDraw: Variants = {
  hidden: {
    pathLength: 0,
    opacity: 0
  },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: {
        duration: 2,
        ease: "easeInOut"
      },
      opacity: { duration: 0.3 }
    },
  },
};

export const brickByBrick: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.2,
    },
  },
};

export const brick: Variants = {
  hidden: {
    scale: 0,
    opacity: 0
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: "backOut",
    },
  },
};

export const craneSwing: Variants = {
  rest: {
    rotate: -5,
  },
  animate: {
    rotate: [5, -5],
    transition: {
      duration: 3,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut",
    },
  },
};

export const foundationToRoof: Variants = {
  hidden: {
    height: "0%",
    opacity: 0
  },
  visible: {
    height: "100%",
    opacity: 1,
    transition: {
      duration: 1.8,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

export const slideUp: Variants = {
  hidden: {
    y: 100,
    opacity: 0
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

export const constructionReveal: Variants = {
  hidden: {
    clipPath: "inset(100% 0% 0% 0%)",
    opacity: 0
  },
  visible: {
    clipPath: "inset(0% 0% 0% 0%)",
    opacity: 1,
    transition: {
      duration: 1.2,
      ease: [0.65, 0, 0.35, 1],
    },
  },
};

export const scaffoldingBuild: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

export const scaffoldPiece: Variants = {
  hidden: {
    scaleX: 0,
    opacity: 0
  },
  visible: {
    scaleX: 1,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export const pulseGlow: Variants = {
  rest: {
    boxShadow: "0px 0px 0px rgba(20, 184, 166, 0)"
  },
  animate: {
    boxShadow: [
      "0px 0px 20px rgba(20, 184, 166, 0.3)",
      "0px 0px 40px rgba(20, 184, 166, 0.6)",
      "0px 0px 20px rgba(20, 184, 166, 0.3)",
    ],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};
