document.addEventListener('DOMContentLoaded',function()
{

    document.querySelector(".navbar-toggler").addEventListener("click",function (){
        
        let toggle = document.querySelector(".navbar-toggler");
        if(!toggle.classList.contains("rotate"))
        {
            toggle.classList.add("rotate");
        }
        else 
        {
            toggle.classList.remove("rotate")
        }
        
    });
});