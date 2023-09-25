
document.addEventListener("DOMContentLoaded", function() {
    const contentSection = document.querySelector("section.hidden");

    // Remove the 'hidden' class to trigger the CSS transition
    contentSection.classList.remove("hidden");

    // Set the max-height and opacity to fully display the content
    contentSection.style.maxHeight = "2000px";
    contentSection.style.opacity = "1";
});

   <script>
        function toggleImage() {
            const image = document.getElementById('enhanceImage');
            image.classList.toggle('enhanced');
        }
    </script>
   <script type="text/javascript" async
        src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.7/MathJax.js?config=TeX-MML-AM_CHTML">
    </script>