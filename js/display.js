
async function DataDisaplay(){
let myTable=`<table border='1' align='center' cellspacing="0">
    <tr>
    <td style='color:blue;'>Book ID</td>
    <td style='color:blue;'>Book Name</td>
    <td style='color:blue;'>Author</td>
    <td style='color:blue;'>Price</td>
    </tr>`;
    
    let url="http://localhost:3000/books";
    let fileOb=await fetch(url);
    let MyData=await fileOb.json();
    MyData.map((key)=>{
     myTable+=`<tr>
            <td style='padding:8px; font-size:22px'>${key.Book_Id}</td>
            <td style='padding:8px; font-size:22px'>${key.Book_name}</td>
            <td style='padding:8px; font-size:22px'>${key.Author_name}</td>
            <td style='padding:8px; font-size:22px'>${key.price}</td>
            </tr>;  `
        });
        myTable+='</table>';
        document.getElementById('demo').innerHTML=myTable;

}
DataDisaplay();