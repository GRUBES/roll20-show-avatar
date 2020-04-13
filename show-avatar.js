/**
 * Displays a Character's Avatar image in chat for the Roll20 VTT
 *
 * @module show-avatar
 *
 * @author Draico Dorath
 * @copyright 2020
 * @license MIT
 */

import {version} from "../package.json";

const COMMAND = "!show-avatar";

/**
 * Sends the Avatar Image of the given Character to Roll20 chat
 *
 * @param id {string} Unique identifier of a Character, typically retrieved from character_id
 *  property
 *
 * @returns {void}
 */
function showAvatar(id) {
    if (!id) {
        return;
    }

    let character = getObj("character", id);
    if (!character) {
        return;
    }

    let url = character.get("avatar");
    let name = character.get("name");

    if (!(url && name)) {
        return;
    }

    sendChat(name, `[Image](${url}.png)`)
}

function route(msg) {
    if (!isCommand(msg)) { return; }

    execute(parseCommand(msg), parseInput(msg));
}

function isCommand(msg) {
    return (
        (msg.type === "api") &&
        msg.content.startsWith(COMMAND)
    );
}

function parseCommand(msg) {
    return msg.content
        .split(" ")[0]
        .toLowerCase();
}

function parseInput(msg) {
    // Dumb implementation; will break if e.g. needs to accept text strings with spaces in them
    return _.tail(msg.content.split(/\s+/));
}

function execute(cmd, input) {
    if (cmd !== COMMAND) {
        return;
    }

    showAvatar(...input);
}

on("chat:message", route);
on("ready", () => {
    log(`show-avatar ${version} loaded.`);
});

