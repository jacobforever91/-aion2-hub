import ProgressionCatalog from "../progression/ProgressionCatalog";

export const metadata = {
  title: "Pets | AION 2 VISION",
  description: "Explore AION 2 pet levels, genus growth grades, and stat bonuses.",
};

export default function PetsPage() {
  return <ProgressionCatalog kind="pets" />;
}
