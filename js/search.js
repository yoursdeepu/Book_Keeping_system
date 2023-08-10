document.getElementById('mybtn').addEventListener("click",MyData);
async function MyData()
{
	let myTable=`<table border="1" align="center" cellspacing="0">
		<tr >
		<td width="200px" style="padding:6px;">Book ID</td>
		<td width="200px" style="padding:6px;">Book Name</td>
		<td width="200px" style="padding:6px;">Book Author</td>
		<td width="200px" style="padding:6px;">Price</td>
		</tr>`
	let cnt=0;
	let bid=document.getElementById('bookid').value;
	let url=`http://localhost:3000/books?Book_Id=${bid}`;
	let FileOb=await fetch(url);
	let MyData=await FileOb.json();
		MyData.map((key)=>{
			myTable+=`<tr>
				<td>${key.Book_Id}</td>
				<td>${key.Book_name}</td>
				<td>${key.Author_name}</td>
				<td>${key.price}</td></tr>`;
			cnt++;
		});
	myTable+=`</table>`;
	if(cnt>=1)
	{
			document.getElementById('demo').innerHTML=myTable;
	}
	else
	{
		document.getElementById('demo').innerHTML="<font color='blue'; >No Record found</font>"
	}

}