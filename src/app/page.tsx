import Image from "next/image";
import {Header} from "@/app/Components/Lobby/Header";
import { PresentationPart } from "./Components/Lobby/Presentation";

export default function Home() {
  return (
    <div>
      <Header />
      <PresentationPart />
    </div>
  );
}
