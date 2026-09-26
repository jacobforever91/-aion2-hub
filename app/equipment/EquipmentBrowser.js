Warning: truncated output (original token count: 6722)
Total output lines: 366

"use client";

import {useCallback, useEffect, useState} from "react";
import Link from "next/link";
import {ArrowLeft, ChevronDown, ChevronLeft, ChevronRight, Gem, Search, X} from "lucide-react";
import EquipmentSlotIcon from "./EquipmentSlotIcon";
import progressionData from "../progression/catalogData.json";
import {classList} from "../classes/classData";

const grades = ["All rarities", "Common", "Rare", "Epic", "Unique", "Heroic", "Special", "Mythic"];
const weaponTypeOrder = ["Greatsword", "Longsword", "Dagger", "Bow", "Spellbook", "Orb", "Mace", "Staff", "Guard"];
const categories = [
  {id: "weapons", name: "Weapon", family: "Weapons", icon: "weapons"},
  {id: "wings", name: "Wings", family: "Wings", icon: "wings"},
  {id: "shoulders", name: "Shoulders", family: "Armor", sourceSlot: "Shoulder", icon: "shoulders"},
  {id: "cloak", name: "Cloak", family: "Armor", sourceSlot: "Cape", icon: "cloak"},
  {id: "gloves", name: "Gloves", family: "Armor", sourceSlot: "Gloves", icon: "gloves"},
  {id: "belt", name: "Belt", family: "Armor", sourceSlot: "Belt", icon: "belt"},
  {id: "pants", name: "Legs", family: "Armor", sourceSlot: "Pants", icon: "pants"},
  {id: "boots", name: "Boots", family: "Armor", sourceSlot: "Boots", icon: "boots"},
  {id: "helmet", name: "Helmet", family: "Armor", sourceSlot: "Helmet", icon: "helmet"},
  {id: "necklace", name: "Necklace", family: "Accessories", sourceSlot: "Necklace", icon: "necklace"},
  {id: "chest", name: "Chest", family: "Armor", sourceSlot: "Torso", icon: "chest"},
  {id: "earrings", name: "Earrings", family: "Accessories", sourceSlot: "Earring", icon: "earrings"},
  {id: "rings", name: "Ring", family: "Accessories", sourceSlot: "Ring", icon: "rings"},
  {id: "bracelet", name: "Bracelet", family: "Accessories", sourceSlot: "Bracelet", icon: "bracelet"},
  {id: "brooch", name: "Relic", family: "Accessories", sourceSlot: "Brooch", icon: "brooch"},
];
const equipmentClassOrder = ["gladiator","templar","assassin","ranger","sor…5722 tokens truncated…<div className="equipmentDesktopEmpty"><Gem/><strong>No items equipped</strong><span>Select a slot around your Daeva, then equip an item from the Atlas.</span></div>}</div>
        </aside>
      </div>
    </section>
    {showLoadout&&<div className="equipmentModalBackdrop" onMouseDown={(event)=>{if(event.target===event.currentTarget)setShowLoadout(false)}}><section className="equipmentLoadoutPanel" role="dialog" aria-modal="true" aria-labelledby="loadoutTitle"><button className="equipmentModalClose" type="button" onClick={()=>setShowLoadout(false)} aria-label="Close loadout stats"><X/></button><span className="equipmentModalEyebrow">DAEVEXUS · EQUIPMENT SUMMARY</span><h2 id="loadoutTitle">Loadout Stats</h2><p className="equipmentLoadoutCount">{equippedEntries.length} of {categories.length} equipment groups selected · {region==="KR_TW"?"Asia / Taiwan":"Global"}</p><div className="equipmentLoadoutTotals">{Object.entries(loadoutTotals).length?Object.entries(loadoutTotals).map(([key,value])=>{const [label,suffix]=key.split("|");return <div key={key}><span>{label}</span><strong>{Number(value.toFixed(2))}{suffix}</strong></div>}):<p>Select equipment pieces with numeric base stats to build your totals.</p>}</div><h3>Equipped pieces</h3><div className="equipmentLoadoutPieces">{equippedEntries.map(([slot,item])=><button type="button" key={slot} onClick={()=>{setShowLoadout(false);setSelectedItem(item)}}><span>{item.icon?<img src={item.icon} alt=""/>:<EquipmentSlotIcon type={categories.find(x=>x.id===slot)?.icon}/>}</span><div><small>{categories.find(x=>x.id===slot)?.name}</small><strong>{item.name}</strong><em>{item.grade}</em></div></button>)}</div><div className="equipmentLoadoutActions"><button type="button" onClick={clearLoadout}>Clear loadout</button><button type="button" onClick={()=>setShowLoadout(false)}>Continue equipping</button></div></section></div>}
    {selectedItem && <EquipmentModal item={selectedItem} region={region} onClose={closeItem} />}
  </main>;
}
