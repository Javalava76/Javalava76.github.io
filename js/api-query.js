$(function () {
  queryActivities();
});

function queryActivities() {
  let listNumber = 0;

  $("#submit").click(function (event) {
    event.preventDefault();

    let val1 = [];
    let val2 = [];
    let val3 = [];

    $(".people").children(":checkbox:checked").each(function (i) {
      val1[i] = $(this).val();
    });
    $(".price").children(":checkbox:checked").each(function (i) {
      val2[i] = $(this).val();
    });
    $(".activity-type").children(":checkbox:checked").each(function (i) {
      val3[i] = $(this).val();
    });

    if (val1.length === 0 || val2.length === 0 || val3.length === 0) {
      console.log("Error! Missing selections.");
      return;
    }

    try {
      let xhr = new XMLHttpRequest();
      xhr.open("GET", "https://api.thecatapi.com/v1/images/search");

      xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
          const response = JSON.parse(xhr.responseText);
          const catUrl = response[0].url;
          console.log("Cat URL:", catUrl);

          listNumber++;

          // Create a new container div for each cat suggestion
          const $newDiv = $("<div>", {
            class: "suggestion-class prepend",
            style:
              "padding: 7px 1px 20px 17px; cursor:pointer; font-weight:300; border-bottom: 1px solid #ccc;",
          }).append(`<strong>${listNumber}.</strong><br>`);

          // Create and append the image
          const $catImg = $("<img>", {
            src: catUrl,
            alt: "Random cat",
            style: "max-width: 400px; display: block; margin-top: 10px;",
          });

          $newDiv.append($catImg);
          $(".section-inverse").append($newDiv);

          // Smooth scroll to the bottom of the page after appending the image
          $("html, body").animate(
            {
              scrollTop: $(document).height(),
            },
            800 // scroll duration (in ms)
          );

          console.log(
            "New cat image added and page scrolled to bottom. Updated 11/9/2025. The original activities API is no longer free so now you just get pictures of cats below the SUBMIT button. Enjoy."
          );
        }
      };

      xhr.send();
    } catch (e) {
      console.log("GET problem", e.message);
    }
  });
}
