javascript:(function (){
    /*var chatBotLib = document.createElement('script'); 
    chatBotLib.setAttribute('src', 'http://path/to/external/file.js'); */
    /*var i = 0;
    console.log(i++);*/
    var chatBotButton = document.createElement('button');
    chatBotButton.setAttribute("id", "chatBotButton");
    chatBotButton.setAttribute("style", "display: block;");
    chatBotButton.innerHTML = "Chat";
    document.body.appendChild(chatBotButton);

    var style = document.createElement('style'), styleContent = document.createTextNode('#chatBotButton { background-color: #555; color: white; padding: 16px 20px; border: none; cursor: pointer; opacity: 0.8; position: fixed; bottom: 23px; right: 28px; width: 280px; } #chatPopup { background:#000000; position: fixed; bottom: 0; right: 15px; border: 3px solid #f1f1f1; z-index: 9; }');
    
    style.appendChild(styleContent);
    document.head.appendChild(style);
    
    /*document.body.appendChild(chatBotLib);*/
    
    function openChatBot() {
        /* IF IFRAME CHATBOT EXISTS 
            THEN MAXIMIZE IFRAME CHATBOT 
            ELSE CREATE IFRAME CHATBOT*/
        console.log("openChatBot");
        chatBotButton.setAttribute("style", "display: none;");
        var chatPopup = document.getElementById("chatPopup");
        if(!!chatPopup) {
            /* MAXIMIZE IFRAME CHATBOT */
            document.getElementById("chatPopup").style.display = "block"; 

        } else {
            /* CREATE IFRAME CHATBOT */
            chatPopup = document.createElement('div');
            chatPopup.setAttribute("id", "chatPopup");
            chatPopup.setAttribute("class", "chatBot");
            chatPopup.style.display = "block";
            
            /** Create minimizeChatBotButton */
            var minimizeChatBotButton = document.createElement('button');
            minimizeChatBotButton.setAttribute("id", "minimizeChatBotButton");
            minimizeChatBotButton.innerHTML = "Minimize";
            chatPopup.appendChild(minimizeChatBotButton);
            /*listener*/
            minimizeChatBotButton.addEventListener("click", function() {
                minimizeChatBot();
            });
            /** Create closeChatBotButton */
            var closeChatBotButton = document.createElement('button');
            closeChatBotButton.setAttribute("id", "closeChatBotButton");
            closeChatBotButton.innerHTML = "Close";
            chatPopup.appendChild(closeChatBotButton);
            /*listener*/
            closeChatBotButton.addEventListener("click", function() {
                closeChatBot();
            });

            var chatBotIframe = document.createElement('iframe');
            chatBotIframe.setAttribute("id", "chatBotIframe");
            var callMeLink = "https://ps.cocos.si/wp/cm/CallMe.html?tokenId=97FE6493-A08A-47ED-BBFD-F6F9BE63422C&chat=1&video=0&name=Visitor&callerDisplayName=Visitor&subject=Info&comment=&pageId=home";
            chatBotIframe.setAttribute("src", callMeLink);
            chatPopup.appendChild(chatBotIframe);
            document.body.appendChild(chatPopup);
        }
    };
    function minimizeChatBot() {
        console.log("minimizeChatBot");
        var chatPopup = document.getElementById("chatPopup");
        chatPopup.style.display = "none";
        /* SHOW chatBotButton */
        chatBotButton.setAttribute("style", "display: block;");
    };
    function closeChatBot() {
        console.log("closeChatBot");
        /* document.getElementById("chatBotIframe").style.display = "none"; */ /* destroy */
        var elem = document.getElementById("chatPopup");
        elem.parentNode.removeChild(elem);
        chatBotButton.setAttribute("style", "display: block;");
    };
    
    document.getElementById("chatBotButton").addEventListener("click", function() {
        openChatBot();
    });
})();