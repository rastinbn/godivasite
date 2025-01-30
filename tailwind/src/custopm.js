const x = [
{
    bg : "91, 27, 27",
    img :"",

}
]


let product = document.getElementById('product')

for(let i=0 ; i<3 ; i++){
    let section = document.getElementById('section')
    let newdiv = document.createElement('div');
    newdiv.innerHTML = product.innerHTML;
    newdiv.classList = product.classList
    console.log(newdiv);
    
    section.appendChild(newdiv)
   
}