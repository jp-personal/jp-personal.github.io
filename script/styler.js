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




var isMobile = {
    Windows: function() {
        return /IEMobile/i.test(navigator.userAgent);
    },
    Android: function() {
        return /Android/i.test(navigator.userAgent);
    },
    BlackBerry: function() {
        return /BlackBerry/i.test(navigator.userAgent);
    },
    iOS: function() {
        return /iPhone|iPad|iPod/i.test(navigator.userAgent);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Windows());
    }
};



function NavigateToLink(sender)
{   
    
    if(sender.id == "birthday")
    {
        if(/Android/i.test(navigator.userAgent))
            window.open('https://maps.app.goo.gl/Pi7TZz9LT2fM2MWj6', '_blank');
        else
            window.open('https://www.google.com/maps/place/Azzaro+Green+Club/@44.7894312,20.4101525,17z/data=!3m1!4b1!4m6!3m5!1s0x475a6fc728a2206f:0x97b759ae51686955!8m2!3d44.7894312!4d20.4101525!16s%2Fg%2F11gg9726v8?entry=ttu&g_ep=EgoyMDI0MTIxMC4wIKXMDSoASAFQAw%3D%3D', '_blank').focus();
    }
    else
    {
        if(/Android/i.test(navigator.userAgent))
            window.open('https://maps.app.goo.gl/6XfHeRQp77sQq9uH8', '_blank');
        else
        window.open('https://www.google.com/maps/place/Orthodox+Church+of+St.+Luke+the+Apostle/@44.7518003,20.4344707,19z/data=!4m6!3m5!1s0x475a71ea9fb4c97f:0xeec28c0c6bbe6268!8m2!3d44.7515598!4d20.4338991!16s%2Fg%2F1wnd_vq4?entry=ttu&g_ep=EgoyMDI0MTIxMC4wIKXMDSoASAFQAw%3D%3D', '_blank').focus()
    }

}

window.addEventListener("load", AdaptToTimeOfDay); // Restyle the page so the viwer's eyes are spared
// window.addEventListener("load", function(){ this.setTimeout(ShowSnackbar, 10000); }); // It's clickable - DO IT
