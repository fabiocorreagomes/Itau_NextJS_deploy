import { SectionHero } from "@/components/SectionHero";
import { SectionService } from "@/components/SectionService";
import { Footer } from "@/components/Footer"

import Image from "next/image";

export default function Home() {
  return (
    <>
    <SectionHero />
    <SectionService />
    <Footer />
    </>
  );
}