/**
 * Luxury hospitality easing — soft deceleration, never bouncy.
 * Cubic-bezier tuples for Framer Motion `ease` / `transition.ease`.
 */
export const ease = {
  /** Primary reveal — editorial, cinematic settle */
  luxury: [0.22, 1, 0.36, 1] as const,
  /** Gentle in-out for cross-fades */
  soft: [0.45, 0.05, 0.25, 1] as const,
  /** Quick, confident exit */
  out: [0.16, 1, 0.3, 1] as const,
  /** Subtle emphasis — buttons, tap feedback */
  snap: [0.33, 1, 0.68, 1] as const,
} as const;

export type EasePreset = keyof typeof ease;
