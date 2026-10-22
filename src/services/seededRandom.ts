/**
 * ============================================================================
 * GLOBAL PERSPECTIVES LEARNING HUB — GRADE 10
 * PHASE 3A: SEEDED PSEUDO-RANDOM NUMBER GENERATOR (PRNG) & SHUFFLE UTILITIES
 * ============================================================================
 * Purpose:
 * Provides deterministic, reproducible randomization across individual and
 * classroom Interactive Flat Panel (IFP) game sessions.
 *
 * Key Capabilities:
 * 1. Mulberry32 32-bit PRNG algorithm (fast, statistically uniform, seedable).
 * 2. Seeded Fisher-Yates shuffle for options and question pools.
 * 3. Seeded sample/pick without replacement to avoid question duplicate fatigue.
 * 4. Deterministic classroom challenge replication (same seed = identical order for all teams).
 */

export class SeededRandom {
  private state: number;

  constructor(seed?: number) {
    // If no seed provided, use current timestamp combined with a random salt
    this.state = seed !== undefined ? Math.floor(seed) : Math.floor(Date.now() ^ (Math.random() * 0x100000000));
  }

  /**
   * Generates a pseudorandom 32-bit unsigned float in range [0, 1) using Mulberry32.
   */
  public next(): number {
    this.state |= 0;
    this.state = (this.state + 0x6d2b79f5) | 0;
    let t = Math.imul(this.state ^ (this.state >>> 15), 1 | this.state);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  }

  /**
   * Returns a random integer between min (inclusive) and max (inclusive).
   */
  public nextInt(min: number, max: number): number {
    const lo = Math.ceil(min);
    const hi = Math.floor(max);
    return Math.floor(this.next() * (hi - lo + 1)) + lo;
  }

  /**
   * Deterministically shuffles an array in-place using Fisher-Yates algorithm.
   * Returns a new array copy without mutating the source array.
   */
  public shuffle<T>(array: readonly T[]): T[] {
    const copy = [...array];
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(this.next() * (i + 1));
      const temp = copy[i];
      copy[i] = copy[j];
      copy[j] = temp;
    }
    return copy;
  }

  /**
   * Picks N random items from an array without replacement.
   */
  public sample<T>(array: readonly T[], count: number): T[] {
    if (count >= array.length) {
      return this.shuffle(array);
    }
    const shuffled = this.shuffle(array);
    return shuffled.slice(0, count);
  }

  /**
   * Returns the current internal seed/state value.
   */
  public getSeed(): number {
    return this.state;
  }
}

/**
 * Creates a new SeededRandom instance.
 */
export function createSeededRandom(seed?: number): SeededRandom {
  return new SeededRandom(seed);
}

/**
 * Global utility to generate a human-readable 6-digit match seed for classroom competitions.
 * (e.g. Teacher says: "Everyone enter Room Match Code: 492817")
 */
export function generateClassroomSeed(): number {
  return Math.floor(100000 + Math.random() * 900000);
}
