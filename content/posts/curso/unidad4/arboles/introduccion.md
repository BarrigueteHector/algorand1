---
title: "Árboles de Merkle"
date: 2023-04-16T22:20:15-06:00
draft: false
---

**Integridad del archivo**

Considera un conjunto de _n_ archivos críticos que cambian infrecuentemente, como un conjunto de ejecutables en disco.

Podemos usar una función hash para verificar que estos archivos no hayan sido modificados por algún código malicioso o malware.

![Imagen file integrity](/posts/img/unidad4/file_integrity.webp)

Los sistemas operativos utilizan este mecanismo para garantizar la integridad de los archivos del sistema operativo durante el proceso de arranque.

Los gestores de paquetes utilizan este mecanismo para verificar que los paquetes descargados desde un servidor remoto sean auténticos, comprobando que el valor hash sea igual al valor almacenado en un sitio de confianza de solo lectura.

¿Qué pasa si el archivo es un archivo ejecutable grande, almacenado en disco como una lista de bloques cortos de l bits _x{{<subindice "1">}},..., x{{<subindice "r">}}_?

Antes de que el sistema operativo cargue y ejecute este archivo ejecutable, necesita verificar que su contenido no haya sido alterado, es decir, calcular el hash del archivo y verificar que coincida con el valor almacenado.

El problema es que para un archivo grande, calcular el hash de todo el archivo puede llevar bastante tiempo, lo que aumentará considerablemente el tiempo de lanzamiento del ejecutable.

¿Qué podemos hacer?

{{<salto>}}

**Árboles de Merkle**

El sistema podría verificar cada bloque de forma independiente, justo antes de que se cargue ese bloque.

Tenemos un vector de _n_ elementos _T:=(x{{<subindice "1">}},...,x{{<subindice "n">}}) ∈ X{{<exponente "n">}}_, y deseamos calcular un hash corto y de este vector. Dado el hash _y_ y un par _(i,x)_ donde _1 ≤ i ≤ n_, necesitamos validar que x sea el elemento en la posición _i_ en _T_.

Una estructura de datos llamada árbol de Merkle y una función hash H se llama hash de árbol de Merkle

![Imagen merkle tree](/posts/img/unidad4/merkle_tree.webp)

El hash del árbol de Merkle utiliza una función hash resistente a colisiones _h_ que produce valores en un conjunto _Y_.

La entrada para _h_ es ya sea un único elemento en _X_, o un par de elementos en _Y_.

El hash del árbol de Merkle _H_, derivado de _h_, está definido sobre _(X{{<exponente "n">}}, Y)_.

Para hashear _(x{{<subindice "1">}},...,x{{<subindice "n">}}) ∈ X{{<exponente "n">}}_, primero se aplica h a cada uno de los n elementos de entrada para obtener _(y{{<subindice "1">}}, … , y{{<subindice "n">}}) ∈ Y{{<exponente "n">}}_. Luego se construye un árbol de hash a partir de estos elementos.

La función hash H se define de la siguiente manera:

![Imagen merkle tree text](/posts/img/unidad4/merkle_tree_text.webp)

{{<salto>}}

**Árbol de Merkle - Pertenencia**

Dado un valor hash _y := H(x{{<subindice "1">}},...,x{{<subindice "n">}})_, es bastante fácil demostrar que un _x ∈ X_ es el elemento en una posición particular en _T := (x{{<subindice "1">}},...,x{{<subindice "n">}})_.

Por ejemplo, para demostrar que _x = x{{<subindice "3">}}_, se proporcionan los hashes intermedios _π := (y{{<subindice "4">}}, y{{<subindice "9">}}, y{{<subindice "14">}})_. El verificador calcula:

![Imagen merkle tree membership](/posts/img/unidad4/merkle_tree_membership.webp)

Y aceptar que _x = x{{<subindice "3">}}_ si _𝑦 = y{{<subindice "15">}}_.

_π_ se llama una prueba de Merkle que demuestra que _x_ está en la posición 3 de _T_.

Para demostrar que un elemento x es el elemento en la posición _i_ de _T := (x{{<subindice "1">}},...,x{{<subindice "n">}})_, se generan como prueba π todos los hashes intermedios que son los hermanos de los nodos en el camino desde el nodo hoja i hasta la raíz del árbol.

Esta prueba _π_ contiene exactamente _log{{<subindice "2">}}n_ elementos en _Y_.

El verificador vuelve a calcular el hash de Merkle de _T_ comenzando en el nodo hoja número i y avanzando hacia la raíz.

Se acepta que _x_ es auténtico (es decir, _que x = x{{<subindice "i">}}_ ) si el hash de Merkle final calculado coincide con el valor de hash y almacenado en memoria de solo lectura.

![Imagen merkle tree sorted](/posts/img/unidad4/merkle_tree_sorted.webp)

{{<salto>}}

**Estructura de datos autenticada**

Una estructura de datos autenticada se utiliza para calcular un hash corto de una secuencia _T := (x{{<subindice "1">}}, ..., x{{<subindice "n">}})_, de modo que posteriormente se puedan demostrar propiedades de _T_ con respecto a este hash.

Un árbol de Merkle es un ejemplo de un concepto más abstracto llamado estructura de datos autenticada.

Los árboles de Merkle nos permiten probar la pertenencia y la no pertenencia.

Otras estructuras de datos autenticadas admiten operaciones adicionales, como inserciones y eliminaciones eficientes.

{{<salto>}}

**Esturcturas de datos Merkle actualizables**

Una desventaja de los árboles de hash de Merkle ordenados es que si se cambia incluso un solo elemento en el conjunto de datos _T_, ese elemento puede tener que moverse a una hoja diferente y todo el árbol de hash deberá ser recomputado desde cero. Esto puede llevar a realizar _O(n)_ cálculos de hash.

Otras estructuras de datos proporcionan la misma funcionalidad que los árboles de Merkle, pero también admiten una actualización eficiente, que requiere como máximo _O(log n)_ cálculos de hash para actualizar un elemento.

Un ejemplo es un esquema basado en un árbol 2-3 y otro esquema se basa en listas de salto (skip lists). Una estructura de datos autenticada común, utilizada en ciertos sistemas de criptomonedas, es un árbol de hash basado en la estructura de datos del árbol Patricia (Radix Tree).

{{<salto>}}

{{<myShortcode_button class=myButtonTwo relref="/posts/curso/unidad4/unidadCuatro.md">}} Menu de la unidad

{{<myShortcode_button class=myButton relref="/posts/curso/unidad4/arboles/video.md">}} Siguiente