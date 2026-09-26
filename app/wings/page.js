import ProgressionCatalog from "../progression/ProgressionCatalog";

export const metadata = {
  title: "Wings | DAEVEXUS",
  description: "Browse AION 2 wings, faction, grade, and documented enchantment data.",
};

export default function WingsPage() {
  return <ProgressionCatalog kind="wings" />;
}
