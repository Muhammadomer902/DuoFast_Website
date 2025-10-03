import ContentBox from "@/components/Services/ContentBox/ContentBox";
import IntroductionBox from "@/components/Services/IntroductionBox/IntroductionBox";
import OurProcess from "@/components/Services/OurProcess/OurProcess";
import Image from "next/image";

export default function Services() {
  return (
    <div>
        <IntroductionBox />
        <ContentBox />
        <OurProcess />
    </div>
  );
}
