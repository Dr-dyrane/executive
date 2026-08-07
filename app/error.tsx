"use client";

import Link from "next/link";
import { StateFrame } from "@/components/executive/state-frame";

export default function ErrorPage({ reset }: Readonly<{ error: Error & { digest?: string }; reset: () => void }>) {
  return (
    <StateFrame
      code="Interrupted"
      eyebrow="The issue did not finish loading"
      title={<>Keep the<br />record clear.</>}
      body="Nothing has been inferred or replaced. Retry the issue, or return to the cover and begin again."
      actions={
        <>
          <button type="button" onClick={reset}>Retry issue</button>
          <Link href="/">Return to cover</Link>
        </>
      }
    />
  );
}
