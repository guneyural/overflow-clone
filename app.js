const reviewData = [
     {
          text: `"It's the top choice for creating user flows that can hepl you visually to tell the stories behind them. Highly cusmotizable and extremely easy to use."`,
          fullName: 'DAVID TEODORESCU',
          title: 'Senior Product Designer @Fitbit',
          image: 'https://overflow.io/assets/public-site-v2/images/testimonials/davidt.png'
     },
     {
          text: `"Looks Amazing! Can't wait to use it. There was a void in my workflow and I have high hopes this will fit right in."`,
          fullName: 'SHAMRAIZ GUL',
          title: 'User Experience Architect',
          image: 'https://overflow.io/assets/public-site-v2/images/testimonials/shamraizg.png'
     },
     {
          text: `"Overflow is an excellent resoruce, and can be especially useful earlier in the product design process when product requirements are still being defined."`,
          fullName: 'DEJ MEJIA',
          title: 'SENIOR UX Designer @Adobe',
          image: 'https://overflow.io/assets/public-site-v2/images/testimonials/dejm.png'
     },
     {
          text: `"Stoked to give @overflowapp a try -- looks like it'll be super useful for documenting app user flows!"`,
          fullName: 'CHRIS MESSINA',
          title: 'Product Designer, & TBD',
          image: 'https://overflow.io/assets/public-site-v2/images/testimonials/chrism.png'
     }
];

const nextButton = document.querySelector('.next');
const prevButton = document.querySelector('.prev');
const indexButtons = document.querySelectorAll('.index-btn');
const carouselContent = document.querySelector('.carousel-content');

let idx = 0;

window.onload = function() {
     this.getCarouselContent();
     document.querySelector('.text-content').className += " text-content-active-next";
     document.querySelector('.intro-section').classList.add('show-time');
     document.querySelector('.brand-logos-section').classList.add('show-time');
     document.querySelector('.topnav').classList.add('show-time');

     this.setTimeout(() => {
          document.querySelectorAll('.brand-logos-section *').forEach(item => {
               item.classList.add('show-time');
          })
     }, 300);

     window.addEventListener('scroll', (e) => {
          const thirdSectionPos = this.getElementPos('.third-section');
          const forthSectionPos = this.getElementPos('.forth-section');
          const fifthSectionPos = this.getElementPos('.fifth-section');
          const carouselSectionPos = this.getElementPos('.carousel-section');

          if(window.scrollY >= 50) {document.querySelector('.topnav').classList.add('border-bottom');} else {document.querySelector('.topnav').classList.remove('border-bottom');}
          if(window.innerWidth < 650) {
               if(window.scrollY - 920 > thirdSectionPos.y) {document.querySelector('.third-section').classList.add('show-time');}
               if(window.scrollY - 920 > forthSectionPos.y) {document.querySelector('.forth-section').classList.add('show-time');}
               if(window.scrollY - 920 > fifthSectionPos.y) {document.querySelector('.fifth-section').classList.add('show-time');}
               if(window.scrollY  > carouselSectionPos.y) {document.querySelector('.carousel-section').classList.add('show-time')}
          } else {
               if((window.scrollY + thirdSectionPos.height + 300) > thirdSectionPos.y) {document.querySelector('.third-section').classList.add('show-time');}
               if((window.scrollY) > forthSectionPos.y) {document.querySelector('.forth-section').classList.add('show-time');}
               if((window.scrollY - 400) > fifthSectionPos.y) {document.querySelector('.fifth-section').classList.add('show-time');}
               if((window.scrollY - 1100) > carouselSectionPos.y) {document.querySelector('.carousel-section').classList.add('show-time');}
          }
     });

     document.querySelector("input[type='text']").addEventListener('keyup', e => {
          if(e.target.value.length > 0) {
               document.querySelector('.placeholder').classList.add('placeholder-active');
          } else {
               document.querySelector('.placeholder').classList.remove('placeholder-active');
          }
     });

     document.querySelector('.nav-responsive-btn').addEventListener('click', e => {
          if(document.querySelector('.navbar-responsive').className == "navbar-responsive responsive-navbar-active") {
               document.querySelector('.navbar-responsive').className = "navbar-responsive";
               document.querySelector('html').style.overflowX = 'hidden';
               document.querySelector('html').style.overflowY = 'auto';
          } else {
               document.querySelector('.navbar-responsive').className += " responsive-navbar-active";    
               document.querySelector('html').style.overflow = 'hidden';
          }
     });

     window.addEventListener('resize', e => {
          if(window.innerWidth >= 1000) {
               document.querySelector('.navbar-responsive').className = "navbar-responsive";
               document.querySelector('html').style.overflowX = 'hidden';
               document.querySelector('html').style.overflowY = 'auto';
          }
     });
};

function next() {  
     if(idx >= reviewData.length - 1) {
          idx = 0; 
     } else {
          idx ++;
     }
}

function prev() {
     if(idx <= 0) {
          idx = reviewData.length - 1; 
     } else {
          idx --;
     }
}

function changeIndexStyle() {
     indexButtons.forEach(item => {
          item.className = "index-btn";
     });

     indexButtons[idx].className += " index-btn-active";
}

function getCarouselContent() {
     carouselContent.innerHTML = `
     <p class="text-content">${reviewData[idx].text}</p>
     <div class="user-section">
          <img src="${reviewData[idx].image}" alt="Image of ${reviewData[idx].fullName}" class="user-img" />
          <div class="user-section-col">
               <span class="user-name">${reviewData[idx].fullName}</span><br/>
               <span class="user-title">${reviewData[idx].title}</span>
          </div>
     </div>
     `;
}

function changeCarouselContent() {
     changeIndexStyle();
     getCarouselContent();
}

nextButton.addEventListener('click', e => {
     next();
     changeIndexStyle();
     getCarouselContent();
     setTimeout(() =>{
          document.querySelector('.text-content').className += " text-content-active-next";
     }, 50)
});

prevButton.addEventListener('click', e => {
     prev();
     changeIndexStyle();
     getCarouselContent();
     setTimeout(() => {
          document.querySelector('.text-content').className += " text-content-active-prev";
     })
});

for(let i = 0; i < indexButtons.length; i++) {
     indexButtons[i].addEventListener('click', e => {
          idx = i;
          changeCarouselContent();
          setTimeout(() =>{
               document.querySelector('.text-content').className += " text-content-active-next";
          }, 50)
     });
}

function getElementPos(element) {return document.querySelector(element).getBoundingClientRect()}