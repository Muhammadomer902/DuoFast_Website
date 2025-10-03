import ImpactWanted from "@/components/AboutUs/ImpactWanted/ImpactWanted";
import IntroductionBox from "@/components/AboutUs/IntroductionBox/IntroductionBox";
import OriginationBox from "@/components/AboutUs/OriginationBox/OriginationBox";
import OurFoundation from "@/components/AboutUs/OurFoundation/OurFoundation";
import Image from "next/image";

export default function About() {
  return (
    <div>
        <IntroductionBox />
        <OriginationBox />
        <ImpactWanted />
        <OurFoundation />
    </div>
  );
}
