# Auditoría osteológica equina — cráneo y estructuras asociadas

**Fecha:** 11 de noviembre de 2026  
**Repositorio:** ProClaVet-preview, rama `main`  
**Alcance:** revisión del inventario de registros con prefijo `equ.ske.cra` y comparación con referencias anatómicas veterinarias equinas. Esta es una auditoría de catálogo; no certifica modelos 3D.

## 1. Inventario actual

El catálogo contiene **29 registros** bajo la categoría de cráneo:

- Occipital, basisfenoides, presfenoides, etmoides e interparietal.
- Pares: parietales, frontales, temporales, nasales, lagrimales, cigomáticos, maxilares, incisivos, palatinos y pterigoides.
- Vómer.
- Hemimandíbulas derecha e izquierda.
- Un registro adicional de basioccipital.

Los 29 registros tienen identificador, nombre español, nombre latino, sistema esquelético y capa ósea. Ninguno tiene ficha anatómica desarrollada en el JSON.

## 2. Hallazgos que requieren corrección o decisión de modelado

### 2.1 Occipital y basioccipital: jerarquía anatómica
El registro `equ.ske.cra.001` representa el hueso occipital como conjunto, mientras que `equ.ske.cra.018` representa su porción basilar (`Os basioccipitale`). El basioccipital es una parte del occipital, no un hueso adicional que deba sumarse sin aclaración al inventario del cráneo adulto.

**Recomendación:** conservar ambos identificadores por utilidad didáctica, pero definir una relación padre–componente: occipital (conjunto) → porción basilar, porciones laterales y porción escamosa. Evitar contabilizarlos como dos huesos independientes. Revisar si las porciones laterales y escamosa requieren registros hijos propios o si se describen dentro de la ficha del occipital.

### 2.2 Esfenoides
El catálogo separa basisfenoides (`Os basisphenoidale`) y presfenoides (`Os presphenoidale`). Esta separación es válida para una descripción osteológica detallada. La ficha debe explicar que constituyen componentes del esfenoides y documentar sus límites, relaciones y diferencias, evitando presentarlos como estructuras aisladas sin contexto.

### 2.3 Interparietal
El registro único `equ.ske.cra.005` es compatible con la descripción del interparietal equino como elemento impar/central en el adulto. Debe anotarse que su desarrollo y fusión con huesos vecinos varían con la edad; no se debe duplicar automáticamente en izquierda y derecha.

### 2.4 Mandíbula
Los registros `equ.ske.cra.017-i/d` representan las dos mitades mandibulares. La ficha debe distinguir la anatomía de cada hemimandíbula y explicar la sínfisis mandibular y su unión/fusión según edad y desarrollo. Evitar etiquetar cada mitad como una mandíbula completa independiente.

### 2.5 Huesos nasales y conchas nasales
La lista de cráneo no incluye registros explícitos para las conchas nasales óseas (en especial la concha nasal ventral) ni para los cornetes etmoidales. Son estructuras relevantes de la cavidad nasal y aparecen en los atlas anatómicos de cabeza equina.

**Recomendación:** incorporarlas después de confirmar su denominación NAV, nivel de detalle y criterio de registro en el catálogo. No crear nombres latinos por traducción libre.

### 2.6 Hioides y huesecillos auditivos
El aparato hioideo está registrado en la categoría `hyo` y los huesecillos auditivos en `oid`, fuera de los 29 registros `cra`. Esta separación por subcategorías es razonable, pero el atlas debe mostrar que forman parte de la anatomía de la cabeza y relacionarlos con cráneo, oído medio, faringe y lengua según corresponda.

### 2.7 Huesos no emparejados y pares
La mayoría de los registros laterales utiliza sufijos `-i` y `-d`. Debe mantenerse una convención uniforme y corregirse la gramática de presentación («izquierdo/derecho» según el sustantivo) sin alterar identificadores estables.

## 3. Cobertura del inventario

La lista actual representa los principales huesos del neurocráneo y viscerocráneo, pero no debe considerarse exhaustiva a nivel de componentes anatómicos. El catálogo necesita una revisión complementaria de:

- Conchas nasales y componentes del laberinto etmoidal.
- Porciones y procesos anatómicos de occipital, temporal y esfenoides.
- Procesos y láminas de los huesos faciales que se estudian como accidentes, no necesariamente como registros separados.
- Suturas craneales, forámenes, canales, cavidades y senos paranasales, que son estructuras anatómicas importantes pero no deben mezclarse con registros de huesos.
- Dientes y alvéolos, si el alcance del atlas incluye odontología.

No todo elemento anatómico debe convertirse en un hueso separado: las superficies, procesos, forámenes, suturas y cavidades suelen documentarse como accidentes o subestructuras de una ficha principal, o como registros independientes solo si la navegación y el modelo 3D lo justifican.

## 4. Criterio para completar fichas del cráneo

Cada ficha ósea debe incluir ubicación y orientación, morfología, superficies y accidentes, relaciones, articulaciones/suturas, inserciones musculares y ligamentosas, irrigación e inervación cuando estén documentadas, función, particularidades equinas, relevancia clínica y bibliografía.

En el cráneo se prestará atención especial a:
- Cavidad craneal, cavidad nasal, órbita y cavidad oral.
- Senos paranasales y comunicaciones.
- Forámenes y canales neurovasculares.
- Articulación temporomandibular.
- Particularidades equinas: órbita ósea completa, cresta facial, conformación alargada del cráneo, dientes y senos paranasales.

## 5. Decisiones antes de editar los registros

1. Mantener IDs existentes.
2. Añadir relaciones jerárquicas sin contar una porción como hueso adicional independiente.
3. Validar con NAV los nombres de conchas nasales y estructuras etmoidales antes de incorporarlas.
4. Separar huesos de accidentes anatómicos, suturas, cavidades y forámenes.
5. Completar primero las fichas de los registros actuales y después decidir altas justificadas en el inventario.
6. Mantener los modelos esquemáticos etiquetados como provisionales hasta disponer de geometría anatómica verificada.

## 6. Fuentes de contraste

- University of Minnesota, Large Animal Anatomy, “Head”: https://pressbooks.umn.edu/largeanimalanatomy/chapter/neck-head/ — descripción de los principales huesos del cráneo y particularidades equinas.
- IMAIOS vet-Anatomy, “Anatomy of the equine head using CT”: https://www.imaios.com/en/vet-anatomy/horse/horse-head — estructuras de cabeza equina organizadas según Nomina Anatomica Veterinaria; incluye occipital, basisfenoides, presfenoides, pterigoides, temporal, parietal, frontal, etmoides, vómer, nasal, lagrimal, maxilar, concha nasal ventral, incisivo, palatino, cigomático, mandíbula y aparato hioideo.
- Textbook of Veterinary Anatomy, capítulo “Head”: https://elsevier-elibrary.com/contents/fullcontent/58986/epubcontent_v2/OEBPS/B9781416066071000025.htm — descripción y rasgos del cráneo equino.
- “Clinical Anatomy of the Horse”, capítulo 2 (copia de consulta): https://content.filelynk.com/vetlibrary2/Cleaned-Files/91-100/Clinical%20Anatomy%20of%20the%20Horse.pdf — vistas dorsal, lateral y ventral de los huesos del cráneo.
- University of South Florida, ClipArt ETC, “Skeleton of a Horse”: https://etc.usf.edu/clipart/57400/57401/57401_horse.htm — referencia histórica complementaria; no usar como autoridad primaria para nomenclatura actual.

## 7. Estado

**Auditoría de inventario: realizada.**  
**Correcciones de datos: no aplicadas todavía.**  
**Fichas anatómicas: pendientes.**  
**Modelos 3D anatómicos verificados: pendientes.**

Este documento identifica decisiones y posibles omisiones que deben resolverse antes de declarar completo el cráneo equino.
