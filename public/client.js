let x = {
    username:"",
    password:""
};
$(".btn").click(function(){

    x["username"]=$("input").eq(0).val()
    x["password"]=$("input").eq(1).val()
    console.log(x);
    
    $.ajax({
        type: "POST",
        url: "/login",
        data: JSON.stringify(x),
        success: function (response) {
            console.log(response);
            if(response==="logged in"){
                $(".alert-success").css("display","inline-block");
                $(".text-right").css("display","none")
            }
            else if(response==="failed"){
                $(".alert-danger").css("display","inline-block");
                $(".text-right").css("display","none")
            }

        },
        error: function (err) {
            console.log(err);
        },
    })
})
 



