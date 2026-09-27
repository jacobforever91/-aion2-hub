"use client";

import Link from "next/link";
import {useParams} from "next/navigation";
import {ArrowLeft} from "lucide-react";
import ClassInfo from "../ClassInfo";
import {classSceneStyle} from "../classScenes";

export default function ClassDetails() {
  const {slug} = useParams();

  return (
    <main className="classPage classSkillExperiencePage" style={classSceneStyle(slug)}>
      <Link className="classBack" href="/?menu=open" aria-label="Back to the menu panel">
        <ArrowLeft aria-hidden="true" />
      </Link>
      <ClassInfo slug={slug}/>
    </main>
  );
}
