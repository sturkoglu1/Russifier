function Russifier()
{
    var latinUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ?";
    var latinLower ="abcdefghijklmnopqrstuvwxyz?";
    var kirilUpper = "ДВСDƎҒGНɨɈКւМИОƤQЯƧТЦVШХҰZ¿";
    var kirilLower ="аъсdәғgнiɉкlмпоρqяƨтцvшхуz¿";
    
    var text = document.getElementById("input").value;
    for(var x = 0; x < text.length; x++){
        for(var i = 0; i < latinUpper.length;i++){
            //upper
            text = text.replace(latinUpper[i],kirilUpper[i]);
            //lower
            text = text.replace(latinLower[i],kirilLower[i]);
        }
    }
document.getElementById("output").value = text;

}
