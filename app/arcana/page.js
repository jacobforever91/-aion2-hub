import Link from "next/link";
import {ArrowLeft, ArrowRight, ExternalLink, Layers3, Sparkles, Swords} from "lucide-react";
import styles from "./arcana.module.css";

export const metadata={
  title:"Arcana | AION 2 VISION",
  description:"Explore AION 2 Arcana references and add Arcana notes to a build.",
};

const officialUpdate="https://about.ncsoft.com/en/news/article/aion2_update_260223";
const communityCatalog="https://aion2hub.com/database?cat=Arcana&region=kr";

export default function ArcanaPage(){
  return <main className={styles.page}>
    <Link className={styles.back} href="/?menu=open" aria-label="Back to the Game menu"><ArrowLeft/></Link>
    <div className={styles.content}>
      <header className={styles.hero}>
        <span className={styles.eyebrow}><Sparkles/> GAME · CHARACTER SYSTEM</span>
        <h1>Arcana</h1>
        <p>Explore Arcana card references, then record the cards you want to use in your build.</p>
      </header>

      <section className={styles.systemGrid} aria-label="Arcana overview">
        <article className={styles.systemCard}><span><Layers3/></span><div><h2>Card effects</h2><p>Review the stats and effects listed for each Arcana card.</p></div></article>
        <article className={styles.systemCard}><span><Swords/></span><div><h2>Set bonuses</h2><p>Keep an eye on set effects and new Arcana parts added in game updates.</p></div></article>
      </section>

      <section className={styles.actions} aria-label="Arcana tools">
        <a className={styles.actionCard} href={communityCatalog} target="_blank" rel="noreferrer">
          <span className={styles.actionIcon}><Layers3/></span>
          <span className={styles.actionCopy}><small>UNOFFICIAL COMMUNITY REFERENCE</small><strong>Browse Arcana cards</strong><em>Open the card catalog, stats, and item details</em></span>
          <ExternalLink className={styles.actionArrow}/>
        </a>
        <Link className={styles.actionCard} href="/builds?tab=progression&section=arcana#arcana-setup">
          <span className={styles.actionIcon}><Sparkles/></span>
          <span className={styles.actionCopy}><small>AION 2 VISION BUILD CREATOR</small><strong>Record Arcana in a build</strong><em>Go to the Arcana fields saved with your build</em></span>
          <ArrowRight className={styles.actionArrow}/>
        </Link>
      </section>

      <aside className={styles.sourceNote}>
        <strong>Region and patch matter</strong>
        <p>Arcana parts and set effects can change with updates. The card catalog is an unofficial community reference; check the selected server region before relying on its values.</p>
        <a href={officialUpdate} target="_blank" rel="noreferrer">Read an official Arcana update <ExternalLink/></a>
      </aside>
    </div>
  </main>;
}
