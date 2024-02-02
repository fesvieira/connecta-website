import { AppButton } from "@/components/AppButton/AppButton";
import { BackgroundDecoration } from "@/components/BackgroundDecoration";
import { Position } from "@/components/BackgroundDecoration/BackgroundDecoration";
import { Container } from "@/styles/Home";
import { Inter } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const aoba = () => {
    console.log("Aoba");
  };

  return (
    <Container className={inter.className}>
      <BackgroundDecoration position={Position.Top} src="home_bg_top.svg" />

      <Image src="/icon.png" alt="Connecta" width={200} height={200} />

      <h1>Bem vindo ao connecta</h1>

      <p>Forme 4 grupos de 4 palavras!</p>

      <AppButton onClick={aoba}>PLAY</AppButton>

      <BackgroundDecoration
        position={Position.Bottom}
        src="home_bg_bottom.svg"
      />
    </Container>
  );
}
