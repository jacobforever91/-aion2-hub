const metal = "#d8f3ff";
const glow = "#55d9ff";
const gold = "#d9bd82";

export default function WeaponGlyph({type}) {
  const common = {fill: "none", stroke: metal, strokeWidth: 2.5, strokeLinecap: "round", strokeLinejoin: "round"};

  return <svg viewBox="0 0 80 80" aria-hidden="true" focusable="false" {...common}>
    <circle cx="40" cy="40" r="35" fill="#071827" stroke="#1a4960" strokeWidth="1.5" />
    <circle cx="40" cy="40" r="29" fill="none" stroke="#55d9ff" strokeOpacity=".15" />
    {type === "longsword" && <g>
      <path d="M40 12 48 39 43 46 40 43 37 46 32 39 40 12Z" fill="#d8f3ff" fillOpacity=".14" />
      <path d="M40 13 44 38 40 43 36 38 40 13Z" stroke={glow} />
      <path d="m29 39 11 5 11-5M40 44v18m-7-5 7 5 7-5m-12 9h10" stroke={gold} />
      <path d="m40 18 1.5 12" stroke="#fff" strokeOpacity=".7" />
    </g>}
    {type === "greatsword" && <g>
      <path d="M40 10 51 35 47 47 40 44 33 47 29 35 40 10Z" fill="#d8f3ff" fillOpacity=".13" />
      <path d="M40 11 45 37 40 43 35 37 40 11Z" stroke={glow} />
      <path d="m27 38 13 6 13-6M40 44v19m-8-5 8 5 8-5m-13 9h10" stroke={gold} />
      <path d="m40 17 2 14" stroke="#fff" strokeOpacity=".7" />
    </g>}
    {type === "daggers" && <g>
      <path d="m28 18 4 4-3 25-4 4 1-7 2-26Zm24 0-4 4 3 25 4 4-1-7-2-26Z" fill="#d8f3ff" fillOpacity=".15" stroke={glow} />
      <path d="m25 49 7-4m23 4-7-4M26 52l-4 5 5 4 5-7m22-2 4 5-5 4-5-7" stroke={gold} />
      <path d="m29 25 2 16m20-16-2 16" stroke="#fff" strokeOpacity=".7" />
    </g>}
    {type === "bow" && <g>
      <path d="M28 15c20 9 24 41 0 50m0-50c-20 9-24 41 0 50M28 15v50" stroke={glow} />
      <path d="m28 40 27-1m-8-7 8 7-8 7" stroke={metal} />
      <path d="m21 30 7 10-7 10" stroke={gold} />
      <circle cx="28" cy="40" r="3" fill={gold} stroke="none" />
    </g>}
    {type === "spellbook" && <g>
      <path d="M21 23q11-5 19 3 8-8 19-3v34q-11-5-19 3-8-8-19-3V23Z" fill="#0b2638" stroke={glow} />
      <path d="M40 26v31M26 30q6-2 10 1m-10 6q6-2 10 1m18-8q-6-2-10 1m10 6q-6-2-10 1" stroke={metal} strokeWidth="1.8" />
      <path d="m40 30 2 4 4 1-4 2-2 4-2-4-4-2 4-1 2-4Z" fill={gold} stroke="none" />
      <path d="M26 19h10m8 0h10" stroke={gold} />
    </g>}
    {type === "orb" && <g>
      <path d="M40 17c13 0 23 10 23 23S53 63 40 63 17 53 17 40s10-23 23-23Z" fill="#102b45" stroke={glow} />
      <path d="M40 23c9 0 16 8 16 17S49 57 40 57 24 49 24 40s7-17 16-17Z" stroke={metal} strokeOpacity=".65" />
      <path d="m40 29 3 8 8 3-8 3-3 8-3-8-8-3 8-3 3-8Z" fill={glow} fillOpacity=".32" stroke={metal} />
      <circle cx="40" cy="40" r="3" fill={gold} stroke="none" />
    </g>}
    {type === "mace" && <g>
      <path d="m29 49 23-23m-28 30 7-7 5 5-7 7-5-5Z" stroke={gold} />
      <path d="m49 18 12 12-8 8-12-12 8-8Z" fill="#d8f3ff" fillOpacity=".17" stroke={glow} />
      <path d="m47 25 7 7m-11-2 8 8m8-18 4 4" stroke={metal} />
      <path d="m27 53 4 4" stroke={glow} />
    </g>}
    {type === "staff" && <g>
      <path d="m31 61 18-41" stroke={gold} strokeWidth="4" />
      <path d="M48 13c-7 0-11 5-11 10 0 4 3 7 7 7 5 0 9-4 9-9 0-4-2-7-5-8Z" fill="#d8f3ff" fillOpacity=".15" stroke={glow} />
      <path d="m45 18 4 5-6 3m-8 20 8 4m-14 2 8 4" stroke={metal} />
      <circle cx="48" cy="22" r="2" fill={gold} stroke="none" />
    </g>}
    {type === "shield" && <g>
      <path d="M40 17c7 5 13 6 19 7v14c0 12-8 20-19 26-11-6-19-14-19-26V24c6-1 12-2 19-7Z" fill="#d8f3ff" fillOpacity=".14" stroke={glow} />
      <path d="M40 24c5 3 9 4 13 5v9c0 8-5 14-13 19-8-5-13-11-13-19v-9c4-1 8-2 13-5Z" stroke={metal} />
      <path d="m40 29 2 8 7 3-7 3-2 8-2-8-7-3 7-3 2-8Z" fill={gold} fillOpacity=".8" stroke="none" />
    </g>}
    {type === "polearm" && <g>
      <path d="m29 62 20-43" stroke={gold} strokeWidth="4" />
      <path d="m47 17 8-7 1 12-8 9-5-5 4-9Z" fill="#d8f3ff" fillOpacity=".16" stroke={glow} />
      <path d="m45 25 7 4m-11 1 8 5m-25 17 10 5" stroke={metal} />
      <path d="M55 10 59 7" stroke={gold} />
    </g>}
  </svg>;
}
