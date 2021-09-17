<html>
<head>
  
    
      <title>jQuery </title>

    <script type="text/javascript" src="https://code.jquery.com/jquery-3.3.1.min.js"</script>
        <script src="https://code.jquery.com/ui/1.12.1/jquery-ui-min.js"
                 integrity="sha256-VazP97ZCwtekAsvgPBSUwpFkdrwD3unUfSGVYrahUqU="
                 crossorigin="anonymous"></script>
                 <link rel="stylesheet" href="https://code.jquery.com/ui/1.10.4/themes/ui-lightness/jquery-ui.css">
        


</head>






<body>
  <button>JAI HIND</button>
     <div>
      <div id="one" style="width: 2200; height: 60px; background-color: orange; display: none;"></div><br>
      <div id="two" style="width: 2200; height: 60px; background-color: whitesmoke; display: none;"></div><br>
      <div id="three" style="width: 2200; height: 60px; background-color: green;display: none;"></div>
      
      
      
      
      </div>

</body>


  <script>
  
  $(document).ready(function () 
  {
    $("button").click(function () 
    {
      $("#one").fadeIn(3000);
      $("#two").fadeIn(4000);
      $("#three").fadeIn(5000);
    });
    
  });
  
  
  
  
  
  
  </script>
  







</html>
