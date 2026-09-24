"use client";

import Link from "next/link";
import {useParams} from "next/navigation";
import {ArrowLeft} from "lucide-react";
import ClassInfo from "../ClassInfo";

export default function ClassDetails() {
  const {slug} = useParams();

  return (
    <main className="classDetailPage">
      <Link className="classBack" href="/classes" aria-label="Back to the class selector">
        <ArrowLeft aria-hidden="true" />
      </Link>
      <div className="classDetailWrap">
        <ClassInfo slug={slug} />
      </div>
    </main>
  );
}
