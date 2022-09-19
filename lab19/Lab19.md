# Lab 19

## esquema

- Materiales(Clave, Descripción, Costo, PorcentajeImpuesto)
- Proveedores(RFC, RazonSocial)
- Proyectos(Numero, Denominacion)
- Entregan(Clave, RFC, Numero, Fecha, Cantidad)


## Parte 1

- La suma de las cantidades e importe total de todas las entregas realizadas durante el 97

```mysql
SELECT SUM(cantidad) as 'total-entregas', SUM((precio+impuesto)*cantidad) as importe 
FROM entregan e, materiales m 
WHERE e.clave = m.clave 
AND e.fecha between '1997-01-01' and '1997-12-01';

+----------------+---------+
| total-entregas | importe |
+----------------+---------+
|           2285 |  689326 |
+----------------+---------+
1 row in set (0.00 sec)
```
- Para cada proveedor, obtener la razón social del proveedor, número de entregas e importe total de las entregas realizadas.

```mysql
    SELECT razonsocial, SUM(precio+impuesto) as importe_total, COUNT(e.rfc) as numero_entregas
    FROM proveedores p, entregan e, materiales m
    WHERE p.rfc = e.rfc
    GROUP BY razonsocial

+----------------------+--------------------+-----------------+
| razonsocial          | importe_total      | numero_entregas |
+----------------------+--------------------+-----------------+
| Tubasa               | 109714.00000095367 |             450 |
| Tabiquera del centro | 109714.00000095367 |             450 |
| Comex                | 109714.00000095367 |             450 |
| Alvin                | 109714.00000095367 |             450 |
| Cecoferre            | 120685.40000104904 |             495 |
| La Ferre             |  131656.8000011444 |             540 |
| Oviedo               |  131656.8000011444 |             540 |
| La fragua            |  131656.8000011444 |             540 |
+----------------------+--------------------+-----------------+
8 rows in set (0.00 sec)

```

- Por cada material obtener la clave y descripción del material, la cantidad total entregada, la mínima cantidad entregada, la máxima cantidad entregada, el importe total de las entregas de aquellos materiales en los que la cantidad promedio entregada sea mayor a 400.


- Para cada proveedor, indicar su razón social y mostrar la cantidad promedio de cada material entregado, detallando la clave y descripción del material, excluyendo aquellos proveedores para los que la cantidad promedio sea menor a 500.
- Mostrar en una solo consulta los mismos datos que en la consulta anterior pero para dos grupos de proveedores: aquellos para los que la cantidad promedio entregada es menor a 370 y aquellos para los que la cantidad promedio entregada sea mayor a 450. 

## Parte 2

INSERT INTO tabla VALUES (valorcolumna1, valorcolumna2, [...] , valorcolumnan) ;

Considerando que los valores de tipos CHAR y VARCHAR deben ir encerrados entre apóstrofes, los valores numéricos se escriben directamente y los de fecha, como '1-JAN-00' para 1o. de enero del 2000, inserta cinco nuevos materiales. 

## Parte 3

- Clave y descripción de los materiales que nunca han sido entregados.
- Razón social de los proveedores que han realizado entregas tanto al proyecto 'Vamos México' como al proyecto 'Querétaro Limpio'.
- Descripción de los materiales que nunca han sido entregados al proyecto 'CIT Yucatán'.
- Razón social y promedio de cantidad entregada de los proveedores cuyo promedio de cantidad entregada es mayor al promedio de la cantidad entregada por el proveedor con el RFC 'VAGO780901'.
- RFC, razón social de los proveedores que participaron en el proyecto 'Infonavit Durango' y cuyas cantidades totales entregadas en el 2000 fueron mayores a las cantidades totales entregadas en el 2001. 