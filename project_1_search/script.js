document.addEventListener("DOMContentLoaded", function() {
    var searchInput = document.getElementById("search");
    searchInput.addEventListener("keyup", iconAnimate);

    function iconAnimate() {
        var searchIcon = document.getElementsByClassName("search-icon")[0];
        searchIcon.classList.add("moveicon");
        searchIcon.classList.remove("search-icon");
        searchIcon.animation = "bubble 1.5s infinite" ; /* Infinite animation */
    }
    searchInput.addEventListener("keydown", function() {
        searchIcon.classList.remove("moveicon");
    });

    
});

document.addEventListener("DOMContentLoaded", function() {
    var searchInput = document.getElementById("search");
    
    searchInput.addEventListener("keyup", function() {
        var searchValue = searchInput.value.toLowerCase();
        var tableRows = document.getElementsByTagName("tr");
        var tableBody = document.getElementById("message");

        
        for (let i = 1; i < tableRows.length; i++) { // Assuming the first row is the header
            var columns = tableRows[i].cells;
            let rowContainsSearchValue = false;
            
            for (let j = 0; j < columns.length; j++) {
                if (columns[j]) {
                    let columnValue = columns[j].textContent || columns[j].innerText;
                    
                    if (columnValue.toLowerCase().indexOf(searchValue) > -1) {
                        rowContainsSearchValue = true;
                        break;
                    }
                }
            }
            
            if (rowContainsSearchValue) {
                tableRows[i].style.display = "";
            } else {
                tableRows[i].style.display = "none";
                tableBody.style.display ="block";

            }
        }
    });
});
