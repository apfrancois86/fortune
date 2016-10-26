var luckyCount = 0;
var unluckyCount = 0;
var theCount = [];
//business logic//

// UI front logic starts //
$(function(){
  $("form").submit(function(event){
    event.preventDefault();
    $("input:checkbox[name=fortuneSigns]:checked").each(function(){
      var results = $(this).val();
      theCount.push(results);
    });
    theCount.forEach(function(num){
      if (num === "lucky"){
        luckyCount +=1
      } else {
        unluckyCount +=1
      }
      console.log(luckyCount);
      console.log(unluckyCount);
      $("#output").fadeIn();
      $("form").fadeOut();
    });
    if (luckyCount < unluckyCount){
      $("#output").append("you gon' die, mon!");
    } else if (luckyCount > unluckyCount) {
      $("#output").append("You gonna be rich mon!");
    } else {
      $("#output").append("Nutting be different, mon!");
    }
  });
  $("#output button").click(function(){
     location.reload();
   });
});
