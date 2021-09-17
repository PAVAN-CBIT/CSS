<html>
<head>
  <style>
  .styleclass
  {

    border: 5px solid yellow;

  }
  
  
  </style>
    
      <title>jQuery </title>

    <script type="text/javascript" src="https://code.jquery.com/jquery-3.3.1.min.js"</script>
        <script src="https://code.jquery.com/ui/1.12.1/jquery-ui-min.js"
                 integrity="sha256-VazP97ZCwtekAsvgPBSUwpFkdrwD3unUfSGVYrahUqU="
                 crossorigin="anonymous"></script>
                 <link rel="stylesheet" href="https://code.jquery.com/ui/1.10.4/themes/ui-lightness/jquery-ui.css">
        


</head>






<body>
     <h1>THE WORLD’S 10 HIGHEST-PAID ATHLETES SCORE $4.2 BILLION IN 2021</h1>
     <p>Hello world I"m Messi...!</p>
  
    <button>FADE</button>
    
    <div class="lol">
    <img id="one" src="messi.jpg" alt="">
    <img id="two" src="ronaldo.jpg">
    <img id="three" src="neymar.jpg">
    </div>

</body>


  <script>
  
  $(document).ready(function () 
  {
    $("button").click(function () 
    {
      $("#one").fadeOut("slow");
      $("#two").fadeOut("slow");
      $("#three").fadeOut("slow");
    });
    
  });
  
  $("img").addClass("styleclass")
  
  
  
  
  </script>
  







</html>
