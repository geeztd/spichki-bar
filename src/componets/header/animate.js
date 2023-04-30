export const menuAnimate = {
  open: {
    transform: "translateX(0rem)",
    opacity: 1,
  },
  close: {
    transform: "translateX(-5rem)",
    opacity: 0,
  },
};

export const burgAnimateTop = {
  open: {
    transform: "rotate(45deg) translateY(5px)",
  },
  close: {
    transform: "rotate(0deg) translateY(0px)",
  },
};

export const burgAnimateMidle = {
  open: {
    opacity: "0",
  },
  close: {
    opacity: "1",
  },
};

export const burgAnimateButtom = {
  open: {
    transform: "rotate(-45deg) translateY(-13.5px) translateX(6px)",
  },
  close: {
    transform: "rotate(0deg) translateY(0px) translateX(0px)",
  },
};

export const burgAnimate = {
  open: {
    transform: "translateY(5px) translateX(10px)",
  },
  close: {
    transform: "translateY(0px) translateX(0px)",
  },
};
