// Each skills class uses its own locally hosted artwork.
export const classScenes = {
  assassin: "/backgrounds/classes/assassin.webp",
  gladiator: "/backgrounds/classes/gladiator.webp",
  templar: "/backgrounds/classes/templar.webp",
  ranger: "/backgrounds/classes/ranger.webp",
  sorcerer: "/backgrounds/classes/sorcerer.webp",
  spiritmaster: "/backgrounds/classes/spiritmaster.webp",
  cleric: "/backgrounds/classes/cleric.webp",
  chanter: "/backgrounds/classes/chanter.webp",
};

export function classSceneStyle(slug) {
  const scene = classScenes[slug] || classScenes.gladiator;
  return {"--class-scene": `url("${scene}")`};
}
