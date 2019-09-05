(function (){
    var chatBotLib = document.createElement('script'); 
    chatBotLib.setAttribute('src', 'http://path/to/external/file.js'); 
    
    var chatBotButton = document.createElement('chatBotButton'); 
    document.getElementById("chatBotButton").style.display = "block";
    var style = document.createElement('style'), styleContent = document.createTextNode('#chatBotButton { display: none !important; position: fixed !important; bottom: 20px !important; right: 30px !important; z-index: 99 !important; font-size: 18px !important; border: none !important; outline: none !important; background-color: red !important; color: white !important; cursor: pointer !important; padding: 15px !important; border-radius: 4px !important; }');
    
    style.appendChild(styleContent );
    var caput = document.getElementsByTagName('head');
    caput[0].appendChild(style);
    
    
    document.body.appendChild(chatBotLib);
    
    function openForm() {
        document.getElementById("chatBot").style.display = "block";
    }
    function closeForm() {
        document.getElementById("chatBot").style.display = "none";
    }
})();