

$(function () {
    $(":file").change(function () {
        if (this.files && this.files[0]) {
            var reader = new FileReader();
            var totalBytes = this.files[0].size
            var _size = Math.floor(totalBytes/1000);

             console.log(_size);
          
             if(_size<2000){
                   
                  reader.onload = imageIsLoaded;

             }else{
                
                   alert("Image size uploaded should not exceed 2 MB")

             }

             reader.readAsDataURL(this.files[0]);
        }
    });
});

function imageIsLoaded(e) {
	  var img = e.target.result
	  $("#myImg").attr('src', e.target.result);


	  var src = document.getElementById("myImg");
	
};
   



/*var age = 18;
 
        for (i = 0; i < 82; i++) {
            $('#age').append('<option>' + age + '</option>');
            age++
        }
*/


window.onload = function() {

  var retrievedObject = localStorage.getItem('testObject');

    if(retrievedObject){
         
       
    	getRecord(retrievedObject);

    }else{

    	console.log("baba ji ka thullu");
    }



      


}




 function getRecord(id){

       var ajaxRequest = new XMLHttpRequest();
// Doesn’t work for IE6 and older
			if (ajaxRequest) {
			// if the object was created successfully
			ajaxRequest.onreadystatechange = ajaxResponse;
			ajaxRequest.open("GET", "/api/user/"+id); // Where?
			ajaxRequest.send(null);
			}



function ajaxResponse() {//This gets called when the readyState changes.

		

                 if(ajaxRequest.readyState != 4){
                          console.log("dont do")

                 }else if(ajaxRequest.status == 200){

                       loadProfile(ajaxRequest.response);


                 }else{

                 	 //alert("fudddu");
                 }


          }
}


function loadProfile(profileObj){

	   //console.log(profileObj[0].name);

	    var data = JSON.parse(profileObj)
        
        document.getElementById("name").value = data.name;
        document.getElementById("email").value = data.email;
        
         

}