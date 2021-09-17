<html>
<head>
  <style>
  .styleclass
  {

    border: 5px solid green;

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
  
    <button class="button" id="show">SHOW</button>
    <button class="button" id="hide">HIDE</button>
    <div class="lol">
    <img src="messi.jpg" alt="">
    </div>

</body>


  <script>
  
  $(document).ready(function () {
    $("#show").click(function () {
      $("img").show();
    });
    
  });
  $(document).ready(function () {
    $("#hide").click(function () {
      $("img").hide();
    });
    
  });
  
  
  $("img").addClass("styleclass")
  
  
  </script>
  







</html>
