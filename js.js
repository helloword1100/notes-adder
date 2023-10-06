const notes_generator = document.querySelector('.input-container');
const button = document.querySelector('.btn');



function updatestorage()
{
   localStorage.setItem('notes',notes_generator.innerHTML);
 
   
}

function showdata()
{
    const datas=localStorage.getItem('notes');
    if(datas)
    {
        notes_generator.innerHTML=datas;
      
    }
}
showdata()
button.addEventListener('click', function () {
    let input= document.createElement('p');
    let img=document.createElement('img');
    input.className='input-feild'
    img.className='im';
    img.src='./notes-app-img/images/delete.png';
    input.setAttribute('contenteditable','true')
    notes_generator.appendChild(input).appendChild(img); 
    updatestorage();
});

notes_generator.addEventListener('click',function(ev){
    if(ev.target.tagName==='IMG')
    {
        ev.target.parentElement.remove();
        updatestorage();
    }
    else if(ev.target.tagName==='p')
    {
        notes=document.querySelectorAll('.input-feild');
        notes.forEach(nt => {
            nt.onkeyup=function(){
                updatestorage();
            }
        });
    }
})

