const readline = require('readline');


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


const chatbotAnswers = {
    'hello': 'Hello my human friend!',
    'how are you': 'I am fine, thank you bro! How can I assist you today?',
    'what is your name': 'Could you remind my developer to name me? He forgot to do that.',
    'what is the weather like': 'I am not sure about the weather today, but I am sure that for 330 days in the year, it is hot here.',
    'what can you do': 'I can answer some of your questions and chat with you.',
    'tell me a joke': 'Sorry, being funny is beyond my cognition, but if you are serious about hearing a joke, please send an email to my developer.',
    'who created you': 'I was created by a genius and talented developer named Faleh Alkhaldi. You should get to know him; he is a cool guy.',
    'are you intelligent': 'I am as intelligent as my programming allows me to be.',
    'what is your favorite color': 'The same color as your favorite color :D',
    'how do you work': 'I work by processing your inputs and responding according to my programming.',
    'are you real': 'Without any doubt.',
   
    'exit': 'Goodbye! Have a great day, and do not forget to run me again ;)',
    'quit': 'Goodbye! Have a great day, and do not forget to run me again ;)',
    'end': 'Goodbye! Have a great day, and do not forget to run me again ;)',
    'goodbye': 'Goodbye! Have a great day, and do not forget to run me again ;)',
    'bye': 'Goodbye! Have a great day, and do not forget to run me again ;)',
    'stop': 'Goodbye! Have a great day, and do not forget to run me again ;)',
    'terminate': 'Goodbye! Have a great day, and do not forget to run me again ;)'
};


function normalizeInput(input) {
    return input.replace(/[^a-zA-Z0-9\s]/g, '')
             .replace(/\s+/g, ' ')
             .trim() 
             .toLowerCase(); 
}


function isExitCommand(input) {
    const exitCommands = ['exit', 'quit', 'end', 'goodbye', 'bye', 'stop', 'terminate'];
    return exitCommands.includes(input);
}


function startChat() {
    rl.question('You: ', (input) => {
        const normalizedInput = normalizeInput(input);
        if (normalizedInput in chatbotAnswers){
            const response = 'Chatbot: ' + chatbotAnswers[normalizedInput];
            if (isExitCommand(normalizedInput)) {
                console.log(response);
                rl.close();
            }
            else{
                console.log(response);
                startChat();
            }
        }
        else {
            const responseUndefined = 'Chatbot: I wish I could answer your question, but could you please ask another one?';
            console.log(responseUndefined);
            startChat();
        }
    });
}


startChat();
