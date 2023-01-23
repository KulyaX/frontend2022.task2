let grid_display_article = true;

/*Задача 1 -> Поиск*/ 

const search_button = document.querySelector("#side-panel__search-button");
const games = ["Grid 2","NeedForSpeed","For Honor","GodOfWar","Spider-man"];
const panel_list = document.querySelector(".side-panel__list");
function handlerProperty() {
  let input = document.getElementById("side-panel__input").value;
  panel_list.innerHTML = "";
  const panelFilter = games.filter((game) => game.includes(input));
  const contentString = panelFilter.map((item) => `<li class="side-panel__item">${item}</li>`).join("");
  panel_list.innerHTML = contentString;
}
if (search_button) {
  search_button.addEventListener("click", handlerProperty);
}
handlerProperty();


/*Задача 2 -> Переключение вида контента*/ 

const view__list_button = document.getElementById('view__list-button');
const view__grid_button = document.getElementById('view__grid-button');

const posts = document.querySelector('.posts');


if(view__list_button){
  view__list_button.addEventListener('click', (e) => {

    grid_display_article = false;

    let blog = document.querySelectorAll('.blog');
    let blog__content = document.querySelectorAll('.blog__content');
    posts.classList.add('blog__list');
    view__list_button.classList.add('view__button--active');
    view__grid_button.classList.remove('view__button--active');
  
    blog.forEach((blog) => {
      blog.classList.add('blog--list');
    });
    
    blog__content.forEach((blog__content) => {
      blog__content.classList.add('blog__content--list');
    });
  });
}
if(view__grid_button){

  view__grid_button.addEventListener('click',(e) => {
    
    grid_display_article = true;

    let blog = document.querySelectorAll('.blog');
    let blog__content = document.querySelectorAll('.blog__content');
    
    view__list_button.classList.remove('view__button--active');
    view__grid_button.classList.add('view__button--active');

    posts.classList.remove('blog__list');
  
    blog.forEach((blog) => {
      blog.classList.remove('blog--list');
    });
    
    blog__content.forEach((blog__content) => {
      blog__content.classList.remove('blog__content--list');
    });
  });
}

/*Задача 3 -> Добавление блогов*/ 

/*Кнопка "Добавить" - открыть форму*/
const blog_add__button = document.querySelector('.blog-add__button'); 
const blog_add__button_cancel = document.getElementById('blog-add__button-cancel');
const blog_add__button_create = document.getElementById('blog-add__button-create');
const form = document.querySelector('.form');
const faq_ = document.querySelector('.faq');

 
if(blog_add__button){

  blog_add__button.addEventListener('click', (e) => {

    if(form){

      blog_add__button.style.display = 'none';
      form.style.display = 'flex';      
    }
  });
}

/*Процесс добавления*/ 

if(blog_add__button_create){
  form.addEventListener('submit',(e)=>{
    let input_name = document.getElementById('blog-text-name').value ;
    let input_url = document.getElementById('blog-text-url').value ;
    let input_text = document.getElementById('blog-text-description').value ;
    let now = new Date();
    const posts = document.querySelector('.posts');
    let contentString ="";
    let get_day = now.toLocaleString('en', {month:'long'}) + " " + now.getDate()+ ", " + now.getFullYear();

    if (grid_display_article){
      contentString = 
      `<div class="blog">
      <div class="blog__media">
          <img class="blog__img" src="${input_url}" alt="">
      </div>
      <div class="blog__content">
          <div class="blog__title">${input_name}</div>
          <div class="blog__info">
              <p>${input_text}</p>
          </div>
          <div class="blog__date">${get_day} • 11 мин чтения</div>
      </div>
      </div>`
    }
    else{
      contentString = 
      `<div class="blog--list">
      <div class="blog__media">
          <img class="blog__img" src="${input_url}" alt="">
      </div>
      <div class="blog__content">
          <div class="blog__title">${input_name}</div>
          <div class="blog__info">
              <p>${input_text}</p>
          </div>
          <div class="blog__date">${get_day} • 11 мин чтения</div>
      </div>
      </div>`
    }
    posts.insertAdjacentHTML('beforeend', contentString);

    if(form){
      blog_add__button.style.display = 'block';
      form.style.display = 'none';
      e.target.reset();
      
      };
  });
}

/*Кнопка "Отмена" - закрыть форму*/ 

if(blog_add__button_cancel){
  blog_add__button_cancel.addEventListener('click',(e)=>{
    if(form){
      blog_add__button.style.display = 'block';
      form.style.display = 'none';
    };
  });
}



/*Задача 4 -> FAQ*/ 

const faq = document.querySelectorAll(".faq-page__question");
let i;

faq.forEach((faq_question) => {
  faq_question.addEventListener("click", function () {

    this.classList.toggle("active");

    let body = this.nextElementSibling;
    if (body.style.display === "block") {
        body.style.display = "none";
    } else {
        body.style.display = "block";
    }
});
});


