let inputBtn = document.getElementById('comment-input')
let postBtn = document.getElementById('postBtn')
let commentHeading = document.getElementById('comment-heading')

postBtn.addEventListener('click',function(){
  if(inputBtn.value){
let newpara = document.createElement('p')
newpara.classList.add('new-para')
newpara.textContent = inputBtn.value;
newpara.style.fontFamily = 'cursive';
commentHeading.prepend(newpara);
inputBtn.value = ''
}
})

// Likes
let like1 = document.getElementById('like1')
like1.addEventListener('click',function(){
  like1.style.background = 'steelblue';
})
like1.addEventListener('dblclick',function(){
  like1.style.background = 'white';
})

let like2 = document.getElementById('like2')
like2.addEventListener('click',function(){
  like2.style.background = 'steelblue';
})
like2.addEventListener('dblclick',function(){
  like2.style.background = 'white';
})

let like3 = document.getElementById('like3')
like3.addEventListener('click',function(){
  like3.style.background = 'steelblue';
})
like3.addEventListener('dblclick',function(){
  like3.style.background = 'white';
})

let like4 = document.getElementById('like4')
like4.addEventListener('click',function(){
  like4.style.background = 'steelblue';
})
like4.addEventListener('dblclick',function(){
  like4.style.background = 'white';
})

let like5 = document.getElementById('like5')
like5.addEventListener('click',function(){
  like5.style.background = 'steelblue';
})
like5.addEventListener('dblclick',function(){
  like5.style.background = 'white';
})

let like6 = document.getElementById('like6')
like6.addEventListener('click',function(){
  like6.style.background = 'steelblue';
})
like6.addEventListener('dblclick',function(){
  like6.style.background = 'white';
})

//Dislikes
let dislike1 = document.getElementById('dislike1')
dislike1.addEventListener('click',function(){
  dislike1.style.background = 'red';
})
dislike1.addEventListener('dblclick',function(){
  dislike1.style.background = 'white';
})

let dislike2 = document.getElementById('dislike2')
dislike2.addEventListener('click',function(){
  dislike2.style.background = 'red';
})
dislike2.addEventListener('dblclick',function(){
  dislike2.style.background = 'white';
})

let dislike3 = document.getElementById('dislike3')
dislike3.addEventListener('click',function(){
  dislike3.style.background = 'red';
})
dislike3.addEventListener('dblclick',function(){
  dislike3.style.background = 'white';
})

let dislike4 = document.getElementById('dislike4')
dislike4.addEventListener('click',function(){
  dislike4.style.background = 'red';
})
dislike4.addEventListener('dblclick',function(){
  dislike4.style.background = 'white';
})

let dislike5 = document.getElementById('dislike5')
dislike5.addEventListener('click',function(){
  dislike5.style.background = 'red';
})
dislike5.addEventListener('dblclick',function(){
  dislike5.style.background = 'white';
})

let dislike6 = document.getElementById('dislike6')
dislike6.addEventListener('click',function(){
  dislike6.style.background = 'red';
})
dislike6.addEventListener('dblclick',function(){
  dislike6.style.background = 'white';
})
