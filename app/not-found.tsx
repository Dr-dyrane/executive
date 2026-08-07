import Link from "next/link";
import { StateFrame } from "@/components/executive/state-frame";

export default function NotFound() {
  return (
    <StateFrame
      code="404"
      eyebrow="Issue not found"
      title={<>This page<br />is off record.</>}
      body="The requested profile or chapter is unavailable. Return to the current cover or open Issue 001 directly."
      actions={
        <>
          <Link href="/">Return to cover</Link>
          <Link href="/people/alex-irune">Open Issue 001</Link>
        </>
      }
    />
  );
}
