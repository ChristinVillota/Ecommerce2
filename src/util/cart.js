


        export function showMessage(){
            var message = document.getElementById("message1").value;
            document.getElementById("display_message1").innerHTML= message;

			 var message = document.getElementById("message2").value;
             document.getElementById("display_message2").innerHTML= message;
             
             var Female1 = document.getElementById("f1").checked;
             var Male1 = document.getElementById("m1").checked; 
                 if (Female1 == true){
                document.getElementById("display_f1").innerHTML= "Female";
                 } else if (Male1 == true) {
                    document.getElementById("display_f1").innerHTML= "Male";
                 }
        }


