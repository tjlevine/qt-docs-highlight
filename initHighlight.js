var elems = document.getElementsByTagName("pre");
for( var i = 0; i < elems.length; i++ )
{
    elems[i].innerHTML = '<code>' + elems[i].innerHTML + '</code>';
}

hljs.initHighlighting();
