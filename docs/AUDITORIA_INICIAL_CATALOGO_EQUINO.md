# Auditoría inicial del catálogo anatómico equino

**Proyecto:** ProClaVet-preview  
**Fecha:** 2026-11-10  
**Alcance:** inventario estructural de `data/equino.json` y revisión de cómo `js/app.js` presenta las fichas.  
**Estado:** fase 1 — diagnóstico del esquema de datos; todavía no es una validación anatómica individual de las 3.553 entradas.

## 1. Inventario comprobado

El archivo contiene 3.553 registros. Los 3.553 tienen identificador, nombre español, nombre latino, sistema y capa. Hay 301 registros con metadato `sex`.

| Código | Sistema | Registros |
|---|---|---:|
| ske | Esquelético | 344 |
| mus | Muscular | 531 |
| dig | Digestivo | 131 |
| res | Respiratorio | 163 |
| car | Cardiovascular | 594 |
| ner | Nervioso | 1.305 |
| uri | Urinario | 68 |
| rep | Reproductor | 238 |
| teg | Tegumentario | 179 |
| **Total** | | **3.553** |

## 2. Capas registradas

| Código | Capa | Registros |
|---|---|---:|
| org | Órganos internos | 2.672 |
| oss | Sistema óseo | 215 |
| art | Articulaciones y ligamentos | 135 |
| msu | Músculos superficiales | 133 |
| mpr | Músculos profundos | 393 |
| fas | Fascias | 5 |
| **Total** | | **3.553** |

## 3. Hallazgos sobre las fichas

- Ninguna entrada contiene actualmente un objeto `ficha` en el JSON.
- El visor busca `s.ficha`; cuando no existe, muestra «Pendiente: sin información verificada».
- La ficha actual usa un único conjunto de 12 campos para todas las clases de estructura. Es insuficiente como estándar universal: por ejemplo, un músculo requiere origen, inserción y acción; un nervio requiere trayecto, ramas y territorio; una articulación requiere superficies articulares, cápsula y medios de unión.
- Los 3.553 registros tienen nombre español y latino; no se comprobó todavía la exactitud de cada equivalencia ni la correspondencia con NAV.
- Solo 1 registro declara actualmente una ruta de modelo GLB en el JSON. Los modelos esquemáticos generados por código no deben confundirse con modelos anatómicos verificados.
- La clasificación actual por sistema y capa es una base de inventario, no una prueba de que cada estructura esté correctamente clasificada.

## 4. Prioridades de auditoría

1. Revisar duplicados, lateralidad, nomenclatura, jerarquía y clasificación.
2. Definir fichas específicas por tipo anatómico.
3. Completar primero un sistema piloto con fuentes verificables y control de calidad.
4. Extender el método al resto de sistemas, conservando identificadores estables.
5. Auditar por separado los modelos 3D y su correspondencia anatómica.

## 5. Regla de integridad académica

No rellenar campos con texto genérico para aparentar que están completos. Cuando no exista evidencia suficiente, conservar el estado «Pendiente de verificación», indicar la fuente necesaria y no presentar una hipótesis como hecho anatómico.

## 6. Protección del proyecto

Este informe se incorpora a la rama principal del repositorio de prueba `ProClaVet-preview`. No modifica el repositorio principal `ProClaVet`.


## 7. Segunda pasada: integridad del inventario

Comprobaciones automáticas adicionales sobre los 3.553 registros:

- IDs duplicados: **0**.
- Campos vacíos entre ID, nombre español, nombre latino, sistema y capa: **0**.
- IDs que incumplen el patrón estructural esperado: **0**.
- Coincidencias repetidas de nombre español dentro de un sistema: **88 grupos**.
- Coincidencias repetidas de nombre latino dentro de un sistema: **1.403 grupos**.
- Metadatos de sexo: 162 entradas `m`, 139 entradas `f`; 3.252 entradas sin ese metadato.

Las coincidencias de nombres latinos no se consideran automáticamente errores: pueden corresponder a estructuras bilaterales o a estructuras homónimas en regiones distintas. Deben revisarse junto con el ID, la lateralidad, la región y la jerarquía antes de proponer cambios.

### Distribución sistema/capa observada

| Sistema/capa | Registros |
|---|---:|
| car/org | 594 |
| ske/oss | 215 |
| ske/art | 129 |
| mus/msu | 133 |
| mus/mpr | 393 |
| mus/fas | 5 |
| dig/org | 131 |
| res/org | 157 |
| res/art | 6 |
| ner/org | 1.305 |
| uri/org | 68 |
| rep/org | 238 |
| teg/org | 179 |

**Observación de clasificación:** las seis entradas respiratorias ubicadas en la capa `art` y las cinco fascias clasificadas bajo el sistema muscular merecen revisión semántica. No se reclasifican automáticamente sin validar su naturaleza anatómica.

## 8. Límites de esta pasada

Esta auditoría automática no certifica que los nombres latinos sean correctos, que cada estructura exista como entidad independiente en el caballo, ni que la lateralidad y topografía sean adecuadas. Esos puntos requieren revisión anatómica documentada por sistema y región.
