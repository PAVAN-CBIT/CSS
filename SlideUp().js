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
  <button>S L I D E</button>
     
      <div id="one" style="width:60px; height: 60px; background-color: orange;"></div>
      

</body>


  <script>
  
  $(document).ready(function () 
  {
    $("button").on("click", function () 
    {
      $("#one").slideUp("slow");
      
    });
    
  });
  
  
  
  
  
  
  </script>
  







</html>
