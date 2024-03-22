export const variants = {
  offscreen: {
    y: -50,
  },
  onscreen: {
    y: 0,
    transition: {
      type: "spring",
      duration: 1.5,
    },
  },
};

export const container = {
  hidden: { opacity: 0, y: -100 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.3,
      type: "spring",
      stiffness: 100,
      damping: 10,
    },
  },
};

export const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};
