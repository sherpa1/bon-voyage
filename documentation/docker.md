# Docker

## Construction des containers et démarrage des services Docker

```
docker-compose up
```

Pour reprendre la main dans le terminal

```
docker-compose up -d
```

## Consultation des services en cours de fonctionnement

```
docker-compose ps
```

## Extinction des containers Docker

```
docker-compose stop
```

## Extinction et suppression des containers Docker

```
docker-compose down
```

### + suppression des données dans les volumes

```
docker-compose down --volumes
```

## Autres commandes Docker

https://docs.docker.com/compose/reference/

## Consultation de l'API Rest

```
http://localhost:3333
```

## Installation des dépendances NPM d'un service basé sur Node.js

```
docker-compose run <nom-du-service> npm ci
```

_Remplacer <nom-du-service> par le nom du service_

ou

```
docker-compose run <nom-du-service> npm install
```

_Remplacer <nom-du-service> par le nom du service_

## Connaître les variables d'environnement utilisées par un container

```
docker-compose run <nom-du-service> env
```

_Remplacer <nom-du-service> par le nom du service_
