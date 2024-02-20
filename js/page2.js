document.addEventListener("DOMContentLoaded", function() {
    var videos = document.querySelectorAll("video");

    var options = {
        root: null,
        rootMargin: "0px",
        threshold: 0.5
    };

    var observer = new IntersectionObserver(callback, options);

    // Observing all video elements
    videos.forEach(function(video) {
        observer.observe(video);
    });

    function callback(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                var video = entry.target;
                video.play(); // Start playing the video when it's visible
            }
        });
    }
});


// Get the video element
var video = document.getElementById("myVideo");
// Hide the video controls
video.controls = false;