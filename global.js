/* PAGE LOADER * PAGE LOADER * PAGE LOADER * PAGE LOADER */
$(document).ready(function() {
    preloaderFadeOutTime = 1200;    //higher number = longer fade delay
    function hidePreloader() {
        var preloader = $('.pageloader_container');
        preloader.fadeOut(preloaderFadeOutTime);
    }
    hidePreloader();
});

/* TOGGLE Navigation FOR @MOBILE DEVICES */
function mobileNavigation() {
    var x = document.getElementById("mobile-nav");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else {
        x.className = x.className.replace(" w3-show", "");
    }
}

/* LOAD IN EXTERNAL Navigation Bar AND Footer */
$("#navID").load('navigation.html');
$("#footerID").load('footer.html');

/* SEARCH FUNCTION FOR Projects AND Articles LISTED CONTENT */
function searchfunction() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("searchinput");
    filter = input.value.toUpperCase();
    table = document.getElementById("tableID");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}

/* RESUME DOWNLOAD BUTTON */
$("#btn-download").click(function() {
    $(this).toggleClass("downloaded");
    window.open("https://drive.google.com/file/d/10uImN-nySIUrFMIUUQ59W-hKg7knb76b/view?usp=sharing");
});