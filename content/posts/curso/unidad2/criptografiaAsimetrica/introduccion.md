---
title: "Criptografía asimétrica"
date: 2023-04-16T18:56:10-06:00
draft: false
---

**Encriptación asimetrica**

Cada usuario tiene dos claves, una secreta y una pública.

Ambas claves son inversas dentro de un campo.

Para cifrar/descifrar se utilizan funciones unidireccionales.

{{<salto>}}

**Funciones unidireccionales de trampa**

- Son funciones matemáticas que solo permiten calcular resultados de manera sencilla para usuarios auténticos.
- La dirección inversa es difícil para usuarios no auténticos.

Por ejemplo:

_f(M) = C_

Siempre es fácil

_f-1(C) = M_

Siempre es difícil, pero si tienes la trampa se vuelve fácil.

{{<salto>}}

**Funciones de trampa unidireccionales**

Problema de factorización

- **Directa**: producto de dos números primos grandes _p*q = n_

- **Inversa**: factorización de un número grande _n = p * q_

Problema del logaritmo discreto

- **Directa**: exponenciación discreta _b = a{{<exponente "x">}} mod n_

- **Inversa**: logaritmo discreto _x = log{{<subindice "a">}} b mod n_

Problema de la mochila (Knapsack Problem)

- **Directo**: Agregar dos elementos con trampa
- **Inverso**: Agregar dos elementos sin trampa

Problema de la Raíz Primitiva Módulo n (Primitive Root Modulo n Problem)

- **Directo**: Producto Módulo n _x = a*a mod n_
- **Inverso**: Raíz Módulo n _a = √x mod n_

Ya hemos introducido la noción de una función unidireccional.

Una función _F: X → Y_ que es fácil de calcular, pero difícil de invertir.

Sin embargo, estas no son suficientes para nuestros propósitos.

Necesitamos funciones unidireccionales con una característica especial, llamada trampa.

Una trampa es un secreto que permite invertir eficientemente la función. Sin el conocimiento de la trampa, la función sigue siendo difícil de invertir.

{{<salto>}}

**Esquema de funciones con trampas**

Sea _X_ e _Y_ conjuntos finitos. Un esquema de función con trampas _T_, definido sobre _(X, Y)_, es un triple de algoritmos _(G, F, I)_, donde:

- _G_ es un algoritmo de generación de claves probabilístico que se invoca como _(pk, sk) ← {{<exponente "R">}} G()_, donde _pk_ se denomina clave pública y sk se denomina clave secreta.
- _F_ es un algoritmo determinista que se invoca como _y ← F(pk, x)_, donde _pk_ es una clave pública (como salida de _G_) y _x_ pertenece a _X_. La salida _y_ es un elemento de _Y_.
- _I_ es un algoritmo determinista que se invoca como _x ← I(sk, y)_, donde _sk_ es una clave secreta (como salida de _G_) y _y_ pertenece a _Y_. La salida _x_ es un elemento de _X_.

Además, se debe cumplir la siguiente propiedad de corrección: para todas las posibles salidas _(pk, sk)_ de _G()_ y para todo _x ∈ X_, tenemos que _I(sk, F(pk, x)) = x_.

{{<salto>}}

**Intercambio de claves utilizando una función con trampas unidireccional**

1. Alice calcula _(pk, sk) ← {{<exponente "R">}} G()_ y envía _pk_ a Bob.
2. Al recibir _pk_ de Alice, Bob calcula _x ← {{<exponente "R">}} X_, _y ← F(pk, x)_, y envía _y_ a Alice.
3. Al recibir _y_ de Bob, Alice calcula _x ← I(sk, y)_.

![Imagen key exchange](/posts/img/unidad2/key_exchange.webp#center)

La propiedad de corrección del esquema de función con trampas garantiza que al final del protocolo, Alice y Bob tienen el mismo valor _x_, el cual es su clave secreta compartida.

{{<salto>}}

**Cifrado asimétrico**

![Imagen asymetric cipher](/posts/img/unidad2/asymmetric_cipher.webp#center)

{{<salto>}}

{{<myShortcode_button class=myButtonTwo relref="/posts/curso/unidad2/unidadDos.md">}} Menu de la unidad

{{<myShortcode_button class=myButton relref="/posts/curso/unidad2/criptografiaAsimetrica/video.md">}} Siguiente