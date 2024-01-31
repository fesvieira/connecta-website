import { AppButton } from "@/components/AppButton/AppButton";
import { Container } from "@/styles/Home";
import { Inter } from "next/font/google";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const aoba = () => {
    console.log("Aoba");
  };

  return (
    <Container className={inter.className}>
      <Image src="/icon.png" alt="Connecta" width={200} height={200} />

      <h1>Bem vindo ao connecta</h1>

      <p>Forme 4 grupos de 4 palavras!</p>
      
      <AppButton onClick={aoba}>PLAY</AppButton>
    </Container>
  );
}
