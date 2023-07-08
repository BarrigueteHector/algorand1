---
title: "Protocolos de Cero Conocimiento"
date: 2023-04-16T22:20:33-06:00
draft: false
---

**Problema a resolver**

- Ya hemos discutido los protocolos de identificación que utilizan esquemas de firma segura.
- Estos construyen esquemas de identificación de desafío-respuesta que proporcionan el más alto nivel de seguridad, es decir, seguridad contra ataques activos.
- En los protocolos de identificación de conocimiento cero, la afirmación probada es:

    "Conozco la clave privada para esta clave pública".

    "Conozco la clave privada para esta clave pública o para esa clave pública, y en cualquier caso las claves privadas son diferentes".

{{<salto>}}

**Σ-PROTOCOLOS**

- La noción de un Σ-protocolo generaliza los protocolos de identificación de Schnorr, Guillou-Quisquater y Okamoto, así como muchos otros conocidos en la literatura (como los protocolos de Fiat-Shamir y Feige-Fiat-Shamir).
- Se requiere que un Σ-protocolo sea de conocimiento nulo únicamente frente a un verificador honesto.
- A pesar de esta limitación, los Σ-protocolos resultarán ser componentes versátiles de construcción.

Sea _R = {(v; w)} ⊆ V × W_ una relación binaria, donde _v ∈ V_ denota la entrada común al probador y al verificador, y _w ∈ W_ denota un testigo, que es la entrada privada del probador.

Sea _L{{<subindice "R">}} = {v ∈ V : ∃{{<subindice "w∈W">}} (v; w) ∈ R}_ el lenguaje correspondiente a la relación R.

![Imagen protocol sigma](/posts/img/unidad4/protocol_sigma.webp)

![Imagen protocol text](/posts/img/unidad4/protocol_sigma_text.webp)

Un algoritmo probabilístico de tiempo polinómico (PPT) A es un algoritmo que se ejecuta en tiempo polinómico pero también tiene acceso a un oráculo que proporciona bits aleatorios verdaderos.

{{<salto>}}

**Heurística de Fiat-Shamir**

- Es una técnica para convertir una prueba interactiva de conocimiento en una firma digital basada en ella.
- Se puede demostrar públicamente algún hecho (por ejemplo, el conocimiento de un número secreto determinado) sin revelar información subyacente.
- Fue propuesta por Amos Fiat y Adi Shamir en 1986. Supone la existencia de un oráculo aleatorio.
- En el caso de que los oráculos aleatorios no existan, se ha demostrado que la heurística de Fiat-Shamir es insegura por Shafi Goldwasser y Yael Tauman Kalai.

{{<salto>}}

**Firma de Schnorr**

Parámetros

- Todos los usuarios del esquema de firma acuerdan un grupo _G_ de orden primo q, con generador _g_, en el cual se asume que el problema del logaritmo discreto es difícil.
- Todos los usuarios acuerdan una función de hash criptográfica _H: {0, 1}* → Z{{<subindice "q">}}_

Generación de claves

- Elegir una clave privada de firma x del conjunto permitido.
- La clave pública de verificación es _y = gx_.Parametros

Firma

Para firmar un mensaje, M:
- Elegir un valor aleatorio k del conjunto permitido.
- Sea _r = g{{<exponente "k">}}_.
- Sea _e = H(r || M)_.
- Sea _s = k - x e_.
- La firma es el par _(s, e)_.

Verificación
- Sea _r{{<subindice "v">}} = g{{<exponente "s">}} y{{<exponente "e">}}_.
- Sea _e{{<subindice "v">}} = H(r{{<subindice "v">}} || M)_.
Si _e{{<subindice "v">}} = e_, entonces la firma es verificada.

Prueba
Es relativamente fácil ver que _e{{<subindice "v">}} = e_ si el mensaje firmado es igual al mensaje verificado:

_r{{<subindice "v">}} = g{{<subindice "s">}} y{{<subindice "e">}} = g{{<subindice "k-xe">}} g{{<subindice "xe">}} = g{{<exponente "k">}} = r_

y, por lo tanto, _e{{<subindice "v">}} = H(r{{<subindice "v">}} || M) = H(r || M) = e_.

Elementos públicos: _G, g, q, y, s, e, r_. Elementos privados: _k, x_.

{{<salto>}}

**Heurística Fiat-Shamir (Prueba interactiva de conocimiento)**

Aquí se presenta una prueba interactiva de conocimiento de un logaritmo discreto en Zq∗ basada en la firma de Schnorr (donde q es un número primo grande).

Los valores públicos son _y ∈ Zq∗_ y un generador _g_ de _Zq∗_. El valor secreto es el logaritmo discreto de _y_ en base _g_.

1. Peggy desea demostrar a Victor, el verificador, que conoce _x_ que satisface _y ≡ g{{<exponente "x">}}_ sin revelar _x_.
2. Ella elige un valor aleatorio _v ∈ Zq∗_, calcula _t = g{{<exponente "v">}}_ y envía t a Victor.
3. Victor elige un valor aleatorio _c ∈ Zq∗_ y lo envía a Peggy.
4. Peggy calcula _r = v − cx mod φ(q)_ y devuelve _r_ a Victor.
5. Él verifica si _t ≡ g{{<exponente "r">}} y{{<exponente "c">}}_.

Esto se cumple porque _g{{<exponente "r">}} y{{<exponente "c">}} ≡ g{{<exponente "v-cx">}} g{{<exponente "xc">}} ≡ g{{<exponente "v">}} ≡ t_ y _g{{<exponente "φ(q)">}} ≡ 1_ (teorema del totiente de Euler).

{{<salto>}}

**Heurística Fiat-Shamir (Prueba de conocimiento no interactiva)**

La heurística Fiat-Shamir permite reemplazar el paso interactivo 3 con un acceso no interactivo a un oráculo aleatorio. En la práctica, podemos utilizar una función hash criptográfica en su lugar.

1. Peggy desea demostrar que conoce x que satisface _y ≡ g{{<exponente "x">}}_ sin revelar _x_.
2. Ella elige un valor aleatorio _v ∈ Zq∗_ y calcula _t = g{{<exponente "v">}}_.
3. Peggy calcula _c = H(g, y, t)_, donde _H_ es una función hash criptográfica.
4. Peggy calcula _r = v − cx mod φ(q)_. La prueba resultante es el par _(t, r)_.
5. Cualquier persona puede utilizar esta prueba para calcular _c_ y verificar si _t ≡ g{{<exponente "r">}} y{{<exponente "c">}}_.

Si el valor hash utilizado a continuación no depende del valor (público) de y, la seguridad del esquema se debilita, ya que un probador malicioso puede seleccionar un valor específico de y para que el producto cx sea conocido.

{{<salto>}}

**Pruebas de conocimiento cero**

Los protocolos de prueba de conocimiento cero interactivos o no interactivos más populares se pueden clasificar en general en las siguientes cuatro categorías:

- Argumentos No Interactivos Sucintos de Conocimiento (SNARK).
- Argumentos de Conocimiento Transparentes y Escalables (STARK).
- Delegación Polinómica Verificable (VPD).
- Argumentos No Interactivos Sucintos (SNARG).

{{<salto>}}

**Aplicaciones**

Sistemas de autenticación

La investigación en pruebas de conocimiento cero ha sido motivada por sistemas de autenticación donde una de las partes desea demostrar su identidad a otra parte mediante alguna información secreta (como una contraseña), pero no desea que la segunda parte aprenda nada sobre este secreto.

Esto se denomina "prueba de conocimiento cero del conocimiento".
Sin embargo, una contraseña suele ser demasiado pequeña o insuficientemente aleatoria para ser utilizada en muchos esquemas de pruebas de conocimiento cero del conocimiento. Una prueba de contraseña de conocimiento cero es un tipo especial de prueba de conocimiento cero del conocimiento que aborda el tamaño limitado de las contraseñas.

Blockchain

Las pruebas de conocimiento cero se aplicaron en los protocolos Zerocoin y Zerocash, lo que culminó en el nacimiento de las criptomonedas Zcoin (Firo) y Zcash en 2016.

Zerocoin tiene un modelo de mezcla incorporado que no confía en ningún par o proveedor centralizado de mezclas para garantizar el anonimato. Los usuarios pueden realizar transacciones en una moneda base y pueden convertir la moneda en Zerocoins y viceversa.

El protocolo Zerocash utiliza un modelo similar (una variante conocida como una prueba de conocimiento cero no interactiva), excepto que puede ocultar el monto de la transacción, mientras que Zerocoin no puede.

Dadas las restricciones significativas de los datos de transacción en la red Zerocash, Zerocash es menos propenso a ataques de tiempo de privacidad en comparación con Zerocoin. Sin embargo, esta capa adicional de privacidad puede provocar una hiperinflación potencialmente indetectable del suministro de Zerocash, ya que las monedas fraudulentas no pueden ser rastreadas.

Bulletproofs son una mejora de las pruebas de conocimiento cero no interactivas donde no se necesita una configuración confiable. Posteriormente, se implementó en el protocolo Mimblewimble (en el que se basan las criptomonedas Grin y Beam) y en la criptomoneda Monero.

En 2019, Firo implementó el protocolo Sigma, que es una mejora del protocolo Zerocoin sin configuración confiable. En el mismo año, Firo introdujo el protocolo Lelantus, una mejora del protocolo Sigma, donde el primero oculta el origen y la cantidad de una transacción.

![Imagen zero knowledge applications](/posts/img/unidad4/zero_knowledge_applications.webp)

{{<salto>}}

{{<button class=myButtonTwo relref="/posts/curso/unidad4/unidadCuatro.md">}} Menu de la unidad

{{<button class=myButton relref="/posts/curso/unidad4/protocolos/video.md">}} Siguiente