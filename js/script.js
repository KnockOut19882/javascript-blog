'use strict';

function titleClickHandler(event){ // Function to handle click events on article links - funkcja obsługująca kliknięcia w linki artykułów
  event.preventDefault(); // Prevent default link behavior - zapobiega domyślnemu zachowaniu linku, czyli przeładowaniu strony
  const clickedElement = this; // 'this' refers to the clicked link - 'this' może być użyte do odwołania się do elementu, który wywołał zdarzenie
  console.log('Link was clicked!'); // Log a message to the console when a link is clicked - rejestrator kliknięcia linku
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

const optArticleSelector = '.post', // Selector for articles - selektor dla artykułów
  optTitleSelector = '.post-title', // Selector for article titles - selektor dla tytułów artykułów
  optTitleListSelector = '.titles'; // Selector for the title list - selektor dla listy tytułów

/* generateTitleLinks function */
function generateTitleLinks(customSelector = ''){ // Function to generate a list of article titles with links - funkcja generująca listę tytułów artykułów z linkami
  console.log('generateTitleLinks function called'); // Log a message to the console when the function is called - rejestrator wywołania funkcji generateTitleLinks
  /* remove contents of titleList */
  console.log('customSelector:', customSelector); // Log the custom selector to the console - rejestrator niestandardowego selektora
  document.querySelector(optTitleListSelector).innerHTML = ''; // Clear the title list by setting its inner HTML to an empty string - czyści listę tytułów, ustawiając jej wewnętrzny HTML na pusty ciąg
  const titleList = document.querySelector(optTitleListSelector); // Select the title list element - wybiera element listy tytułów
  /* find all the articles and save them to variable: articles */
  let html = ''; // Initialize an empty string to hold the HTML for the title links - inicjalizuje pusty ciąg do przechowywania HTML dla linków tytułów
  const articles = document.querySelectorAll(optArticleSelector + customSelector); // Select all articles using the defined selector - wybiera wszystkie artykuły za pomocą zdefiniowanego selektora
  console.log('articles:', articles); // Log the selected articles to the console - rejestrator wybranych artykułów
  /* for each article */
  for (let article of articles){ // Loop through each article - iteruje przez każdy artykuł}
    /* get the article id */
    const articleId = article.getAttribute('id'); // Get the 'id' attribute of the article - pobiera atrybut 'id' artykułu
    /* find the title element */
    const titleElement = article.querySelector(optTitleSelector); // Select the title element within the article - wybiera element tytułu wewnątrz artykułu
    /* get the title from the title element */
    const articleTitle = titleElement.innerHTML; // Get the inner HTML of the title element - pobiera wewnętrzny HTML elementu tytułu
    /* create HTML of the link */
    const linkHTML = `<li><a href="#${articleId}"><span>${articleTitle}</span></a></li>`; // Create a link HTML string with the article ID and title - tworzy ciąg HTML linku z ID artykułu i tytułem
    /* insert link into titleList */
    document.querySelector(optTitleListSelector).insertAdjacentHTML('beforeend', linkHTML); // Insert the link HTML into the title list - wstawia HTML linku do listy tytułów
    /* insert link into html variable */
    html = html + linkHTML;
    console.log('html:', html); // Log the generated HTML to the console - rejestrator wygenerowanego HTML

  }
  titleList.innerHTML = html; // Set the inner HTML of the title list to the generated HTML - ustawia wewnętrzny HTML listy tytułów na wygenerowany HTML

  const links = document.querySelectorAll('.titles a'); // Select all links in the title list - wybiera wszystkie linki w liście tytułów
  console.log('links:', links); // Log the selected links to the console - rejestrator wybranych linków
  for(let link of links){ // Loop through each link - iteruje przez każdy link
    link.addEventListener('click', titleClickHandler); // Add a click event listener to each link - dodaje nasłuchiwanie zdarzenia kliknięcia do każdego linku
  }
}

generateTitleLinks(); // Call the function to generate the title links - wywołuje funkcję generateTitleLinks

const optTagsListSelector = '.tags.list';

function generateTags(){
  let allTags = [];
  /* find all articles */
  const articles = document.querySelectorAll(optTagsListSelector); // Select all articles with the class 'post' - wybiera wszystkie artykuły z klasą 'post'
  /* START LOOP: for every article: */
  for(let article of articles){ // Loop through each article - iteruje przez każdy artykuł
    /* find tags wrapper */
    const tagsWrapper = article.querySelector('.post-tags .list'); // Select the tags wrapper within the article - wybiera kontener tagów wewnątrz artykułu
    /* make html variable with empty string */
    let html = ''; // Initialize an empty string to hold the HTML for the tags - inicjalizuje pusty ciąg do przechowywania HTML dla tagów
    /* get tags from data-tags attribute */
    const tags = article.getAttribute('data-tags'); // Get the value of the 'data-tags' attribute from the article - pobiera wartość atrybutu 'data-tags' z artykułu
    /* split tags into array */
    const tagsArray = tags.split(' '); // Split the tags string into an array - dzieli ciąg tagów na tablicę
    console.log('tagsArray:', tagsArray); // Log the tags array to the console - rejestrator tablicy tagów
    /* START LOOP: for each tag */
    for(let tag of tagsArray){ // Loop through each tag in the tags array - iteruje przez każdy tag w tablicy tagów
      /* generate HTML of the link */
      const linkHTML = `<li><a href="#tag-${tag}"><span>${tag}</span></a></li>`; // Create a link HTML string with the tag - tworzy ciąg HTML linku z tagiem
      /* add generated code to html variable */
      html += linkHTML; // Append the link HTML to the html variable - dodaje HTML linku do zmiennej html
      /* [NEW] check if this link is NOT already in allTags*/
      if(allTags.indexOf(linkHTML) == -1){
        /* [NEW] add generated code to allTags array */
        allTags.push(linkHTML);
      }
    /* END LOOP: for each tag */
    }
    /* insert HTML of all the links into the tags wrapper */
    tagsWrapper.innerHTML = html; // Set the inner HTML of the tags wrapper to the generated HTML - ustawia wewnętrzny HTML kontenera tagów na wygenerowany HTML
  /* END LOOP: for every article: */
  }
  /* [NEW] find list of tags in right column */
  const tagList = document.querySelector(optTagsListSelector);
  /* [NEW] add html from allTags to tagList */
  tagList.innerHTML = allTags.join(' ');
}
generateTags(); //Od modyfikacji funkcja nie działa poprawnie, nie czyta tagów z artykułów, nie działa również funkcja z autorami!!!

function tagClickHandler(event){ // Function to handle click events on tag links - funkcja obsługująca kliknięcia w linki tagów
  /* prevent default action for this event */
  event.preventDefault(); // Prevent the default action of the event, which is to follow the link - zapobiega domyślnemu działaniu zdarzenia, czyli podążaniu za linkiem
  /* make new constant named "clickedElement" and give it the value of "this" */
  const clickedElement = this; // 'this' refers to the clicked link - 'this' może być użyte do odwołania się do elementu, który wywołał zdarzenie
  console.log('Link was clicked!'); // Log a message to the console when a link is clicked - rejestrator kliknięcia linku
  console.log(event); // Log the event object - rejestrator zdarzenia :)
  /* make a new constant "href" and read the attribute "href" of the clicked element */
  const href = clickedElement.getAttribute('href'); // Get the value of the 'href' attribute from the clicked link - pobiera wartość atrybutu 'href' z klikniętego linku
  /* make a new constant "tag" and extract tag from the "href" constant */
  const tag = href.replace('#tag-', ''); // Extract the tag from the href by removing the '#tag-' prefix - wyciąga tag z href, usuwając prefiks '#tag-'
  /* find all tag links with class active */
  const activeTagLinks = document.querySelectorAll('.post-tags .list a.active'); // Select all tag links with the class 'active' - wybiera wszystkie linki tagów z klasą 'active')
  /* START LOOP: for each active tag link */
  for(let activeTagLink of activeTagLinks){ // Loop through each active tag link - iteruje przez każdy aktywny link tagu
    /* remove class active */
    activeTagLink.classList.remove('active'); // Remove the 'active' class from the link - usuwa klasę 'active' z linku
  /* END LOOP: for each active tag link */
  }
  /* find all tag links with "href" attribute equal to the "href" constant */
  const tagLinks = document.querySelectorAll(`a[href="${href}"]`); // ('.post-tags .list a[href="' + href + '"]') Select all tag links with the same href as the clicked link - wybiera wszystkie linki tagów z tym samym href co kliknięty link
  /* START LOOP: for each found tag link */
  for(let tagLink of tagLinks){ // Loop through each found tag link - iteruje przez każdy znaleziony link tagu}
    /* add class active */
    tagLink.classList.add('active'); // Add the 'active' class to the link - dodaje klasę 'active' do linku)
  /* END LOOP: for each found tag link */
  }
  /* execute function "generateTitleLinks" with article selector as argument */
  generateTitleLinks('[data-tags~="' + tag + '"]'); // Call the generateTitleLinks function to update the article links based on the selected tag - wywołuje funkcję generateTitleLinks, aby zaktualizować linki artykułów na podstawie wybranego tagu
}

function addClickListenersToTags(){
  /* find all links to tags */
  const links = document.querySelectorAll('.post-tags .list a'); // Select all links to tags within the post-tags list - wybiera wszystkie linki do tagów w liście post-tags
  /* START LOOP: for each link */
  for(let link of links){ // Loop through each link - iteruje przez każdy link
    /* add tagClickHandler as event listener for that link */
    link.addEventListener('click', tagClickHandler); // Add a click event listener to each link that calls the tagClickHandler function - dodaje nasłuchiwanie zdarzenia kliknięcia do każdego linku, które wywołuje funkcję tagClickHandler
    console.log('link:', link); // Log the link to the console - rejestrator linku
  /* END LOOP: for each link */
  }
}

addClickListenersToTags();

const optArticleAuthorSelector = '.post-author'; // Selector for the author element within an article - selektor dla elementu autora wewnątrz artykułu

function generateAuthors(){ // Function to generate author links for each article - funkcja generująca linki autorów dla każdego artykułu
  const articles = document.querySelectorAll(optArticleSelector);
  for(let article of articles){
    const authorWrapper = article.querySelector(optArticleAuthorSelector);
    console.log('authorWrapper:', authorWrapper);
    const author = article.getAttribute('data-author');
    console.log('author:', author);
    const linkHTML = `<a href="#author-${author}"><span>${author}</span></a>`; // Create a link HTML string with the author's name - tworzy ciąg HTML linku z imieniem autora
    authorWrapper.innerHTML = linkHTML; // This line inserts the link into the HTML
  }
}

generateAuthors();

function authorClickHandler(event){ // Function to handle click events on author links - funkcja obsługująca kliknięcia w linki autorów
  event.preventDefault();
  const clickedElement = this; //Czy ta stała jest potrzebna?
  console.log('Author link was clicked!');
  const href = clickedElement.getAttribute('href');
  const author = href.replace('#author-', ''); //Czy #author- tyczy się data-attribute data-author?
  console.log('author:', author);
  const authorLinks = document.querySelectorAll('.post-author a');
  for(let authorLink of authorLinks){
    authorLink.classList.remove('active');
  }
  const authorLink = document.querySelector(`a[href="${href}"]`);
  if(authorLink){
    authorLink.classList.add('active');
  }
  generateTitleLinks(`[data-author="${author}"]`);
  console.log('generateTitleLinks called with author:', author);
}


function addClickListenersToAuthors(){
  const links = document.querySelectorAll('.post-author a');
  for(let link of links){
    link.addEventListener('click', authorClickHandler);
    console.log('link', link);
  }
}

addClickListenersToAuthors();

