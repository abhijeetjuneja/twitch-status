$(document).ready(function(){
 
  function updateStatus(data,id){
    var id1="#0"+id;
    id="#"+id;
    
    if(data.stream==null)
      {
    $(id).html("Offline");
        $(id1).html("Not playing");
      }
    else
      {
      $(id).html("Online");
      $(id1).html(data.stream.game);
      }
  }
  
  
 state("ESL_SC2","1");
  state("OgamingSC2","2");
  state("cretetion","3");
  state("freecodecamp","4");
  state("storbeck","5");
  state("habathcx","6");
  state("RobotCaleb","7");
  state("noobs2ninjas","8");
  state("bruno1fin","9");
  function state(apiURLtext,id){
  var       apiURL="https://wind-bow.gomix.me/twitch-api/streams/"+apiURLtext+"?callback=?";
 $.ajax({
            url:apiURL,
            dataType: "jsonp",
            data: {
                format: "json"
            },
            success: function (data) {
              console.log(data.stream);
               updateStatus(data,id);
            },
            error: function () {
                console.log("unable to access json");
            }
        });
 }
});