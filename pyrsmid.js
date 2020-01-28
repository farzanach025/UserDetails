<html>
    <head>
        <title>JavaScript to print Diamond pattern!</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <script>
            function printDiamond() {
                document.getElementById("result").innerHTML = "";
                var rows = document.getElementById("limit").value;
                
                if ( rows % 2==1) {
                    
function spacing(rows,i){
for(var k=1; k<=2 * ( rows-i ); k++) {document.write("&nbsp;");}
};

for(var i=1;i<=rows;i=i+2)
{
	spacing(rows, i);
	for(var j=1;j<=i;j++) {document.write("*&nbsp;&nbsp;");}
document.write("<br/>");
}

for(var i=rows-2;i>=1;i=i-2)
{
	spacing(rows, i);
	for(var j=i;j>=1;j--) {document.write("*&nbsp;&nbsp;");}
document.write("<br/>");
}
               
                alert('Here you go!');
            }
            else{
            alert("Your input shouldn't be a character or a negative number or an even number");
            }
            
}
        </script>
    </head>
    <body>
        <h2>JavaScript to print Diamond pattern!</h2>
        Enter the limit:  <input type="number" id="limit" min="2" max="100" />&nbsp;<input type="button" value="Print Diamond Pattern!" onclick="printDiamond()" name="print" />
        <br /> <br />
        <div id="result"></div>
    </body>
</html>

