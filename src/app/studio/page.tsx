import StudioHero from "@/components/studio/StudioHero";
import StudioServices from "@/components/studio/StudioServices";
import StudioEquipment from "@/components/studio/StudioEquipment";
import StudioBooking from "@/components/studio/StudioBooking";

export default function StudioPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      <StudioHero />
      <StudioServices />
      <StudioEquipment />
      <StudioBooking />
    </div>
  );
}
