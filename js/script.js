'use strict';

function titleClickHandler(){
  event.preventDefault(); // Prevent default link behavior - zapobiega domyślnemu zachowaniu linku, czyli przeładowaniu strony
  const clickedElement = this; // 'this' refers to the clicked link - 'this' może być użyte do odwołania się do elementu, który wywołał zdarzenie
  console.log('Link was clicked!') // Log a message to the console when a link is clicked
  console.log(event); // Log the event object - rejestrator zdarzenia :)

  /* remove class 'active' from all article links  */
  const activeLinks = document.querySelectorAll('.titles a.active');
  for(let activeLink of activeLinks){
    activeLink.classList.remove('active');
  }
  /* add class 'active' to the clicked link */
  console.log('clickedElement:', clickedElement);
  clickedElement.classList.add('active');
  /* remove class 'active' from all articles */
  const activeArticles = document.querySelectorAll('.post.active');
  for(let activeArticle of activeArticles){
    activeArticle.classList.remove('active');
  }
  /* get 'href' attribute from the clicked link */

  /* find the correct article using the selector (value of 'href' attribute) */

  /* add class 'active' to the correct article */
}

const links = document.querySelectorAll('.titles a');

for(let link of links){
  link.addEventListener('click', titleClickHandler);
}