import { AppButton } from "@/components/AppButton/AppButton";
import { Container } from "@/styles/Home";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const aoba = () => {
    console.log("Aoba");
  }
  
  return (
    <Container className={inter.className}>
      <h1>Bem vindo ao connecta</h1>
      <p>Forme grupos de 4 palavras!</p>
      <AppButton onClick={aoba}>PLAY</AppButton>
    </Container>
  );
}
