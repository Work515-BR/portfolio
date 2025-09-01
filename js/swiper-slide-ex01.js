$(document).ready(function(){
    // header 서브메뉴 높이 만큼 나브길이
    const navBg = $('<div class="nav-bg"></div>')
    let container = $('.header-bottom .container')
    // let navBgHeight;
    // li 길이
    const headerBottom = $('.header-bottom')
    const menuList = $('.menu > li')
    const submenuList = $('.menu > li .submenu')
    container.append(navBg)

    menuList.add(navBg).mouseenter(function(){
        navBg.stop().show()
        submenuList.stop().show()
    })
    headerBottom.add(navBg).mouseleave(function(){
        navBg.stop().hide()
        submenuList.stop().hide()
    })

    const museumLink = $(".museumLink")
    const museumLinkImg = $(".museumLink > a > img")
    const linkList = $(".linkList")
    const linkListA = $(".linkList li a, .museumLink")

    museumLink.click(function(){
        const museumLinkA = $(this).find('> a').hasClass("on")
        
        if(museumLinkA){
            $(this).find('> a').removeClass("on")
            museumLinkImg.attr("src",museumLinkImg.data("openimg"))
            linkList.stop().slideUp()
        }else{
            $(this).find('> a').addClass("on")
            museumLinkImg.attr("src",museumLinkImg.data("closeimg"))
            linkList.stop().slideDown()
        }
    })

    // // 토글로 사용
    // museumLink.click(function () {
    // const isOpen = $(this).find('> a').hasClass("on")

    // link.toggleClass("on")
    // // 조건 ? 참일 때 값 : 거짓일 때 값
    // museumLinkImg.attr("src", isOpen ? museumLinkImg.data("openimg") : museumLinkImg.data("closeimg"))
    // linkList.stop().slideToggle()
    // })

    linkListA.mouseleave(function(){
        hideTime = setTimeout(function(){
            museumLink.find("> a").removeClass("on")
            museumLinkImg.attr("src",museumLinkImg.data("openimg"))
            linkList.stop().hide()
        },500)
    })
    
    linkListA.mouseenter(function(){
        clearTimeout(hideTime)
    })
    

    new Swiper (".sw-visual",{
        diraction: "vertical",
        autoplay: {
            delay: 2000,
        },
        speed : 1000,
        loop : true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation : {
            nextEl:'.swiper-button-next',
            prevEl:'.swiper-button-prev'
        }
    })

    new Swiper (".sw-display",{
        diraction:"vertical",
        autoplay: {
            delay:3000,
            disableOnInteraction:true
        },
        loop:true,
        slidesPerView:2,
        spaceBetween:20,
        navigation: {
            prevEl:".btn-prev",
            nextEl:".btn-next",
        },
    })

    new Swiper (".sw-education", {
        autoplay: {
            delay:3000,
            disableOnInteraction:true,
        },
        loop:true,
        slidesPerView:2,
        spaceBetween:20,
        navigation: {
            prevEl:".edu-btn-prev",
            nextEl:".edu-btn-next"
        },
    })

})