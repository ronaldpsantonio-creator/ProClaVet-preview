# Auditoría detallada: basisfenoides y presfenoides equinos

**Proyecto:** ProClaVet-preview  
**Especie:** Equina (*Equus caballus*)  
**Fecha:** 11 de noviembre de 2026  
**Estado:** Auditoría anatómica documental completada; fichas aún no incorporadas  
**Alcance:** Registros `equ.ske.cra.002` y `equ.ske.cra.003` del catálogo equino.

---

## 1. Objetivo y método

Se revisaron la identidad, nomenclatura, posición, componentes morfológicos, relaciones topográficas y uniones de los dos componentes del esfenoides que aparecen como registros separados en ProClaVet. Se priorizaron fuentes veterinarias con descripción específica del caballo y se contrastaron con atlas veterinarios y bibliografía de osteología comparada.

Esta auditoría no sustituye una revisión de un cráneo equino físico ni una validación de imágenes/modelos 3D. Cuando una característica requiere comprobación directa o una fuente equina más específica, se señala como pendiente.

## 2. Registros actuales del catálogo

| ID estable | Nombre español actual | Nombre latino actual | Evaluación |
|---|---|---|---|
| `equ.ske.cra.002` | Basisfenoides | *Os basisphenoidale* | Conservar |
| `equ.ske.cra.003` | Presfenoides | *Os presphenoidale* | Conservar |

Ambos registros existen en `data/equino.json`, pertenecen al sistema esquelético (`ske`) y a la capa ósea (`oss`). No se detecta motivo anatómico para fusionar sus identificadores en el catálogo: deben permanecer diferenciados para representar las dos piezas del esfenoides, aunque se expliquen también como conjunto.

**Decisión:** conservar ambos IDs y sus nombres latinos actuales. No crear un tercer registro genérico “esfenoides” por ahora; puede utilizarse “esfenoides” como encabezado o agrupador conceptual sin duplicar el inventario.

## 3. Organización anatómica general

En el caballo, el esfenoides se describe mediante dos componentes medianos: basisfenoides, caudal, y presfenoides, rostral. La base central del cráneo se dispone de caudal a rostral como porción basilar del occipital, cuerpo del basisfenoides y cuerpo del presfenoides. La Universidad de Murcia describe expresamente esta secuencia en équidos y señala las dos sincondrosis que separan estos componentes durante el desarrollo.

Cada componente tiene un cuerpo impar y expansiones laterales pares:
- Basisfenoides: cuerpo y alas pares; presenta además procesos pterigoideos que se proyectan rostroventralmente desde su cuerpo.
- Presfenoides: cuerpo y alas pares (alas orbitosfenoidales en la descripción osteológica).

La división en dos huesos es útil para la anatomía veterinaria comparada y para el atlas. En el animal adulto, el grado de unión/fusión de las sincondrosis depende de la edad y no debe asumirse que los límites cartilaginosos permanecen abiertos durante toda la vida.

## 4. Basisfenoides — *Os basisphenoidale*

### 4.1 Ubicación y orientación

Es el componente caudal del esfenoides, situado entre la porción basilar del occipital y el presfenoides. Su cuerpo forma parte de la base central del cráneo; sus alas se extienden lateralmente y participan en la base lateral del neurocráneo.

### 4.2 Morfología y componentes

La descripción de vet-Anatomy/IMAIOS identifica un cuerpo mediano y dos expansiones laterales elevadas dorsalmente denominadas alas. En la jerarquía anatómica de ese atlas se incluyen el alisfenoides, cuerpo, ala, proceso pterigoideo y seno esfenoidal como estructuras relacionadas/subyacentes.

Para la ficha equina deben describirse como mínimo:
- Cuerpo del basisfenoides (*Corpus basisphenoidale*).
- Alas derecha e izquierda (*Alae*), evitando representarlas como un solo elemento lateral indiferenciado.
- Procesos pterigoideos (*Processus pterygoidei*), proyecciones rostroventrales del cuerpo según la descripción docente de la Universidad de Murcia.
- Relación con el seno esfenoidal, cuya extensión puede involucrar el basisfenoides y variar entre individuos.

No se recomienda crear registros independientes para cada ala, proceso, foramen o accidente en esta etapa. Deben formar parte de la ficha del hueso y de su jerarquía de subestructuras si el visor lo permite.

### 4.3 Relaciones topográficas y límites

- **Caudal:** porción basilar del occipital (*Pars basilaris ossis occipitalis*), relacionada durante el desarrollo por la sincondrosis esfeno-occipital.
- **Rostral:** presfenoides, relacionado durante el desarrollo por la sincondrosis interesfenoidal.
- **Lateral:** porciones petrosa y timpánica del temporal y otras estructuras de la base lateral del cráneo.
- **Ventral:** región de la base externa del cráneo y procesos pterigoideos.
- **Dorsal:** cavidad craneal y región de la silla turca/hipófisis, cuya descripción detallada deberá verificarse con atlas y osteología equina antes de completar la ficha.

La Universidad de Murcia describe en el caballo las alas del basisfenoides como parte de la base lateral del cráneo y sitúa el agujero rasgado en una región delimitada por el borde caudal del ala del basisfenoides, la porción basilar del occipital y las porciones petrosa y timpánica del temporal. Por ello, no debe atribuirse todo el agujero rasgado exclusivamente al basisfenoides.

### 4.4 Seno esfenoidal y variación equina

Un estudio anatómico de 16 équidos encontró variación considerable en la anatomía de los senos esfenoidales y esfenopalatinos. Los senos esfenoidales fueron pequeños en animales jóvenes y parecieron aumentar de tamaño y complejidad con la edad. También varió la extensión del seno hacia el interior del basisfenoides; el septo que separaba ambos lados fue frecuentemente desviado de la línea media, aunque estaba intacto en todos los ejemplares examinados.

**Implicación para ProClaVet:** describir el seno esfenoidal como una cavidad relacionada con el basisfenoides, pero no imponer una forma, tamaño, simetría o extensión fija en todos los caballos. La ficha debe indicar que existe variación individual y relacionada con la edad.

### 4.5 Función e importancia clínica

El basisfenoides contribuye a la arquitectura de la base del cráneo y a la protección/soporte de estructuras endocraneales y neurovasculares. Su relación con los senos esfenoidales tiene relevancia clínica por la proximidad de nervios craneales y vasos. El estudio equino de los senos esfenopalatinos advierte que las paredes dorsal y lateral de estos senos son delgadas y próximas a los nervios craneales II, III, IV, V y VI y a vasos importantes.

No añadir en esta ficha trayectos nerviosos, vascularización ósea o inserciones musculares específicas sin contrastar fuentes adicionales.

## 5. Presfenoides — *Os presphenoidale*

### 5.1 Ubicación y orientación

Es el componente rostral del esfenoides. Se sitúa rostral al basisfenoides y contribuye a la base del cráneo y a la región rostral de la fosa craneal. En la vista ventral del cráneo equino, el cuerpo del presfenoides queda parcialmente cubierto por las alas del vómer, según la descripción de la Universidad de Murcia.

### 5.2 Morfología y componentes

La ficha de vet-Anatomy/IMAIOS para el caballo describe:
- Cuerpo (*Corpus*).
- Ala derecha y ala izquierda (*Alae*).
- Seno(s) esfenoidal(es) relacionado(s) con el cuerpo.

Las alas contribuyen a la formación de la órbita y del canal óptico; la superficie interna participa en la formación de la cavidad craneal. El cuerpo contiene los senos esfenoidales derecho e izquierdo, que no están completamente separados por el tabique del seno esfenoidal, según la descripción de IMAIOS. Esta formulación debe contrastarse con la variabilidad equina descrita en el estudio anatómico de senos antes de modelar una cavidad estándar.

### 5.3 Relaciones topográficas y articulaciones

IMAIOS enumera articulaciones/contactos del presfenoides con:
- Basisfenoides.
- Etmoides.
- Huesos frontales.
- Vómer.

La Universidad de Murcia confirma específicamente la continuidad caudal del cuerpo del presfenoides con el cuerpo del basisfenoides mediante la sincondrosis interesfenoidal durante el desarrollo. El vómer cubre parcialmente el presfenoides en la superficie ventral.

Las alas del presfenoides se dirigen hacia la región orbitaria y contribuyen a sus límites óseos y al canal óptico. No asignar todos los límites de la órbita o del canal óptico exclusivamente al presfenoides: son estructuras compartidas con huesos vecinos.

### 5.4 Función e importancia clínica

Contribuye a la base rostral del neurocráneo, a la fosa craneal rostral, a la órbita y al canal óptico. Su relación con el seno esfenoidal es clínicamente relevante por la proximidad de estructuras neurovasculares; evitar describir relaciones clínicas más específicas sin fuente equina directa.

## 6. Sincondrosis y desarrollo

Deben representarse y explicarse dos uniones principales:

1. **Sincondrosis esfeno-occipital (*Synchondrosis sphenooccipitalis*):** entre el basisfenoides y la porción basilar del occipital (basioccipital). Es el límite caudal del conjunto esfenoidal.
2. **Sincondrosis interesfenoidal (*Synchondrosis intersphenoidalis*):** entre el basisfenoides y el presfenoides. Es el límite entre ambos componentes del esfenoides.

La Universidad de Murcia presenta ambas uniones en el cráneo equino. La bibliografía de desarrollo craneal confirma que las sincondrosis de la base del cráneo son centros cartilaginosos de crecimiento y que su persistencia/fusión varía según especie y edad.

**Precaución:** no introducir una edad exacta universal de cierre en la ficha equina con las fuentes consultadas. Para hacerlo se requiere una fuente osteológica/ radiográfica equina específica que documente muestra, edad y criterio de obliteración. En el atlas, describir el estado como dependiente del desarrollo y evitar extrapolar cifras humanas.

## 7. Nomenclatura y granularidad recomendadas

| Elemento | Tratamiento recomendado |
|---|---|
| Basisfenoides | Mantener registro `equ.ske.cra.002` |
| Presfenoides | Mantener registro `equ.ske.cra.003` |
| Esfenoides | Usar como conjunto/agrupador conceptual, sin duplicar como hueso independiente por ahora |
| Cuerpo y alas de cada hueso | Subestructuras descriptivas dentro de la ficha |
| Procesos pterigoideos | Describir dentro del basisfenoides; no crear IDs nuevos todavía |
| Sincondrosis interesfenoidal | Relación de desarrollo entre ambos huesos; no clasificar como hueso |
| Sincondrosis esfeno-occipital | Relación de desarrollo entre basisfenoides y occipital/basioccipital |
| Senos esfenoidales | Describir como cavidades relacionadas; no como huesos |
| Forámenes/canales | Documentar en la ficha y asignar límites compartidos correctamente |

## 8. Decisiones para ProClaVet

1. Conservar ambos identificadores y nombres latinos actuales.
2. Presentar basisfenoides y presfenoides como dos componentes relacionados del esfenoides.
3. Explicar explícitamente su orden caudorostral y sus dos sincondrosis.
4. En la ficha del basisfenoides incluir cuerpo, alas pares, procesos pterigoideos y relación variable con el seno esfenoidal.
5. En la ficha del presfenoides incluir cuerpo, alas pares, contribución a órbita/canal óptico, relación con vómer y seno esfenoidal.
6. No crear nuevos registros para accidentes anatómicos ni para las sincondrosis en esta fase.
7. No inventar edades de fusión, medidas, vascularización, inervación o inserciones no sustentadas.
8. Mantener separado el estado de ficha anatómica del estado del modelo 3D.

## 9. Estado de implementación

- Auditoría documental: **completada**.
- Cambios en `data/equino.json`: **ninguno**.
- Fichas anatómicas integradas en la aplicación: **pendientes**.
- Modelos 3D anatómicos verificados: **pendientes**.
- Revisión visual en la app: **no realizada en esta auditoría**.

Conforme al flujo de trabajo acordado, el siguiente paso es cargar las fichas del basisfenoides y presfenoides en el catálogo, respetando el estándar de fichas de ProClaVet. Esa integración debe realizarse después de esta auditoría, y debe verificarse por separado en la aplicación.

## 10. Fuentes consultadas

1. **Universidad de Murcia.** Área de Anatomía y Embriología Veterinarias. *Base del cráneo en équidos*. Material docente audiovisual, 28 de agosto de 2010. Incluye transcripción sobre la secuencia de la base central, las alas y procesos pterigoideos del basisfenoides, y las sincondrosis esfeno-occipital e interesfenoidal.  
   https://clutv10.um.es/pro/video?id=13261

2. **IMAIOS, vet-Anatomy.** *Basisphenoid bone — Os basisphenoidale* (Horse). Referencia osteológica y jerarquía de subestructuras; cita Barone (2017).  
   https://www.imaios.com/en/vet-anatomy/anatomical-structures/basisphenoid-bone-11073768820

3. **IMAIOS, vet-Anatomy.** *Presphenoid bone — Os presphenoidale* (Horse). Describe cuerpo, alas, articulaciones y relación con órbita, canal óptico y seno esfenoidal; cita Sisson & Grossman (1986) y König & Liebich (2021).  
   https://www.imaios.com/en/vet-anatomy/anatomical-structures/presphenoid-bone-11073769540

4. **Tucker R, et al.** *Clinical anatomy of the equine sphenopalatine sinus*. Equine Veterinary Journal. 2004. Estudio anatómico en 16 équidos que documenta variación del seno esfenoidal, extensión al basisfenoides y relaciones neurovasculares.  
   https://pubmed.ncbi.nlm.nih.gov/15460069/

5. **A review of ectochondral bone and the role of membranes in shaping endochondral bones of the skull.** Anatomical Record. Revisión sobre desarrollo del esfenoides y sincondrosis entre presfenoides, basisfenoides y occipital. Fuente de desarrollo craneal comparado, no específica del caballo.  
   https://anatomypubs.onlinelibrary.wiley.com/doi/full/10.1002/ar.25614

6. **König HE, Liebich HG.** *Veterinary Anatomy of Domestic Mammals*. 7th ed. 2021. Referencia bibliográfica identificada en vet-Anatomy/IMAIOS para osteología veterinaria; consultar el texto completo para completar detalles no cubiertos por las fuentes abiertas.

---

**Nota de calidad:** esta auditoría establece una base documental suficiente para redactar las fichas iniciales, pero no declara verificados los modelos 3D ni sustituye una inspección osteológica directa. Las variaciones de los senos y los tiempos de fusión deben mantenerse explícitos en el contenido educativo.
