import FormBox from "@/components/Contact/FormBox/FormBox";
import IntroductionBox from "@/components/Contact/IntroductionBox/IntroductionBox";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <IntroductionBox />
      <FormBox />
    </div>
  );
}
