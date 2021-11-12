document.addEventListener("DOMContentLoaded",function(){
    let lengthArray=[];
    let clicked=[]
    let i = 0;
    function click_open(ptitle,index)
    {
        let e = ptitle.nextElementSibling;
        lengthArray[i]=e.clientHeight;
        e.setAttribute("style","height:0px;");
        
        ptitle.addEventListener("click",function(){
            let x= this;

            let y ;
            document.querySelectorAll(".ptitle").forEach(function(value,index){if( x == value )y=index});

            if(clicked[y]==null)
            {
                e.setAttribute("style","height:"+lengthArray[y]+"px;");
                clicked[y]=1;
            }
            else 
            {
                e.setAttribute("style","height:0px;");
                clicked[y] =null;
            }
            
        });
        
        i++;
    }
    function bk2(pt)
    {
        if(document.body.clientWidth <= 768)
        {
            pt.addEventListener("click",function(){
                console.log(this.nextElementSibling)
                let e = this.nextElementSibling;
                if( !e.classList.contains("list-f") )
                {
                    e.classList.add("list-f");
                    this.classList.add("rotate");
                }
                else 
                {
                    e.classList.remove("list-f")
                    this.classList.remove("rotate");;
                }
            });
        }
    }
    
    document.querySelectorAll(".title-row").forEach(bk2);
});