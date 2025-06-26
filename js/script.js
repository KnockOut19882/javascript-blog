'use strict';

function titleClickHandler(){ // Function to handle click events on article links - funkcja obsługująca kliknięcia w linki artykułów
  event.preventDefault(); // Prevent default link behavior - zapobiega domyślnemu zachowaniu linku, czyli przeładowaniu strony
  const clickedElement = this; // 'this' refers to the clicked link - 'this' może być użyte do odwołania się do elementu, który wywołał zdarzenie
  console.log('Link was clicked!') // Log a message to the console when a link is clicked
  console.log(event); // Log the event object - rejestrator zdarzenia :)

  /* remove class 'active' from all article links  */
  const activeLinks = document.querySelectorAll('.titles a.active'); // Select all links with the class 'active' - wybiera wszystkie linki z klasą 'active'
  for(let activeLink of activeLinks){ // Loop through each active link - iteruje przez każdy aktywny link
    activeLink.classList.remove('active'); // Remove the 'active' class from the link - usuwa klasę 'active' z linku
  }
  /* add class 'active' to the clicked link */
  console.log('clickedElement:', clickedElement); // Log the clicked element to the console - rejestrator klikniętego elementu
  clickedElement.classList.add('active');   // Add the 'active' class to the clicked link - dodaje klasę 'active' do klikniętego linku
  /* remove class 'active' from all articles */
  const activeArticles = document.querySelectorAll('.post.active'); // Select all articles with the class 'active' - wybiera wszystkie artykuły z klasą 'active'
  for(let activeArticle of activeArticles){ // Loop through each active article - iteruje przez każdy aktywny artykuł
    activeArticle.classList.remove('active'); // Remove the 'active' class from the article - usuwa klasę 'active' z artykułu
  }
  /* get 'href' attribute from the clicked link */ 
  const articleSelector = clickedElement.getAttribute('href'); // Get the value of the 'href' attribute from the clicked link - pobiera wartość atrybutu 'href' z klikniętego linku
  console.log('articleSelector:', articleSelector); // Log the article selector to the console - rejestrator selektora artykułu
  /* find the correct article using the selector (value of 'href' attribute) */
  const targetArticle = document.querySelector(articleSelector); // Find the article that matches the selector - znajduje artykuł, który pasuje do selektora
  console.log('targetArticle:', targetArticle); // Log the target article to the console - rejestrator docelowego artykułu
  /* add class 'active' to the correct article */
  targetArticle.classList.add('active'); // Add the 'active' class to the target article - dodaje klasę 'active' do docelowego artykułu
  console.log('targetArticle.classList:', targetArticle.classList); // Log the class list of the target article - rejestrator listy klas docelowego artykułu
}

const links = document.querySelectorAll('.titles a');

for(let link of links){
  link.addEventListener('click', titleClickHandler);
}