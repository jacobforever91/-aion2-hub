"use client";

import {useState} from "react";
import Link from "next/link";
import {ArrowLeft} from "lucide-react";
import ClassInfo from "./ClassInfo";
import {classSceneStyle} from "./classScenes";

export default function Classes() {
  const [selectedSlug, setSelectedSlug] = useState("gladiator");

  return (
    <main className="classPage classSkillExperiencePage" style={classSceneStyle(selectedSlug)}>
      <Link className="classBack" href="/?menu=open" aria-label="Back to the menu panel">
        <ArrowLeft aria-hidden="true" />
      </Link>
      <ClassInfo key={selectedSlug} slug={selectedSlug} onSelectClass={setSelectedSlug}/>
    </main>
  );
}
