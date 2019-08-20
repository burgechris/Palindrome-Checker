$(document).ready(function(){
  $('#palindrome').submit(function(event){
    $('#response').children().hide();
    event.preventDefault();
    var input = $('#input').val();
    var inputArray = input.split('');
    console.log(inputArray);
    var reverseArray = inputArray.slice();
    reverseArray.reverse();
    var testResult = true;
    for(var index = 0; index < inputArray.length; index += 1){
      if (inputArray[index] !== reverseArray[index]) {
        testResult = false;
        $('#no').show();
      }
    }
    if (testResult) {
      $('#yes').show();
    }
  });
});
