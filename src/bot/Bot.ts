import { Client } from "discord.js";

export default class Bot extends Client {
    public prefix = "!";
    public memory:Map<string, unknown> = new Map(); 

    constructor(prefix:string){
        super();
        if(prefix) this.prefix = prefix; 
    }

    public prestart():void {
        console.log("Nada que preinicializar");
    }

    public async start(token: string):Promise<void> {
        this.prestart();
        this.login(token);
        return;
    }
}