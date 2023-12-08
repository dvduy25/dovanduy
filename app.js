var web = Array.from(document.querySelectorAll('.web'));
var gridct = document.querySelector('.anh1')
web.forEach(function(el) {
    var cl = el.querySelector('.click')
    var cl1 = el.querySelector('.dkmk')
    var cl2 = el.querySelector('.click1')
    var ds = document.querySelector('.ds')
    var tk;
    var mk;
    cl2.addEventListener('click', function() {
        var tkb = document.querySelector('.tk-b').value;
        var mkb = document.querySelector('.mk-b').value;

        ;
        if (mkb == '' || tkb == '') {
            alert('sai roi!');
        } else {
            if (el.classList.value.indexOf('a2') > -1) {
                el.classList.remove('a2');
            } else {
                el.classList.add('a2');
            }
            tk = tkb;
            mk = mkb
        }
        console.log(tk)
        console.log(mk)
    })


    cl.addEventListener('click', function() {
        var tka = document.querySelector('.tk-a').value;
        var mka = document.querySelector('.mk-a').value;

        if (tka == 1 && mka == 1) {

            el.classList.add('a1');

        } else {
            alert('sai roi!');
        }

    })
    cl1.addEventListener('click', function() {
        if (el.classList.value.indexOf('a2') == -1) {
            el.classList.add('a2');
        } else {
            el.classList.remove('a2');
        }
    })
    ds.addEventListener('click', function() {
        if (el.classList.value.indexOf('a1') == -1) {
            el.classList.add('a1');
        } else {
            el.classList.remove('a1');
        }
    })
})



var duy = document.querySelector('.duy')
var i1 = document.getElementById('i')

i1.addEventListener('click', function() {
    if (duy.classList.value.indexOf('a1') == -1) {
        duy.classList.add('a1');
    } else {
        duy.classList.remove('a1');
    }
})
var link1 = document.querySelector('.link-1')
var link2 = document.querySelector('.link-2')
var link3 = document.querySelector('.link-3')
var link4 = document.querySelector('.link-4')

var anhduy = document.querySelector('.anhduy')
var anhduya = document.querySelector('.anhduya')
var anhduyb = document.querySelector('.anhduyb')

link1.addEventListener('click', () => {
    anhduy.scrollIntoView({
        behavior: "smooth"
    })
})
link2.addEventListener('click', () => {
    anhduy.scrollIntoView({
        behavior: "smooth"
    })
})
link3.addEventListener('click', () => {
    anhduya.scrollIntoView({
        behavior: "smooth"
    })
})
link4.addEventListener('click', () => {
        anhduyb.scrollIntoView({
            behavior: "smooth"
        })
    })
    // var lisanh = document.querySelector('.h3')
    // const lengths = lisanh.length
    // var imgss = document.querySelectorAll('.imgs')
    // console.log(imgss)
$(document).ready(function() {
    $('.dt1').slick({
        autoplay: true,
        autoplayspeed: 1,
        // autoplay: true,
        arrows: true,
        prevArrow: `<button type='button' class='slick-prev pull-left'><i class="fa-solid fa-arrow-left"></i></button>`,
        nextArrow: `<button type='button' class='slick-next pull-right'><i class="fa-solid fa-arrow-right"></i></button>`,
        dots: true
    });
});
window.addEventListener('scroll', () => {
    var mb = document.querySelector('.mb')
    if (window.scrollY > 0) {
        mb.classList.add('mba');

    } else {
        mb.classList.remove('mba');
    }
})