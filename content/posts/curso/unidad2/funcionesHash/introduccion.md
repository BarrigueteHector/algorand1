---
title: "Funciones Hash"
date: 2023-04-16T18:55:07-06:00
draft: false
---

Una función hash es cualquier función que se puede utilizar para asignar información digital de cualquier longitud a datos digitales de tamaño fijo. Los valores devueltos por una función hash se llaman valores hash, códigos hash, sumas hash o simplemente hashes.

Las funciones hash se pueden utilizar para:

- Sumas de verificación (checksums)
- Dígitos de verificación (check digits)
- Huellas digitales (fingerprints)
- Funciones de aleatorización (randomization functions)
- Códigos de corrección de errores (error-correcting codes)

{{<salto>}}

**Función hash criptográfica**

Una función hash criptográfica es una función unidireccional que permite verificar que ciertos datos de entrada se asignan a un valor hash dado.

Los datos de entrada se llaman a menudo el mensaje, y el valor hash se llama a menudo el resumen del mensaje o simplemente el resumen.

Si los datos de entrada son desconocidos, es extremadamente difícil reconstruir dichos datos solo conociendo el valor hash.

En criptografía, las funciones hash se utilizan para:

- Proporcionar integridad de los datos transmitidos
- Proporcionar autenticación del mensaje

**Definición**

Por una función hash generalmente nos referimos a una función _H_ que asigna entradas en un conjunto grande _M_ a salidas cortas en _T_.

Los elementos en _T_ a menudo se llaman resúmenes de mensaje o simplemente resúmenes.

{{<salto>}}

**Funciones Hash sin clave**

Una función hash sin clave es una función computable de manera eficiente cuya descripción es completamente pública. No hay claves secretas y cualquiera puede evaluar la función.

Sea _H_ una función hash sin clave desde un espacio de mensajes grande _M_ hacia un espacio de resúmenes pequeño _T_.

Decimos que dos mensajes _m{{<subindice "0">}}_ , _m{{<subindice "1">}} ∈ M_ son una colisión para la función _H_ si

_H(m{{<subindice "0">}}) = H(m{{<subindice "1">}})_ y _m{{<subindice "0">}} ≠ m{{<subindice "1">}}_

Informalmente, decimos que la función H es resistente a colisiones si encontrar una colisión para _H_ es difícil.

Dado que el espacio de resúmenes _T_ es mucho más pequeño que _M_, sabemos que existen muchas colisiones de este tipo. Sin embargo, si _H_ es resistente a colisiones, encontrar en realidad un par _m{{<subindice "0">}}_ , _m{{<subindice "1">}}_ que colisione debería ser difícil.

{{<salto>}}

**HASHING DE MENSAJES** (Hashing Messages)

Una función hash es una función unidireccional que crea una huella digital de tamaño fijo de una entrada.

La entrada puede tener cualquier tamaño, pero la salida tendrá un tamaño fijo (128 bits, 160 bits o 256 bits).

Un buen algoritmo hash debe:

- Aceptar una entrada de cualquier tamaño.
- Producir una salida de tamaño fijo para cualquier entrada.
- El resultado del hash no debe revelar ninguna información sobre la entrada.
- Debe ser imposible producir un hash específico.
- Debe ser imposible encontrar dos mensajes diferentes que produzcan el mismo resultado de hash.

![Imagen hashing messages](/posts/img/unidad2/hashing_messages.webp#center)

{{<salto>}}

**Aplicaciones de los algoritmos de hash**

Utilizado para:

- Producir huellas digitales de tamaño fijo de cualquier longitud para documentos.
- Producir información útil para detectar modificaciones maliciosas.
- Convertir contraseñas a una representación de tamaño fijo.
- Algoritmo Hash-cash.

{{<salto>}}

**Propiedades de las funciones hash**

La función hash criptográfica ideal tiene cuatro propiedades principales.

1. Es fácil calcular el valor hash para cualquier mensaje dado.
2. Es impracticable generar un mensaje a partir de su hash.
3. Es impracticable modificar un mensaje sin cambiar el hash.
4. Es impracticable encontrar dos mensajes diferentes con el mismo hash.

No existe una función hash perfecta, pero al menos se deben cumplir las siguientes propiedades:

1. Resistencia a la preimagen. Dado un valor hash _h_, debería ser difícil encontrar cualquier mensaje _m_ tal que _h = hash(m)_. Este concepto está relacionado con el de una función unidireccional.
2. Resistencia a la segunda preimagen. Dado un valor de entrada _m{{<subindice "1">}}_, debería ser difícil encontrar una entrada diferente _m{{<subindice "2">}}_ tal que _hash(m{{<subindice "1">}}) = hash(m{{<subindice "2">}})_.
3. Resistencia a colisiones. Debería ser difícil encontrar dos mensajes diferentes _m{{<subindice "1">}}_ y _m{{<subindice "1">}}_ tal que _hash(m{{<subindice "1">}}) = hash(m{{<subindice "2">}})_. A esta pareja se le llama colisión criptográfica de hash.

{{<salto>}}

**Problema del cumpleaños**

- En teoría de probabilidad, el problema del cumpleaños pregunta por la probabilidad de que, en un conjunto de n personas elegidas al azar, al menos dos compartan el mismo cumpleaños.
- La paradoja del cumpleaños se refiere al hecho contraintuitivo de que solo se necesitan 23 personas para que esa probabilidad supere el 50%.

{{<salto>}}

**Ataques de cumpleaños en funciones hash resistentes a colisiones**

- Considera una función hash _H_ que produce resúmenes de longitud _l_-bit para algún valor _l_ pequeño.
- Al aplicar la función hash a _2{{<exponente "l">}} + 1_ mensajes distintos, el atacante encontrará dos mensajes que generan el mismo resumen y, por lo tanto, romperá la resistencia a colisiones de _H_.
- Este ataque de fuerza bruta romperá la resistencia a colisiones de cualquier función hash.
- Las funciones hash que producen resúmenes de 16 bits no pueden ser resistentes a colisiones: siempre se puede encontrar una colisión utilizando solo _2{{<exponente "16">}} + 1 = 65537_ evaluaciones de la función hash.
- Se puede construir un ataque utilizando la paradoja del cumpleaños.
- Sea _H_ una función hash definida sobre _(M, T)_ y establezcamos _N := |T|_.
- Para funciones hash estándar, _N_ es bastante grande, por ejemplo, _N = 2{{<exponente "256">}}_ para SHA256.
- Suponemos que el tamaño de M es al menos 100N. Esto significa básicamente que los mensajes que se están hasheando son ligeramente más largos que el resumen de salida.
- Describimos un buscador de colisiones general que encuentra colisiones para _H_ después de _O(√N)_ evaluaciones de _H_ en promedio. En comparación, el ataque de fuerza bruta anterior requería _O(N)_ evaluaciones. Este buscador de colisiones más eficiente nos obliga a usar resúmenes mucho más grandes.

{{<salto>}}

**Algoritmo de ataque de cumpleaños**

![Imagen Algorithm birthday attack](/posts/img/unidad2/algorithm_birthday_attack.webp)

{{<salto>}}

**Ejemplos**

![Imagen examples](/posts/img/unidad2/examples.webp)

{{<salto>}}

**SHA256**

![Imagen SHA256](/posts/img/unidad2/sha256.webp)

{{<salto>}}

**SHA3**

Es el miembro más reciente de la familia de estándares Secure Hash Algorithm, lanzado por NIST el 5 de agosto de 2015. Aunque forma parte de la misma serie de estándares, SHA-3 es internamente diferente de la estructura similar a MD5 de SHA-1 y SHA-2. SHA-3 es un subconjunto de la amplia familia de primitivas criptográficas Keccak.

![Imagen SHA3](/posts/img/unidad2/sha3.webp)

{{<salto>}}

**SHAKE128 y SHAKE256**

Para SHA3-224, SHA3-256, SHA3-384 y SHA3-512 no se necesita realizar permutaciones adicionales de bloques en la fase de extracción. SHAKE128 y SHAKE256 permiten una longitud de salida arbitraria, lo cual es útil en aplicaciones como el relleno óptimo de cifrado asimétrico.

{{<salto>}}

**Nist instances**

![Imagen nist instances](/posts/img/unidad2/nist_instances.webp)

{{<salto>}}

**Derivación de clave basada en constraseña**

PBKDF1 y PBKDF2 (Función de Derivación de Clave Basada en Contraseña 1 y 2) son funciones de derivación de clave con un costo computacional variable, utilizadas para reducir la vulnerabilidad a ataques de fuerza bruta.

![Imagen password](/posts/img/unidad2/password.webp)

{{<salto>}}

{{<myShortcode_button class=myButtonTwo relref="/posts/curso/unidad2/unidadDos.md">}} Menu de la unidad

{{<myShortcode_button class=myButton relref="/posts/curso/unidad2/funcionesHash/video.md">}} Siguiente