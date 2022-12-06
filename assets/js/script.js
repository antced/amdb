var moviePoster = document.getElementsByClassName("poster");
var moviePosters = document.getElementById("moviePosters");
const searchBtn = document.getElementById("search");

    moviePosters.addEventListener("dblclick", openImage);
    searchBtn.addEventListener("submit", searchGo);


    function openImage(event) {
        var largeImage = event.target;
        var url=largeImage.getAttribute('src');
        window.open(url,'Image','width=largeImage.stylewidth,height=largeImage.style.height,resizable=1');
     }

    function searchGo(event) {
        event.preventDefault();
        const input= event.target[0].value;
        if (input.toLowerCase() === "morbius") {
            console.log("you win!");
            window.open("./assets/images/morbiusalex.jpg", "Image", "width=largeImage.stylewidth,height=largeImage.style.height,resizable=1");
        } else {
            console.log("try again, bitch");
        }
    }



































     console.log("~I'M NOT DEAD YET~");