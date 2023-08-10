async function DataDisplay()
{   
    let myTable=`<table border="1" cellspacing='0' align="center" width='760' color='green'>
        <tr>
            <th>Book ID</th> 
            <th>Book Name</th>
            <th>Author</th>
            <th>Price</th>
            <th></th>
        </tr>`
    let url="http://localhost:3000/books";
    let Fileob=await fetch(url);
    let MyData=await Fileob.json();

        MyData.map((key)=>{

            var myid=key.id;
            myTable+=`<tr>
                <td>${key.Book_Id}</td>
                <td>${key.Book_name}</td>
                <td>${key.Author_name}</td>
                <td>${key.price}</td>
                <td>  
                <a href='#' onclick='DataEdit(${myid})'>
                <img src='edit.webp' width='20' height='20'>
                </a></td><td>
                <a href='#' onclick='DataDelete(${myid})'>
                <img src='delete.png' width='20' height='20'>
                </a></td>
            </tr>`
});
        myTable+='</table>';
        document.getElementById('demo').innerHTML=myTable;
    }   
        DataDisplay();
        function DataDelete(myval)
        {
            let url=`http://localhost:3000/books/${myval}`;
            fetch(url,{
                method: 'DELETE'
            }).then(()=>alert("Record Successfully Deleted"));

          DataDisplay();  
        }
            async function DataEdit(myval1)
            {
                let url1=`http://localhost:3000/books/${myval1}`;
                let myFrm="";
                let FileOb1=await fetch(url1);
                let MyData1=await FileOb1.json();
                 myFrm=`<center>
         Enter Book Id:
                 <input type="text" value="${MyData1.Book_Id}" id="b1id" width="500px" height="50px">
                 <br><br>
                 Enter Book Name:
                 <input type="text" value="${MyData1.Book_name}" id="b1name"><br><br>
                 Book Author:
                 <input type="text" value="${MyData1.Author_name}" id="b1aut"><br><br>
                 Book Price:
                 <input type="text" value="${MyData1.price}" id="b1price"><br><br>
                 <button type="button" onclick="EditSave(${MyData1.id})">Update Record</button>
                 </font></center>
                 `;
                 document.getElementById("myfrm").innerHTML=myFrm;
            }
            function EditSave(myval)
            {
                let bid=document.getElementById('b1id').value;
                let bname=document.getElementById('b1name').value;
                let baut=document.getElementById('b1aut').value;
                let bprice=document.getElementById('b1price').value;

                let url=`http://localhost:3000/books/${myval}`;

                fetch(url,{
                    method:'PATCH',
                    body: JSON.stringify({
                        Book_Id: bid,
                        Book_name: bname,
                        Author_name: baut,
                        Price: bprice
                    }),
                    headers:{
                        'Content-type': 'application/json; charset=UTF-8',
                    },
                })
                .then((response)=> response.json())
                .then((json) =>{
                    alert ("Data Successfully Updated!")
                    DataDisplay();
                });
            }