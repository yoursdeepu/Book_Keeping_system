
document.getElementById('mybtn').addEventListener("click",DataDel);
function DataDel()
{
	let myid=document.getElementById('bookid').value;
	let url=`http://localhost:3000/books/${myid}`;
	fetch(url,{
		method: 'DELETE'
	}).then(()=>alert('Record Deleted'));
}
