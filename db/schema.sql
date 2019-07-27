use burger_db;

CREATE TABLE burgers (
    id INTEGER(10) NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(30),
    devoured boolean DEFAULT false,
    PRIMARY KEY(id)
);