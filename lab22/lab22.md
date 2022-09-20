# Lab 22 - Procedures

## Example

```mysql
DROP FUNCTION IF EXISTS varillacara();
DELIMITER //
CREATE FUNCTION varillacara() 
RETURNS INT 
DETERMINISTIC
BEGIN
DECLARE clave-varilla INT DEFAULT 0;
SELECT clave 
INTO clave-varilla
FROM materiales
WHERE descripcion LIKE 'Varilla%'
ORDER BY precio DESC
LIMIT 1;
RETURN clave-varilla;
END; //
DELIMITER ;
```


```mysql
CALL varillaCara(@ClaveVarillaCara)
```


Llamamos a la función y la insertamos en una variable

## First procedure

```mysql
CREATE PROCEDURE getTables()
SHOW TABLES;
```

## Second procedure

```mysql
CREATE PROCEDURE getMateriales(IN qty INT)
SELECT clave, descripcion
FROM materiales
ORDER BY descripcion
LIMIT qty;
```

## Third procedure

```mysql
CREATE PROCEDURE newProveedor(IN u_rfc VARCHAR(15), IN u_razonsocial VARCHAR(40))
INSERT INTO proveedores
VALUES (u_rfc,u_razonsocial);
```

```mysql
delimiter //
CREATE PROCEDURE depurar()
BEGIN
DELETE FROM materiales; 
DELETE FROM entregan;
DELETE FROM proveedores; 
DELETE FROM proyectos;
END //
delimiter ;
```