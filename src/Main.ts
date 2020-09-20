// eslint-disable-next-line @typescript-eslint/no-var-requires
if(process.env.NODE_ENV === "development") require("dotenv").config();
import { Message } from "discord.js";
import Bot from "./bot/Bot";

import Ping from "./bot/commands/Ping";

class Main {
    static bot:Bot
    static token:string

    public static main():void {
        if(!process.env.TOKEN) throw new Error("El token del bot es indefinido");
        this.token = process.env.TOKEN; 

        this.bot = new Bot("!f");

        this.bot.on("message", (message:Message) => {
            if(message.author.bot || !message.content.startsWith(this.bot.prefix)) return; 

            const content_wo_prefix:string = message.content.split(" ")[0] === this.bot.prefix ?
                message.content.split(" ").slice(1).join(" ").toLowerCase() :
                message.content.split("").slice(this.bot.prefix.length).join("").toLowerCase();

            if(!content_wo_prefix) return; 

            const command:string = content_wo_prefix.split(" ")[0];
            const parameters:Array<string> = content_wo_prefix.split(" ").slice(1)
                .filter(parameter => parameter !== "")
                .map(parameter => parameter.trim());
            
            if(command === "ping") Ping.exe(this.bot, message);




        });


        this.bot.on("ready", () => console.log("Listo para la busqueda")); 
        this.bot.start(this.token);
    }
}

Main.main(); 
