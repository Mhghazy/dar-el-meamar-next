/**
 * Pure stack geometry for the draggable card deck.
 */

export function deckDepth(i: number, topIdx: number, n: number): number {
  return ((topIdx - i) % n + n) % n;
}

export type DeckCardVisualStyle = {
  scale: number;
  rotateZ: number;
  zIndex: number;
  opacity: number;
};

export function cardStyleFromDepth(d: number, n: number): DeckCardVisualStyle {
  const t = d / Math.max(n - 1, 1);
  return {
    scale: 1 - t * 0.8,
    rotateZ: -4 + t * 75,
    zIndex: n - d,
    opacity: d > 12 ? 0 : 1,
  };
}
