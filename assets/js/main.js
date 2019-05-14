 $('#carouselExampleControls').on('slide.bs.carousel', function(e) {
     /*
         CC 2.0 License Iatek LLC 2018 - Attribution required
     */
     var $e = $(e.relatedTarget);
     var idx = $e.index();
     var itemsPerSlide = 5;
     var totalItems = $('.carousel-item').length;

     if (idx >= totalItems - (itemsPerSlide - 1)) {
         var it = itemsPerSlide - (totalItems - idx);
         for (var i = 0; i < it; i++) {
             // append slides to end
             if (e.direction == "left") {
                 $('.carousel-item').eq(i).appendTo('.carousel-inner');
             } else {
                 $('.carousel-item').eq(0).appendTo('.carousel-inner');
             }
         }
     }
 });

 var carousel = {
     image: '',
     title: '',
     discription: [],
 }

 function slid() {
     html = ''
     var tab = [];
     carousel.image = './assets/images/categ_lashes_home@1x.png'
     carousel.title = 'Lashes & brows';

     carousel.discription.push('-Event Makeup')
     carousel.discription.push('-Make up workshop');
     carousel.discription.push('-Make up with test');
     carousel.discription.push('-Nude Makeup');
     carousel.discription.push('-Make up with test');
     carousel.discription.push('-Nude Makeup');
     tab.push(carousel)
     carousel.discription = []
     carousel.image = './assets/images/categ_nails_home@1x.png'
     carousel.title = 'Javascript';
     carousel.discription.push('-Event Makeup')
     carousel.discription.push('-Make up workshop');
     carousel.discription.push('-Make up with test');
     carousel.discription.push('-Nude Makeup');
     carousel.discription.push('-Make up with test');
     carousel.discription.push('-Nude Makeup');
     tab.push(carousel)

     for (let index = 0; index < tab.length; index++) {
         html += ' <div id="i' + index + '" class="carousel-item col-md-4 ">'
         html += ' <div class="card">'
         html += '<div class="text-center card-img-top card-img-top-250 text-center">'
         html += '<img class="img-fluid mx-auto d-block" src="' + tab[index].image + '" alt="slide 1">'
         html += '<img class="text-center" src="./assets/images/title _line_section@1x.png">'

         html += '   </div>'
         html += '  <div class="card-block p-t-2  text-center">'
         html += '     <p>'
         html += '          <h4 class="text-wide p-b-2">' + tab[index].title + '</h4>'
         html += '       </p>'
         html += '       <div style="line-height:7pt;">'
         for (let j = 0; j < tab[index].discription.length; j++) {
             html += ' <p>' + tab[index].discription[j] + '</p>'
         }


         html += '        </div>'
         html += '   </div>'
         html += '</div>'
         html += '</div>'
         console.log(document.getElementById("cars"))
         document.getElementById('cars').innerHTML += html
         html = ''
     }
 }