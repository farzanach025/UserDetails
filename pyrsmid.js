<script>
async function drawDiamond(number) {
    if (isNaN(number)) {

    }
    else if (number <= 0) {

    }
    else if (number % 2 === 0) {

    }
    else {
        var space = 1;
		var space = number -1;
		
		 for (j = 1; j <= number; j++) 
        {
            for (i = 1; i <= space; i++) 
            {
                document.write('&nbsp;&nbsp;');
            }
            space--;
            for (i = 1; i <= 2 * j - 1; i++) 
            {
                document.write("*");                
            }
				document.write("<br>");
				
        }
        space = 1;
        for (j = 1; j <= number - 1; j++) 
        {
            for (i = 1; i <= space; i++) 
            {
			document.write('&nbsp;&nbsp;');
            }
            space++;
            for (i = 1; i <= 2 * (number - j) - 1; i++) 
            {
                document.write("*");
            }
			document.write("<br>");
        }
      
    }
}
drawDiamond(11);
</script>
