import EquipmentBrowser from "./EquipmentBrowser";
import "./equipment-desktop.css";

export const metadata = {
  title: "Equipment Encyclopedia | DAEVEXUS",
  description: "Search AION 2 weapons, armor and accessories by name and rarity.",
};

export default function EquipmentPage() {
  return <EquipmentBrowser />;
}
