<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>


<script>
$(document).ready(function(){
  $("p").mouseover(function(){
    $("p").css("background-color", "yellow");
  });
  $("p").mouseout(function(){
    $("p").css("background-color", "lightgray");
  });
  $("#btn1").click(function(){
    $("p").mouseover();
  });  
  $("#btn2").click(function(){
    $("p").mouseout();
  }); 
});
</script>