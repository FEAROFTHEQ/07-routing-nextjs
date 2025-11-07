"use client";

import { useRouter } from "next/navigation";
import css from "./Button.module.css";

export default function BackButton() {
  const router = useRouter();

  return (
    <button className={css.backBtn} onClick={() => router.back()}>
      Go Back
    </button>
  );
}
