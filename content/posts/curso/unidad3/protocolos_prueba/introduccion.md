---
title: "Protocolos de consenso: Protocolos de consenso por prueba (Proof of Work, Proof of Stake y PPoS)"
date: 2023-04-16T20:32:20-06:00
draft: false
---

**Proof of Work (PoW)**

- Nodos ganadores para demostrar que el trabajo realizado y enviado califica para recibir el derecho de agregar nuevas transacciones al blockchain.
- Los nodos compiten utilizando su poder de procesamiento.
- Bitcoin, Litecoin, Ethereum, Zcash y bitcoin SV.

![Imagen PoW](/posts/img/unidad3/pow.webp)

Ventajas

- El algoritmo más utilizado
- Problema difícil de resolver
- Fácil de validar

Deventajas

- Consumo de electricidad
    - Lleva a la centralización
- Menos seguro para redes pequeñas
- Ataques
    - Ataques del 51%
    - Ataques de minería egoísta
    - Ataques de eclipse: Monacoin, Bitcoin gold, Zenchash

{{<salto>}}

**Proof of stake (PoS)**

- Participación: monedas propiedad de un participante que pueden ser invertidas.
- Un forjador gana si apuesta más que sus competidores. La tarifa de transacción es la recompensa.
- Proceso de selección seudorandom que combina varios factores: selección de bloque aleatoria y selección de antigüedad de la moneda.
- Peercoin, Ethereum 2.0, Nxt, Algorand, Polkadot, Solana.

![Imagen PoS](/posts/img/unidad3/pos.webp)

Ventajas

- Reducción del consumo de electricidad
- Facilitar el proceso de participación (staking)
- Amigable con el medio ambiente
- Descentralización

Desventajas

- Influencia por parte de usuarios que poseen grandes cantidades de monedas
- Sostenibilidad a largo plazo
- No se puede elegir una billetera en frío (cold wallet)
- Ataques
    - Ataques del 51%
    - Ataques de nada en juego (nothing at stake)
    - Ataques de molienda (grinding)
    - Ataques de largo alcance (long range attacks)

{{<salto>}}

**Delegated Proof of Stake (DPoS)**

- Es una variante de PoS (basada en comités) más escalable que reduce el número de validadores.
- Para que un productor de bloques se convierta en testigo, debe ser votado por los titulares de tokens.
- El peso de los votos se basa en la participación (stake).
- BitShares, Steemit, EOSIO, Cosmos, Lisk.

![Imagen DPoS](/posts/img/unidad3/dpos.webp)

Ventajas

- Todos ganan
- Eliminar al delegado ofensivo
- No se necesita un alto poder de procesamiento: más escalable y amigable con el medio ambiente
- Democracia digital

Desventajas

- Toma de decisiones en un grupo pequeño
- Grupos de testigos coluden y gobiernan la red
- Ataques
    - Explotar una baja participación de votantes
    - Ataque de soborno
    - Productores de bloques coluden
    - Ataque de denegación de servicio (DDoS)

**Proof of Elapsed Time (PoET)**

- Simula el tiempo que se consumiría en la minería de PoW.
- A cada nodo de la red se le asigna un objeto de temporizador aleatorio para esperar antes de anunciar su bloque.
- Para asegurar que el tiempo local realmente transcurra, se lleva a cabo en un entorno de ejecución confiable (TEE), que es un área de memoria aislada que brinda integridad y confidencialidad al programa que se ejecuta en su interior.
- Hyperledger Sawtooth.

![Imagen PoET](/posts/img/unidad3/poet.webp)

Ventajas

- Más eficiente
- Más escalable
- Más descentralizado
    - Es muy difícil que el mismo nodo se convierta en el líder una y otra vez.

Desventajas

- Dependiente del hardware
- Al ser un producto de Intel, el modelo de consenso depende de una organización de terceros.
- Ataques
    - Ataque Sybil

{{<salto>}}

**Proof of Authority (PoA)**

- Utiliza la reputación de los nodos para seleccionar validadores de bloques.
- Los moderadores son responsables de verificar transacciones y bloques.
- Los individuos obtienen el reconocimiento adecuado para convertirse en validadores, por lo que hay un incentivo para mantener esa posición.
- Aura, Clique.

![Imagen PoA](/posts/img/unidad3/poa.webp)

Ventajas

- Más eficiente
- Más escalable
- El tiempo de generación de bloques se puede predecir

Desventajsa

- Menos descentralización, alta capacidad y escalabilidad
- Las especificaciones de los validadores son accesibles para cualquiera
- La amenaza de dañar la reputación no garantiza evitar tratar con actores maliciosos
- Ataques
    - Ataque del 51%
    - Ataque de denegación de servicio (DDoS)

![Imagen PoA tabla](/posts/img/unidad3/poa_table.webp)

![Imagen PoA tabla dos](/posts/img/unidad3/poa_tableDos.webp)

![Imagen PoA tabla tres](/posts/img/unidad3/poa_tableTres.webp)

{{<myShortcode_button class=myButtonTwo relref="/posts/curso/unidad3/unidadTres.md">}} Menu de la unidad

{{<myShortcode_button class=myButton relref="/posts/curso/unidad3/protocolos_prueba/video.md">}} Siguiente