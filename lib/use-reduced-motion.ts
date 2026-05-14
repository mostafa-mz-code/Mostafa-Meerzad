"use client";

import type { Variants } from "framer-motion";
import { useReducedMotion } from "motion/react";

const reducedVariants: Variants = { hidden: {}, visible: {} };

export function useAnimationVariants(variants: Variants): Variants {
  const shouldReduce = useReducedMotion();
  if (shouldReduce) return reducedVariants;
  return variants;
}
