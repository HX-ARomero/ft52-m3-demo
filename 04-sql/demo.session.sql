SELECT *
FROM personas
LEFT JOIN ciudades
ON personas.ciudad_id = ciudades.id
WHERE ciudades.id IS NULL;

-- SELECT *
-- FROM personas
-- INNER JOIN ciudades
-- ON personas.ciudad_id = ciudades.id;

-- SELECT * FROM personas WHERE rating > 8 OR rating < 7 ORDER BY nombre;
-- SELECT * FROM personas WHERE rating > 8 AND rating < 7 ORDER BY nombre DESC;

-- UPDATE personas
-- SET ciudad_id = 10
-- WHERE NOT (nombre = 'Homero');

-- ALTER TABLE personas
-- ADD COLUMN ciudad_id INTEGER,
-- ADD CONSTRAINT fk_ciudad
-- FOREIGN KEY (ciudad_id) REFERENCES ciudades(id);

-- SELECT * FROM personas WHERE NOT nombre = 'Bart';

-- DELETE FROM personas WHERE apellido = 'Simpson';

-- UPDATE personas SET rating = 5 WHERE nombre = 'Bart';
-- SELECT * FROM personas WHERE nombre = 'Bart';

-- SELECT apellido,
-- COUNT(*) AS cantidad_personas
-- FROM personas
-- GROUP BY apellido;

-- SELECT * FROM personas WHERE rating > 5 ORDER BY nombre DESC;

-- SELECT * FROM personas WHERE rating > 5 ORDER BY nombre ASC;

-- SELECT nombre, rating FROM personas;

-- INSERT INTO personas (apellido, nombre, rating)
-- VALUES ('Simpson', 'Lisa', 7), ('Simpson', 'Bart', 6);

--INSERT INTO ciudades (id, nombre) VALUES (10, 'Springfield');

-- CREATE TABLE personas
-- (
--   id SERIAL PRIMARY KEY,
--   apellido VARCHAR(255) NOT NULL,
--   nombre VARCHAR(255) UNIQUE,
--   rating INTEGER,
--   CONSTRAINT check_rating CHECK (rating >= 1 AND rating <= 10)
-- );

-- SELECT * FROM ciudades;

-- CREATE TABLE ciudades
-- (
-- 	id SERIAL PRIMARY KEY,
-- 	nombre VARCHAR(255) UNIQUE
-- );