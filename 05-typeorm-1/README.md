# Tests de Rutas en Postman, Thunder Client, etc

## ▶️POST PLATFORMS

- POST http://localhost:3000/videogames/platforms
  - Enviando por body

```json
{
  "name": "Plataforma-01"
}
```

## ▶️GET PLATFORMS

- GET http://localhost:3000/platforms

## ▶️POST GENRES

- POST http://localhost:3000/videogames/genres
  - Enviando por body

```json
{
  "name": "Genero-01"
}
```

## ▶️GET GENRES

- GET http://localhost:3000/genres

## ▶️POST CHARACTERS

- POST http://localhost:3000/videogames/characters
  - Enviando por body

```json
{
  "name": "Personaje-01"
}
```

## ▶️GET CHARACTERS

- GET http://localhost:3000/characters

## ▶️POST VIDEOGAMES

- POST http://localhost:3000/videogames
  - Enviando por body:
  - IMPORTANTE:
    - "platform_id", "genres", "character_id": Recibe "id" de plataformas, géneros y personajes que EXISTEN en la base de datos, por lo que previamente debemos crearlos para poder crear un videojuego.

```json
{
  "title": "Juego Demo 01",
  "description": "Juego de ejemplo",
  "price": 50,
  "rating": 8,
  "releaseDate": "2024-07-16",
  "platform_id": 1,
  "genres": [1, 2],
  "character_id": 1
}
```

## ▶️GET VIDEOGAMES

- GET http://localhost:3000/videogames

## ▶️PUT VIDEOGAMES

- PUT http://localhost:3000/videogames/1
  - Enviando por body:

```json
{
  "title": "Nuevo nombre",
  "description": "Nueva descripción",
  "rating": 5,
  "platform_id": 1,
  "genres": [2],
  "character_id": 1
}
```

## ▶️DELETE VIDEOGAME

- DELETE http://localhost:3000/videogames/1
