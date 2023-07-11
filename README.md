# Página de Algorand

## Funcionamiento

La página fue creada con el framework [Hugo](https://gohugo.io/) en su versión `0.110.0`, también se utilizó [Chocolatey](https://community.chocolatey.org/) en su versión `1.3.0`. El tema utilizado fue [Paper Mod](https://github.com/adityatelange/hugo-PaperMod).

El siguiente [video](https://www.youtube.com/watch?v=hjD9jTi_DQ4&t=1023s&ab_channel=EnvatoTuts%2B) resultó de gran ayuda para la instalación y creación de la página.

## Componentes

[archetypes](https://github.com/BarrigueteHector/algorand1/tree/main/archetypes): tiene la estructura de como se crearán los archivos `.md`.

[assets/css/common](https://github.com/BarrigueteHector/algorand1/tree/main/assets/css/common): incluye todos los `.css` utilizados.

[content](https://github.com/BarrigueteHector/algorand1/tree/main/content): tiene la página de inicio [_index](https://github.com/BarrigueteHector/algorand1/blob/main/content/_index.md) y la carpeta [posts](https://github.com/BarrigueteHector/algorand1/tree/main/content/posts) tiene todas las otras páginas que componen al sitio.

[content/post/curso](https://github.com/BarrigueteHector/algorand1/tree/main/content/posts/curso): solo tiene las páginas de los temas del curso. Está dividido en unidades (6 en total), cada unidad tiene subtemas. Cada subtema se compone de 3 archivos: 

  - `introduccion`: explicación del subtema.
  - `video`: video del subtema.
  - `more`: conceptos e ideas importantes, así como mapas conceptuales, infografías, etc.

[content/posts/img](https://github.com/BarrigueteHector/algorand1/tree/main/content/posts/img): imágenes utilizadas (todas con extensión `.webp`), solo las que se usaron como muestra del sitio son `.png`. También se divide por unidades.

[layouts](https://github.com/BarrigueteHector/algorand1/tree/main/layouts): archivos `.html` utilizados, los de [_default](https://github.com/BarrigueteHector/algorand1/tree/main/layouts/_default) y [partials](https://github.com/BarrigueteHector/algorand1/tree/main/layouts/partials) son del tema utilizado. _Revisar el apartado de Notas_

[layouts/shortcodes](https://github.com/BarrigueteHector/algorand1/tree/main/layouts/shortcodes): shortcodes creados a lo largo del desarrollo del proyecto. Si se quiere hacer uno, debe estár en esta carpeta.

[themes](https://github.com/BarrigueteHector/algorand1/tree/main/themes): tiene lo lo necesario para utilizar el tema Paper mod.

## Archivos `.md`

Estos archivos son las páginas del sitio web. Todas tienen y deben de tener un encabezado (el cual se encuentra entre `---`). Es importante mencionar que por lo menos debe contener los parámetros `title` y `draft`, este último debe ser `false` para evitar que haya errores al momento de hacer pruebas.

Estos archivos pueden ser creados manualmente o con ayuda del CMD. Si se decide crearlos por medio de CMD, debe usar el comando:

```
hugo new ruta/nombre.md
```

Este método por default agregará los parámetros `title`, `date` y `draft` al archivo. Si se crea manualmente, deben de ser agregados por nosotros.

## Shortcodes

Los shortcodes son formas en las que podemos simplificar la creación de estructuras de HTML, como formularios o botones, e incluso para algo tan sencillo como un salto de linea.

Estos deben estár en la carpeta [layouts/shortcodes](https://github.com/BarrigueteHector/algorand1/tree/main/layouts/shortcodes). Podemos darles el nombre que querramos, de preferencia debe ser corto y fácil de entender, y deben tener la extensión `.html`. Dentro de este archivo debemos colocar lo que querramos que el shortcode haga. No es necesario colocar toda la maquetación que en un archivo `.html` lleva comúnmente, solo la estructura de un botón, formulario, salto de linea, etc.

Dentro del shortcode podemos asignarle un `class` para aplicarles un estilo. 

Su invocación en el archivo `.md` es de la siguiente forma:

```
<shortcode>
```

Es posible pasarle parámetros, para ello debe especificarse al principio del `.html` y utilizando el lenguaje `Go`.

A continuación se explicarán los shortcodes que se utilizan en el proyecto:

- [avance](https://github.com/BarrigueteHector/algorand1/blob/main/layouts/shortcodes/avance.html): revisa si el usuario puede acceder a una determina unidad. El usuario debió revisar la(s) unidad(es) anterior(es) para tener acceso a ella.

- [botton](https://github.com/BarrigueteHector/algorand1/blob/main/layouts/shortcodes/button.html): creación de botones que redireccionan a otra página

- [exponente](https://github.com/BarrigueteHector/algorand1/blob/main/layouts/shortcodes/exponente.html): permite que se puedan escribir exponentes

- [red message](https://github.com/BarrigueteHector/algorand1/blob/main/layouts/shortcodes/red_message.html): escribe algo de color rojo

- [salto](https://github.com/BarrigueteHector/algorand1/blob/main/layouts/shortcodes/salto.html): salto de linea 

- [subindice](https://github.com/BarrigueteHector/algorand1/blob/main/layouts/shortcodes/subindice.html): permite que se puedan escribir subindices

- [youtube](https://github.com/BarrigueteHector/algorand1/blob/main/layouts/shortcodes/youtube.html): permite anexar videos de YT. Aunque no es necesario crearlo ya que es predeterminado

## Notas

- Para cualquier modificación a un archivo `.html` o `.css` debe ser sobre alguno que se encuentre en la carpeta [assets/css/common](https://github.com/BarrigueteHector/algorand1/tree/main/assets/css/common) o [layouts](https://github.com/BarrigueteHector/algorand1/tree/main/layouts). ***Revisar el siguiente punto***

- Si revisamos el contenido de [themes](https://github.com/BarrigueteHector/algorand1/tree/main/themes), existe la carpeta `Paper mod`, la cual tiene la misma estructura (carpetas) antes explicada. En las carpetas (de `Paper mod`) que tienen los `.css` y `.html` encontraremos más archivos que los que hay en las carpetas explicadas del apartado anterior. Si se desea realizar alguna modificación sobre un archivo que solo esté en las carpetas de `Paper mod`, debe ***copiarse*** dicho archivo y ***colocarse en la carpeta correspondiente***. Una vez que el archivo se encuentre en las carpetas del sitio, puede modificarse.

- Es posible agregar archivos `.js`, para ello debe crearse la carpeta en `assets` con el nombre `js`.
  
