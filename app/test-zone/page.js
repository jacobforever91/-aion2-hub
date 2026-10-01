import Link from "next/link";
import {testZoneResearch, testZoneRules} from "./researchData";

const statusStyle={
  VERIFIED:{border:"1px solid rgba(118,224,170,.48)",color:"#9cf2c5",background:"rgba(35,105,72,.2)"},
  RESEARCH:{border:"1px solid rgba(223,185,92,.48)",color:"#f2d18a",background:"rgba(110,79,24,.2)"}
};

export const metadata={
  title:"Zona de Prueba · DAEVEXUS",
  description:"DAEVEXUS isolated research and experimental data workspace."
};

export default function TestZonePage(){
  return (
    <main style={{minHeight:"100vh",background:"radial-gradient(circle at 50% 0%, #172638 0%, #091019 44%, #05080d 100%)",color:"#eef4f8",padding:"42px 28px 70px",fontFamily:"Arial, sans-serif"}}>
      <div style={{maxWidth:1280,margin:"0 auto"}}>
        <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",gap:20,marginBottom:28}}>
          <div>
            <div style={{fontSize:12,letterSpacing:3,color:"#d6b566",marginBottom:9}}>DAEVEXUS LAB</div>
            <h1 style={{fontSize:"clamp(34px,4vw,58px)",margin:0,fontWeight:650,letterSpacing:-1}}>Zona de Prueba</h1>
            <p style={{maxWidth:820,color:"#9eafbd",fontSize:16,lineHeight:1.6,margin:"14px 0 0"}}>Área aislada para investigación, parsers, niveles de skills y datos todavía no promovidos a producción. Aquí conservamos evidencia sin arriesgar las pantallas estables.</p>
          </div>
          <Link href="/?menu=open" style={{border:"1px solid rgba(222,185,96,.55)",color:"#ecd28e",textDecoration:"none",padding:"11px 16px",borderRadius:8,whiteSpace:"nowrap"}}>← Menu</Link>
        </div>

        <section style={{border:"1px solid rgba(218,181,95,.28)",background:"rgba(9,16,24,.76)",borderRadius:16,padding:22,marginBottom:24}}>
          <div style={{fontSize:13,letterSpacing:2,color:"#d6b566",marginBottom:14}}>SAFETY RULES</div>
          <div style={{display:"grid",gap:9}}>
            {testZoneRules.map((rule,index)=><div key={rule} style={{display:"flex",gap:11,color:"#c8d3dc",lineHeight:1.5}}><b style={{color:"#d6b566"}}>{String(index+1).padStart(2,"0")}</b><span>{rule}</span></div>)}
          </div>
        </section>

        <section>
          <div style={{display:"flex",alignItems:"baseline",justifyContent:"space-between",gap:16,marginBottom:14}}>
            <h2 style={{margin:0,fontSize:22}}>Research Vault</h2>
            <span style={{fontSize:12,color:"#718390",letterSpacing:1.4}}>PRESERVED TEST DATA</span>
          </div>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(320px,1fr))",gap:16}}>
            {testZoneResearch.map(entry=>(
              <article key={entry.id} style={{border:"1px solid rgba(136,162,181,.2)",background:"linear-gradient(180deg,rgba(20,32,43,.88),rgba(8,14,20,.9))",borderRadius:14,padding:20,boxShadow:"0 18px 45px rgba(0,0,0,.2)"}}>
                <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",gap:12,marginBottom:13}}>
                  <span style={{fontSize:11,letterSpacing:1.5,padding:"6px 9px",borderRadius:999,...(statusStyle[entry.status]||statusStyle.RESEARCH)}}>{entry.status}</span>
                  <code style={{fontSize:11,color:"#647784"}}>{entry.id}</code>
                </div>
                <h3 style={{fontSize:20,margin:"0 0 7px"}}>{entry.title}</h3>
                <p style={{color:"#92a5b4",lineHeight:1.55,margin:"0 0 14px"}}>{entry.summary}</p>
                <ul style={{margin:0,paddingLeft:19,color:"#d0d9df",lineHeight:1.55}}>
                  {entry.facts.map(fact=><li key={fact} style={{marginBottom:7}}>{fact}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section style={{marginTop:28,borderTop:"1px solid rgba(255,255,255,.08)",paddingTop:20,display:"flex",flexWrap:"wrap",gap:10}}>
          <Link href="/classes" style={{color:"#b9c9d4",textDecoration:"none",border:"1px solid rgba(255,255,255,.13)",padding:"9px 12px",borderRadius:8}}>Skills</Link>
          <Link href="/stigmas" style={{color:"#b9c9d4",textDecoration:"none",border:"1px solid rgba(255,255,255,.13)",padding:"9px 12px",borderRadius:8}}>Stigmas</Link>
          <Link href="/daevanion" style={{color:"#b9c9d4",textDecoration:"none",border:"1px solid rgba(255,255,255,.13)",padding:"9px 12px",borderRadius:8}}>Daevanion</Link>
          <Link href="/arcana" style={{color:"#b9c9d4",textDecoration:"none",border:"1px solid rgba(255,255,255,.13)",padding:"9px 12px",borderRadius:8}}>Arcana</Link>
        </section>
      </div>
    </main>
  );
}
