# Web-template

Este proyecto es un template de una aplicacion web con backend y frontend en next.js

## Configuracion

## Desarrollo

Tener instalado docker y docker-compose localmente y ejecutar por un unica vez este comando

```bash
docker build -f ./docker/Dockerfile.dev -t develop .
docker-compose -f ./docker/docker-compose-dev.yml up
docker rmi $(docker images -qa -f 'dangling=true')
```

Si se instala alguna nueva dependencia se debe hacer el docker build de nuevo para generar la nueva imagen

## Produccion

En caso de querer hacer un deploy de la aplicacion de deben ejecutar los siguientes comandos

```bash
docker build -t production .
docker rmi $(docker images -qa -f 'dangling=true')
docker-compose -f ./docker/docker-compose.yml up
```

## Autor

- [@tomaselordi](https://www.github.com/tomaselordi)
