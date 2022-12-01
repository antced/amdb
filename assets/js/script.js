var moviePoster = document.getElementsByClassName("poster");
var moviePosters = document.getElementById("moviePosters");

    moviePosters.addEventListener("dblclick", openImage);


    function openImage(event) {
        var largeImage = event.target;
        var url=largeImage.getAttribute('src');
        window.open(url,'Image','width=largeImage.stylewidth,height=largeImage.style.height,resizable=1');
     }



































     console.log("~I'M NOT DEAD YET~");