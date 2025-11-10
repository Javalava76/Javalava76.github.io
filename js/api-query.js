$(function () {

    queryActivities();

});

function queryActivities (){

  let response;
  let activity;
  let catUrl;
  let catImg;
  let listNumber = 0;

  $( "#submit" ).click(function(event) {
    event.preventDefault();
    let val1 = [];
    let val2 = [];
    let val3 = [];
    let peopleQuery = '';
    let priceQuery = '';
    let typeQuery = '';
        $('.people').children(':checkbox:checked').each(function(i){
          val1[i] = $(this).val();
        });
        console.log(val1);

        $('.price').children(':checkbox:checked').each(function(i){
          val2[i] = $(this).val();
        });
        console.log(val2);
        $('.activity-type').children(':checkbox:checked').each(function(i){
          val3[i] = $(this).val();
        });
        console.log(val3);
    if ( val1.length == 0 || val2.length == 0 || val3 == 0 ) {
      console.log('Error!');
    }
    else
    {
      try {
         let xhr = new XMLHttpRequest();
         xhr.open('GET', 'https://api.thecatapi.com/v1/images/search');
         xhr.onreadystatechange = function () {
            if (xhr.readyState === XMLHttpRequest.DONE) {
           console.log("responseText:", xhr.responseText);
    				response = JSON.parse(xhr.responseText);
            catUrl = response[0].url;
            catImg = catUrl.src;
             console.log(catUrl, catImg);
           
            listNumber = listNumber + 1;
            $('.section-inverse').append($('<div>', {
               class: "suggestion-class prepend",
                style: "padding: 7px 1px 7px 17px; cursor:pointer;font-weight:300;",
                text: listNumber + ". "
              }));
       
         console.log(`Sorry, the previous version stopped working. This page was updated 11/9/2025.`);
        

            return;
         }
        }
         xhr.send(null);
      }
      catch(e) {
        console.log('GET problem',e.message);
     }
    }
  });
}
