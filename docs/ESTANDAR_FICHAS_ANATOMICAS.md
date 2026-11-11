# Estándar propuesto de fichas anatómicas ProClaVet

**Versión:** 1.0 — propuesta de estructura  
**Fecha:** 2026-11-10  
**Aplicación inicial:** especie equina

## Principios

- Cada registro conserva su identificador único actual.
- Nombre español, término latino y nomenclatura NAV se validan antes de marcarse como verificados.
- Los campos se adaptan al tipo anatómico; no se fuerza una plantilla idéntica para huesos, músculos, nervios y órganos.
- Todo dato anatómico debe tener fuente trazable. La ausencia de evidencia se marca como pendiente.
- La ficha debe enlazarse con el modelo 3D correspondiente, pero el modelo esquemático provisional nunca se etiqueta como anatomía real.

## Campos comunes

1. Identificación: ID, nombre español, término latino, término NAV y sinónimos aceptados.
2. Ubicación anatómica y topografía.
3. Descripción morfológica.
4. Relaciones anatómicas.
5. Función o papel fisiológico.
6. Particularidades de la especie equina.
7. Importancia clínica veterinaria.
8. Referencias bibliográficas verificables.
9. Estado de revisión, fecha y responsable de validación.
10. Modelo 3D, estado del modelo y estructuras relacionadas.

## Campos específicos por tipo

### Osteología
- Tipo y clasificación del hueso.
- Situación, orientación y caras/bordes/extremidades.
- Accidentes óseos y su identificación.
- Articulaciones y superficies articulares.
- Inserciones musculares y ligamentosas.
- Desarrollo/ osificación cuando sea pertinente.
- Particularidades y variaciones equinas.

### Artrología y sindesmología
- Tipo de articulación.
- Superficies articulares.
- Cápsula, cavidad y cartílago articular.
- Ligamentos y medios de unión.
- Movimientos y límites.
- Irrigación e inervación cuando estén documentadas.
- Relevancia clínica.

### Miología
- Origen.
- Inserción.
- Trayecto, forma y relaciones.
- Acción.
- Inervación.
- Irrigación.
- Fascias, bolsas o vainas asociadas cuando proceda.
- Particularidades equinas y relevancia clínica.

### Esplacnología y órganos
- Situación, regiones y relaciones.
- Forma, dimensiones y partes.
- Organización externa e interna.
- Irrigación arterial y drenaje venoso.
- Drenaje linfático e inervación.
- Función.
- Particularidades equinas y relevancia clínica.

### Angiología
- Origen y trayecto.
- Relaciones topográficas.
- Ramas o tributarias.
- Territorio irrigado o drenado.
- Anastomosis relevantes.
- Variaciones y relevancia clínica.

### Neurología
- Origen real y aparente cuando corresponda.
- Trayecto y relaciones.
- Ramas y comunicaciones.
- Territorio motor, sensitivo o autónomo.
- Función.
- Irrigación del nervio cuando sea pertinente.
- Relevancia clínica.

### Tegumento y anexos
- Región y distribución.
- Capas y organización.
- Anexos cutáneos.
- Vascularización e inervación.
- Función y particularidades equinas.
- Importancia clínica.

### Aparato digestivo, respiratorio, urinario y reproductor
Se aplicarán los campos de órganos, añadiendo los rasgos funcionales propios del sistema: segmentos, comunicaciones, conductos, mucosas, mecanismos fisiológicos y relaciones topográficas específicas.

## Estados editoriales

- **Pendiente:** aún no documentado.
- **En investigación:** se están contrastando fuentes.
- **Documentado:** contenido redactado con referencias, pendiente de revisión.
- **Verificado:** revisado contra bibliografía anatómica fiable y nomenclatura pertinente.
- **En conflicto:** existen fuentes discrepantes; se documenta la discrepancia.
- **No aplicable:** el campo no corresponde a esa estructura, con justificación.

## Flujo de trabajo

1. Inventariar y clasificar.
2. Validar nombre, lateralidad e identidad.
3. Reunir bibliografía fiable.
4. Redactar campos específicos y comunes.
5. Revisión anatómica y editorial.
6. Vincular estructura 3D y comprobar selección/visibilidad.
7. Publicar por lotes pequeños y revisar en el visor.

## No hacer

- No copiar la misma descripción a estructuras distintas.
- No inferir irrigación, inervación, inserciones o articulaciones por proximidad.
- No inventar citas ni atribuir datos a una fuente no consultada.
- No convertir un marcador o geometría esquemática en un modelo anatómico verificado.
- No borrar ni renumerar IDs existentes sin un plan de migración documentado.
