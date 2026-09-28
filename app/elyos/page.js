export default function ElyosPage(){
  return (
    <main style={{minHeight:"100vh",background:"linear-gradient(180deg,#dfefff 0%,#eef7ff 45%,#d6e7f5 100%)",color:"#182433",fontFamily:"Georgia,serif"}}>
      <section style={{minHeight:"100vh",display:"grid",placeItems:"center",padding:"80px 24px",textAlign:"center"}}>
        <div style={{maxWidth:900}}>
          <div style={{fontSize:14,letterSpacing:6,color:"#9a7a34",marginBottom:18}}>DAEVEXUS · FACTION PROFILE</div>
          <h1 style={{fontSize:"clamp(56px,9vw,128px)",letterSpacing:12,margin:"0 0 20px"}}>ELYOS</h1>
          <div style={{fontSize:18,letterSpacing:5,color:"#9a7a34",marginBottom:34}}>LIGHT CREATES HOPE</div>
          <p style={{fontSize:"clamp(18px,2.2vw,28px)",lineHeight:1.7,maxWidth:780,margin:"0 auto 40px"}}>
            The Elyos embody the radiant side of Atreia: luminous cities, celestial architecture and a civilization shaped by beauty, ambition and the promise of a brighter future.
          </p>
          <p style={{fontSize:16,lineHeight:1.8,maxWidth:720,margin:"0 auto 46px",opacity:.78}}>
            This page will become the dedicated Elyos guide inside DAEVEXUS, with faction background, visual identity, starting context and the key differences players should know before choosing their path.
          </p>
          <a href="/" style={{display:"inline-block",padding:"14px 28px",border:"1px solid #b79b5b",textDecoration:"none",color:"#182433",letterSpacing:3,background:"rgba(255,255,255,.5)"}}>← BACK TO HOME</a>
        </div>
      </section>
    </main>
  )
}
