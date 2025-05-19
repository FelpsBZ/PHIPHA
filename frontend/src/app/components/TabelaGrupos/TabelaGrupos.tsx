import React from "react";
import styles from "./TabelaGrupos.module.css";
import timesJson from "../../Data/times.json";



export default function TabelaGrupos() {

  const times = timesJson.times;


  const classificaGrupo = (grupo: string) => {
    const timesNoGrupo = timesJson.times.filter((time) => time.grupo === grupo);
    const timesOrdenados = timesNoGrupo.sort((a, b) => {
      if (b.pontos !== a.pontos) return b.pontos - a.pontos;
      return b.saldo_gols - a.saldo_gols;
    });
    return timesOrdenados;
  };

  const GrupoTabela = ({ grupo } : { grupo: string }) => {



  const classificados = classificaGrupo(grupo);

  return (
    <>
      <thead className={styles.titulo}>
        <tr>
          <th colSpan={9} className={styles.grupo}>GRUPO {grupo}</th>
        </tr>
        <tr>
          <th className={styles.titulo}>CLASSIFICAÇÃO</th>
          <th className={styles.th}>P</th>
          <th className={styles.th}>J</th>
          <th className={styles.th}>V</th>
          <th className={styles.th}>E</th>
          <th className={styles.th}>D</th>
          <th className={styles.th}>GP</th>
          <th className={styles.th}>GC</th>
          <th className={styles.th}>SG</th>
        </tr>
      </thead>
      <tbody className={styles.tbody}>
        {classificados.map((time, index) => {
          const jogos = time.vitorias + time.empates + time.derrotas;
          return (
            <tr key={index} className={styles.tr}>
              <td>{index + 1} ­­ ­ ­ {time.nome}</td>
              <td>{time.pontos}</td>
              <td>{jogos}</td>
              <td>{time.vitorias}</td>
              <td>{time.empates}</td>
              <td>{time.derrotas}</td>
              <td>{time.gols_pro}</td>
              <td>{time.gols_contra}</td>
              <td>{time.saldo_gols}</td>
            </tr>
          );
        })}
      </tbody>
    </>
  );
};

  return (
    <div className={styles.container}>
      <table className={styles.table}>
        <GrupoTabela grupo="A" />
        <GrupoTabela grupo="B" />
        <GrupoTabela grupo="C" />
        <GrupoTabela grupo="D" />
      </table>
    </div>
  );
}
