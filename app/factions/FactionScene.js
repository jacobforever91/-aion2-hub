import styles from "./factions.module.css";

const FACTIONS = {
  elyos: {
    image: "/home/1B701743-81F6-4C8A-B827-D07FFD0EDFA3.png",
    alt: "DAEVEXUS Elyos faction introduction",
  },
  asmodians: {
    image: "/home/8A997A54-D1D5-430C-AFC3-C4E5FC95C104.png",
    alt: "DAEVEXUS Asmodians faction introduction",
  },
};

export default function FactionScene({ faction }) {
  const profile = FACTIONS[faction];
  if (!profile) return null;

  return (
    <main className={styles.singleScreen}>
      <img className={styles.approvedArtwork} src={profile.image} alt={profile.alt} />
      <a className={styles.homeHotspot} href="/" aria-label="Home">
        <span className={styles.srOnly}>Home</span>
      </a>
    </main>
  );
}
