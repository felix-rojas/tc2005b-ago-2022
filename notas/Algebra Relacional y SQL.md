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

## Ejercicio 5

Elenco de la película "Romeo y Julieta" de la producción del año 1938.

&pi; {Actor.Nombre} ( &sigma; {Título = 'Romeo y Julieta' and Año = 1938} (Película) >< Elenco )

```SQL
SELECT Actor.Nombre
FROM Pelicula P, Elenco E, Actor A
WHERE P.Año = 1938 AND E.Nombre = A.Nombre
```

## Ejercicio 7

Nombres de los actores que han participado en películas filmadas entre 1995 y el 2000

&pi; Actor.Nombre ( &sigma; {Año > 31/12/1994 AND Año < 1/1/2001} (Película) >< Elenco )

```SQL
SELECT DISTINCT Actor.Nombre
FROM Elenco E, Actor A, Pelicula P
WHERE P.Año > 31/12/1994 AND P.Año < 1/1/2001
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