# Auditoría inicial del catálogo equino — ProClaVet-preview

**Fecha:** 11 de noviembre de 2026  
**Alcance:** inventario estructural de `data/equino.json` y revisión del mecanismo de fichas en `js/app.js`.  
**Entorno:** repositorio de prueba `ProClaVet-preview`, rama `main`. No se modificó el repositorio principal.

## 1. Inventario

El catálogo contiene **3553 registros** distribuidos en nueve sistemas:

| Código | Sistema | Registros |
|---|---|---:|
| `ske` | Esquelético | 344 |
| `mus` | Muscular | 531 |
| `dig` | Digestivo | 131 |
| `res` | Respiratorio | 163 |
| `car` | Cardiovascular | 594 |
| `ner` | Nervioso | 1305 |
| `uri` | Urinario | 68 |
| `rep` | Reproductor | 238 |
| `teg` | Tegumentario | 179 |

## 2. Estado de las fichas

La interfaz lee la información desde el objeto `ficha` de cada registro y espera los campos:

- `ubicacion`, `descripcion`, `relaciones`, `accidentes`, `articulaciones`, `inserciones`
- `irrigacion`, `inervacion`, `funcion`, `especie`, `clinica`, `referencias`

**Resultado de la inspección:** ninguno de los 3553 registros contiene un objeto `ficha` con contenido anatómico. Por eso la aplicación muestra «Pendiente: sin información verificada» en todos esos apartados. Esto es una carencia de contenido de datos, no solamente un problema visual.

## 3. Estado de modelos 3D

- Registros con ruta de modelo GLB declarada: 1.
- Registros con marcador geométrico `ph`: 1.
- La aplicación genera geometrías esquemáticas por código para algunas categorías óseas; el propio visor advierte que no son anatomía real.
- No se debe presentar un marcador ni una geometría esquemática como modelo anatómico verificado.

## 4. Integridad básica del catálogo

- Registros sin identificador: 0.
- Registros sin nombre español: 0.
- Registros sin nombre latino: 0.
- Registros sin código de sistema: 0.
- Registros sin código de capa: 0.
- Identificadores duplicados: 0.
- Nombres que contienen términos como «provisional», «marcador» o «pendiente»: 1.

### Registros explícitamente provisionales
- `equ.car.cor.001`: Corazón (marcador provisional) — Cor

## 5. Criterio de desarrollo de fichas

No se copiará una plantilla ósea a músculos, nervios u órganos. Se establecerán plantillas por categoría:

- **Huesos:** ubicación, morfología, caras/bordes/extremos, accidentes, articulaciones, inserciones, vascularización e inervación cuando estén documentadas, función, particularidades equinas y clínica.
- **Músculos:** ubicación, origen, inserción, trayecto, relaciones, acción, inervación, irrigación, variaciones equinas y relevancia clínica.
- **Articulaciones y ligamentos:** superficies articulares, medios de unión, cápsula, movimientos, estabilidad, irrigación/inervación pertinente y clínica.
- **Nervios:** origen, raíces, trayecto, relaciones, ramas, territorio motor/sensitivo y relevancia clínica.
- **Vasos:** origen, trayecto, relaciones, ramas/tributarias, territorio irrigado/drenado y relevancia clínica.
- **Órganos y vísceras:** ubicación, forma, estructura, relaciones, función, irrigación, drenaje, inervación y clínica.
- **Otras estructuras:** plantilla específica según su naturaleza anatómica.

Los apartados que no correspondan se marcarán como «No aplica» con justificación; los que no tengan evidencia suficiente permanecerán «Pendiente de verificación». No se inventarán datos para llenar campos.

## 6. Secuencia de trabajo

1. Depurar y auditar el inventario por sistema, conservando IDs estables y lateralidad.
2. Definir y documentar los esquemas de ficha por categoría.
3. Completar un sistema a la vez, con fuentes anatómicas veterinarias y nomenclatura NAV.
4. Auditar las fichas terminadas y sus referencias.
5. Vincular cada registro con modelos 3D verificados; mantener explícitamente provisional lo que aún no tenga modelo.
6. Probar en Android el buscador, ficha, selección y visor.

## 7. Límites de esta primera auditoría

Esta etapa es una auditoría de estructura de datos y del mecanismo de visualización. No equivale a validar individualmente la exactitud anatómica de los 3553 nombres ni a completar las fichas. Esa validación se hará por sistema y con referencias trazables.
