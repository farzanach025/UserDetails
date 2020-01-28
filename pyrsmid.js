<script>



var rows=15;
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

</script>

