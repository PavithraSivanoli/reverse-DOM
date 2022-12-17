var x=document.createElement("INPUT")
x.setAttribute("type","text")
x.setAttribute("placeholder","enter the number")
x.setAttribute("id","number")
document.body.appendChild(x);
x.style.backgroundColor="pink";
document.write("<br>");
document.write("<br>");
  
var z=document.createElement("button")
z.setAttribute("onclick","reverse()")
z.innerHTML	="click"
document.body.appendChild(z);
z.style.backgroundColor="blue";

var y=document.createElement("div")
y.setAttribute("onclick","reverse()")
y.innerHTML	="click"
y.classname.add("body")
document.body.appendChild(y);


function reverse() {
var a= document.getElementById("number").value;
while(a>0)
{
	var rem=a%10;
	a=(a-rem)/10;
	if (rem==1)
	 {
	 document.write("one" +"<br>")
	}
	else if (rem==2)
	{
	document.write("two" +"<br>")
	}
	else if (rem==3)
	{
	document.write("three" +"<br>")
  }
  else if (rem==4)
	{
	document.write("four" +"<br>")
  }
  else if (rem==5)
	{
	document.write("five" +"<br>")
  }
  else if (rem==6)
	{
	document.write("six" +"<br>")
  }
  else if (rem==7)
	{
	document.write("seven" +"<br>")
  }
  else if (rem==8)
	{
	document.write("eight" +"<br>")
  }
  else if (rem==8)
	{
	document.write("eight" +"<br>")
  }
  else if (rem==9)
	{
	document.write("nine" +"<br>")
  }
	else
	{
	 document.write("zero" +"<br>")
	 
 }
 document.body.style.backgroundColor="lightblue";
}
}