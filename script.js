function firstChar(text) {
  // your code here

	if(text === " ")
	{
		return text;
	}
	else if(text !== " ")
	{
		for(i=0; i<text.length; i++)
			{
				let currChar = text[i]; 
				if(currChar === " ")
				{
					return currChar;
			}
	
		else if(currChar !== " ")
	{ 
		return currChar;
	}
}
	}
} 

   
	   
// Do not change the code below
const text = prompt("Enter text:");
alert(firstChar(text));  
