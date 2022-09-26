# Ejercicios formas normales

## Ejercicio 1

La siguiente relación es utilizada por el departamento de cobros de una empresa que ofrece el servicio de telecable, En ella se tiene una representación de los pagos de servicios mensuales de sus contratantes:

Servicios(cliente, domicilio y estado , año, rentabasica 1, servicios adicionales 1, rentabasica 2, servicios adicionales 2, rentabasica 3, servicios adicionales 3, .... rentabasica 12, servicios adicionales 12)

### 1FN
Servicios(cliente, domicilio, estado , año, rentabasica 1, servicios adicionales 1, rentabasica 2, servicios adicionales 2, rentabasica 3, servicios adicionales 3, .... rentabasica 12, servicios adicionales 12)

### 2FN
Servicios(noContrato, cliente, domicilio, estado , año, rentabasica 1, servicios adicionales 1, rentabasica 2, servicios adicionales 2, rentabasica 3, servicios adicionales 3, .... rentabasica 12, servicios adicionales 12)

### 3FN
Estado           (idEstado, nombre)
Cliente          (noContrato, nombre, domicilio, idEstado)
Servicio         (idServicio, nombre, tarifa)
Cliente_Servicio (noContrato, idServicio, fecha, monto)


## Ejercicio 2

Una empresa de manufactura controla su producción mediante la siguiente tabla:

Producción (Código de parte, Descripción de parte, Fecha,
No. de operador, nombre del operador y cantidad producida en Línea 1 Turno 1,
No. de operador, nombre del operador y cantidad producida en Línea 1 Turno 2,
No. de operador, nombre del operador y cantidad producida en Línea 1 Turno 3,
No. de operador, nombre del operador y cantidad producida en Línea 2 Turno 1,
No. de operador, nombre del operador y cantidad producida en Línea 2 Turno 2,
No. de operador, nombre del operador y cantidad producida en Línea 2 Turno 3,
No. de operador, nombre del operador y cantidad producida en Línea 3 Turno 1,
No. de operador, nombre del operador y cantidad producida en Línea 3 Turno 2,
No. de operador, nombre del operador y cantidad producida en Línea 3 Turno 3)

### 1FN
### 2FN
### 3FN

## Ejercicio 3

Una empresa de telefonía maneja la facturación de sus servicios con la siguiente tabla:

Facturación (Nombre del cliente y  Dirección , Fecha y  Hora, Duración, Número de teléfono de origen, Entidad federativa de origen, Ciudad de origen, Número de teléfono de destino, Entidad federativa de destino, Ciudad de destino, Tarifa por minuto entre ciudad de origen y ciudad de destino, Fecha de inicio del período de facturación, Fecha final del período de facturación)

### 1FN
### 2FN
### 3FN
