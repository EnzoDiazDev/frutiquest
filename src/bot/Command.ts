/* eslint-disable semi */
import { Message } from "discord.js";
import Bot from "./Bot";

export default class Command {
    public static description:string
    public static parameters:Array<string>
    
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    public static exe(bot:Bot, message:Message, parameters:Array<string>):void {
        message.channel.send("Este comando no ha sido implementado");
        return;
    }
}
