import { AppButton } from "@/components/AppButton/AppButton";
import { HomeContainer } from "@/styles/Home";
import { Inter } from "next/font/google";
import Image from "next/image";
import { AppStrings as S } from "@/constants/AppStrings";
import { TextBodyMedium, TitleMedium } from "@/styles/global";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const aoba = () => {
    console.log("Aoba");
  };

  return (
    <HomeContainer className={inter.className}>
      <Image src="/icon.png" alt={S.connecta} width={200} height={200} />

      <TitleMedium>{S.welcomeMessage}</TitleMedium>

      <TextBodyMedium $margin="4rem 0 1rem 0">{S.description}</TextBodyMedium>

      <AppButton onClick={aoba}>{S.playButton}</AppButton>
    </HomeContainer>
  );
}
