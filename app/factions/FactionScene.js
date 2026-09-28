import { ArrowLeft, ArrowRight, Home } from "lucide-react";
import styles from "./factions.module.css";

const FACTIONS = {
  elyos: {
    name: "Elyos",
    slogan: "LIGHT CREATES HOPE",
    image: "/home/daevexus-elyos-scene.webp",
    imageAlt:
      "An Elyos-inspired warrior with white wings and golden armor above a radiant city in the clouds.",
    introduction:
      "Radiant and proud, the Elyos cherish the beauty of their homeland.",
    description:
      "One of Atreia’s two rival peoples, they carry that pride into the struggle for a shattered world. Their luminous appearance conceals an unyielding conviction in their own destiny.",
    themes: ["RADIANCE", "PRIDE", "CONVICTION"],
    other: "asmodians",
  },
  asmodians: {
    name: "Asmodians",
    slogan: "POWER FOR A GREATER TOMORROW",
    image: "/home/daevexus-asmodians-scene.webp",
    imageAlt:
      "An Asmodian-inspired warrior with black wings and dark armor before a fortress beneath a crimson sky.",
    introduction:
      "Courageous and determined, the Asmodians stand fiercely loyal to their own.",
    description:
      "Generous among their people and formidable to outsiders, they meet adversity with resolve. Across a divided Atreia, their rivalry with the Elyos shapes the struggle for their world.",
    themes: ["COURAGE", "LOYALTY", "RESOLVE"],
    other: "elyos",
  },
};

export default function FactionScene({ faction, standalone = false }) {
  const profile = FACTIONS[faction];
  if (!profile) return null;

  const Heading = standalone ? "h1" : "h2";
  const headingId = `${faction}-${standalone ? "profile" : "scene"}-title`;
  const destination = standalone ? profile.other : faction;
  const destinationName = FACTIONS[destination].name;

  const scene = (
    <section
      id={standalone ? undefined : `${faction}-scene`}
      className={`${styles.scene} ${styles[faction]}`}
      aria-labelledby={headingId}
    >
      <div className={styles.artwork}>
        <img
          className={styles.image}
          src={profile.image}
          alt={profile.imageAlt}
          width="1672"
          height="941"
          loading={standalone ? "eager" : "lazy"}
          fetchPriority={standalone ? "high" : "auto"}
        />
        <div className={styles.wash} aria-hidden="true" />
      </div>

      {standalone && (
        <div
          className={styles.navigation}
          role="navigation"
          aria-label="Faction page navigation"
        >
          <a className={styles.backLink} href="/">
            <ArrowLeft aria-hidden="true" />
            <span>BACK</span>
          </a>
          <a className={styles.homeLink} href="/" aria-label="Home">
            <Home aria-hidden="true" />
          </a>
        </div>
      )}

      <div className={styles.copy}>
        <p className={styles.eyebrow}>
          DAEVEXUS <span aria-hidden="true">·</span> FACTION LORE
        </p>
        <Heading id={headingId} className={styles.title}>
          {profile.name}
        </Heading>
        <p className={styles.slogan}>{profile.slogan}</p>
        <div className={styles.rule} aria-hidden="true" />
        <p className={styles.introduction}>{profile.introduction}</p>
        <p className={styles.description}>{profile.description}</p>

        <ul className={styles.themes} aria-label="Faction themes">
          {profile.themes.map((theme) => <li key={theme}>{theme}</li>)}
        </ul>

        <a className={styles.exploreLink} href={`/${destination}`}>
          <span>EXPLORE {destinationName.toUpperCase()}</span>
          <ArrowRight aria-hidden="true" />
        </a>
        <a
          className={styles.sourceLink}
          href="https://www.aiononline.com/about"
          target="_blank"
          rel="noreferrer"
        >
          AION faction lore
          <span className={styles.sourceArrow} aria-hidden="true">↗</span>
        </a>
      </div>
    </section>
  );

  return standalone ? (
    <main className={`${styles.page} ${styles[faction]}`}>{scene}</main>
  ) : scene;
}
