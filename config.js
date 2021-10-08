 function keyGenerate() {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < 15; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}


 $(document).ready(function(){
                $('#form').submit(function(event){
                    $.post("http://localhost:8000/cgi-bin/100videos.py",
                    {
                    	dataType: 'text',
                    	data:$("#in3").text()},
                    	onResponse);
                      // $("#loader").attr("hidden", false);
                    return false;
                })
                function onResponse(data){
                	// $("#in2").text(data);
                    console.log(data);
                    console.log(keyGenerate());
                    window.open("http://localhost:8000/"+data+"/"+data+".html", '_blank');
                    // $("#loader").attr("hidden", true);
                }
            })