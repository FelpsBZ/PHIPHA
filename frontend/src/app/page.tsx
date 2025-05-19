import Image from "next/image";
import TABELAGRUPOS from "./components/TabelaGrupos/TabelaGrupos";
import CABECALHO from "./components/Cabecalho/Cabecalho";

export default function Home() {
  return (
    <>
      <CABECALHO></CABECALHO>
      <TABELAGRUPOS></TABELAGRUPOS>
    </>
  );
}
