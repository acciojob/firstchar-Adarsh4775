function firstChar(text) {
  // your code here

	if(text === " ")
	{
		return "";
	}
	
		for(i=0; i<text.length; i++)
			{
				let currChar = text[i]; 
				
	  if(currChar !== " ")
	{ 
		return currChar;
	}
			}
				return "";

	}
 

   
	   
// Do not change the code below
  
const text = prompt("Enter text:");
alert(firstChar(text));  