let count = 0;

setInterval(() => {

    if (count % 3 == 0)
    {
        typeHealthy();
    }
    else if (count % 3 == 1)
    {
        typeTasty();
    }
    else if (count % 3 == 2)
    {
        typeOrganic();
    }

    count++;

}, 3000);

function typeHealthy() {

    let i = 0;
    let txt = 'HEALTHY'; /* The text */
    let speed = 130; /* The speed/duration of the effect in milliseconds */

    document.getElementById("top-content__text").innerHTML = '';

    let textInterval = setInterval(() => {
        document.getElementById("top-content__text").innerHTML += txt.charAt(i);
        i++;

        if (i == txt.length) {
    
            i = 0;
            txt = '';

            clearInterval(textInterval);
        }

    }, speed);

}

function typeTasty() {

    let i = 0;
    let txt = 'TASTY'; /* The text */
    let speed = 130; /* The speed/duration of the effect in milliseconds */

    document.getElementById("top-content__text").innerHTML = '';

    let textInterval = setInterval(() => {
        document.getElementById("top-content__text").innerHTML += txt.charAt(i);
        i++;

        if (i == txt.length) {
    
            i = 0;
            txt = '';

            clearInterval(textInterval);
        }

    }, speed);

}

function typeOrganic() {

    let i = 0;
    let txt = 'ORGANIC'; /* The text */
    let speed = 130; /* The speed/duration of the effect in milliseconds */

    document.getElementById("top-content__text").innerHTML = '';

    let textInterval = setInterval(() => {
        document.getElementById("top-content__text").innerHTML += txt.charAt(i);
        i++;

        if (i == txt.length) {
    
            i = 0;
            txt = '';

            clearInterval(textInterval);
        }

    }, speed);

}

window.onscroll = function() {scrollFunction()};

function scrollFunction() {    

    /* Scroll menu visibility */
    if (document.body.scrollTop > window.screen.height - 160 || document.documentElement.scrollTop > window.screen.height - 160)
    {
        document.getElementsByClassName("top-scroll")[0].style.top = "0";
    }
    else
    {
        document.getElementsByClassName("top-scroll")[0].style.top = "-100px";
    }

    /* Features animation - animate after element is scrolled into viewport */
    let windowHeight = window.innerHeight;

    let introElem = document.getElementById("features-intro");
    let detailElem = document.getElementById("features-detail");

    let introPosFromTop = introElem.getBoundingClientRect().top;
    let detailPosFromTop = detailElem.getBoundingClientRect().top;

    if (introPosFromTop - windowHeight <= 0)
    {
        introElem.classList.add('features-intro-anim');
    }

    if (detailPosFromTop - windowHeight <= 0)
    {
        detailElem.classList.add('features-detail-anim');
    }

    /* Menu animation - animate after element is scrolled into viewport */
    windowHeight = window.innerHeight;

    let menuDetail = document.getElementById("menu-detail");

    let menuDetailPosFromTop = menuDetail.getBoundingClientRect().top;

    if (menuDetailPosFromTop - windowHeight <= 0)
    {
        document.getElementById("menu-single__one").classList.add("menu-single__one-anim");
        document.getElementById("menu-single__two").classList.add("menu-single__two-anim");
    }

    /* Locations animation - animate after element is scrolled into viewport */
    windowHeight = window.innerHeight;

    let locations = document.getElementById("locations");

    let locationsPosFromTop = locations.getBoundingClientRect().top;

    if (locationsPosFromTop - windowHeight <= 0)
    {
        locations.classList.add("locations-anim");
    }

    /* Subscription animation - animate after element is scrolled into viewport */
    windowHeight = window.innerHeight;

    let subscriptionSingleFirst = document.getElementById("subscription-single-first");

    let ssfPosFromTop = subscriptionSingleFirst.getBoundingClientRect().top;

    if (ssfPosFromTop - windowHeight <= 0)
    {
        subscriptionSingleFirst.classList.add("subscription-single-first-anim")
    }

    /* Contact animation - animate after element is scrolled into viewport */
    windowHeight = window.innerHeight;

    let contactTitle = document.getElementById("contact__title");
    let contactHr = document.getElementById("contact__hr");
    let contactDetail = document.getElementById("contact-detail");

    let contactTitlePosFromTop = contactTitle.getBoundingClientRect().top;
    let contactHrPosFromTop = contactHr.getBoundingClientRect().top;
    let contactDetailPosFromTop = contactDetail.getBoundingClientRect().top;

    if (contactTitlePosFromTop - windowHeight <= 0)
    {
        contactTitle.classList.add("contact__title-anim");
    }

    if (contactHrPosFromTop - windowHeight <= 0)
    {
        contactHr.classList.add("contact__hr-anim");
    }

    if (contactDetailPosFromTop - windowHeight <= 0)
    {
        contactDetail.classList.add("contact-detail-anim");
    }

}

// 
window.onload = function() {
    let isMneVisible = false;
    let mobileNavElem = document.getElementById("mobile-nav");
    let headerMenuIconElem = document.getElementById("header__menu-icon");

    headerMenuIconElem.onclick = function() {

        if (isMneVisible)
        {
            isMneVisible = ! isMneVisible;

            mobileNavElem.classList.remove('mobile-nav-anim');
            
            mobileNavElem.style.display = "none";
        }
        else
        {
            isMneVisible = ! isMneVisible;

            mobileNavElem.classList.add('mobile-nav-anim');

            mobileNavElem.style.display = "inline";
        }

    };

    let isMsneVisible = false;
    let mobileScrollNavElem = document.getElementById("mobile-scroll-nav");
    let headerScrollMenuIconElem = document.getElementById("header-scroll__menu-icon");

    headerScrollMenuIconElem.onclick = function() {

        if (isMsneVisible)
        {
            isMsneVisible = ! isMsneVisible;

            mobileScrollNavElem.classList.remove('mobile-nav-anim');

            mobileScrollNavElem.style.display = "none";
        }
        else
        {
            isMsneVisible = ! isMsneVisible;

            mobileScrollNavElem.classList.add('mobile-nav-anim');

            mobileScrollNavElem.style.display = "inline";
        }

    };

    let collapseNav = function() {
        isMneVisible = ! isMneVisible;

        mobileNavElem.classList.remove('mobile-nav-anim');
        
        mobileNavElem.style.display = "none";
    };

    document.getElementById('nav-features').onclick = collapseNav;
    document.getElementById('nav-menu').onclick = collapseNav;
    document.getElementById('nav-locations').onclick = collapseNav;
    document.getElementById('nav-connect').onclick = collapseNav;    

    let collapseScrollNav = function() {
        isMsneVisible = ! isMsneVisible;

        mobileScrollNavElem.classList.remove('mobile-nav-anim');

        mobileScrollNavElem.style.display = "none";
    };

    document.getElementById('nav-scroll-features').onclick = collapseScrollNav;
    document.getElementById('nav-scroll-menu').onclick = collapseScrollNav;
    document.getElementById('nav-scroll-locations').onclick = collapseScrollNav;
    document.getElementById('nav-scroll-connect').onclick = collapseScrollNav;

}
