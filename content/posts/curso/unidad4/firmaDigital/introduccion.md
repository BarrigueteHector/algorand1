---
title: "Firma Digital"
date: 2023-04-16T22:20:02-06:00
draft: false
---

**Firma digital**

![Imagen digital signature](/posts/img/unidad4/digital_signature.webp#center)

**Cifrado con la clave pública del remitente**

- Esto no es útil para transmitir datos y garantizar la confidencialidad.
- Se puede utilizar para cifrar datos localmente.
- Sin embargo, los algoritmos de clave simétrica son preferibles debido a su mayor eficiencia.
- Si ahora, el remitente utiliza su clave privada para cifrar un mensaje, el resultado será una firma digital.
- Esta firma autentica al remitente.
- Si también utilizamos una función de hash, entonces también podemos garantizar la integridad del mensaje.
- Obviamente, el remitente no puede cifrar datos utilizando la clave privada del receptor.

{{<salto>}}

**Cifrado con la clave privada del remitente**

- Si ahora, el remitente utiliza su clave privada para cifrar un mensaje, el resultado será una firma digital.
- Esta firma autentica al remitente.
- Si también utilizamos una función hash, entonces también podemos garantizar la integridad del mensaje. 
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

**Algoritmo de Firma Digial (Digital Signature Algorithm)**

- El Algoritmo de Firma Digital (DSA) es un criptosistema de clave pública y un estándar de procesamiento de información federal para firmas digitales.
- Está basado en el concepto matemático de exponenciación modular y el problema del logaritmo discreto.
- DSA es una variante de los esquemas de firma Schnorr y ElGamal.

![Imagen digital signature algorithm](/posts/img/unidad4/digital_signature_algorithm.webp)

{{<salto>}}

## RSA VS DSA

![Imagen rds elgamal ecc](/posts/img/unidad4/rds_elgamal_ecc.webp)

{{<salto>}}

## Curvas elipticas

**Introducción**

- En el ámbito de la criptografía, las curvas elípticas fueron propuestas por primera vez en 1985 de manera independiente por N. Koblitz y V. Miller.
- Las curvas elípticas como entidades algebraicas/geométricas han existido desde la segunda mitad del siglo XIX.
- Se utilizan en la creación de algoritmos para factorizar enteros, realizar pruebas de primalidad y en la criptografía de clave pública.
- Las curvas elípticas se pueden definir sobre cualquier campo, como los números reales, los números complejos, etc.
- Para fines criptográficos, nos preocupamos solo por aquellas curvas definidas sobre campos finitos.
- Más específicamente, consideramos curvas elípticas primas _(GF(p))_ y binarias _(GF(2{{<exponente "m">}}))_.


**Curvas elípticas sobre campos finitos**

- Las Curvas Elípticas son grupos (abelianos) que tienen las siguientes propiedades:
- Clausura
- Asociatividad
- Tienen elemento identidad
- Elemento inverso
- Conmutatividad
- Para cada elemento del grupo.
- Su representación geométrica es (forma de Weierstrass):

![Imagen elliptic curves](/posts/img/unidad4/elliptic_curves.webp)

El conjunto de puntos en la curva.

Sea _p > 3_ un número primo. Una curva elíptica _E_ definida sobre _Fp_ se representa mediante la ecuación:

_y{{<exponente "2">}} = x{{<exponente "3">}} + ax + b_

donde _a, b ∈ Fp_ cumplen la condición _4a{{<exponente "3">}} + 27b{{<subindice "2">}} ≠ 0_. Escribimos _E/Fp_ para indicar que _E_ está definida sobre _Fp_.

La condición _4a{{<exponente "3">}} + 27b{{<subindice "2">}} ≠ 0_ asegura que la ecuación _x{{<exponente "3">}} + ax + b = 0_ no tenga una raíz doble. Esto es necesario para evitar ciertas degeneraciones.

{{<salto>}}

**Operaciones**

El elemento identidad es el punto al infinito _O_.
- El inverso de un punto _P_ es su simétrico con respecto al eje _x_.
- La adición se define sobre 3 puntos colineales que son distintos de cero e intersectan la curva _P, Q, R_, entonces _P+Q+R= 0_.
- Si solo hay dos puntos de intersección, es decir, una línea tangente intersecta la curva, entonces _P=Q_, por lo tanto, _P+P=R_ o _2P=R_, esto se llama duplicación de un punto.
- Hablando en términos geométricos, estamos obteniendo -_R_.

![Imagen elliptic curves graph](/posts/img/unidad4/elliptic_curves_graph.webp)

{{<salto>}}

**Adición**

![Imagen addition](/posts/img/unidad4/addition.webp)

_P + Q = -R_

Esta ecuación, en esta forma, nos permite derivar un método geométrico para calcular la suma entre dos puntos _P_ y _Q_:
    
si trazamos una línea que pasa por _P_ y _Q_, esta línea intersectará un tercer punto en la curva, _R_ (esto se deduce por el hecho de que _P, Q_ y _R_ están alineados). Si tomamos el inverso de este punto, _-R_, hemos encontrado el resultado de _P+Q_.

![Imagen addition dos](/posts/img/unidad4/addition_dos.webp)

- ¿Qué sucede si _P=0_ o _Q=0_? Ciertamente, no podemos trazar ninguna línea (_0_ no está en el plano _xy_). Pero dado que hemos definido _0_ como el elemento identidad, _P+0=P_ y _0+Q=Q_ para cualquier _P_ y _Q_.
- ¿Qué sucede si _P=-Q_? En este caso, la línea que pasa por los dos puntos es vertical y no intersecta ningún tercer punto. Pero si P es el inverso de _Q_, entonces tenemos _P+Q=P+(-P)=0_ según la definición de inverso.
- ¿Qué sucede si _P=Q_? En este caso, hay infinitas líneas que pasan por el punto. Consideremos un punto _Q' ≠ P_. ¿Qué sucede si hacemos que _Q'_ se acerque a _P_, acercándose cada vez más? La línea que pasa por _P_ y _Q'_ se vuelve tangente a la curva. Podemos decir que _P+P=-R_, donde _R_ es el punto de intersección entre la curva y la línea tangente a la curva en _P_.

![Imagen addition tres](/posts/img/unidad4/addition_tres.webp)

{{<salto>}}

**Multicación escalar**

Además de la adición, podemos definir otra operación: la multiplicación escalar, que es:

![Imagen scalar multiplication operation](/posts/img/unidad4/scalar_multiplication_operation.webp)

![Imagen scalar multiplication](/posts/img/unidad4/scalar_multiplication.webp)

{{<salto>}}

**Curvas de Montgomery**

Una curva de Montgomery _E/Fp_ en las variables u y v se escribe como _Bv{{<exponente "2">}} = u{{<exponente "3">}} + Au{{<exponente "2">}} + u_ para algunos _A, B ∈ Fp_ donde _B(A{{<exponente "2">}}−4) ≠ 0_.

{{<salto>}}

**Curvas de Edwards**

Otra forma de describir una curva elíptica _E/Fp_ es en la forma de Edwards, que es x{{<exponente "2">}} + y{{<exponente "2">}} = 1 + dx{{<exponente "2">}}y{{<exponente "2">}} donde _d ∈ Fp_ cumple con _d ≠ 0, 1_.

{{<salto>}}

**Tipos**

- Dos curvas elípticas ampliamente utilizadas, llamadas secp256r1 y secp256k1, se especifican en un estándar llamado SEC2, donde SEC es un acrónimo de "estándares para criptografía eficiente".

- Ambas curvas están definidas sobre un campo primo de 256 bits, de ahí el "256" en sus nombres.

- La 'r' en secp256r1 indica que la curva es una curva aleatoria, lo que significa que fue generada mediante un cierto procedimiento de muestreo. Es llamada Curva P256 por NIST y ampliamente utilizada en protocolos de Internet.

- La 'k' en secp256k1 indica que la curva es de Koblitz. La curva secp256r1 lo es, mientras que secp256k1 se utiliza ampliamente en sistemas blockchain (Bitcoin).

- Curve25519, propuesta por Daniel J. Bernstein y especificada en RFC 7748, es una curva popular que se utiliza notablemente en TLS 1.3 para el acuerdo de claves.

{{<salto>}}

**Criptografía de curvas elípticas**

Generación de claves ECDSA. Cada entidad A realiza lo siguiente:

1. Selecciona una curva elíptica _E_ definida sobre _Zp_. El número de puntos en _E(Zp)_ debe ser divisible por un primo grande _n_.
2. Selecciona un punto _P ∈ E(Zp)_ de orden _n_.
3. Selecciona un entero estadísticamente único e impredecible d en el intervalo _[1, n - 1]_.
4. Calcula _Q = dP_.
5. La clave pública de _A_ es _(E, P, n, Q)_; la clave privada de _A_ es _d_.

Generación de firma ECDSA. Para firmar un mensaje m, A realiza lo siguiente:

1. Selecciona un entero estadísticamente único e impredecible _k_ en el intervalo _[1, n - 1]_.
2. Calcula _kP = (x{{<subindice "1">}}, y{{<subindice "1">}})_ y _r = x{{<subindice "1">}} mod n_. (Aquí _x{{<subindice "1">}}_ se considera un entero, por ejemplo, mediante la conversión desde su representación binaria). Si _r = 0_, entonces regresa al paso 1. (Esta es una condición de seguridad: si _r = 0_, entonces la ecuación de firma _s = k{{<exponente "-1">}}{h(m) + dr} mod n_ no involucra la clave privada _d_).
3. Calcula _k{{<exponente "-1">}} mod n_.
4. Calcula _s = k{{<exponente "-1">}} {h(m) + dr} mod n_, donde h es el algoritmo de hash seguro (SHA-2 o SHA-3).
Si _s = 0_, entonces regresa al paso 1. (Si _s = 0_, entonces _s{{<exponente "-1">}} mod n_ no existe; _s{{<exponente "-1">}}_ se requiere en el paso 2 de verificación de firma).
5. La firma para el mensaje m es el par de enteros _(r, s)_.

Verificación de firma ECDSA. Para verificar la firma de _A (r, s)_ en _m, B_ debe:

1. Obtener una copia auténtica de la clave pública de _A (E, P, n, Q)_. Verificar que r y s sean enteros en el intervalo _[1, n - 1]_.
2. Calcular _w = s{{<exponente "-1">}} mod n_ y _h(m)_.
3. Calcular _u{{<subindice "1">}} = h(m)w mod n_ y _u{{<subindice "2">}} = rw mod n_.
4. Calcular _u{{<subindice "1">}}P + u{{<subindice "2">}}Q = (x{{<subindice "0">}}, y{{<subindice "0">}})_ y _v = x{{<subindice "0">}} mod n_.
5. Aceptar la firma solo si _v = r_.

{{<salto>}}

## Curvas elípticas

![Imagen elliptic curves table](/posts/img/unidad4/elliptic_curves_table.webp)

![Imagen elliptic curves table 2](/posts/img/unidad4/elliptic_curves_table2.webp)

![Imagen digital signature applications](/posts/img/unidad4/digital_signature_applications.webp)

{{<salto>}}

{{<myShortcode_button class=myButtonTwo relref="/posts/curso/unidad4/unidadCuatro.md">}} Menu de la unidad

{{<myShortcode_button class=myButton relref="/posts/curso/unidad4/firmaDigital/video.md">}} Siguiente