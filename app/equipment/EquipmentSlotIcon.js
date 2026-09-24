const paths = {
  weapons: <><path d="M6 26 23 9l2-5 3 3-5 2L6 26Z"/><path d="m16 13 3 3M12 17l3 3M4 28l4-1M18 8l6 6"/></>,
  helmet: <><path d="M5 18a11 11 0 0 1 22 0v2H5v-2Z"/><path d="M5 20h22l-2 5H9l-4-5ZM13 14h9M9 18v-3"/><path d="M15 7V4h3"/></>,
  chest: <><path d="m11 5 5 3 5-3 7 4-3 6-3-1v13H8V14l-3 1-3-6 7-4Z"/><path d="m11 5 1 5 4 3 4-3 1-5M16 13v13M8 19h16"/></>,
  shoulders: <><path d="M4 11 9 6l6 2 1 5-4 5-8-2-2-3 2-2Z"/><path d="m28 11-5-5-6 2-1 5 4 5 8-2 2-3-2-2Z"/><path d="m5 11 6 2M27 11l-6 2M8 17l5-1M24 17l-5-1"/></>,
  gloves: <><path d="M8 15V8a2 2 0 0 1 4 0v6-8a2 2 0 0 1 4 0v8-6a2 2 0 0 1 4 0v7-4a2 2 0 0 1 4 0v8c0 5-3 8-8 8h-3c-3 0-5-2-7-4l-3-4a2 2 0 0 1 3-3l3 3"/><path d="M8 25h12"/></>,
  pants: <><path d="M8 4h16l2 7-4 17h-6l-1-12-2 12H7L6 11l2-7Z"/><path d="M8 8h16M15 8v8M10 13l4 1M18 14l4-1"/></>,
  boots: <><path d="M5 4h7v11l4 4v7H3v-6l2-5V4Z"/><path d="M19 4h7v11l3 4v7H17v-6l2-5V4Z"/><path d="M4 22h11M18 22h11"/></>,
  cloak: <><path d="m11 5 5 3 5-3 4 5-2 4 3 14-10-4L6 28l3-14-3-4 5-5Z"/><path d="m11 5 1 6 4 3 4-3 1-6M16 14v12M9 21l7 2 8-2"/></>,
  necklace: <><path d="M5 6c0 9 4 14 11 14s11-5 11-14"/><path d="m16 20-5 5 5 5 5-5-5-5Z"/><path d="m14 25 2-2 2 2-2 3-2-3Z"/><circle cx="5" cy="6" r="1.5"/><circle cx="27" cy="6" r="1.5"/></>,
  earrings: <><path d="M9 5a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z"/><path d="M9 13v3l-2 2 2 2 2-2-2-2M23 4v3M20 10h6l-1 8-2 3-2-3-1-8Z"/><circle cx="23" cy="24" r="2"/></>,
  rings: <><ellipse cx="16" cy="21" rx="9" ry="6"/><path d="M8 19 11 8h10l3 11M11 8l5-4 5 4-5 5-5-5Z"/><path d="m16 5 1.5 2.5L16 10l-1.5-2.5L16 5Z"/></>,
  bracelet: <><ellipse cx="16" cy="16" rx="7" ry="12" transform="rotate(-35 16 16)"/><path d="m8 7 16 18M10 5l16 18M6 10l16 18"/><circle cx="16" cy="16" r="2"/></>,
  brooch: <><path d="m16 3 3 7 7 3-5 5 1 8-6-4-6 4 1-8-5-5 7-3 3-7Z"/><path d="m16 10 4 4-4 5-4-5 4-4Z"/><path d="m13 25-4 5M19 25l4 5"/></>,
};

export default function EquipmentSlotIcon({type}) {
  return <svg
    className="equipmentSlotIcon"
    width="18"
    height="18"
    viewBox="0 0 32 32"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.7"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    focusable="false"
  >{paths[type] || paths.chest}</svg>;
}
