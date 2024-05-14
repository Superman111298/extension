function textNodesUnder(node){
    var all = [];
    for (node = node.firstChild; node; node = node.nextSibling) {
        if (node.nodeName=="#text" && node.nodeType == 3 && (node.parentNode).nodeName!="STYLE" && (node.parentNode).nodeName!="LI" && (node.parentNode).nodeName!="ARTICLE" && (node.parentNode).nodeName!="BUTTON") {
            all.push(node);
        }
        else all = all.concat(textNodesUnder(node));
    }
    return all;
}

var textNodes = textNodesUnder(document.body);

var j=0;
textNodes.forEach(function(node) {
    var words = node.nodeValue.split(' ');
    var newNodes = [];
    words.forEach(function(word, i) {
        if(word!=' '&& word!='' && word.charCodeAt(0)!=10) {
        var colorSpan = document.createElement('span');
        if( words.length==1) {
            j++;
            if((j)%5==0) {
                // colorSpan.style.color = "red";
            }
        }
        else if(i%5==0) {
            colorSpan.style.color = "red";
    }
    colorSpan.textContent = word;
    newNodes.push(colorSpan);
    
    
    if (i <= words.length - 1) {
        var spaceNode = document.createTextNode(' ');
        newNodes.push(spaceNode);
    }
}});
newNodes.forEach(function(newNode, i) {
    node.parentNode.insertBefore(newNode, i === 0 ? node : null);
});
node.parentNode.removeChild(node);
})