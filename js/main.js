let input=document.getElementById('inputText');
let addbutton=document.getElementById('addition');
let unorderedlist=document.getElementById('itemsContainer')
let removeallbutton=document.getElementById('deletion')
let counter=0;
addbutton.addEventListener('click',()=>{
let listitem=document.createElement('li');
unorderedlist.appendChild(listitem);
counter++;
listitem.innerText=counter+`. ${input.value}`;
let removebtn=document.createElement('button')
removebtn.innerText="Delete";
removebtn.style.padding='1rem'
removebtn.style.marginInlineStart='3rem'
removebtn.style.border="2px solid red"
removebtn.style.borderRadius="8px"
removebtn.style.cursor="pointer";
removebtn.style.backgroundColor='white'
removebtn.style.Color='red'

listitem.appendChild(removebtn);
removebtn.addEventListener('click',()=>{
unorderedlist.removeChild(listitem)
//
counter=counter-1;

})
})

removeallbutton.addEventListener('click',()=>{
    unorderedlist.innerText=''
    counter=0;
})
// let value=listitem.innerText;
// let obj={
//     item:value
// }
// localStorage.setItem('item',value);
// localStorage.setItem('item',value);
// localStorage.setItem('item',value);


// document.write(localStorage.getItem('item'));


