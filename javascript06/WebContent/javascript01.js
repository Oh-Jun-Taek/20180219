/**
 * 
 */

function doA()
{
	var i=0;
	while(i<5){
		alert(i+"번째 경고");
		i++;
	}
}

function doB()
{
	var arr=["manggo","banana","apple","melon"];
	var targetDiv=document.getElementById("printDiv");
	targetDiv.innerHTML = "깨끗<br>"; // 실행시켰을때 계속 중복되는거 방지
	
	//for(var i=0;i<arr.length;i++)
	for(var i in arr) // for each 구문
	{
		targetDiv.innerHTML+=arr[i]+"<br>";
	}
}

function doC()
{
	var targetDiv=document.getElementById("printDiv");
	var count = prompt("층수를 입력하세요 ","");
	count=Number(count);
	
	targetDiv.innerHTML="";
	
	for(var i=0;i<count;i++)
		{
		for(var j=0;j<count-i-1;j++)
			{
				targetDiv.innerHTML+="&nbsp";
			}
		for(var j=0;j<(i+1)*2-1;j++)
			{
				targetDiv.innerHTML+="*";
			}
		targetDiv.innerHTML+="<br>";
		}
}