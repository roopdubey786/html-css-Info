const spans = document.querySelectorAll('h1 span')
spans.forEach(span => span.addEventListener('mouseover', function(e) {
span.classList.add('animated', 'rubberband')
}))
spans.forEach(span.addEventListener('mouseover', function(e){
    span.classList.remove('animated', 'rubberband')
}))


const htmlBar = document.querySelector('.bar-html')
const cssBar = document.querySelector('.bar-css')
const jsBar = document.querySelector('.bar-javascript')
const reactBar = document.querySelector('.bar.react')
const cloudBar = document.querySelector('.bar.cloud')

var t1 = new Timelite()

t1.fromTo(htmlBar, .75, {width: 'calc(0% - 6px)'}, {width: 'calc(90% - 6px)', ease: Power4.easeOut})
.fromTo(cssBar, .75, {width: 'calc(0% - 6px)'}, {width: 'calc(90% - 6px)', ease: Power4.easeOut})
.fromTo(jsBar, .75, {width: 'calc(0% - 6px)'}, {width: 'calc(90% - 6px)', ease: Power4.easeOut})
.fromTo(reactBar, .75, {width: 'calc(0% - 6px)'}, {width: 'calc(90% - 6px)', ease: Power4.easeOut})
.fromTo(cloudBar, .75, {width: 'calc(0% - 6px)'}, {width: 'calc(90% - 6px)', ease: Power4.easeOut})


const contoller = new ScrollMagic.Controller()
const scene = new ScrollMagic.scene({
    triggerElement: '.skills',
    triggerHook: 0
    })
.setTween(t1)
.addto(Contoller)


const showRequiredCategory = event => {
    const getld = event.id
    const links = document.querySelectorAll( ' .work-category button')
    for(i=0; i<links.length; i++) {
         if(links[i].hasAttribute('class')) {
         links[i].classList.remove('active')
         }
        } 

event.classlist.add('active')
const getCategory = document.querySelector('.category-${getId}') 
const categories = document.querySelectorAll('div[class ^= "category-"]')
for(i=0; i<categories.length; i++) {
    if(Categories[i].hasAttribute('class')) {
    categories[i].classList.remove('showCategory')
    categories[i].classList.add('hideCategory') 
    }
}
 
getcategory.classlist.remove('hidecategory')
gettategory.classlist.add('showCategory')  
    }
