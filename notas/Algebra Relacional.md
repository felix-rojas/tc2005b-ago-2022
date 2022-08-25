# Álgebra Relacional

- [Álgebra Relacional](#álgebra-relacional)
  - [Definiciones](#definiciones)
  - [Operadores binarios](#operadores-binarios)
    - [Unión](#unión)
      - [Restricciones de operandos](#restricciones-de-operandos)
      - [Salida](#salida)
    - [Unión natural](#unión-natural)
      - [Restricciones operandos unión natural](#restricciones-operandos-unión-natural)
      - [Salida](#salida-1)
    - [Intersección](#intersección)
    - [Diferencia](#diferencia)
      - [Restricciones de operandos](#restricciones-de-operandos-1)
    - [Theta join](#theta-join)
  - [Operadores unitarios](#operadores-unitarios)
    - [Proyeccción](#proyeccción)
      - [Restricciones de operandos](#restricciones-de-operandos-2)
      - [Salida](#salida-2)
    - [Seleccción](#seleccción)
      - [Restricciones de operandos](#restricciones-de-operandos-3)
      - [Salida](#salida-3)

## Definiciones

Dominio son los tipos de datos

## Operadores binarios

### Unión

#### Restricciones de operandos

- Mismo dominio
- Mismo grado

#### Salida

Regresa la tabla con las tuplas de las relaciones de ambas sin repetición

### Unión natural

Operador conmutativo

#### Restricciones operandos unión natural

- Los operandos tienen al menos un campo en común

#### Salida

- La relación de los operandos donde los campos en común existen en ambos operandos



### Intersección



### Diferencia

- Operador binario
- No conmutativo

#### Restricciones de operandos

### Theta join

- Operador binario
- No tiene restricciones de dominio
- No tiene restricciones de grado

La salida es una relación con grado igual a la suma de los grados de las relaciones que se cumplan las relaciones 

## Operadores unitarios

### Proyeccción

#### Restricciones de operandos

#### Salida

Relación de los campos a proyectar de la relación

### Seleccción

#### Restricciones de operandos

#### Salida
