# Ejercicios Nones

## Ejercicio 1

Nombre de actriz, fecha de nacimiento y título de la películas donde han sido parte del elenco mujeres (obtener sólo actrices, no actores).

Álgebra Relacional

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
Álgebra relacional

&pi; titulo( &sigma; {nombre = ‘Mike Myers AND año >= 2010 AND año< =2020} (Elenco))

```SQL
SELECT titulo 
FROM Elenco
WHERE nombre = 'Mike Myers' AND año BETWEEN 2010 AND 2020 
```

## Ejercicio 3

Nombre e importe de ventas de los productores que han producido películas en las que ha actuado Tom Cruise.

&sigma; {Nombre='Tom Cruise'} (Elenco) ><

&pi; {Productor.nombre, Productor.importeventas} (Película >< Productor)

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
INNER JOIN Elenco USING (titulo) 
INNER JOIN Estudio USING (Nomestudio)
WHERE nombre= 'Antonio Banderas' 
      OR nombre= 'Salma Hayek' 
      AND duración>=180 
```

## Ejercicio 5

Elenco de la película "Romeo y Julieta" de la producción del año 1938.

&pi; {Actor.Nombre} ( &sigma; {Título = 'Romeo y Julieta' and Año = 1938} (Película) >< Elenco )

```SQL
SELECT Actor.Nombre
FROM Pelicula P, Elenco E, Actor A
WHERE P.Año = 1938 AND E.Nombre = A.Nombre
```

## Ejercicio 6

Nombre y teléfono de los actores que han aparecido en películas en las que el  productor ha sido George Lucas.

&pi; Actor.nombre, teléfono (&sigma; {productor.nombre= ‘George Lucas’} (Actor >< Elenco) >< Pelicula >< Productor)

```SQL
SELECT nombre.Actor, telefono
FROM Actor, Elenco, Pelicula, Productor
WHERE nombre.Productor = ‘George Lucas’
```

## Ejercicio 7

Nombres de los actores que han participado en películas filmadas entre 1995 y el 2000

&pi; Actor.Nombre ( &sigma; {Año > 31/12/1994 AND Año < 1/1/2001} (Película) >< Elenco )

```SQL
SELECT DISTINCT Actor.Nombre
FROM Elenco E, Actor A, Pelicula P
WHERE P.Año > 31/12/1994 AND P.Año < 1/1/2001
```

## Ejercicio 8

Nombre de los productores que han filmado películas para la "Universal Pictures".

&pi; nombreP ( &sigma; {nomEstudio = 'Universal Pictures}(Productor >< Pelicula) >< Estudio)

```SQL
SELECT nombreP FROM Productor, Pelicula, Estudio
WHERE Productor.idProductor = Pelicula.idProductor
AND Pelicula.nomestudio = Estudio.nomestudio
AND Estudio.nomestudio = “Universal Pictures”
```

## Ejercicio 9

Nombre de los actores con más 60 años de Edad que participaron en la película del "Mago de OZ".

&pi; Actor.Nombre ( &sigma; {fechanacimiento <=30/8/1962 } ) >< (&sigma; {Elenco.título = 'Mago de OZ'} (Elenco) )

```SQL
SELECT DISTINCT Elenco.Nombre
FROM Actor A, Elenco E,
WHERE A.nombre = E.nombre 
      AND E.titulo = 'Mago de OZ'
      AND A.fechanacimiento <= 30/8/1962
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
