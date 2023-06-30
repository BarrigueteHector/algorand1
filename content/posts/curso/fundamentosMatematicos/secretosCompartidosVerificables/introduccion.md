---
title: "Secretos compartidos verificables"
date: 2023-04-16T18:56:57-06:00
draft: false
---

**Esquema de compartición de secretos**

Un esquema de compartición de secretos es verificable si se incluye información auxiliar que permite a los jugadores verificar que sus partes sean coherentes.

Se aseguran de que, incluso si el distribuidor es malicioso, haya un secreto bien definido que los jugadores puedan reconstruir más tarde.

El concepto de compartición de secretos verificable (VSS, por sus siglas en inglés) fue introducido por primera vez en 1985 por Benny Chor, Shafi Goldwasser, Silvio Micali y Baruch Awerbuch.

En un protocolo de VSS, un jugador distinguido que desea compartir el secreto se conoce como el distribuidor. El protocolo consta de dos fases:
1. Compartición de secretos: Inicialmente, el distribuidor posee el secreto como entrada y cada jugador tiene una entrada aleatoria independiente. Esta fase puede constar de varias rondas. En cada ronda, cada jugador puede enviar mensajes de forma privada a otros jugadores y también puede difundir un mensaje. Cada mensaje enviado o difundido por un jugador se determina según su entrada, su entrada aleatoria y los mensajes recibidos de otros jugadores en rondas anteriores.
2. Reconstrucción: En esta fase, cada jugador proporciona su vista completa de la fase de compartición y se aplica una función de reconstrucción que se toma como salida del protocolo.

{{<salto>}}

**Compartición de secretos de Shamir (SSS)**

Adi Shamir formuló el esquema en 1979.

SSS se utiliza para asegurar un secreto en forma distribuida, principalmente para proteger claves de cifrado.

El secreto se divide en múltiples partes, las cuales individualmente no revelan ninguna información sobre el secreto.

Para reconstruir un secreto asegurado por SSS, se necesita un número de partes, llamado umbral.

No se puede obtener información sobre el secreto a partir de un número de partes inferior al umbral (una propiedad llamada secreto perfecto).

El esquema aprovecha el teorema de interpolación de Lagrange, específicamente que k puntos en el polinomio determinan de manera única un polinomio de grado menor o igual a k-1.
    
- 2 puntos son suficientes para definir una línea, 3 puntos son suficientes para definir una parábola, 4 puntos para definir una curva cúbica, y así sucesivamente.

{{<salto>}}

**Ejemplo**

Una empresa necesita asegurar su bóveda. Si una sola persona conoce el código de la bóveda, el código podría perderse o no estar disponible cuando sea necesario abrir la bóveda. Si varias personas conocen el código, es posible que no confíen entre sí para actuar siempre de manera honesta.

SSS se puede utilizar en esta situación para generar partes del código de la bóveda que se distribuyen a personas autorizadas en la empresa.

Se puede seleccionar el umbral mínimo y el número de partes asignadas a cada individuo de manera que la bóveda solo sea accesible por personas autorizadas (o grupos de personas autorizadas). Si se presentan menos partes que el umbral, la bóveda no se puede abrir.

Si el total de partes correctas no cumple con el umbral mínimo, la bóveda permanece cerrada.

{{<salto>}}

**Aplicaciones**

La compartición de secretos de Shamir se utiliza, por ejemplo, para:

Compartir una clave para descifrar la clave raíz de un gestor de contraseñas.

Recuperar una clave de usuario para acceder a correos electrónicos cifrados.

Compartir la frase de contraseña utilizada para recrear un secreto maestro, que a su vez se utiliza para acceder a una billetera de criptomonedas.

{{<salto>}}

{{<myShortcode_button class=myButtonTwo relref="/posts/curso/fundamentosMatematicos/unidadDos.md">}} Menu de la unidad

{{<myShortcode_button class=myButton relref="/posts/curso/fundamentosMatematicos/secretosCompartidosVerificables/video.md">}} Siguiente