export const metadata = {
  title: "AION 2 Updates | DAEVEXUS",
  description: "AION 2 updates, patch notes, events and official-source reports curated by DAEVEXUS.",
};

export default function UpdatesPage() {
  return (
    <main className="updatesArchivePage">
      <a className="classBack" href="/#updates-screen" aria-label="Back to Update Center">←</a>
      <div className="updatesArchiveInner">
        <span className="updatesEyebrow">DAEVEXUS · INTELLIGENCE ARCHIVE</span>
        <h1>AION 2 UPDATE CENTER</h1>
        <p className="updatesLead">Verified AION 2 updates, patch notes, events and maintenance reports will appear here with their original official source.</p>
        <div className="updatesArchiveEmpty">
          <b>REPORT FEED INITIALIZING</b>
          <span>The automated update worker will populate this archive from verified official AION 2 sources.</span>
        </div>
        <a className="updatesOfficialLink" href="https://aion2.plaync.com/en-us/" target="_blank" rel="noreferrer">OFFICIAL AION 2 NEWS ↗</a>
      </div>
    </main>
  );
}
