# Auditoría de estado ProClaVet — actualización 2026-11-12

**Repositorio de trabajo:** `ronaldpsantonio-creator/ProClaVet-preview`  
**Rama:** `main`  
**Repositorio original:** sin modificaciones.

## 1. Inventario actualizado

El archivo `data/equino.json` contiene **3.860 registros** distribuidos en 11 sistemas:

| Código | Sistema | Registros |
|---|---|---:|
| ske | Esquelético | 352 |
| mus | Muscular | 570 |
| dig | Digestivo | 141 |
| res | Respiratorio | 163 |
| car | Cardiovascular | 594 |
| ner | Nervioso | 1.305 |
| uri | Urinario | 68 |
| rep | Reproductor | 238 |
| teg | Tegumentario | 179 |
| end | Endocrino | 40 |
| sen | Órganos de los sentidos | 210 |
| **Total** | | **3.860** |

La cifra difiere de la auditoría inicial del 11-11-2026 (3.553 registros y nueve sistemas), por lo que este informe pasa a ser la referencia cuantitativa más reciente.

## 2. Fichas anatómicas

Se identificaron **74 registros con ficha que contiene información**:

- Esquelético: 52 de 352.
- Muscular: 20 de 570.
- Respiratorio: 2 de 163.
- Los otros ocho sistemas: 0 fichas con contenido detectado.

En los 74 registros con ficha están presentes los 12 campos comunes del estándar de fichas (ubicación, descripción, relaciones, accidentes, articulaciones, inserciones, irrigación, inervación, función, especie, clínica y referencias). La presencia de texto no equivale por sí sola a validación bibliográfica independiente de cada afirmación.

### Cráneo equino

Se encontraron **31 registros** con prefijo `equ.ske.cra`. Los 31 tienen ficha con los 12 campos comunes. Incluyen los pares izquierdo/derecho, vómer, hemimandíbulas, basioccipital y conchas nasales ventrales.

El basioccipital se conserva como componente/porción basilar del occipital, no como hueso adulto independiente. La ficha del occipital debe explicar esta relación jerárquica.

## 3. Imágenes JPG

**Estado actual: 0 imágenes anatómicas JPG vinculadas a registros.**

- Ningún registro contiene actualmente un campo de imagen reconocido (`imagen`, `image`, `img` o equivalente).
- No se encontraron rutas JPG/JPEG en los datos.
- El árbol del repositorio no contiene todavía una carpeta de imágenes anatómicas.
- La interfaz actual (`js/app.js`) no implementa un componente para mostrar imágenes anatómicas en la ficha.

**Conclusión:** antes de cargar imágenes en volumen, se debe incorporar soporte explícito para una ruta de imagen por estructura y una presentación visible dentro de la ficha. Las imágenes deberán tener procedencia y licencia documentadas.

## 4. Modelos 3D

- Registros con ruta de modelo declarada: 1.
- Registros con marcador geométrico provisional: 1.
- Archivos GLB anatómicos presentes en el árbol revisado: 0.
- Modelos GLB anatómicos verificados: 0.

El único registro con ruta de modelo es el corazón, cuyo nombre está marcado como provisional y cuyo marcador geométrico no debe confundirse con un modelo anatómico. El visor también genera geometrías esquemáticas para determinadas estructuras; estas deben seguir identificadas como esquemáticas, no como modelos reales.

## 5. Estado de integridad

- Registros sin ID: 0.
- Registros sin nombre español: 0.
- Registros sin nombre latino: 0.
- Registros sin código de sistema: 0.
- Registros sin código de capa: 0.
- IDs duplicados: 0 (control automatizado ejecutado en esta actualización).
- Registros sin ID, nombre español, nombre latino, sistema o capa: 0 en cada campo.

### Desglose del sistema esquelético

De los 352 registros esqueléticos, 52 tienen ficha con contenido y 300 no. Por capa: 217 registros óseos (46 con ficha), 133 articulares/ligamentosos (4 con ficha) y 2 registros orgánicos (2 con ficha). Los 31 registros del cráneo están incluidos entre los 46 óseos con ficha.

## 6. Decisiones y siguientes pasos

1. Mantener intacto el repositorio original y continuar exclusivamente en `ProClaVet-preview`.
2. Continuar la auditoría por sistema, conservando los controles manuales ya realizados por el usuario.
3. Incorporar soporte de imagen JPG/JPEG en los datos y en la interfaz de fichas, sin exigir que exista modelo 3D.
4. Establecer una convención de rutas, por ejemplo `assets/anatomia/equino/<sistema>/<id>.jpg`, y un campo explícito `imagen` por registro.
5. Cargar imágenes de forma progresiva, verificando visibilidad, correspondencia anatómica, lateralidad, calidad, fuente y licencia.
6. Completar fichas por categoría anatómica; no aplicar una plantilla ósea a músculos, vasos, nervios u órganos.
7. Al final, incorporar modelos 3D GLB individualizados y verificados, manteniendo separado el estado de ficha, imagen y modelo.

## 7. Regla de calidad

Cada estructura tendrá estados independientes:
- **Ficha:** pendiente / en revisión / verificada.
- **Imagen:** ausente / cargada / verificada.
- **Modelo 3D:** ausente / esquemático / cargado / verificado.

No se marcará una estructura como completa solo por tener un registro, una imagen o una geometría provisional.
