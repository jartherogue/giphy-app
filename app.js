$(document).ready(function () {
    var foundGifs = ['Oakland Athletics', 'World Series', 'Home Run'];
    function createButtons() {
        $("#createButton").empty();
        for (i = 0; i < foundGifs.length; i++) {
            var newButton = $("<button>");
            newButton.addClass('gifButton');
            newButton.attr('data-name', foundGifs[i]);
            newButton.text(foundGifs[i]);
            $('#createButton').append(newButton);
            console.log(newButton);
        }
    }
    $('#addGif').on('click', function (event) {
        event.preventDefault();
        $('#displayGif').empty();
        var getGif = $('#findGif').val().trim();
        foundGifs.push(getGif);
        createButtons();
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
            getGif + "&api_key=qSz7MK1SUQg8TzveSJy0YF0ueLL8AorW&limit=10";
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            var results = response.data;
            for (var i = 0; i < results.length; i++) {
                var gifDiv = $("<div class='newGif'>");
                var gifImage = $("<img>");
                gifImage.attr("src", results[i].images.fixed_height.url);
                gifImage.attr('alt', 'results image')
                gifDiv.prepend(gifImage);
                $("#displayGif").prepend(gifDiv);
            }
        });
        console.log(foundGifs);
    });
    createButtons();
    $('.gifButton').on('click', function () {
        $('#displayGif').empty();
        var searchTerm = $(this).attr("data-name");
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
            searchTerm + "&api_key=qSz7MK1SUQg8TzveSJy0YF0ueLL8AorW&limit=10";
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            var results = response.data;
            for (var t = 0; t < results.length; t++) {
                var gifDiv = $("<div class='newGif'>");
                var gifImage = $("<img>");
                gifImage.attr("src", results[t].images.fixed_height.url);
                gifImage.attr('alt', 'results image')
                gifDiv.prepend(gifImage);
                $("#displayGif").prepend(gifDiv);
            }
        });
    });
    console.log(foundGifs);
});
// My next step was to write the still images vs the moving images into the click functions.