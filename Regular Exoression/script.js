document.querySelector('form')
.addEventListener('submit',e=>{
  e.preventDefault();
});

const urlField =document.querySelector('#validate_url');
const checkURL =document.querySelector('#check_url');
const form =document.querySelector('form');
checkURL.addEventListener('click',e=>{
  const url =urlField.value;

  /// https://www.google.com
  //ftp://maps.google.com

  const regExp =/^((ftp|http|https):\/\/)([a-zA-Z0-9]+\.)?([a-zA-Z]+)\.([a-zA-Z]{2,})$/;
  if(regExp.test(url))
    {
     markup =`<div class="alert alert-success" role="alert">${url}
     is the valid URL</div>`
     form.insertAdjacentHTML('beforebegin',markup);
    
    }
    else{
      markup =`<div class="alert alert-danger" role="alert">${url}
     is  Not a valid URL</div>`
     form.insertAdjacentHTML('beforebegin',markup);
    }
    setTimeout(() => {
      document.querySelector('.alert').remove();
     }, 2000);
    

})
