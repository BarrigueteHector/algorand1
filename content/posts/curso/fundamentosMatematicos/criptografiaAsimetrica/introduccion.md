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

![Imagen key exchange](/posts/curso/img/fundamentos_criptoAsimetrica/key_exchange.png#center)

La propiedad de corrección del esquema de función con trampas garantiza que al final del protocolo, Alice y Bob tienen el mismo valor _x_, el cual es su clave secreta compartida.

{{<salto>}}

**Cifrado asimétrico**

![Imagen asymetric cipher](/posts/curso/img/fundamentos_criptoAsimetrica/asymmetric_cipher.png#center)

{{<salto>}}

**Firma digital**

![Imagen digital signature](/posts/curso/img/fundamentos_criptoAsimetrica/digital_signature.png#center)

**Cifrado con la clave pública del remitente**

- Esto no es útil para transmitir datos y garantizar la confidencialidad.
- Se puede utilizar para cifrar datos localmente.
- Sin embargo, los algoritmos de clave simétrica son preferibles debido a su mayor eficiencia.
- Si ahora, el remitente utiliza su clave privada para cifrar un mensaje, el resultado será una firma digital.
- Esta firma autentica al remitente.
- Si también utilizamos una función de hash, entonces también podemos garantizar la integridad del mensaje.
- Obviamente, el remitente no puede cifrar datos utilizando la clave privada del receptor.


{{<salto>}}

**Algoritmo RSA**

En febrero de 1978, Ron Rivest, Adi Shamir y Leonard Adleman propusieron el algoritmo de clave pública llamado RSA.

Pasos:

1. Cada usuario elige un grupo _n = p * q_.
2. _p_ y _q_ son valores privados.
3. Cada usuario calcula _f(n) = (p-1)(q-1)_.
4. Cada usuario elige una clave pública e tal que _1 < e < f(n)_ y cumple con la condición _mcd [e, f(n)] = 1_.
5. Cada usuario calcula la clave privada _d = inv [e, f(n)]_.
6. El usuario hace públicos el grupo _n_ y la clave _e_.
7. La clave d se mantiene en secreto, incluyendo _p_ y _q_.

- Cifrado: _C = N{{<exponente "eR">}} mod n{{<subindice "R">}}_
- Firma: _C = h(M){{<exponente "dS">}} mod n{{<subindice "S">}}_

{{<salto>}}

**ElGamal**

- En 1985, Taher ElGamal propuso un algoritmo que utiliza el Problema del Logaritmo Discreto.
- Se elige un grupo multiplicativo _Z{{<subindice "p">}}*_, donde _p_ es un número primo grande.
- A partir de _p_, se elige una raíz a como generador del grupo.
- Cada usuario elige un número aleatorio _λ_ dentro de _p_.
    - _λ_ es la clave privada.
- Cada usuario calcula _a{{<subindice "λ">}} mod p_.
    - Los valores _(a{{<subindice "λ">}} mod p)_ y _p_ son la clave pública.

{{<salto>}}

**Cifrado ElGamal**

- _A_ cifra _N_ para enviarlo a _B_
    - _B_ ha elegido su clave privada _b_ dentro de un grupo multiplicativo y el número primo _p_, que es público.
    - _B_ hace público el valor de _a{{<exponente "b">}} mod p_.
    - _A_ genera un número aleatorio _n_ (usado para una sesión) y calcula _a{{<exponente "n">}} mod p_.
    - Con la clave pública de _B_ (_a{{<exponente "b">}}_), _A_ calcula:

        _(a{{<exponente "b">}})n mod p y N*(a{{<exponente "b">}}){{<exponente "n">}} mod p_.

    - _A_ envía a _B_ el par: _C = [a{{<exponente "b">}} mod p, N*(a{{<exponente "b">}}){{<exponente "n">}}n mod p]_.

{{<salto>}}

**Descrifado ElGamal**

- _B_ descifra _C_:
    - _B_ recibe _C = [a{{<exponente "n">}} mod p, N*(a{{<exponente "b">}}){{<exponente "n">}} mod p]_.
    - _B_ toma _a{{<exponente "n">}} mod p_ y calcula _(a{{<exponente "n">}}){{<exponente "b">}} mod p_.
    - _B_ calcula:

        _[N*(a{{<exponente "b">}}){{<exponente "n">}} mod p] / [(a{{<exponente "n">}}){{<exponente "b">}} mod p]_
        
        Recuerda: 
        
        _(a{{<exponente "b">}}){{<exponente "n">}} = (a{{<exponente "n">}}){{<exponente "b">}}_
    - Esto es posible ya que existe el inverso de _(a{{<exponente "n">}}){{<exponente "b">}}_ en el grupo _p_. Entonces:
        
        _[N*(a{{<exponente "b">}}){{<exponente "n">}} * {inv (a{{<exponente "n">}}){{<exponente "b">}}, p}] mod p = N_

{{<salto>}}

**Digital Signature Algorithm**

![Imagen digital signature algorithm](/posts/curso/img/fundamentos_criptoAsimetrica/digital_signature_algorithm.png)


{{<myShortcode_button class=myButtonTwo relref="/posts/curso/fundamentosMatematicos/unidadDos.md">}} Menu de la unidad

{{<myShortcode_button class=myButton relref="/posts/curso/fundamentosMatematicos/criptografiaAsimetrica/video.md">}} Siguiente