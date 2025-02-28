document.addEventListener('DOMContentLoaded', () => {
     const counter = document.querySelector('#counter');
     const minusButton = document.querySelector('#minus');
     const plusButton = document.querySelector('#plus');
     const heartButton = document.querySelector('#heart');
     const pauseButton = document.querySelector('#pause');
     const submitButton = document.querySelector('#submit');
     const likesList = document.querySelector('.likes');
     const commentsList = document.querySelector('#list');
     const commentForm = document.querySelector('#comment-form');
     const commentInput = document.querySelector('#comment-input');
   
     let interval;
   
     function incrementCounter() {
       counter.textContent = parseInt(counter.textContent) + 1;
     }
   
     function decrementCounter() {
       counter.textContent = parseInt(counter.textContent) - 1;
     }
   
     function likeNumber() {
       const currentNumber = counter.textContent;
       const existingLike = document.querySelector(`li[data-number="${currentNumber}"]`);
   
       if (existingLike) {
         existingLike.dataset.likes++;
         existingLike.textContent = `${currentNumber} has ${existingLike.dataset.likes} likes`;
       } else {
         const likeItem = document.createElement('li');
         likeItem.dataset.number = currentNumber;
         likeItem.dataset.likes = 1;
         likeItem.textContent = `${currentNumber} has 1 like`;
         likesList.appendChild(likeItem);
       }
     }
   
     function startInterval() {
       interval = setInterval(incrementCounter, 1000);
     }
   
     function pauseInterval() {
       clearInterval(interval);
     }
   
     function resumeInterval() {
       startInterval();
     }
   
     function disableButtons() {
       minusButton.disabled = true;
       plusButton.disabled = true;
       heartButton.disabled = true;
       submitButton.disabled = true;
     }
   
     function enableButtons() {
       minusButton.disabled = false;
       plusButton.disabled = false;
       heartButton.disabled = false;
       submitButton.disabled = false;
     }
   
     minusButton.addEventListener('click', decrementCounter);
     plusButton.addEventListener('click', incrementCounter);
     heartButton.addEventListener('click', likeNumber);
     pauseButton.addEventListener('click', () => {
       if (interval) {
         pauseInterval();
         pauseButton.textContent = 'resume';
         disableButtons();
       } else {
         resumeInterval();
         pauseButton.textContent = 'pause';
         enableButtons();
       }
     });
   
     commentForm.addEventListener('submit', event => {
       event.preventDefault();
       const comment = commentInput.value;
       const commentItem = document.createElement('div');
       commentItem.textContent = comment;
       commentsList.appendChild(commentItem);
       commentInput.value = '';
     });
   
     startInterval();
   });
   