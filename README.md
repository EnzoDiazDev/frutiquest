## Esto es un machete.

Se programa en typescript.
Bot totalmente orientado a objetos. 
Es juego. 
Es un bot de buscar frutas con emojis. 
Los jugadores tienen inventario de frutas. 
Los jugadores pueden vender sus frutas.
Los jugadores pueden comprar frutas.
Las frutas se obitien de forma aleatoria.


* Bot extiende Client, Game
    - prefix: string
    - memory: Map<string, unknown>
    - prestart: () => Promise<void> (Sobreescribir)
    - start: (token: string) => Promise<void>

* Command
    - description: string
    - parameters: Array<string>
    - exe:(bot: Bot, message:Message, parameters:Array<string>

* Game
    - players: Map<string, Player>
    - add_player(player: Player) => void
    - remove_player_by_id(id: string) => boolean
    - interval: NodeJS.Timer
    - loop: () => void

Habría que añadir un método para comprar y vender
* Player
    - id: string
    - inventory: Inventory
    - balance: number
    - searching: boolean

* Fruits 
    - get_random: () => {}
    - get_name: (emoji) => string

* Inventory 
    - fruits: {}
    - add_fruit: (fruit: string) => void
    - remove_fruit: (fruit: string) => boolean

// !f lkajsdlkjalsdjk gatito

Pasos para analizar un comando. 
1. Si el mensaje es enviado por un bot, entonces ignorar.
2. Si el mensaje NO empieza por el prefijo, entonces ignorar. // !f ping 
3. eliminar el prefijo del contenido del mensaje  // ping
4. comprobar que exista un comando // ping
5. extraer todos los parametros que el contenido mensaje pueda tener
6. comprobar que el comando sea un comando real. 
7. termina el algoritmo. 
