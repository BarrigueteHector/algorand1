---
title: "Qué es un sistema distirbuido"
date: 2023-04-16T20:28:15-06:00
draft: false
---

Un Sistema Distribuido (SD) es una colección de entidades que cooperan para resolver un problema que no puede ser resuelto por una sola entidad.

En computación, es un conjunto de elementos de hardware y software conectados a través de una red de datos, capaz de comunicarse y coordinar sus acciones únicamente mediante el paso de mensajes.

{{<salto>}}

**Características**

- Concurrencia

Dado que la norma dentro de un sistema en red es la ejecución concurrente de programas, es necesario planificar la coordinación de dichos programas al compartir recursos.

- Ausencia de reloj global

Si los programas necesitan cooperar deben coordinarse por el paso de mensajes. Los procesos de alta coordinación dependen de la idea compartida del tiempo en que ocurren los eventos dentro de los programas.

- Indipendencia de fallo

Cada componente del sistema puede fallar, mientras los demás siguen activos.

- No comparten memoria

Esta característica es usual en SD, sin embargo, es posible tener memoria común a través de la construcción de “memoria compartida distribuida”.

- Separación geográfica

Los elementos que conforman un SD pueden estar conectados a través de una red WAN o LAN, es decir, existe separación física entre los diferentes componentes.

- Autonomía y heterogeneidad

Los elementos de un SD están débilmente acoplados (es decir, operan a diferentes velocidades y con diferentes sistemas operativos), y estos normalmente no son un sistema dedicado.

{{<salto>}}

**Metas de un Sistema Distribuido**

- Compartir Recursos

El usuario (humano o programa) puede acceder a los recursos (hardware, software, datos o documentos) remotos de la misma manera que a los recursos locales de manera confiable.

- Tranparente para el usuario

Un SD es capaz de ocultar a los usuarios qué procesos y recursos de los sistemas están distribuidos en múltiples entidades, de tal manera que para el usuario estos parezcan un único sistema de cómputo.

- Apertura

Un SD se denomina abierto cuando ofrece la inclusión de nuevos servicios para compartir recursos sin perjudicar ni duplicar a los ya existentes.

{{<salto>}}

**Paso de mensajes**

En un SD, el único medio de comunicación es la red de interconexión, ya que no existe un espacio de memoria compartida para los procesos que se ejecutan en el sistema. Por esta razón la comunicación de procesos se realiza por paso de mensajes.

Al paso de mensajes se asocia una cola con cada destino de mensaje. Los procesos que envían añaden mensajes a colas remotas y los procesos que reciben remueven mensajes de las colas locales. Así podemos tener dos tipos de comunicación:

1. Comunicación síncrona

    Los procesos se ajustan con cada mensaje, las operaciones de envío y recepción son operaciones bloqueantes. 
    
    Cuando se realiza una operación de envío el proceso que envía se bloquea hasta que se emite la recepción correspondiente.

    Si un proceso emite una operación de recepción se bloquea hasta que llega el mensaje.

    Puede suceder también que la operación de recepción sea una no bloqueante (se le permite proceder cuando se ha copiado el mensaje en el buffer local y la transmisión del mensaje procede en paralelo con el envío).

2. Comunicación asíncrona

    En este caso, cuando el emisor llega a la instrucción en la que se produce el envío, no se bloquea a la espera de que el programa destinatario llegue a la instrucción en que lo recibe, sino que sigue ejecutándose con normalidad.

    Por otra parte, el programa receptor recibirá el mensaje en cualquier momento posterior al envío sin frenar con esto al emisor hasta que la recepción se produzca.

    Pero si el receptor ha llegado a una orden de recepción de mensaje pero el emisor aún no ha enviado nada, el receptor sí se bloqueará a la espera de que el emisor realice el envío.

{{<salto>}}

**Comunicación cliente-servidor**

Es un modelo de comunicación en el que las tareas se reparten entre los proveedores de
recursos o servicios, llamados servidores, y los demandantes, llamados clientes.

- Servidores

Son procesos que implementan un servicio y siempre están a la escucha de peticiones provenientes de una IP y puerto específico.

- Clientes

Son procesos que solicitan un servicio a los servidores a través de una petición y esperan por una respuesta del servidor.

![Imagen cliente servidor](/posts/img/unidad3/cliente_servidor.webp#center)

{{<salto>}}

**Comunicación punto a punto**

En los sistemas punto a punto (peer to peer, en inglés o P2P) los servidores dedicados y clientes no existen, en contraste con la arquitectura cliente-servidor. Aquí las entidades conectadas al sistema se denominan nodos (o peers, en inglés) y estos pueden tomar el papel de cliente y servidor a la vez.

![Imagen p2p](/posts/img/unidad3/p2p.webp#center)

**Beneficios**

![Imagen beneficios p2p](/posts/img/unidad3/beneficios_p2p.webp)

{{<salto>}}

{{<button class=myButtonTwo relref="/posts/curso/unidad3/unidadTres.md">}} Menu de la unidad

{{<button class=myButton relref="/posts/curso/unidad3/queEs/video.md">}} Siguiente