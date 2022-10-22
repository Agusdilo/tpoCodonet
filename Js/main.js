
/*Sección Slider*/

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}


/*Sección Tarjetas*/

const { createApp } = Vue 

     createApp({
        data() {
            return {

              url:'Js/planes.json',
              planes:[]
            }
        },
        methods: {
          fetchData(url) {
            
              fetch(url)
                  .then(response => response.json())
                  .then(data => {
                      this.planes=data
                      console.log(this.planes)
                  })
          }
        },
        created(){

          this.fetchData(this.url)
        }
     }).mount('#app')