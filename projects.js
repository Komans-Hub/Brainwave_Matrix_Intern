$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");
});

    $("ul").on("click", "span", function(event){
        $(this).parent().fadeOut(500,function(){
            $(this).remove();
        });
        event.stopPropagation();
    }); 
    $("input[type='text'").keypress(function(event){
       if(event.which === 13){
         var todoText = ($(this).val());
         $(this).val("");
         $("ul").append("<li><span><i class='bi bi-trash'></i></span>" + todoText + '</li>');
       }
    });
    $("#plus").click(function(){
        $("input[type='text'").fadeToggle();
    });
    function updateDateTime() {
      const now = new Date();

      const currentDateTime = now.toLocaleDateString();

      document.querySelector('#datetime').textContent = currentDateTime;
    }
    setInterval(updateDateTime, 1000);

    
    
    



       
