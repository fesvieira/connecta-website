import { AppButton } from "@/components/AppButton/AppButton";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  function aoba() {
    console.log("Aoba");
  }
  return (
    <div className={inter.className}>
      <h1>PLAY</h1>
      <AppButton onClick={aoba}>PLAY</AppButton>
    </div>
  );
}
