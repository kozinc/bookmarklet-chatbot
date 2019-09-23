function chatBotLib(tokenId = "97FE6493-A08A-47ED-BBFD-F6F9BE63422C"){

    /* Font-awesome */
    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://use.fontawesome.com/releases/v5.10.2/css/all.css';
    document.head.appendChild(link);

    var chatBotButton = document.createElement('button');
    chatBotButton.setAttribute("id", "chatBotButton");
    chatBotButton.setAttribute("class", "btn");
    var faiconchat = document.createElement('i');
    faiconchat.setAttribute("class", "fas fa-comment-alt fa-3x");
    chatBotButton.appendChild(faiconchat);
    chatBotButton.setAttribute("style", "display: block;");
    /* chatBotButton.innerHTML = "Chat"; */
    document.body.appendChild(chatBotButton);

    var style = document.createElement('link');
    style.rel = 'stylesheet';
    style.href = 'https://ps.cocos.si/demo/css/chatbot-button-lib.css';
    document.head.appendChild(style);
    
    function openChatBot() {
        chatBotButton.setAttribute("style", "display: none;");
        var chatPopup = document.getElementById("chatPopup");
        if(!!chatPopup) {
            document.getElementById("chatPopup").style.display = "block"; 

        } else {
            chatPopup = document.createElement('div');
            chatPopup.setAttribute("id", "chatPopup");
            chatPopup.setAttribute("class", "chatBot");
            chatPopup.style.display = "block";
            
            var closeChatBotButton = document.createElement('button');
            closeChatBotButton.setAttribute("id", "closeChatBotButton");
            closeChatBotButton.setAttribute("class", "btn btn-circle");
            var faiconclose = document.createElement('i');
            faiconclose.setAttribute("class", "fas fa-times");
            /* closeChatBotButton.innerHTML = "Close"; */
            closeChatBotButton.appendChild(faiconclose);
            chatPopup.appendChild(closeChatBotButton);
            closeChatBotButton.addEventListener("click", function() {
                closeChatBot();
            });
            
            var refreshChatBotButton = document.createElement('button');
            refreshChatBotButton.setAttribute("id", "refreshChatBotButton");
            refreshChatBotButton.setAttribute("class", "btn btn-circle");
            var faiconrefresh = document.createElement('i');
            faiconrefresh.setAttribute("class", "fas fa-redo");
            /* refreshChatBotButton.innerHTML = "Refresh"; */
            refreshChatBotButton.appendChild(faiconrefresh);
            chatPopup.appendChild(refreshChatBotButton);
            refreshChatBotButton.addEventListener("click", function() {
                refreshChatBot();
            });
            

            var minimizeChatBotButton = document.createElement('button');
            minimizeChatBotButton.setAttribute("id", "minimizeChatBotButton");
            minimizeChatBotButton.setAttribute("class", "btn btn-circle");
                var faiconminimize = document.createElement('i');
                faiconminimize.setAttribute("class", "fas fa-window-minimize");
            /* minimizeChatBotButton.innerHTML = "Minimize"; */
                minimizeChatBotButton.appendChild(faiconminimize);
            chatPopup.appendChild(minimizeChatBotButton);
            minimizeChatBotButton.addEventListener("click", function() {
                minimizeChatBot();
            });

            var chatBotIframe = document.createElement('iframe');
            chatBotIframe.setAttribute("id", "chatBotIframe");
            chatBotIframe.setAttribute("class", "chatBotIframe");
            var callMeLink = "https://ps.cocos.si/wp/cm/CallMe.html?tokenId=" + tokenId + "&chat=1&video=0&name=Visitor&callerDisplayName=Visitor&subject=Info&comment=&pageId=home";
            chatBotIframe.setAttribute("src", callMeLink);
            chatBotIframe.setAttribute("frameborder", 0);
            chatPopup.appendChild(chatBotIframe);
            document.body.appendChild(chatPopup);
        }
    };
    function minimizeChatBot() {
        var chatPopup = document.getElementById("chatPopup");
        chatPopup.style.display = "none";
        chatBotButton.setAttribute("style", "display: block;");
    };
    function refreshChatBot() {
        var chatBotIframe = document.getElementById("chatBotIframe");
        chatBotIframe.parentNode.removeChild(chatBotIframe);
        var callMeLink = "https://ps.cocos.si/wp/cm/CallMe.html?tokenId=" + tokenId + "&chat=1&video=0&name=Visitor&callerDisplayName=Visitor&subject=Info&comment=&pageId=home";
        chatBotIframe.setAttribute("src", callMeLink);
        chatBotIframe.setAttribute("frameborder", 0);
        
        document.getElementById("chatPopup").appendChild(chatBotIframe);
    };
    function closeChatBot() {
        var elem = document.getElementById("chatPopup");
        elem.parentNode.removeChild(elem);
        chatBotButton.setAttribute("style", "display: block;");
    };
    
    document.getElementById("chatBotButton").addEventListener("click", function() {
        openChatBot();
    });
};