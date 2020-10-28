$(function () {

    queryActivities();

});

function queryActivities (){

  let data;
  let activity;
  let listNumber = 0;

  $( "#submit" ).click(function( event ) {
    event.preventDefault();
    try {
      let xhr = new XMLHttpRequest();
      xhr.open('GET', 'https://www.boredapi.com/api/activity?type=recreational');
      xhr.onreadystatechange = function () {
          if (xhr.readyState === XMLHttpRequest.DONE) {
          // console.log(xhr.responseText);
  				data = JSON.parse(xhr.responseText);
          activity = data.activity;
          // console.log(activity);
          listNumber = listNumber + 1;
          $('.section-inverse').append($('<div>', {
              class: "suggestion-class prepend",
              style: "padding: 7px 1px 7px 17px; cursor:pointer;font-weight:300",
              text: listNumber + ". " + activity
            }));
          return;
        }
      }
      xhr.send(null);
    }
    catch(e) {
      console.log('GET problem',e.message);
    }
  });

}
