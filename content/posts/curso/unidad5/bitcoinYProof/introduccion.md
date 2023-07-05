---
title: "Bitcoin y Proof of Work"
date: 2023-04-16T22:40:58-06:00
draft: false
---

**Efectivo electrónico anónimo de Chaum**

- Anónimo
- Seguro (sin gasto doble)
- Solo transferencia (sin creación/almacenameinto)

{{<salto>}}

**La llegada de bitcoin**

- 2009: Bitcoin anunciado por Satoshi Nakamoto
    - Pseudónimo de una persona o grupo de personas
- 2009-2011: un comienzo lento...
- 2011-2013: Silk Road y Dread Pirate Roberts
- Fin de 2013: el precio de Bitcoin se dispara
    - y el mundo se da cuenta

{{<salto>}}

**Theory Coin (TC): cómo crear dinero**

- Todos intentan resolver un acertijo
- El primero en resolver el acertijo obtiene 1 TC
- La solución del acertijo _i_ define el acertijo _i+1_

![Imagen how to create money](/posts/img/unidad5/how_to_create_money.webp)

Theory coin: cómo crear dinero (convirtiendo monedas en personas)

![Imagen ppl](/posts/img/unidad5/ppl.webp)

![Imagen how to create money 2](/posts/img/unidad5/how_to_create_money2.webp)

Resuelve el siguiente acertijo para obtener una moneda
- Para "resolver" el acertijo _i_, encuentra _x{{<subindice "i">}}_ tal que _H(x{{<subindice "i-1">}} , x{{<subindice "i">}}) = 0{{<exponente "d">}}_
- La cadena más larga define el "siguiente acertijo"
- El nombre en el bloque _x{{<subindice "i">}}_ "recibe" la moneda _i_.

{{<salto>}}

**Theory coin: cómo transferir dinero**

![Imagen how to transfer money](/posts/img/unidad5/how_to_transfer_money.webp)

![Imagen how to transfer money 2](/posts/img/unidad5/how_to_transfer_money2.webp)

![Imagen how to transfer money3](/posts/img/unidad5/how_to_transfer_money3.webp)

{{<salto>}}

**Thoery coin: cómo almacenar el dinero**

Idea principal: registrar transferencias en la cadena de bloques

![Imagen how to store money](/posts/img/unidad5/how_to_store_money.webp)

![Imagen how to store money 2](/posts/img/unidad5/how_to_store_money2.webp)

{{<salto>}}

**¿Anonimato?**

- Problema:
    Todas las transacciones realizadas se registran para siempre
- ¿Solución?
    Utilizar una identidad nueva para cada transacción
- Pero:
    Las heurísticas permiten agrupar identidades
- Alternativas anónimas:
    Zerocoin, Zerocash...

{{<salto>}}

**Ataques**

Ataque de maleabilidad

https://medium.com/@herman_10687/malleability-attack-why-it-matters-7b5f59fb99a4

Rompe el anonimato (identifica a los usuarios)

{{<salto>}}

**¿Usuarios? (y sus dispositivos)**

Propiedad desafortunada de DSA

![Imagen user and devices](/posts/img/unidad5/user_and_devices.webp)

Esta dirección

_1HKywxiL4JziqXrzLKhmB6a74ma6kxbSDj_

probablemente robó ~250000kr de esta manera

{{<salto>}}

**Piscinas de minería**

- Resolver acertijos (minería) es difícil.
    - Los mineros se unen a grupos y comparten el trabajo y la recompensa.

- ¿Cómo dividir el trabajo de manera óptima?

- ¿Diseño de mecanismos?
    - ¿Minero racional?
    - ¿Cómo asignar la recompensa?

{{<myShortcode_button class=myButtonTwo relref="/posts/curso/unidad5/unidadCinco.md">}} Menu de la unidad

{{<myShortcode_button class=myButton relref="/posts/curso/unidad5/bitcoinYProof/video.md">}} Siguiente