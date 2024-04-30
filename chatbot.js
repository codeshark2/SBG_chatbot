function submitChat() {
    var input = document.getElementById('usermsg').value;
    document.getElementById('usermsg').value = '';  // Clear input field
    addMessage(input, 'user');

    if (window.currentAction === 'applicationStatus') {
        handleApplicationStatus(input);
    } else {
        processInput(input);
    }
}

function processInput(input) {
    if (input.toLowerCase().includes("hello")) {
        addMessage("Hello! Please choose one of the options below.", 'bot');
    } else {
        addMessage("I'm not sure how to help with that. Please choose an option from the buttons or ask another question.", 'bot');
    }
}

function addMessage(message, type) {
    var output = document.getElementById('chatlogs');
    var side = type === 'bot' ? 'flex-start' : 'flex-end';
    var textColor = type === 'bot' ? 'black' : 'white';
    var bgColor = type === 'bot' ? '#e7e7e8' : '#007bff';
    var label = type === 'bot' ? '<span class="label">SBG:</span>' : '';
    output.innerHTML += `<div class="chat ${type}">${label}<p class="chat-message" style="background-color:${bgColor}; color:${textColor}; align-self:${side};">${message}</p></div>`;
    output.scrollTop = output.scrollHeight;
}

function askApplicationStatus() {
    addMessage("Please enter your application number in the chat.", 'bot');
    window.currentAction = 'applicationStatus';
}

function handleApplicationStatus(appNumber) {
    if (appNumber === "001") {
        addMessage("Under Review", 'bot');
    } else if (appNumber === "002") {
        addMessage("Congratulations, your payment is on the way.", 'bot');
    } else {
        addMessage("Invalid application number.", 'bot');
    }
    window.currentAction = null;
}

function askBusinessType() {
    addMessage("Please enter your business type in the chat.", 'bot');
}

function openLink(url) {
    var linkText = url === "https://sbgfunding.com/sbgfunding-calculator/" ? "Funding Calculator" : "FAQs";
    addMessage(`<a href="${url}" target="_blank">${linkText}</a>`, 'bot');
}
