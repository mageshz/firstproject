function validate()
  {
  //  var actual='';
  //  var answer='';

//this code is to compare both text and box color and store the correct 'SCORE' in a array
if($('#text').css('color') === $('.colbox').css('background-color')) {
answer='yes';
}
else {
answer='no';
}
$( ".yess" ).click(function() {
  actual='yes';

  });
  $( ".noo" ).click(function() {
  actual='no';
  });
//var score=0;
//var i=0,j=0,actual,score;
//score[i++]=answer;
if(actual==answer){
  alert('you guessed it right');
//  ++score;
}
else{

  alert('Wrong answer Concentrate more\ncorrect answer is\n\t'+answer);
}



}



//function scorebtn(score1){

  //$( ".scorebtn" ).click(function() {
  //alert("Total score is:\t"+score1);
  //});

//}


function change()
{

  //this code is to change the colors of the box and text
              var colors = ['red', 'green', 'blue', 'orange', 'yellow'];
//var tex=document.getElementById(#text).innerHtml=
              $('.colbox').each(function() {
                  $(this).css('background-color', colors[Math.floor(Math.random() * colors.length)]);
              });
              $('#text').each(function() {
                  $(this).css('color', colors[Math.floor(Math.random() * colors.length)]);
              });
}
