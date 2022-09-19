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

```mysql
INSERT INTO materiales 
VALUES (1460, 'Detergente Roma', 40, 5);
INSERT INTO materiales 
VALUES (1470, 'Ceramica', 80, 3);
INSERT INTO materiales 
VALUES (1480, 'Yeso', 70, 11);
INSERT INTO materiales 
VALUES (1500, 'Resina Epoxy', 700, 20);
INSERT INTO materiales 
VALUES (1490, 'Lejia', 50, 2);
```

## Parte 3

- Clave y descripción de los materiales que nunca han sido entregados.

```mysql
SELECT m.clave, m.descripcion 
FROM materiales m
WHERE m.clave NOT IN(
SELECT e.clave
FROM entregan e);

+-------+-----------------+
| clave | descripcion     |
+-------+-----------------+
|  1460 | Detergente Roma |
|  1470 | Ceramica        |
|  1480 | Yeso            |
|  1490 | Lejia           |
|  1500 | Resina Epoxy    |
|  2000 | Jabón           |
+-------+-----------------+
```
- Razón social de los proveedores que han realizado entregas tanto al proyecto 'Vamos México' como al proyecto 'Querétaro Limpio'.
```mysql
SELECT p.razonsocial
FROM proveedores p, entregan e, proyectos pro
WHERE p.rfc = e.rfc 
AND pro.numero = e.numero 
AND pro.denominacion LIKE 'Vamos Mexico'

AND EXISTS (SELECT p.razonsocial
        FROM proveedores p, entregan e, proyectos pro
        WHERE p.rfc = e.rfc 
        AND pro.numero = e.numero
        AND pro.denominacion LIKE 'Queretaro Limpio')

GROUP BY razonsocial;

+-------------+
| razonsocial |
+-------------+
| La fragua   |
| Alvin       |
+-------------+
2 rows in set (0.01 sec)

```
- Descripción de los materiales que nunca han sido entregados al proyecto 'CIT Yucatán'.
```mysql
-- find numero from proyecto CIT Yucatan
SELECT * 
FROM proyectos
WHERE denominacion like 'CIT Yucatan'

+--------+--------------+
| numero | denominacion |
+--------+--------------+
|   5015 | CIT Yucatan  |
+--------+--------------+
1 row in set (0.00 sec)

-- query
SELECT m.descripcion, m.clave 
FROM materiales m
WHERE m.clave NOT IN(
SELECT e.clave 
FROM materiales m, entregan e
WHERE e.clave = m.clave 
AND e.numero = 5015);

+---------------------+-------+
| descripcion         | clave |
+---------------------+-------+
| Varilla 3/16        |  1000 |
| Varilla 4/32        |  1010 |
| Varilla 3/17        |  1020 |
| Varilla 4/33        |  1030 |
| Varilla 4/34        |  1050 |
| Varilla 3/19        |  1060 |
| Varilla 4/35        |  1070 |
| Ladrillos rojos     |  1080 |
| Ladrillos grises    |  1090 |
| Block               |  1100 |
| Megablock           |  1110 |
| Sillar rosa         |  1120 |
| Sillar gris         |  1130 |
| Cantera blanca      |  1140 |
| Cantera rosa        |  1160 |
| Cantera amarilla    |  1170 |
| Recubrimiento P1001 |  1180 |
| Recubrimiento P1010 |  1190 |
| Recubrimiento P1028 |  1210 |
| Recubrimiento P1037 |  1220 |
| Cemento             |  1230 |
| Arena               |  1240 |
| Grava               |  1250 |
| Gravilla            |  1260 |
| Tezontle            |  1270 |
| Tepetate            |  1280 |
| Tubería 3.5         |  1290 |
| Tubería 4.3         |  1300 |
| Tubería 3.6         |  1310 |
| Tubería 4.4         |  1320 |
| Tubería 3.7         |  1330 |
| Tubería 4.5         |  1340 |
| Pintura C1010       |  1360 |
| Pintura B1020       |  1370 |
| Pintura C1011       |  1380 |
| Pintura B1021       |  1390 |
| Pintura C1011       |  1400 |
| Pintura B1021       |  1410 |
| Pintura C1012       |  1420 |
| Pintura B1022       |  1430 |
| Detergente Roma     |  1460 |
| Ceramica            |  1470 |
| Yeso                |  1480 |
| Lejia               |  1490 |
| Resina Epoxy        |  1500 |
| Jabón               |  2000 |
+---------------------+-------+
46 rows in set (0.00 sec)
```
- Razón social y promedio de cantidad entregada de los proveedores cuyo promedio de cantidad entregada es mayor al promedio de la cantidad entregada por el proveedor con el RFC 'VAGO780901'.
```mysql
SELECT razonsocial, e.rfc, AVG(e.cantidad) as promedio_entrega
FROM proveedores p, entregan e
WHERE p.rfc = e.rfc
GROUP BY e.rfc
HAVING promedio_entrega > (SELECT AVG(e.cantidad) as promedio_entrega
                           FROM proveedores p, entregan e
                           WHERE p.rfc = e.rfc
                           AND p.rfc LIKE 'VAGO780901')
ORDER BY AVG(e.cantidad) DESC;

-- Empty set (0.00 sec)

-- No existe el rfc provisto, pero la consulta inicial si arroja resultado

SELECT razonsocial, e.rfc, AVG(e.cantidad) as promedio_entrega
FROM proveedores p, entregan e
WHERE p.rfc = e.rfc
GROUP BY e.rfc
ORDER BY AVG(e.cantidad) DESC;
+----------------------+------------+------------------+
| razonsocial          | rfc        | promedio_entrega |
+----------------------+------------+------------------+
| La Ferre             | CCCC800101 |         455.5000 |
| Tabiquera del centro | GGGG800101 |         408.7000 |
| Oviedo               | BBBB800101 |         354.5833 |
| Alvin                | EEEE800101 |         353.9000 |
| Tubasa               | HHHH800101 |         333.3000 |
| Cecoferre            | DDDD800101 |         324.0909 |
| La fragua            | AAAA800101 |         311.4167 |
| Comex                | FFFF800101 |         289.4000 |
+----------------------+------------+------------------+
8 rows in set (0.01 sec)
```
- RFC, razón social de los proveedores que participaron en el proyecto 'Infonavit Durango' y cuyas cantidades totales entregadas en el 2000 fueron mayores a las cantidades totales entregadas en el 2001. 

```mysql
SET @no_infonavit = (
SELECT numero
FROM proyectos
WHERE denominacion 
LIKE 'Infonavit Durango')

```
+---------------+
| @no_infonavit |
+---------------+
|          5005 |
+---------------+

```mysql
SELECT SUM(e.cantidad) AS cantidades_totales_2001
FROM proveedores p, entregan e
WHERE e.numero = @no_infonavit
AND p.rfc = e.rfc
AND e.fecha BETWEEN '2001-01-01' AND '2001-12-31'
```
No hubo entregas en el 2001
+-------------------------+
| cantidades_totales_2001 |
+-------------------------+
|                    NULL |
+-------------------------+
1 row in set (0.00 sec)

```mysql
SELECT p.razonsocial, e.rfc, SUM(e.cantidad) AS cantidades_totales
FROM proveedores p, entregan e
WHERE e.numero = @no_infonavit
AND p.rfc = e.rfc
AND e.fecha BETWEEN '2000-01-01' AND '2000-12-31'
GROUP BY p.razonsocial, e.rfc
HAVING cantidades_totales > 0;
```
+----------------------+------------+--------------------+
| razonsocial          | rfc        | cantidades_totales |
+----------------------+------------+--------------------+
| Tabiquera del centro | GGGG800101 |                583 |
+----------------------+------------+--------------------+
1 row in set (0.00 sec)
```
