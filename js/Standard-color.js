document.addEventListener('DOMContentLoaded',function()
{
    document.querySelectorAll(".hover-effect>p").forEach(copy);
    function copy(link)
    {
        link.addEventListener("click",function(){
            navigator.clipboard.writeText(link.innerText);
        });
    }
});