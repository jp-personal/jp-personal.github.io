function AdaptToTimeOfDay()
{
    const hour = new Date().getHours();

    if (hour > 14 || hour < 7)
    {
        document.getElementsByTagName("body")[0].style.backgroundColor = "#171717";

        document.querySelectorAll(".card").forEach(element => {
            element.style.backgroundColor = "#262626";
            element.style.color = "#F5F5F5";
        });
    }
}

function ShowSnackbar() {
    var snackbar = document.querySelectorAll("#snackbar")[0];
  
    snackbar.className = "show";
  
    setTimeout(function(){ snackbar.className = ""; }, 5000);
  } 

window.addEventListener("load", AdaptToTimeOfDay); // Restyle the page so the viwer's eyes are spared
window.addEventListener("load", function(){ this.setTimeout(ShowSnackbar, 10000); }); // It's clickable - DO IT