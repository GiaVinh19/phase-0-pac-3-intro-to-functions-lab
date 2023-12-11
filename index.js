function shout(string) {
    return string.toUpperCase();
}

function whisper(string) {
    return string.toLowerCase();
}

function logShout(string) {
    let shout = string.toUpperCase();
    console.log(shout);
}

function logWhisper(string) {
    let whisper = string.toLowerCase();
    console.log(whisper);
}

function sayHiToHeadphonedRoommate(string) {
    if (string == string.toLowerCase()) {
        return "I can't hear you!";
    }
    else if (string == string.toUpperCase()) {
        return "YES INDEED!";
    }
    else if (string == "Let's have dinner together!") {
        return "I would love to!";
    }
}