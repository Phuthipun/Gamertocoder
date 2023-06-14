
function show_hide()
{
   let btn = document.getElementById('btn');
   let ads = document.getElementById('ads');
   if(ads.style.display != "none"){
    ads.style.display = 'none'
   }
   else{
    ads.style.display ='inline'
   }
}