const nuttren = document.querySelector('.nuttren');
const nutduoi = document.querySelector('.nutduoi');
const icon = document.querySelector('i');

nuttren.addEventListener('click', function(){
    if(nutduoi.hidden) 
    {
        nutduoi.hidden = false;
        icon.classList.add('bxs-down-arrow');
        icon.classList.remove('bxs-right-arrow');
    } else 
    {
        nutduoi.hidden = true;
        icon.classList.add('bxs-right-arrow');
        icon.classList.remove('bxs-down-arrow');
    }
})
