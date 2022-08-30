# Nones

## Ejercicio 1

Nombre de actriz, fecha de nacimiento y título de la películas donde han sido parte del elenco mujeres (obtener sólo actrices, no actores).

### Algebra

> Actrices = Sigma {Sexo = 'Femenino'} (Actor)
> pi {Actriz.Nombre, Actriz.fechanacimiento, Elenco.titulo} (Actrices >< Elenco)

### SQL

```mysql

/* Vista Actrices */
SELECT Actor.Nombre, Actor.FechaNacimiento, Elenco.Titulo
FROM Actor, Elenco
WHERE Sexo = 'Femenino'

INNER JOIN

Elenco ON Elenco.Nombre = Actor.Nombre;

```

## Ejer 3

Nombre e importe de ventas de los productores que han producido películas en las que ha actuado Tom Cruise.

### Algebra R

   &sigma; {Nombre='Tom Cruise'} (Elenco) >< &pi; {Productor.nombre, Productor.importeventas} (Película >< Productor)

### SQL

```mysql
SELECT Productor.nombre, Productor.importeventas
FROM Productor pro, Elenco e, Pelicula p
WHERE e.nombre = 'Tom Cruise', 
      pro.idProductor = p.idProductor,
      e.titulo = p.titulo,
      e.año = p.año,
```

## Ejer 5

Elenco de la película "Romeo y Julieta" de la producción del año 1938.

### Algebra R

&pi; {Actor.Nombre} ( &sigma; {Título = 'Romeo y Julieta' and Año = 1983} (Película) >< Elenco )


### SQL

```mysql
```

## Ejer 7

Nombres de los actores que han participado en películas filmadas entre 1995 y el 2000

### Algebra R

&pi; Actor.Nombre ( &sigma; {Año > 31/12/1994 AND Año < 1/1/2001} (Película) >< Elenco )

### SQL

```mysql
```

## Ejer 9

Nombre de los actores con más 60 años de Edad que participaron en la película del "Mago de OZ".

### Algebra R

&pi; Actor.Nombre ( &sigma; {fechanacimiento} )

### SQL

```mysql
```