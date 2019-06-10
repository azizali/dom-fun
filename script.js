document.addEventListener('DOMContentLoaded', function(){
  var btn = document.querySelector('#add-btn');
  var inputField = document.querySelector('#text-field');
  var ul = document.querySelector('ul')

  btn.addEventListener('click', function(){
    console.log('I was clicked', inputField.value)
  

    var item = document.createElement('li')
    item.innerHTML = inputField.value

    console.log(item)

    ul.appendChild(item)

  });
  
})


// STEP #1: Query the DOM element
// STEP #2: Do something


// Query the element
// Enable functionality - Attaching a "event listener"