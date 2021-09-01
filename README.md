# Markdown Links

## Índice

- [1. Resumen del proyecto](#1-resumen-del-proyecto)
- [2. Guía de uso](#2-Guía-de-uso)

---

## 1. Resumen del proyecto

Md-links es una libreria desarrollada con [Node.js](https://nodejs.org/), que lee y analiza archivos
en formato `Markdown`, para verificar los links que contengan y reportar
algunas estadísticas.

## 2. Guía de uso

## Instalación

```sh
npm install anaorihuela-md-links
```

## Uso como librería

```sh
const mdlinks = require('anaorihuela-md-links');
```

#### A través de la Interfaz de Linea de Comando (CLI)

Se ejecuta de la siguiente manera a través de la terminal:

```sh
$ md-links <path> [options]
```

Ejemplo:

```sh
$ md-links D:\\Laboratoria\\LIM015-md-links\\test\\anotherExample\\example2.md
href: https://github.con/workshopper/learnyounode
text: learnyounode learnyounode learnyounode learnyouno
file: D:\Laboratoria\LIM015-md-links\test\anotherExample\example2.md
```

#### Options

###### --validate

Si pasamos la opción --validate, el módulo debe hacer una petición HTTP para averiguar si el link funciona y el status. Si el link resulta en una redirección a una URL que responde ok, entonces consideraremos el link como ok.
Vemos que el output en este caso incluye la palabra ok o fail después de la URL, así como el status de la respuesta recibida a la petición HTTP a dicha URL.

Por ejemplo:

```sh
$ md-links D:\\Laboratoria\\LIM015-md-links\\test\\anotherExample\\example2.md --validate
href: https://github.com/workshopper/how-to-npm
text: how-to-npm
file: D:\Laboratoria\LIM015-md-links\test\anotherExample\example2.md
status: 200
ok: ok
```

###### --stats

Si pasamos la opción --stats el output (salida) será un texto con estadísticas básicas sobre los links.

```sh
$ md-links D:\\Laboratoria\\LIM015-md-links\\test\\anotherExample\\example2.md --stats
total: 3
unique: 3
```

###### --stats y --validate.

```sh
$ md-links D:\\Laboratoria\\LIM015-md-links\\test\\anotherExample\\example2.md --stats --validate
total: 3
unique: 3
broken: 2
```

### Licencia

© 2021 Ana Orihuela licencia ISC.
