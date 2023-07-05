---
title: "El trilema de Blockchain"
date: 2023-04-16T23:01:36-06:00
draft: false
---

**Aplicación web**

![Imagen web application](/posts/img/unidad6/web_application.webp)

Ventajas
- Eficiencia y escalabilidad
- Autenticación
- Confianza basada en roles o identidades
- Control de la información

Desventajas
- Punto central de fallo
    - Ataques de denegación de servicio
- Confianza basada en entidades de terceros
- Control de datos por una entidad única
    - Uso indebido de la información
- Baja privacidad debido a la autenticación
    - La anonimidad no es posible

{{<salto>}}

**Aplicaciones distribuidas**

![Imagen dapp](/posts/img/unidad6/dapp.webp)

Propiedades

- Descentralizado. Las Dapps operan en cadenas de bloques públicas y descentralizadas en las que ninguna persona o grupo tiene control.
- Determinista. Las Dapps realizan la misma función independientemente del entorno en el que se ejecuten.
- Completo en Turing. Las Dapps pueden realizar cualquier acción siempre que se disponga de los recursos necesarios.
- Aislado. Las Dapps se ejecutan en un entorno virtual (Máquinas Virtuales) de manera que, si el contrato inteligente tiene un error, no afectará al funcionamiento normal de la red de la cadena de bloques.

{{<salto>}}

**Arquitectura de aplicaciones centralizadas**

![Imagen centralized apps architecture](/posts/img/unidad6/centralized_apps_architecture.webp)

Contrato inteligente

- Un protocolo de consenso diseñado digitalmente para facilitar, verificar o hacer cumplir la negociación o ejecución de un contrato.
- Permite la realización de transacciones creíbles sin la intervención de terceros.
- Las transacciones son rastreables e irreversibles.

![Imagen smart contract](/posts/img/unidad6/smart_contract.webp)

{{<salto>}}

**Arquitectura de aplicaciones descentralizadas**

![Imagen desentralized apps architecture](/posts/img/unidad6/desentralized_apps_architecture.webp)

Ejemplos

_Grupos de billeteras_

Se requiere que al menos 2 de cada 3 personas de un grupo estén de acuerdo para crear una transacción válida.

![Imagen group wallets](/posts/img/unidad6/group_wallets.webp)

_Billeteras heredadas_

Se exige que una transacción sea firmada por Camille O por Beth después de 5 años.

![Imagen heritage wallets](/posts/img/unidad6/heritage_wallets.webp)

_Almacenamiento seguro_

Se exige que una transacción sea firmada por 3 dispositivos en ubicaciones diferentes O una clave de recuperación depositada en el banco después de 8 meses.

![Imagen secure storage](/posts/img/unidad6/secure_storage.webp)

{{<salto>}}

**Estandares existentes**

- Ethereum Request for Comments – 20 (ERC-20)
    - Propuesto el 19 de noviembre de 2015 por Fabian Vogelsteller.
    - Un estándar técnico utilizado para contratos inteligentes en la cadena de bloques Ethereum para la implementación de tokens.
    - Define una lista común de reglas que un token Ethereum debe implementar, permitiendo a los desarrolladores programar cómo funcionarán los nuevos tokens dentro del ecosistema Ethereum.
    - Estas reglas incluyen cómo se transfieren los tokens entre direcciones y cómo se accede a los datos dentro de cada token.
- ERC-721: a class of unique tokens
    - Un estándar libre y abierto que describe cómo construir tokens no fungibles o únicos en la cadena de bloques Ethereum. Mientras que la mayoría de los tokens son fungibles (cada token es igual que cualquier otro token, es decir, ERC-20), los tokens ERC-721 son todos únicos.
    - Define una interfaz mínima que un contrato inteligente debe implementar para permitir la gestión, propiedad y comercio de tokens únicos.
- ERC-725: Ethereum Identity Standard
    - Un estándar propuesto para la identidad basada en la cadena de bloques que vive en la cadena de bloques Ethereum.
    - Describe contratos inteligentes proxy que pueden ser controlados por múltiples claves y otros contratos inteligentes, puede describir humanos, grupos, objetos y máquinas.
    - Los usuarios deberían poder ser propietarios y gestionar su identidad en lugar de ceder la propiedad de la identidad a organizaciones centralizadas.

{{<salto>}}

**DAO (ORGANIZACIÓN AUTÓNOMA DESCENTRALIZADA)**

Una organización representada por reglas codificadas como un programa informático, que es transparente, controlado por accionistas y no influenciado por un gobierno central.

Las DAO son comunidades propiedad de sus miembros sin liderazgo centralizado.

Los registros financieros de una DAO y las reglas del programa se mantienen en una cadena de bloques. El estado legal preciso de este tipo de organización empresarial no está claro.

![Imagen dao](/posts/img/unidad6/dao.webp)

{{<salto>}}

**El trilema de blockchain**

Las blockchains a menudo se ven obligadas a hacer compromisos que les impiden lograr los tres aspectos siguientes:
- Descentralizado: crear un sistema blockchain que no dependa de un punto central de control.
- Escalable: la capacidad de un sistema blockchain para manejar una cantidad cada vez mayor de transacciones.
- Seguro: la capacidad del sistema blockchain para funcionar como se espera, defenderse de ataques, errores y otros problemas imprevistos.

![Imagen blockchain trilema](/posts/img/unidad6/blockchain_trilema.webp)

Propuesta para mejorar blockchain

1. Nuevos protocolos de consenso: PoS, PoH, VRF, VDF...
2. Sharding: dividir una red en una serie de bloques de bases de datos separados ("shards") para hacer que la blockchain sea más manejable.
    - Diferentes capas se unen con ZKP.

Nuevos protocolos de consenso

![Imagen new consensus protocols](/posts/img/unidad6/new_consensus_protocols.webp)

Sharding

![Imagen sharding](/posts/img/unidad6/sharding.webp)

{{<salto>}}

**Arquitectura de capas**

Cada capa sirve como un bloque de construcción, proporcionando la funcionalidad y los servicios requeridos por la capa superior.

Este diseño modular facilita el mantenimiento, la prueba y la ampliación del sistema, y mejora su rendimiento y escalabilidad en general.

**CAPA 0**: INFRAESTRUCTURA/HARDWARE
- La capa 0 proporciona la infraestructura subyacente para la blockchain (Peer to Peer).
- Incluye los componentes necesarios para que la blockchain sea real, como internet, hardware, máquinas virtuales, etc.
- Permite la distribución de paquetes de varias redes y medidas de seguridad desde esa infraestructura.
- La capa 0 también proporciona a la blockchain la capacidad de comunicación de interoperabilidad entre cadenas desde la parte superior hacia diferentes capas.

**CAPA 1**: CAPA DE DATOS
- La capa de datos se refiere al mecanismo de almacenamiento subyacente para la blockchain.
- Es responsable de almacenar, organizar y mantener los datos en internet.
- La capa de datos puede implementarse de manera diferente, según el tipo y el uso previsto.

**CAPA 2**: CAPA DE RED
- La capa de red es responsable de la coordinación entre nodos en una blockchain.
- Admite la comunicación y sincronización entre los nodos en la red, facilitando la propagación de bloques y el descubrimiento de bloques en la red para el almacenamiento distribuido. Por eso también se conoce como capa de propagación.
- La capa de red es crucial para mantener la configuración de pares donde los nodos comparten la carga de trabajo.

**CAPA 3**: CAPA DE CONSENSO
- La capa de consenso es responsable de mantener a todos los participantes de la blockchain.
- Esta capa asegura que todos los nodos en internet tengan una vista coherente y actualizada de los datos de la blockchain.
- La capa de consenso es importante para determinar cómo se agregaron las transacciones a la blockchain.

**CAPA 4**: CAPA DE APLICACIÓN
- Es el nivel más alto de la pila tecnológica. Es responsable de la interfaz de usuario, la experiencia y la lógica específica de la aplicación para interactuar con la plataforma subyacente.
- La capa de aplicación es donde se construyen las aplicaciones (dApps). Las dApps son aplicaciones descentralizadas que se ejecutan en una plataforma e interactúan con el libro mayor subyacente de la blockchain.
- Aquí, el protocolo blockchain se divide en dos subcapas importantes: aplicación y ejecución.

![Imagen layers](/posts/img/unidad6/layers.webp)

{{<salto>}}

**Capas funcionales**

Otros dividen estas capas en términos de su funcionalidad y también las llaman por números

**CAPA 0**
- La capa 0 es la blockchain misma y comprende toda la infraestructura subyacente y la arquitectura de redes.
- Esto incluye internet, protocolos, mecanismos de consenso, hardware y otros equipos para establecer y mantener la red blockchain.
- Esto se puede ver como la "red de blockchains" que permite que varias redes de Capa 1, como Ethereum y Bitcoin, se comuniquen, funcionen y ejecuten interoperabilidad entre cadenas y sienta las bases para la escalabilidad futura.

**CAPA 1**
- La Capa 1 se trata de la funcionalidad, por eso también se la llama capa de implementación. La Capa 1 combina las funciones computacionales y de consenso de la red blockchain.
- Se encarga del mecanismo de consenso, el lenguaje de codificación y las reglas de gobernabilidad de la red blockchain, entre otros. De hecho, los diversos casos de uso prominentes que vemos en la blockchain, como Bitcoin, Ethereum y Solana, pertenecen a esta capa.
- Sin embargo, el alcance de la escalabilidad se estrecha en esta capa debido al gran volumen de operaciones que ocurren en ella.

**CAPA 2**
- La Capa 2 tiene como objetivo ayudar a la Capa 1 con problemas de escalabilidad. Dado que aumentar la escalabilidad implica agregar más nodos a la red, esto conduce a complejidades más allá de cierto umbral e incluso puede congestionar la red. Por otro lado, agregar nodos también es importante para descentralizar la red.
- Por lo tanto, la Capa 2 es una solución de terceros desarrollada para ayudar a la Capa 1. Se encarga de las transacciones y las autenticaciones y se comunica continuamente con la Capa 1 para descongestionarla al tiempo que se logra la descentralización.

**CAPA 3**
- La Capa 3 es más parecida a la capa de Aplicación, que maneja contratos inteligentes y dApps. Esta capa actúa como una interfaz de usuario y como interfaz entre las aplicaciones del mundo real y la capa subyacente de la red blockchain. De esta manera, ayuda a simplificar la experiencia del usuario al trabajar con la Capa 1 y la Capa 2.
- Las funciones de la Capa 3 incluyen la interoperabilidad inter e intra cadena, incluyendo intercambios descentralizados, aplicaciones de apuesta, provisión de liquidez, etc.

![Imagen layers 2](/posts/img/unidad6/layers2.webp)

{{<salto>}}

{{<myShortcode_button class=myButtonTwo relref="/posts/curso/unidad6/unidadSeis.md">}} Menu de la unidad

{{<myShortcode_button class=myButton relref="/posts/curso/unidad6/trilema/video.md">}} Siguiente