export const VariantSlideInUp = {
  initial: { opacity: 0, y: 100 },
  animate: { opacity: 1, y: 0 },
};

export const VariantSlideSidebar = {
  initial: { opacity: 0, x: -250 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -250 },
  transition: { durantion: 0.5, type: "linear" },
};
