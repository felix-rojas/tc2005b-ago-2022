# Álgebra relacional & SQL

--------------------

30 de agosto de 2022

- Alan Fernando Razo Peña : A01703350
- Leonardo Santiago Ramos Pérez  : A01707812
- Félix Javier Rojas Gallardo : A01201946
- Monserrat Karime Moreno Casas : A01276775

------------------------

Tabla de contenidos

- [Álgebra relacional & SQL](#álgebra-relacional--sql)
  - [ESQUEMA](#esquema)
  - [Ejercicio 1](#ejercicio-1)
  - [Ejercicio 2](#ejercicio-2)
  - [Ejercicio 3](#ejercicio-3)
  - [Ejercicio 4](#ejercicio-4)
  - [Ejercicio 5](#ejercicio-5)
  - [Ejercicio 6](#ejercicio-6)
  - [Ejercicio 7](#ejercicio-7)
  - [Ejercicio 8](#ejercicio-8)
  - [Ejercicio 9](#ejercicio-9)
  - [Ejercicio 10](#ejercicio-10)

---------------

## ESQUEMA

- Película (título, año, duración, encolor, nomestudio, idproductor)
- Elenco (título, año, nombre)
- Actor (nombre, dirección, teléfono, fechanacimiento, sexo)
- Productor (idproductor, nombre, dirección, teléfono, importeventas)
- Estudio (nomestudio, dirección)

## Ejercicio 1

Nombre de actriz, fecha de nacimiento y título de la películas donde han sido parte del elenco mujeres (obtener sólo actrices, no actores).

**Actriz** = &sigma; {Sexo = 'Femenino'} (Actor)

&pi; {**Actriz**.Nombre, **Actriz**.fechanacimiento, Elenco.titulo} (**Actriz** >< Elenco)

```sql
/* Vista Actrices */
SELECT Actor.Nombre, Actor.FechaNacimiento, Elenco.Titulo
FROM Actor, Elenco
WHERE Sexo = 'Femenino'
INNER JOIN
Elenco ON Elenco.Nombre = Actor.Nombre;

```

## Ejercicio 2

Títulos de películas en las que actuó Mike Myers en la década pasada.

&pi; titulo( &sigma; {nombre = ‘Mike Myers AND año >= 2010 AND año< =2020} (Elenco))

```SQL
SELECT titulo 
FROM Elenco
WHERE nombre = 'Mike Myers' AND año BETWEEN 2010 AND 2020 
```

## Ejercicio 3

Nombre e importe de ventas de los productores que han producido películas en las que ha actuado Tom Cruise.

&sigma; {Nombre='Tom Cruise'} (Elenco) >< &pi; {Productor.nombre, Productor.importeventas} (Película >< Productor)

```sql
SELECT Productor.nombre, Productor.importeventas
FROM Productor pro, Elenco e, Pelicula p
WHERE e.nombre = 'Tom Cruise', 
      pro.idProductor = p.idProductor,
      e.titulo = p.titulo,
      e.año = p.año,
```

## Ejercicio 4

Dirección de los estudios en los que se han filmado películas con más de tres horas de duración en las que han actuado Salma Hayek o Antonio Banderas.

&pi; dirección (&sigma; nombre= ‘Antonio Banderas’ OR nombre= ‘Salma Hayek AND duración>=180 (Película><Elenco) >< Estudio))

```SQL
SELECT dirección
FROM Pelicula 
( INNER JOIN Elenco USING (titulo, año) )
INNER JOIN Estudio USING (Nomestudio)
WHERE nombre= 'Antonio Banderas' 
      OR nombre= 'Salma Hayek' 
      AND duración>=180 
```

## Ejercicio 5

Elenco de la película "Romeo y Julieta" de la producción del año 1938.

&pi; {Elenco.Nombre} ( &sigma; {Título = 'Romeo y Julieta' and Año = 1938} (Elenco)

```SQL
SELECT Nombre
FROM Elenco
WHERE Año = 1938 AND Titulo = 'Romeo y Julieta' 
```

## Ejercicio 6

Nombre y teléfono de los actores que han aparecido en películas en las que el productor ha sido George Lucas.

&pi; Actor.nombre, teléfono (&sigma; {productor.nombre= 'George Lucas'} (Actor >< Elenco) >< Pelicula >< Productor)

```SQL
SELECT Actor.nombre, telefono
FROM Actor, Elenco, Pelicula, Productor
WHERE nombre.Productor = 'George Lucas'
      AND P.idProductor = Pr.idProductor
      AND E.nombre = A.nombre
      AND P.año = E.año
      AND P.titulo = E.titulo
      AND Pr.nombre = 'George Lucas'
```

## Ejercicio 7

Nombres de los actores que han participado en películas filmadas entre 1995 y el 2000

&pi; Actor.Nombre ( &sigma; {Año > 1994 AND Año < 2001} (Película) >< Elenco )

```SQL
SELECT DISTINCT Actor.Nombre
FROM Elenco E, Actor A, Pelicula P
WHERE P.Año BETWEEN 1995 AND 2000
```

## Ejercicio 8

Nombre de los productores que han filmado películas para la "Universal Pictures".

&pi; Productor.nombre ( &sigma; {nomEstudio = 'Universal Pictures'} (Productor >< Pelicula) )

```SQL
SELECT Pr.nombre 
FROM Productor Pr, Pelicula P
WHERE Pr.idProductor = P.idProductor
AND P.nomestudio = Pr.nomestudio
AND P.nomestudio = 'Universal Pictures'
```

## Ejercicio 9

Nombre de los actores con más 60 años de Edad que participaron en la película del "Mago de OZ".

&pi; Actor.Nombre ( &sigma; {fechanacimiento <='01/09/1962' } ) >< (&sigma; {Elenco.título = 'Mago de OZ'} (Elenco) )

```SQL
SELECT DISTINCT E.Nombre
FROM Actor A, Elenco E,
WHERE A.nombre = E.nombre 
      AND E.titulo = 'Mago de OZ'
      AND A.fechanacimiento <= 01/09/1962
```

## Ejercicio 10

Nombre de los productores que han trabajado tanto para los estudios "FOX" como para "MGM".

**R1** = &pi; {Productor.nombre} (&sigma; {nomestudio = 'FOX'}((Estudio >< Pelicula) >< Productor))

**R2** = &pi; {Productor.nombre} (&sigma; {nomestudio = 'MGM'}((Estudio >< Pelicula) >< Productor))

**R1** &cap; **R2**

```SQL
SELECT Productor.nombre FROM Productor, Pelicula, Estudio
WHERE Productor.idProductor = Pelicula.idProductor
AND Estudio.nomestudio = Pelicula.nomestudio
AND Estudio.nomestudio = 'FOX'

INTERSECT

SELECT Productor.nombre FROM Productor, Pelicula, Estudio
WHERE Productor.idProductor = Pelicula.idProductor
AND Estudio.nomestudio = Pelicula.nomestudio
AND Estudio.nomestudio = 'MGM'
```
