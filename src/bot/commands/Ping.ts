import Command from "../Command";
import { Message } from "discord.js";
import Bot from "../Bot";

export default class Ping extends Command {
    public static description = "Este es un comando de pruebas"
    public static parameters = [];

    public static exe(bot:Bot, message:Message):void {
        message.channel.send("`Pinging...`").then(sent => sent.edit(`Pong! (${sent.createdTimestamp - message.createdTimestamp}ms)`));
        return;
    }
}