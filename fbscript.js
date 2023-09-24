$(document).ready(function(){
    $("#signupform").validate({
        rules:{
            fname:{
            required:true,
            minlength:4
        },
        sname:{
            required:true,
            minlength:4
        },
        MorE:{
            required:true,
            email:true
        
        },
        Newpassword:{
            minlength:6
        },
        day:{
            required:true
        },
        gender:{
            required:true
        }
      },
    messages:{
        fname:{
            required:"enter first name",
            minlength:"enter at least 6"
        }
    }
    

})

})