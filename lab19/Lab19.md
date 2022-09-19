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
    SELECT razonsocial, SUM(precio+impuesto) as importe_total, COUNT(e.cantidad) as numero_entregas
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

```mysql
SELECT m.clave, m.descripcion, SUM(e.cantidad) as cantidad_total_entregada, MIN(e.cantidad) as cantidad_minima, MAX(e.cantidad) as cantidad_maxima, SUM((e.cantidad)*(m.impuesto+m.precio)) as importe_total
FROM materiales m, entregan e
WHERE m.clave = e.clave
GROUP BY m.clave
HAVING AVG(e.cantidad) > 400
ORDER BY importe_total desc;

+-------+----------------+--------------------------+-----------------+-----------------+---------------+
| clave | descripcion    | cantidad_total_entregada | cantidad_minima | cantidad_maxima | importe_total |
+-------+----------------+--------------------------+-----------------+-----------------+---------------+
|  1150 | Cantera gris   |                      911 |             453 |             458 |       1212541 |
|  1380 | Pintura C1011  |                      947 |             302 |             645 |      755232.5 |
|  1320 | Tubería 4.4    |                     1111 |             413 |             698 |        281083 |
|  1230 | Cemento        |                      842 |             312 |             530 |        277860 |
|  1340 | Tubería 4.5    |                      998 |             324 |             674 |        274450 |
|  1050 | Varilla 4/34   |                     1126 |             503 |             623 |        216755 |
|  1060 | Varilla 3/19   |                     1016 |             324 |             692 |        212344 |
|  1140 | Cantera blanca |                      802 |             219 |             583 |        176440 |
|  1410 | Pintura B1021  |                     1068 |             467 |             601 |        146850 |
|  1040 | Varilla 3/18   |                      803 |             263 |             540 |        141328 |
|  1010 | Varilla 4/32   |                     1051 |             523 |             528 |      132951.5 |
|  1420 | Pintura C1012  |                      881 |             278 |             603 |      121137.5 |
|  1390 | Pintura B1021  |                      804 |             107 |             697 |        110550 |
|  1260 | Gravilla       |                     1091 |             460 |             631 |        108009 |
|  1120 | Sillar rosa    |                      907 |             215 |             692 |         99770 |
|  1270 | Tezontle       |                     1052 |             506 |             546 |         92576 |
|  1100 | Block          |                     1165 |             466 |             699 |         38445 |
+-------+----------------+--------------------------+-----------------+-----------------+---------------+
17 rows in set (0.00 sec)
```

- Para cada proveedor, indicar su razón social y mostrar la cantidad promedio de cada material entregado, detallando la clave y descripción del material, excluyendo aquellos proveedores para los que la cantidad promedio sea menor a 500.

```mysql
SELECT p.razonsocial, AVG(e.cantidad) as promedio_entregas, e.clave, m.descripcion
FROM proveedores p, entregan e, materiales m
WHERE e.clave = m.clave
GROUP BY razonsocial, e.clave
HAVING promedio_entregas >= 500
ORDER BY promedio_entregas DESC;

+----------------------+-------------------+-------+---------------+
| razonsocial          | promedio_entregas | clave | descripcion   |
+----------------------+-------------------+-------+---------------+
| La fragua            |          582.5000 |  1100 | Block         |
| Oviedo               |          582.5000 |  1100 | Block         |
| La Ferre             |          582.5000 |  1100 | Block         |
| Cecoferre            |          582.5000 |  1100 | Block         |
| Alvin                |          582.5000 |  1100 | Block         |
| Comex                |          582.5000 |  1100 | Block         |
| Tabiquera del centro |          582.5000 |  1100 | Block         |
| Tubasa               |          582.5000 |  1100 | Block         |
| Comex                |          563.0000 |  1050 | Varilla 4/34  |
| La fragua            |          563.0000 |  1050 | Varilla 4/34  |
| Oviedo               |          563.0000 |  1050 | Varilla 4/34  |
| La Ferre             |          563.0000 |  1050 | Varilla 4/34  |
| Cecoferre            |          563.0000 |  1050 | Varilla 4/34  |
| Alvin                |          563.0000 |  1050 | Varilla 4/34  |
| Tabiquera del centro |          563.0000 |  1050 | Varilla 4/34  |
| Tubasa               |          563.0000 |  1050 | Varilla 4/34  |
| La fragua            |          555.5000 |  1320 | Tubería 4.4   |
| Tubasa               |          555.5000 |  1320 | Tubería 4.4   |
| Tabiquera del centro |          555.5000 |  1320 | Tubería 4.4   |
| Comex                |          555.5000 |  1320 | Tubería 4.4   |
| Alvin                |          555.5000 |  1320 | Tubería 4.4   |
| Cecoferre            |          555.5000 |  1320 | Tubería 4.4   |
| La Ferre             |          555.5000 |  1320 | Tubería 4.4   |
| Oviedo               |          555.5000 |  1320 | Tubería 4.4   |
| La fragua            |          545.5000 |  1260 | Gravilla      |
| Tubasa               |          545.5000 |  1260 | Gravilla      |
| Tabiquera del centro |          545.5000 |  1260 | Gravilla      |
| Comex                |          545.5000 |  1260 | Gravilla      |
| Alvin                |          545.5000 |  1260 | Gravilla      |
| Cecoferre            |          545.5000 |  1260 | Gravilla      |
| La Ferre             |          545.5000 |  1260 | Gravilla      |
| Oviedo               |          545.5000 |  1260 | Gravilla      |
| Tubasa               |          534.0000 |  1410 | Pintura B1021 |
| Tabiquera del centro |          534.0000 |  1410 | Pintura B1021 |
| Comex                |          534.0000 |  1410 | Pintura B1021 |
| Alvin                |          534.0000 |  1410 | Pintura B1021 |
| Cecoferre            |          534.0000 |  1410 | Pintura B1021 |
| La Ferre             |          534.0000 |  1410 | Pintura B1021 |
| Oviedo               |          534.0000 |  1410 | Pintura B1021 |
| La fragua            |          534.0000 |  1410 | Pintura B1021 |
| Tabiquera del centro |          526.0000 |  1270 | Tezontle      |
| Comex                |          526.0000 |  1270 | Tezontle      |
| Alvin                |          526.0000 |  1270 | Tezontle      |
| Cecoferre            |          526.0000 |  1270 | Tezontle      |
| La Ferre             |          526.0000 |  1270 | Tezontle      |
| Oviedo               |          526.0000 |  1270 | Tezontle      |
| La fragua            |          526.0000 |  1270 | Tezontle      |
| Tubasa               |          526.0000 |  1270 | Tezontle      |
| Tubasa               |          525.5000 |  1010 | Varilla 4/32  |
| Tabiquera del centro |          525.5000 |  1010 | Varilla 4/32  |
| Comex                |          525.5000 |  1010 | Varilla 4/32  |
| Alvin                |          525.5000 |  1010 | Varilla 4/32  |
| Cecoferre            |          525.5000 |  1010 | Varilla 4/32  |
| La Ferre             |          525.5000 |  1010 | Varilla 4/32  |
| Oviedo               |          525.5000 |  1010 | Varilla 4/32  |
| La fragua            |          525.5000 |  1010 | Varilla 4/32  |
| Tubasa               |          508.0000 |  1060 | Varilla 3/19  |
| Tabiquera del centro |          508.0000 |  1060 | Varilla 3/19  |
| Comex                |          508.0000 |  1060 | Varilla 3/19  |
| Alvin                |          508.0000 |  1060 | Varilla 3/19  |
| Cecoferre            |          508.0000 |  1060 | Varilla 3/19  |
| La Ferre             |          508.0000 |  1060 | Varilla 3/19  |
| Oviedo               |          508.0000 |  1060 | Varilla 3/19  |
| La fragua            |          508.0000 |  1060 | Varilla 3/19  |
+----------------------+-------------------+-------+---------------+
64 rows in set (0.00 sec)

```

- Mostrar en una solo consulta los mismos datos que en la consulta anterior pero para dos grupos de proveedores: aquellos para los que la cantidad promedio entregada es menor a 370 y aquellos para los que la cantidad promedio entregada sea mayor a 450. 

```mysql
SELECT p.razonsocial, e.clave, m.descripcion, AVG(e.cantidad) as promedio_entregas
FROM proveedores p, entregan e, materiales m
WHERE e.clave = m.clave
GROUP BY razonsocial, e.clave
HAVING AVG(e.cantidad) >= 370  AND AVG(e.cantidad) <= 450
ORDER BY p.razonsocial;

+----------------------+-------+---------------------+-------------------+
| razonsocial          | clave | descripcion         | promedio_entregas |
+----------------------+-------+---------------------+-------------------+
| Alvin                |  1040 | Varilla 3/18        |          401.5000 |
| Alvin                |  1080 | Ladrillos rojos     |          392.5000 |
| Alvin                |  1140 | Cantera blanca      |          401.0000 |
| Alvin                |  1180 | Recubrimiento P1001 |          370.5000 |
| Alvin                |  1200 | Recubrimiento P1019 |          381.0000 |
| Alvin                |  1230 | Cemento             |          421.0000 |
| Alvin                |  1250 | Grava               |          381.0000 |
| Alvin                |  1390 | Pintura B1021       |          402.0000 |
| Alvin                |  1420 | Pintura C1012       |          440.5000 |
| Cecoferre            |  1040 | Varilla 3/18        |          401.5000 |
| Cecoferre            |  1080 | Ladrillos rojos     |          392.5000 |
| Cecoferre            |  1140 | Cantera blanca      |          401.0000 |
| Cecoferre            |  1180 | Recubrimiento P1001 |          370.5000 |
| Cecoferre            |  1200 | Recubrimiento P1019 |          381.0000 |
| Cecoferre            |  1230 | Cemento             |          421.0000 |
| Cecoferre            |  1250 | Grava               |          381.0000 |
| Cecoferre            |  1390 | Pintura B1021       |          402.0000 |
| Cecoferre            |  1420 | Pintura C1012       |          440.5000 |
| Comex                |  1040 | Varilla 3/18        |          401.5000 |
| Comex                |  1080 | Ladrillos rojos     |          392.5000 |
| Comex                |  1140 | Cantera blanca      |          401.0000 |
| Comex                |  1180 | Recubrimiento P1001 |          370.5000 |
| Comex                |  1200 | Recubrimiento P1019 |          381.0000 |
| Comex                |  1230 | Cemento             |          421.0000 |
| Comex                |  1250 | Grava               |          381.0000 |
| Comex                |  1390 | Pintura B1021       |          402.0000 |
| Comex                |  1420 | Pintura C1012       |          440.5000 |
| La Ferre             |  1040 | Varilla 3/18        |          401.5000 |
| La Ferre             |  1080 | Ladrillos rojos     |          392.5000 |
| La Ferre             |  1140 | Cantera blanca      |          401.0000 |
| La Ferre             |  1180 | Recubrimiento P1001 |          370.5000 |
| La Ferre             |  1200 | Recubrimiento P1019 |          381.0000 |
| La Ferre             |  1230 | Cemento             |          421.0000 |
| La Ferre             |  1250 | Grava               |          381.0000 |
| La Ferre             |  1390 | Pintura B1021       |          402.0000 |
| La Ferre             |  1420 | Pintura C1012       |          440.5000 |
| La fragua            |  1040 | Varilla 3/18        |          401.5000 |
| La fragua            |  1080 | Ladrillos rojos     |          392.5000 |
| La fragua            |  1140 | Cantera blanca      |          401.0000 |
| La fragua            |  1180 | Recubrimiento P1001 |          370.5000 |
| La fragua            |  1200 | Recubrimiento P1019 |          381.0000 |
| La fragua            |  1230 | Cemento             |          421.0000 |
| La fragua            |  1250 | Grava               |          381.0000 |
| La fragua            |  1390 | Pintura B1021       |          402.0000 |
| La fragua            |  1420 | Pintura C1012       |          440.5000 |
| Oviedo               |  1040 | Varilla 3/18        |          401.5000 |
| Oviedo               |  1080 | Ladrillos rojos     |          392.5000 |
| Oviedo               |  1140 | Cantera blanca      |          401.0000 |
| Oviedo               |  1180 | Recubrimiento P1001 |          370.5000 |
| Oviedo               |  1200 | Recubrimiento P1019 |          381.0000 |
| Oviedo               |  1230 | Cemento             |          421.0000 |
| Oviedo               |  1250 | Grava               |          381.0000 |
| Oviedo               |  1390 | Pintura B1021       |          402.0000 |
| Oviedo               |  1420 | Pintura C1012       |          440.5000 |
| Tabiquera del centro |  1040 | Varilla 3/18        |          401.5000 |
| Tabiquera del centro |  1080 | Ladrillos rojos     |          392.5000 |
| Tabiquera del centro |  1140 | Cantera blanca      |          401.0000 |
| Tabiquera del centro |  1180 | Recubrimiento P1001 |          370.5000 |
| Tabiquera del centro |  1200 | Recubrimiento P1019 |          381.0000 |
| Tabiquera del centro |  1230 | Cemento             |          421.0000 |
| Tabiquera del centro |  1250 | Grava               |          381.0000 |
| Tabiquera del centro |  1390 | Pintura B1021       |          402.0000 |
| Tabiquera del centro |  1420 | Pintura C1012       |          440.5000 |
| Tubasa               |  1040 | Varilla 3/18        |          401.5000 |
| Tubasa               |  1080 | Ladrillos rojos     |          392.5000 |
| Tubasa               |  1140 | Cantera blanca      |          401.0000 |
| Tubasa               |  1180 | Recubrimiento P1001 |          370.5000 |
| Tubasa               |  1200 | Recubrimiento P1019 |          381.0000 |
| Tubasa               |  1230 | Cemento             |          421.0000 |
| Tubasa               |  1250 | Grava               |          381.0000 |
| Tubasa               |  1390 | Pintura B1021       |          402.0000 |
| Tubasa               |  1420 | Pintura C1012       |          440.5000 |
+----------------------+-------+---------------------+-------------------+
```

## Parte 2

INSERT INTO tabla VALUES (valorcolumna1, valorcolumna2, [...] , valorcolumnan) ;

Considerando que los valores de tipos CHAR y VARCHAR deben ir encerrados entre apóstrofes, los valores numéricos se escriben directamente y los de fecha, como '1-JAN-00' para 1o. de enero del 2000, inserta cinco nuevos materiales. 

## Parte 3

- Clave y descripción de los materiales que nunca han sido entregados.
- Razón social de los proveedores que han realizado entregas tanto al proyecto 'Vamos México' como al proyecto 'Querétaro Limpio'.
- Descripción de los materiales que nunca han sido entregados al proyecto 'CIT Yucatán'.
- Razón social y promedio de cantidad entregada de los proveedores cuyo promedio de cantidad entregada es mayor al promedio de la cantidad entregada por el proveedor con el RFC 'VAGO780901'.
- RFC, razón social de los proveedores que participaron en el proyecto 'Infonavit Durango' y cuyas cantidades totales entregadas en el 2000 fueron mayores a las cantidades totales entregadas en el 2001. 