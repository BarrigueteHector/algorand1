---
title: "Ethereum y los contratos Inteligentes"
date: 2023-04-16T22:41:16-06:00
draft: false
---

### Introducción

**_Blockchain_**

Una máquina de estados basada en transacciones
![Imagen transaction](/posts/img/unidad5/transaction.webp)
Ethereum se puede ver como una máquina de estados basada en transacciones.

![Imagen transaction](/posts/img/unidad5/transaction2.webp)
Una transacción representa un arco válido entre dos estados.

Bloques y transacciones
![Imagen block and transactions](/posts/img/unidad5/block_and_transactions.webp)
Las transacciones se recopilan en bloques.
Un bloque es un paquete de datos.

Cadena de estados
![Imagen chain of states](/posts/img/unidad5/chain_of_states.webp)
Desde el punto de vista de los estados, Ethereum se puede ver como una cadena de estados.

![Imagen chain of states 2](/posts/img/unidad5/chain_of_states2.webp)
Desde el punto de vista de la implementación, Ethereum también se puede ver como una cadena de bloques, por lo que es una "BLOCKCHAIN".

Pila de transacciones: libro mayor
![Imagen stack of transactions](/posts/img/unidad5/stack_of_transactions.webp)
Desde el punto de vista del libro mayor, Ethereum también se puede ver como una pila de transacciones.

{{<salto>}}

**_Estado del mundo_**

![Imagen world state](/posts/img/unidad5/world_state.webp)
El estado del mundo es una asignación entre una dirección y el estado de una cuenta.

Varias perspectivas del estadod el mundo
![Imagen several views](/posts/img/unidad5/several_views.webp)

**_Cuenta_**

Cuenta
![Imagen account](/posts/img/unidad5/account.webp)
Una cuenta es un objeto en el estado del mundo.

![Imagen account 2](/posts/img/unidad5/account2.webp)
Una cuenta es una asignación entre una dirección y el estado de la cuenta.

![Imagen account 3](/posts/img/unidad5/account3.webp)
El estado de una cuenta puede contener código EVM y almacenamiento.

![Imagen types_of_account](/posts/img/unidad5/types_of_account.webp)
EOA (Cuenta Externa de Propiedad) está controlada por una clave privada. | La cuenta de contrato contiene código EVM.

![Imagen types of account 2](/posts/img/unidad5/types_of_account2.webp)
EOA está controlada por una clave privada.
EOA no puede contener código EVM.
El contrato contiene código EVM.
El contrato está controlado por código EVM.

![Imagen address of account](/posts/img/unidad5/address_of_account.webp)

{{<salto>}}

**_Transacción_**

![Imagen transaction 4](/posts/img/unidad5/transaction4.webp)
Una transacción es una instrucción individual firmada criptográficamente.

![Imagen transation to world state](/posts/img/unidad5/transaction_to_world_state.webp)
Una transacción es presentada por un actor externo.

![Imagen types of transaction](/posts/img/unidad5/types_of_transaction.webp)
Existen dos tipos prácticos de transacciones: la creación de contratos y la llamada de mensajes.

![Imagen contract creation](/posts/img/unidad5/contract_creation.webp)

![Imagen message call](/posts/img/unidad5/message_call.webp)

![Imagen field of a transaction](/posts/img/unidad5/field_of_a_transaction.webp)

{{<salto>}}

**_Mensaje_**

![Imagen message](/posts/img/unidad5/message.webp)
Un mensaje se pasa entre dos cuentas.
Un mensaje es un conjunto de datos (como un conjunto de bytes) y un valor (especificado como Ether).

![Imagen message 2](/posts/img/unidad5/message2.webp)
Un mensaje se pasa entre dos cuentas. | Un mensaje es un conjunto de datos (como un conjunto de bytes) y un valor (especificado como Ether).

4 casos de mensajes
![Imagen cases of message](/posts/img/unidad5/cases_of_message.webp)

{{<salto>}}

**_Base de datos descentralizada_**

Base de datos transaccional de alcance global y compartida
![Imagen transactional database](/posts/img/unidad5/transactional_database.webp)
Un blockchain es una base de datos transaccional de alcance global y compartida.

Base de datos descentralizada
![Imagen descentralised database](/posts/img/unidad5/descentralised_database.webp)
Un blockchain es una base de datos transaccional de alcance global, compartida y descentralizada.

Red P2P entre nodos
![Imagen p2p network](/posts/img/unidad5/p2p_network.webp)
Los nodos descentralizados constituyen la red P2P de Ethereum.

Interfaz hacia un nodo
![Imagen interface to a node](/posts/img/unidad5/interface_to_a_node.webp)
Los actores externos acceden al mundo de Ethereum a través de los nodos de Ethereum.

{{<salto>}}

**_Atomicidad y orden_**

Atomicidad de las transacciones
![Imagen atomicity of transaction](/posts/img/unidad5/atomicity_of_transaction.webp)
Una transacción es una operación atómica. No se puede dividir ni interrumpir.

Atomicidad de las transacciones
![Imagen atomicity of transaction 2](/posts/img/unidad5/atomicity_of_transaction2.webp)
Es decir, Todo (completamente hecho) o Nada (ningún efecto).

Orden de las transacciones
![Imagen order of transactions](/posts/img/unidad5/order_of_transactions.webp)
Las transacciones no pueden superponerse.
Las transacciones deben ejecutarse secuencialmente.

Orden de las transacciones
![Imagen order of transactions2](/posts/img/unidad5/order_of_transactions2.webp)
No se garantiza el orden de las transacciones.

Ordenación interna de bloques
![Imagen ordering inner block](/posts/img/unidad5/ordering_inner_block.webp)
El minero puede determinar el orden de las transacciones en un bloque.

Ordenación entre bloques
![Imagen ordering inter block](/posts/img/unidad5/ordering_inter_block.webp)
El orden entre bloques se determina mediante un algoritmo de consenso como PoW (Prueba de Trabajo).

### 2. Maquina virtual

**_Maquina virtual de Ethereum (EVM)_**

Ethereym virtual machine
![Imagen evm](/posts/img/unidad5/evm.webp)
El código EVM se ejecuta en la Máquina Virtual de Ethereum (EVM).

![Imagen evm2](/posts/img/unidad5/evm2.webp)
La Máquina Virtual de Ethereum es el entorno de ejecución para contratos inteligentes en Ethereum.

Arquitectura EVM
![Imagen evm architecture](/posts/img/unidad5/evm_architecture.webp)
La EVM es una arquitectura simple basada en pilas.

Espacio en la máquina de la EVM
![Imagen machine space](/posts/img/unidad5/machine_space.webp)
Hay varios recursos disponibles, como el espacio.

Stack
![Imagen stack](/posts/img/unidad5/stack.webp)
Todas las operaciones se realizan en la pila.
Se accede con instrucciones como PUSH/POP/COPY/SWAP, ...

Memoria
![Imagen memory](/posts/img/unidad5/memory.webp)
La memoria es lineal y se puede direccionar a nivel de byte.
Se accede con las instrucciones MSTORE/MSTORE8/MLOAD.
Todas las ubicaciones en memoria están inicialmente definidas como cero.

Almacenamiento de cuentas
![Imagen account storage](/posts/img/unidad5/account_storage.webp)
El almacenamiento es una estructura de almacenamiento clave-valor que mapea palabras de 256 bits a palabras de 256 bits.
Se accede con las instrucciones SSTORE/SLOAD.
Todas las ubicaciones en el almacenamiento están inicialmente definidas como cero.

Código EVM
![Imagen evm_code](/posts/img/unidad5/evm_code.webp)
El código EVM es el bytecode que la EVM puede ejecutar de forma nativa.

Modelo de ejecución 
![Imagen execution model](/posts/img/unidad5/execution_model.webp)

{{<salto>}}

**_Llamada de mensaje_**

Llamada de mensaje
![Imagen message call](/posts/img/unidad5/message_call.webp)
La EVM puede enviar un mensaje a otra cuenta.
La profundidad de la llamada de mensaje está limitada a menos de 1024 niveles.

Intrucciones par ala llamada de mensaje
![Imagen instruction](/posts/img/unidad5/instructions.webp)
La llamada de mensaje se desencadena mediante la instrucción CALL.
Los argumentos y los valores de retorno se pasan utilizando la memoria.

 {{<salto>}}

**_Gas y tarifa_**

Gas y tarifa
![Imagen gas and fee](/posts/img/unidad5/gas_and_fee.webp)
Toda computación programable en Ethereum está sujeta a tarifas (denominadas en gas).

Gas
![Imagen gas](/posts/img/unidad5/gas.webp)

{{<salto>}}

**_Entrada y salida_**

Entrada y salida de la EVM
![Imagen input and output](/posts/img/unidad5/input_and_output.webp)
La EVM puede recibir datos externos desde una llamada de mensaje.
La EVM puede generar registros de salida. También puede devolver valores a la EVM llamante.

Intrucciones para la entrada de datos
![Imagen intructions for input](/posts/img/unidad5/instructions_for_input.webp)

{{<salto>}}

**_Orden de bytes_**

Endian para memoria
![Imagen endian for memory](/posts/img/unidad5/endian_for_memory.webp)
La EVM utiliza el orden big endian (orden de bytes de red).

![Imagen endian for memory 2](/posts/img/unidad5/endian_for_memory2.webp)
La EVM utiliza el orden big endian (orden de bytes de red).

Endian para datos de entrada
![Imagen endian for input](/posts/img/unidad5/endian_for_input.webp)
La EVM utiliza el orden big endian (orden de bytes de red).

{{<salto>}}

**_Conjunto de instrucciones_**

- Básicamente, operaciones de 256 bits.
- Creación y destrucción de contratos
    - CREATE, DELEGATECALL
- Hash
    - SHA3
- Operaciones de desplazamiento
    - utilizando MUL o DIV, SDIV
- Operaciones de división
    - sin excepción de división por cero

Copia del código y los datos de entrada
![Imagen copy of code](/posts/img/unidad5/copy_of_code.webp)

{{<salto>}}

**_Varios_**

Generación de código EVM
![Imagen evm code generation](/posts/img/unidad5/evm_code_generation.webp)

Capa EVM
![Imagen evm layer](/posts/img/unidad5/evm_layer.webp)

{{<salto>}}

**_Código fuente en Geth_**

Block header
![Imagen block header](/posts/img/unidad5/block_header.webp)

Transaction
![Imagen transaction go](/posts/img/unidad5/transaction_go.webp)

World state
![Imagen statedb_go](/posts/img/unidad5/statedb_go.webp)

Account object (state object)
![Imagen state_object_go](/posts/img/unidad5/state_object_go.webp)

Account state, code and storage
![Imagen state object go 2](/posts/img/unidad5/state_object_go2.webp)

stack and memory
![Imagen stack memory](/posts/img/unidad5/stack_memory.webp)

Instruction operation (arithmetic and stack)
![Imagen instruction go](/posts/img/unidad5/instruction_go.webp)

Gas
![Imagen gas go](/posts/img/unidad5/gas_go.webp)

{{<salto>}}

**_Herramienta de desarrollador de EVM_**

Ejemplodel comando EVM

El proyecto go-ethereum proporciona el comando de utilidad "evm".

Compilar código de ensamblador EVM
![Imagen compile evm](/posts/img/unidad5/compile_evm.webp)

Desensamblar bytecode EVM
![Imagen disassemble evm](/posts/img/unidad5/disassemble_evm.webp)

Ejecutar código de ensamblador EVM
![Imagen run evm](/posts/img/unidad5/run_evm.webp)

{{<salto>}}

**_Solidity ABI_**

Interfaz binaria de aplicación de solidity
![Imagen solidity application](/posts/img/unidad5/solidity_application.webp)

{{<salto>}}

**_WEB3 API_**

Wweb3 API y cliente
![Imagen web3api and client](/posts/img/unidad5/web3api_and_client.webp)
Los clientes de Ethereum acceden a la red de Ethereum a través de la API Web3

![Imagen web3api and client 2](/posts/img/unidad5/web3api_and_client2.webp)
Los clientes de Ethereum acceden a la red de Ethereum a través de la API Web3

{{<salto>}}

**_GETH, MIST, SOLC, REMIX, TRUFFLE, ..._**

GETH
![Imagen geth](/posts/img/unidad5/geth.webp)

Mist
![Imagen mist](/posts/img/unidad5/mist.webp)

Solc
![Imagen solc](/posts/img/unidad5/solc.webp)

Remix
![Imagen remix](/posts/img/unidad5/remix.webp)

Truffle
![Imagen truffle](/posts/img/unidad5/truffle.webp)

{{<salto>}}

{{<button class=myButtonTwo relref="/posts/curso/unidad5/unidadCinco.md">}} Menu de la unidad

{{<button class=myButton relref="/posts/curso/unidad5/ethereumYContratos/video.md">}} Siguiente