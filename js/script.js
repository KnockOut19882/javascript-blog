'use strict';

function titleClickHandler(){ // Function to handle click events on article links - funkcja obsługująca kliknięcia w linki artykułów
  event.preventDefault(); // Prevent default link behavior - zapobiega domyślnemu zachowaniu linku, czyli przeładowaniu strony
  const clickedElement = this; // 'this' refers to the clicked link - 'this' może być użyte do odwołania się do elementu, który wywołał zdarzenie
  console.log('Link was clicked!') // Log a message to the console when a link is clicked - rejestrator kliknięcia linku
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

  const links = document.querySelectorAll('.titles a'); // Select all links in the title list - wybiera wszystkie linki w liście tytułów
  for(let link of links){ // Loop through each link - iteruje przez każdy link
    link.addEventListener('click', titleClickHandler); // Add a click event listener to each link - dodaje nasłuchiwanie zdarzenia kliknięcia do każdego linku
    // link.addEventListener('click', function(event){titleClickHandler(event);}); // Alternative way to add the event listener - alternatywny sposób dodania nasłuchiwania zdarzenia

}
}

const optArticleSelector = '.post', // Selector for articles - selektor dla artykułów
  optTitleSelector = '.post-title', // Selector for article titles - selektor dla tytułów artykułów
  optTitleListSelector = '.titles'; // Selector for the title list - selektor dla listy tytułów

function generateTitleLinks(){
  console.log('generateTitleLinks function called'); // Log a message to indicate the function has been called - rejestrator wywołania funkcji
  const titleList = document.querySelector(optTitleListSelector); // Select the title list element - wybiera element listy tytułów
}
  /* remove contents of titleList */
  function clearMessages(){ // Function to clear the contents of the messages element - funkcja do czyszczenia zawartości elementu wiadomości
	document.getElementById('messages').innerHTML = ''; // Clear the contents of the messages element - czyści zawartość elementu wiadomości
}
  
  /* for each article */
  const articles = document.querySelectorAll(optArticleSelector); // Select all articles - wybiera wszystkie artykuły
  for(let article of articles){ // Loop through each article - iteruje przez każdy artykuł
    console.log('article:', article); // Log the current article to the console - rejestrator bieżącego artykułu
    /* get the article id */

    /* find the title element */

    /* get the title from the title element */

    /* create HTML of the link */

    /* insert link into titleList */

    
}
