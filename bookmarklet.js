javascript: (function () { 
    var jsCode = document.createElement('script'); 
    jsCode.setAttribute('src', 'https://raw.githubusercontent.com/kozinc/bookmarklet-chatbot/master/chatbot-button.js');                  
    document.body.appendChild(jsCode); 
    chatBotLib();
}());