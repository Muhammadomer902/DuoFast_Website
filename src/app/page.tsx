import AboutUs from "@/components/Home/AboutUs/AboutUs";
import BuildDreamProject from "@/components/Home/BuildDreamProject/BuildDreamProject";
import IntroductionBox from "@/components/Home/IntroductionBox/IntroductionBox";
import StandOutBox from "@/components/Home/StandOutBox/StandOutBox";
import WhatWeDo from "@/components/Home/WhatWeDo/WhatWeDo";
import WhyXenotric from "@/components/Home/WhyXenotric/WhyXenotric";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <IntroductionBox />
      <StandOutBox />
      <AboutUs />
      <WhatWeDo />
      <BuildDreamProject />
      <WhyXenotric />
    </div>
  );
}
