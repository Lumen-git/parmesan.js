//Parmesan.js
//By Lumen

//This file contains many functions and snippets I often use
//in my JavaScript IF/text games.

function typewriter(targetID, text){
    var target = document.getElementById(targetID)
    target.textContent += text.charAt(0)
    text = text.slice(1)
    if (text.length != 0){
        setTimeout(function(){typewriter(targetID, text)}, 25)
    }
}

function generateRandomString(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz !@#$%^&*()-=_+[]{}|;:,.<>?/1234567890';
    let randomString = '';
  
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      randomString += characters.charAt(randomIndex);
    }
  
    return randomString;
  }

function getRandom(min, max) {
    return Math.random() * (max - min) + min;
}

function formatBytes(bytes) {
    const units = ['bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']

    let i = 0
    while (bytes >= 1024 && i < units.length - 1) {
        bytes /= 1024
        i++
    }

    return `${bytes.toFixed(2)} ${units[i]}`
}