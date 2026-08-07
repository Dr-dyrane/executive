import { StateFrame } from "@/components/executive/state-frame";

export default function Loading() {
  return (
    <StateFrame
      code="Loading"
      eyebrow="Preparing the issue"
      title={<>Turning the<br />page</>}
      body="Loading the public record, visual essay and source index."
      busy
    />
  );
}
