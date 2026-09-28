import FactionScene from "../factions/FactionScene";

export const metadata = {
  title: "Elyos | DAEVEXUS",
  description: "Discover the radiant Elyos, their pride and their place in the lore of Atreia.",
};

export default function ElyosPage() {
  return <FactionScene faction="elyos" standalone />;
}
