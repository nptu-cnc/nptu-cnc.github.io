document.addEventListener('DOMContentLoaded',function()
{
    document.body.onscroll=function()
    {
        if(window.scrollY > 200) 
        {
            document.querySelector("nav").classList.add("fixed-top");
        }
        else 
        {
            document.querySelector("nav").classList.remove("fixed-top");
        }
    }


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
