var city;
var search;
var step2;
var step3;
var step4;
$("#search").click(function() {
    $( ".info" ).prepend( "<div class='weather'>"+"- "+search+", "+step2+": "+(step3 - 273.15).toFixed(1)+"&degC"+', '+ step4+"</div>" );
});
$('#myField').on('input', function() {
    city = $("#myField").val();
    $.ajax({
      type: "GET",
      url: "http://api.openweathermap.org/data/2.5/weather?q="+city+",ua&callback=&appid=7ce8e2459e6682f49f20bc292397eb02",
      success : function(data) {
                    search = data.name;
                    step2 = data.sys.country;
                    step3 = data.main.temp;
                    step4 = data.weather[0].description;
                    return search,step2,step3,step4;
                }
    });
});
$('#clear').on('click', function(){
  $( ".weather" ).empty();
});
$('input').on('keypress',function lettersOnly(evt) {
       evt = (evt) ? evt : event;
       var charCode = (evt.charCode) ? evt.charCode : ((evt.keyCode) ? evt.keyCode :
          ((evt.which) ? evt.which : 0));
       if (charCode > 31 && (charCode < 65 || charCode > 90) &&
          (charCode < 97 || charCode > 122)) {
          alert("Enter letters only.");
          return false;
       }
       return true;
     });