


window.onload = function() {
 //alert("let's go!");

           localStorage.clear();
           var ajaxRequest = new XMLHttpRequest();
// Doesn’t work for IE6 and older
			if (ajaxRequest) {
			// if the object was created successfully
			ajaxRequest.onreadystatechange = ajaxResponse;
			ajaxRequest.open("GET", "/api/user"); // Where?
			ajaxRequest.send(null);
			}



function ajaxResponse() {//This gets called when the readyState changes.

		

                 if(ajaxRequest.readyState != 4){


                 }else if(ajaxRequest.status == 200){

                       createList(ajaxRequest.response);

                 }else{

                 	 alert("fudddu");
                 }

}

}





function createList(obj){
   
    
     var data = JSON.parse(obj)
     //console.log(data.length);

    // var tableRef = document.getElementById('userTable').getElementsByTagName('tbody')[0];
    var rowString ="";
  
    for(var i=0;i<data.length;i++){
     
       rowString +='<tr><td><img src="http://bootdey.com/img/Content/avatar/avatar1.png" alt=""><a href="#" class="user-link">'+data[i].name+'</a></td><td>'+data[i].gender+'</td><td class="text-center"><span class="">'+data[i].age+'</span></td><td><a href="#">'+data[i].email+'</a></td><td style="width: 20%;"><a href="#" class="table-link"><span class="fa-stack"><i class="fa fa-square fa-stack-2x"></i><i class="fa fa-search-plus fa-stack-1x fa-inverse"></i></span></a><a href="#" class="table-link"><span class="fa-stack"><i class="fa fa-square fa-stack-2x"></i><i class="</a><a href="#" class="table-link"><span class="fa-stack"><i class="fa fa-square fa-stack-2x"></i><i class="fa fa-pencil fa-stack-1x fa-inverse" onClick="editRecord(\'' + data[i]._id + '\')"></i></span></a><a href="#" class="table-link danger" ><span class="fa-stack"><i class="fa fa-square fa-stack-2x" ></i><i class="fa fa-trash-o fa-stack-1x fa-inverse" onClick="requestForDelete(\'' + data[i]._id + '\')"></i></span></a></td></tr>'

}


document.getElementById('userTable').innerHTML = rowString;
}



function requestForDelete(id){



   var choice =  confirm("Are you sure, you want to delete this record")

   if (choice == true) {
		   
		   deleteRecord(id);

		}  			
}



function editRecord(record){

    // console.log(record);
    localStorage.setItem('testObject', record);

     window.location.href="profile.html";


}




function deleteRecord(id){
   
          var ajaxRequest = new XMLHttpRequest();
// Doesn’t work for IE6 and older
			if (ajaxRequest) {
			// if the object was created successfully
			ajaxRequest.onreadystatechange = ajaxResponse;
			ajaxRequest.open("DELETE", "/api/user/"+id); // Where?
			ajaxRequest.send(null);
			}
    

          function ajaxResponse() {//This gets called when the readyState changes.

		

                 if(ajaxRequest.readyState != 4){


                 }else if(ajaxRequest.status == 200){

                       console.log(ajaxRequest.response);
                       onload();

                 }else{

                 	   console.log("yo yo ")
                 }

  }


}


