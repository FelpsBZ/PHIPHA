import Image from "next/image";
import TABELAGRUPOS from "./components/TabelaGrupos/TabelaGrupos";
import CABECALHO from "./components/Cabecalho/Cabecalho";
import ESCOLHADEFASE from "./components/EscolhaDeFase/EscolhaDeFase";

export default function Home() {
  return (
    <>
      <CABECALHO></CABECALHO>
      <ESCOLHADEFASE></ESCOLHADEFASE>
      <TABELAGRUPOS></TABELAGRUPOS>
    </>
  );
}
