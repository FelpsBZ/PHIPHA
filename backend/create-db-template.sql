CREATE DATABASE championship;

USE championship


CREATE TABLE tb_teams (
    id_team INT AUTO_INCREMENT PRIMARY KEY,
    name_team VARCHAR(50) NOT NULL,
    image_team LONGBLOB,
    group_team VARCHAR(10),
    defense INT NOT NULL,
    attack INT,
    points INT DEFAULT 0
);

drop table tb_teams

select * from tb_teams

CREATE TABLE tb_matches (
    id_match INT AUTO_INCREMENT PRIMARY KEY,
    id_home_team INT,
    id_away_team INT,
    home_goals INT DEFAULT 0,
    away_goals INT DEFAULT 0,
    FOREIGN KEY (id_home_team) REFERENCES tb_teams(id_team),
    FOREIGN KEY (id_away_team) REFERENCES tb_teams(id_team)
);


