import React from "react";
import styles from "./TabelaGrupos.module.css";
import teams from "../../Data/teams";



export default function TabelaGrupos() {



  const classificaGrupo = (group: string) => {
    const timesNoGrupo = teams.filter((team) => team.group === group);
    const timesOrdenados = timesNoGrupo.sort((a, b) => {
      if (b.points !== a.points) return b.points - a.points;
      return b.goal_difference - a.goal_difference;
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
          const jogos = time.wins + time.draws + time.losses;
          return (
            <tr key={index} className={styles.tr}>
              <td className={index == 0||index == 1 ? styles.passed: styles.eliminated}>{index + 1} ­­ ­ ­ <span className={styles.span}>{time.name}</span></td>
              <td>{time.points}</td>
              <td>{jogos}</td>
              <td>{time.wins}</td>
              <td>{time.draws}</td>
              <td>{time.losses}</td>
              <td>{time.goals_for}</td>
              <td>{time.goals_against}</td>
              <td>{time.goal_difference}</td>
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
