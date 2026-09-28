export default function AsmodiansPage(){
  return (
    <main style={{minHeight:"100vh",background:"linear-gradient(180deg,#190e19 0%,#24111e 50%,#08080d 100%)",color:"#f2e7e9",fontFamily:"Georgia,serif"}}>
      <section style={{minHeight:"100vh",display:"grid",placeItems:"center",padding:"80px 24px",textAlign:"center"}}>
        <div style={{maxWidth:900}}>
          <div style={{fontSize:14,letterSpacing:6,color:"#c58b78",marginBottom:18}}>DAEVEXUS · FACTION PROFILE</div>
          <h1 style={{fontSize:"clamp(56px,9vw,128px)",letterSpacing:12,margin:"0 0 20px"}}>ASMODIANS</h1>
          <div style={{fontSize:18,letterSpacing:5,color:"#c58b78",marginBottom:34}}>POWER FOR A GREATER TOMORROW</div>
          <p style={{fontSize:"clamp(18px,2.2vw,28px)",lineHeight:1.7,maxWidth:780,margin:"0 auto 40px"}}>
            The Asmodians represent the darker, harsher side of Atreia: a people forged by adversity, strength and determination beneath a dramatic crimson sky.
          </p>
          <p style={{fontSize:16,lineHeight:1.8,maxWidth:720,margin:"0 auto 46px",opacity:.78}}>
            This page will become the dedicated Asmodian guide inside DAEVEXUS, covering faction background, visual identity, starting context and the key differences players should understand before choosing their path.
          </p>
          <a href="/" style={{display:"inline-block",padding:"14px 28px",border:"1px solid #8f4f48",textDecoration:"none",color:"#f2e7e9",letterSpacing:3,background:"rgba(80,0,20,.25)"}}>← BACK TO HOME</a>
        </div>
      </section>
    </main>
  )
}
