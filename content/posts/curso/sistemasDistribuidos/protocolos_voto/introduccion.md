---
title: "Protocolos de consenso: Protocolos de consenso por voto (PBFT y RAFT)"
date: 2023-04-16T20:32:05-06:00
draft: false
---

**Practical Byzantine Fault Tolerance (PBFT)**

Practical Byzantine Fault Tolerance, funciona de la siguiente manera:
1. Un cliente envía una solicitud para invocar un de servicio al servidor primario.
2. El servidor primario difunde la solicitud a las réplicas.
3. Las réplicas ejecutan la solicitud y envían una respuesta al cliente.
4. El cliente espera f+1* respuestas de diferentes réplicas con el mismo resultado; éste es el resultado de la operación.

*f es el número máximo de réplicas que podrían
fallar.

![Imagen PBFT](/posts/img/unidad3/pbft.webp)

{{<salto>}}

**YAC**

YAC (Yet Another Consensus) puede garantizar la seguridad y la disponibilidad para el procesamiento de transacciones.

Cada cliente está asociado con un usuario que tiene una clave pública registrada en el sistema blockchain. Los clientes generan transacciones y las envían al servicio de ordenamiento.

Un par es el participante de la red responsable de validar y llegar a un acuerdo sobre transacciones en propuestas y almacenar las transacciones negociadas en bloques. Los pares mantienen un historial completo de transacciones para validar las propuestas.

El servicio de ordenamiento es responsable de tomar conjuntos de transacciones y crear propuestas de bloque. Una propuesta de bloque contiene una lista de transacciones para llegar a un acuerdo posterior en los pares. Una propuesta es un conjunto de transacciones que deben ser validadas y votadas por los pares.

Hyperledger Iroha

![Imagen yac](/posts/img/unidad3/yac.webp)

{{<salto>}}

**FBA**

El Acuerdo Bizantino Federado es una forma de tolerancia a fallos bizantinos donde cada general bizantino es responsable de su propia cadena de bloques. Se utiliza un Acuerdo Bizantino Federado (FBA) por su alta capacidad, escalabilidad de red y bajo costo de transacción.

No existe una lista elegida por una autoridad central. En cambio, los nodos (validadores) eligen a los otros validadores en los que confían, y su lista de nodos de confianza se conoce como su "quorum slice" (rebanada de quórum).

Los nodos determinan la composición de los quórums de manera descentralizada: cada nodo selecciona conjuntos de nodos que considera lo suficientemente grandes o importantes como para representar a toda la red, y un quórum debe contener dicho conjunto para cada uno de sus miembros.

Stellar (Protocolo de Consenso Stellar), XRP (Protocolo de Consenso XRPL) en Ripple.

![Imagen fba](/posts/img/unidad3/fba.webp)

{{<salto>}}

**Honey badger**

Honey Badger BFT es un algoritmo de consenso para entornos asíncronos. La mayoría de los algoritmos de consenso se basan en redes síncronas y eligen un líder.

En HoneyBadgerBFT, los nodos reciben transacciones como entrada y las almacenan en sus búferes (ilimitados). El protocolo avanza en épocas, donde después de cada época, se agrega un nuevo lote de transacciones al registro comprometido. Al comienzo de cada época, los nodos eligen un subconjunto de las transacciones en su búfer y las proporcionan como entrada a una instancia de un protocolo de acuerdo aleatorio. Al final del protocolo de acuerdo, se elige el conjunto final de transacciones para esta época.

![Imagen honey badger](/posts/img/unidad3/honey_badger.webp)

{{<salto>}}

**RAFT**

RAFT funciona elgiiendo un que se encarga de aceptar las peticiones de los clientes y de gestionar la replicación del registro.

RAFT descopone el consenso en tres subproblemas:

- **Elección del lider**: es necesario elegir un nuevo líder en caso de que falle el existente.
- **Replicación de registros**: el líder necesita mantener los registros de todos los servidores sincronizados con los suyos mediante la replciaicón.
- **Seguridad**: si uno de los serviodres ha enviado un registro en un indice particular, ningún otro servidor puede aplciar una entrada de registro diferente para ese indice.

![Imagen RAFT](/posts/img/unidad3/raft.webp)

{{<salto>}}

{{<myShortcode_button class=myButtonTwo relref="/posts/curso/sistemasDistribuidos/unidadTres.md">}} Menu de la unidad

{{<myShortcode_button class=myButton relref="/posts/curso/sistemasDistribuidos/protocolos_voto/video.md">}} Siguiente