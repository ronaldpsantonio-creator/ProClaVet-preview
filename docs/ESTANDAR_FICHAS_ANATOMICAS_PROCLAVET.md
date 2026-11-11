# Estándar de fichas anatómicas — ProClaVet

**Versión:** 1.0  
**Fecha:** 11 de noviembre de 2026  
**Aplicación inicial:** especie equina. El estándar se diseñó para poder extenderse a otras especies sin mezclar datos entre especies.

## Principios obligatorios

1. Cada ficha describe una estructura anatómica concreta y conserva su identificador estable.
2. Los nombres deben respetar la nomenclatura veterinaria aceptada (NAV cuando corresponda); el nombre latino no se inventa ni se traduce literalmente si existe una denominación oficial.
3. La anatomía específica del caballo debe distinguirse de la descripción general de mamíferos.
4. Cada afirmación relevante debe poder rastrearse a una fuente bibliográfica identificable.
5. No se rellenan apartados por apariencia. Si falta evidencia, se indica «Pendiente de verificación».
6. «No aplica» se usa solo cuando el apartado no corresponde a la estructura, explicando por qué cuando pueda generar dudas.
7. Una geometría esquemática, un marcador o un modelo genérico no se etiqueta como modelo anatómico verificado.
8. La lateralidad, las variaciones anatómicas y las diferencias entre especies deben conservarse en la ficha.

## Campos comunes de identificación

- Identificador único.
- Nombre común en español.
- Nombre anatómico latino / NAV.
- Especie.
- Sistema y región anatómica.
- Categoría de estructura.
- Estado de auditoría de contenido.
- Estado del modelo 3D y procedencia/licencia, si existe.

## Plantillas por categoría

### Huesos
- Ubicación y orientación.
- Descripción morfológica general.
- Caras, bordes, extremos y accidentes anatómicos pertinentes.
- Relaciones topográficas.
- Articulaciones y superficies articulares.
- Inserciones musculares y ligamentosas relevantes.
- Irrigación e inervación ósea cuando exista información específica y útil.
- Función.
- Particularidades equinas y variaciones.
- Importancia clínica.
- Referencias.

### Músculos
- Ubicación y planos.
- Morfología, porciones y trayecto.
- Origen.
- Inserción.
- Relaciones anatómicas.
- Acción y función biomecánica.
- Inervación.
- Irrigación.
- Particularidades equinas.
- Importancia clínica.
- Referencias.

### Articulaciones y ligamentos
- Tipo y clasificación.
- Superficies articulares.
- Cápsula, cavidad, cartílago y medios de unión, según corresponda.
- Ligamentos y estructuras estabilizadoras.
- Relaciones.
- Movimientos y límites.
- Irrigación e inervación.
- Particularidades equinas.
- Importancia clínica.
- Referencias.

### Nervios
- Origen (real y aparente, cuando corresponda).
- Raíces y formación.
- Trayecto y relaciones.
- Ramas.
- Territorio motor.
- Territorio sensitivo.
- Comunicaciones.
- Particularidades equinas.
- Importancia clínica.
- Referencias.

### Arterias, venas y vasos linfáticos
- Origen o formación.
- Trayecto y relaciones.
- Ramas, tributarias o afluentes.
- Territorio irrigado o drenado.
- Anastomosis relevantes.
- Particularidades equinas.
- Importancia clínica.
- Referencias.

### Órganos y vísceras
- Ubicación, topografía y proyección.
- Forma, dimensiones y morfología externa.
- Organización interna e histológica cuando corresponda.
- Relaciones anatómicas.
- Función.
- Irrigación y drenaje venoso/linfático.
- Inervación.
- Particularidades equinas.
- Importancia clínica.
- Referencias.

### Estructuras tegumentarias, fascias y cavidades
La ficha se adapta a la naturaleza de cada elemento: composición, ubicación, límites, continuidad, relaciones, función, vascularización/inervación y relevancia clínica, solo cuando corresponda.

## Estado de cada apartado

- **Verificado:** contenido contrastado con fuentes confiables y referencias asociadas.
- **Pendiente de verificación:** todavía no se ha documentado con evidencia suficiente.
- **No aplica:** el campo no corresponde a esa estructura.
- **En revisión:** existe información, pero falta resolver una discrepancia o confirmar la fuente.

No se utilizará texto genérico repetido para aparentar que una ficha está completa.

## Flujo de auditoría y publicación

1. Auditar el conjunto de estructuras de un sistema.
2. Corregir nomenclatura, lateralidad, duplicados y clasificación sin cambiar IDs estables salvo justificación documentada.
3. Investigar cada estructura con tratados veterinarios, atlas académicos y fuentes institucionales.
4. Redactar la ficha con citas bibliográficas concretas.
5. Revisar coherencia anatómica y aplicabilidad de cada campo.
6. Integrar la ficha en los datos de la aplicación.
7. Verificar búsqueda, selección, visualización y persistencia en la app.
8. Registrar qué estructuras están completas y cuáles siguen pendientes.

## Advertencia de calidad

La existencia de un registro en el catálogo no significa que su ficha esté completa ni que tenga un modelo 3D válido. El estado del contenido, el estado del modelo y la validación anatómica deben mantenerse como indicadores separados.
