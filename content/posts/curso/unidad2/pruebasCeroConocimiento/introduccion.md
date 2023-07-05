---
title: "Pruebas de cero conocimiento"
date: 2023-04-16T18:55:45-06:00
draft: false
---

**Historia**

- Las "pruebas de conocimiento cero" fueron concebidas por primera vez en 1985 por Shafi Goldwasser, Silvio Micali y Charles Rackoff en su artículo "La complejidad del conocimiento de los sistemas de prueba interactivos".
- Este artículo introdujo la jerarquía IP de los sistemas de prueba interactivos y concibió el concepto de complejidad del conocimiento, una medida de la cantidad de conocimiento sobre la prueba transferido del demostrador al verificador. (Clase de complejidad)
- También dieron la primera prueba de conocimiento cero para un problema concreto, la decisión de no residuos cuadráticos mod m.
- Junto con un artículo de László Babai y Shlomo Moran, este influyente artículo inventó los sistemas de prueba interactivos, por lo que los cinco autores ganaron el Premio Gödel en 1993.

{{<salto>}}

**Pruebas de cero conocimiento**

- Las pruebas de conocimiento cero son una clase general de protocolos entre dos partes, llamadas el demostrador y el verificador.
- Mediante una prueba de conocimiento cero, el demostrador convence al verificador de la validez de una afirmación dada sin revelar ninguna información más allá de la veracidad de la afirmación.
- La esencia de las pruebas de conocimiento cero radica en que es trivial demostrar que se posee conocimiento de cierta información simplemente revelándola; el desafío está en demostrar dicha posesión sin revelar la información en sí misma ni ninguna información adicional.
- Una prueba de conocimiento cero del conocimiento es un caso especial cuando la afirmación consiste únicamente en el hecho de que el demostrador posee la información secreta.

{{<salto>}}

**La cueva de Ali Baba**

Peggy (el demostrador de la afirmación) y Victor (el verificador de la afirmación).

- Peggy ha descubierto la palabra secreta que se utiliza para abrir una puerta mágica en una cueva. La cueva tiene forma de anillo, con la entrada en un lado y la puerta mágica bloqueando el lado opuesto.
- Victor quiere saber si Peggy conoce la palabra secreta, pero Peggy no quiere revelar su conocimiento (la palabra secreta) a Victor ni revelar el hecho de su conocimiento al mundo en general.
- Etiquetan los caminos izquierdo y derecho desde la entrada como A y B.

![Imagen cueva](/posts/img/unidad2/cueva.webp)

1. Victor espera fuera de la cueva mientras Peggy entra. Peggy toma el camino A o el camino B. No se le permite a Victor ver qué camino elige. Luego, Victor entra a la cueva y grita el nombre del camino por el que quiere que ella regrese, ya sea A o B, elegido al azar. Si ella realmente conoce la palabra mágica, esto es fácil: abre la puerta, si es necesario, y regresa por el camino deseado.
2. Si ella no conociera la palabra, solo podría regresar por el camino nombrado si Victor diera el nombre del mismo camino por el que ella había entrado.
3. Dado que Victor elegiría A o B al azar, ella tendría un 50% de probabilidad de adivinar correctamente. Si repitieran este truco muchas veces, digamos 20 veces seguidas, su probabilidad de anticipar correctamente todas las solicitudes de Victor se volvería muy pequeña.

![Imagen cueva 2](/posts/img/unidad2/cuevaDos.webp)

- Si Peggy aparece repetidamente en la salida que Victor nombra, él puede concluir que es extremadamente probable que Peggy, de hecho, conozca la palabra secreta.
- Observa que Peggy podría demostrarle a Victor que conoce la palabra mágica, sin revelársela, en un solo intento.
- Si tanto Victor como Peggy van juntos a la boca de la cueva, Victor puede observar a Peggy entrar por A y salir por B. Esto probaría con certeza que Peggy conoce la palabra mágica, sin revelar la palabra mágica a Victor.
- Tal prueba podría ser observada por un tercer participante, o registrada por Victor, y sería convincente para cualquier persona. En otras palabras, Peggy no podría refutar dicha prueba alegando que conspiró con Victor, y por lo tanto, ya no tiene control sobre quién está al tanto de su conocimiento.

![Imagen cueva 3](/posts/img/unidad2/cuevaTres.webp)

{{<salto>}}

**Tipos**

- Las pruebas de conocimiento cero interactivas requieren interacción entre la persona (o sistema informático) que demuestra su conocimiento y la persona que valida la prueba.
- Las pruebas de conocimiento cero no interactivas no requieren múltiples rondas de interacción entre el demostrador y el verificador, están diseñadas para ser eficientes y pueden utilizarse para verificar simultáneamente un gran número de afirmaciones.
- La ventaja de las pruebas de conocimiento cero no interactivas es que se pueden utilizar en situaciones en las que no hay posibilidad de interacción entre el demostrador y el verificador, como en transacciones en línea.
- Esto hace que las pruebas de conocimiento cero no interactivas sean particularmente útiles en sistemas descentralizados como las cadenas de bloques, donde las transacciones son verificadas por una red de nodos y no hay una autoridad central que supervise el proceso de verificación.

{{<salto>}}

{{<myShortcode_button class=myButtonTwo relref="/posts/curso/unidad2/unidadDos.md">}} Menu de la unidad

{{<myShortcode_button class=myButton relref="/posts/curso/unidad2/pruebasCeroConocimiento/video.md">}} Siguiente