import ProgressionCatalog from "../progression/ProgressionCatalog";

export const metadata = {
  title: "Wings | AION 2 VISION",
  description: "Browse AION 2 wings, faction, grade, and documented enchantment data.",
};

export default function WingsPage() {
  return <ProgressionCatalog kind="wings" />;
}
