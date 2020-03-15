DROP DATABASE IF EXISTS image_render;
CREATE DATABASE image_render;
\connect image_render;


CREATE TABLE products (id SERIAL NOT NULL PRIMARY KEY, name VARCHAR (80), rating DECIMAL);

CREATE TABLE images (id SERIAL NOT NULL PRIMARY KEY, image VARCHAR (1000), product_id INT, FOREIGN KEY (product_id) REFERENCES products(id));

CREATE UNIQUE INDEX ON products (id);

CREATE INDEX ON images (product_id);