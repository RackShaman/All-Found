function gettext()
{
    var text = document.body.textContent;
    return text;
    /*var textsources = document.getElementsByTagName("body");
    var btext = "";
    var i;
    for (i = 0; i < textsources.length; i++)
    {
        btext.concat(" ");
        btext.concat(textsources[i]);
    }
    return btext;*/
}

function checkhaiku(haikuwords, sitetext);
{
    var i;
    for(i = 0; i < haikuwords.length; i++)
    {

        if(sitetext.search(haikuwords[i][0]) != -1)
        {
            haikuwords[i][1] = 1;
        }

    }
}

function encodehaiku(haiku)
{
    var kufull = haiku.split("\n");
    var i;
    var j;
    var k0 = kufull[0].split(" ");
    var k1 = kufull[1].split(" ");
    var k2 = kufull[2].split(" ");
    var kufinal;
    kufull = [k0, k1, k2,];
    for(i = 0; i < kufull.length; i++)
    {
        for (j = 0; j < kufull[i].length; j++)
        {
            kufinal.push([kufull[i][j], 0, i]);
        }
    }
}