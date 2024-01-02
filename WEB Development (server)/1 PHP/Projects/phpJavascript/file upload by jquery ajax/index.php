<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>

<body>
  <span id="msg" style="color:red"></span><br />
  <input type="file" id="photo"><br />
  <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
  <!--   <script type="text/javascript" src="jquery-3.2.1.min.js"></script> -->
  <script type="text/javascript">
    $(document).ready(function() {
      $(document).on('change', '#photo', function() {
        var property = document.getElementById('photo').files[0];
        var form_data = new FormData();
        form_data.append("file", property);
        $.ajax({
          url: 'upload.php',
          method: 'POST',
          data: form_data,
          contentType: false,
          cache: false,
          processData: false,
          beforeSend: function() {
            $('#msg').html('Loading......');
          },
          success: function(data) {
            console.log(data);
            $('#msg').html(data);
          }
        });
      });
    });
  </script>
</body>

</html>