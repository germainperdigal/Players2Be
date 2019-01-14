AOS.init();

function tradAbout(lang) {
    if (lang == 'fr') {
        document.getElementById("bio").innerHTML = "Players2be est une plateforme de mise en relation entre les joueurs et les recruteurs de clubs. Players2be reconnu en France , depuis son ouverture en 2018. Peu importe l'endroit où vous vous trouver dans le monde, notre réseau nous permet d'être proche de vous et d'envoyer un recruteur vous observer et prendre contact avec vous. Vous rêvez du PSG, du Réal Madrid ou encore de Manchester United, postez vos vidéos sur Facebook, Instagram ou Youtube, remplissez le formulaire en bas de page et nous nous occupons du reste. <p>Tentez de faire votre vie un rêve !</p>";
        document.getElementById("aboutHead").innerHTML = "A propos de <br /> Players2be";
        document.getElementById("fr-button").classList.add("translate--button--active");
        document.getElementById("en-button").classList.remove("translate--button--active");
        $('#ytb').attr('placeholder', 'Lien chaine Youtube');
        $('#facebook').attr('placeholder', 'Lien page Facebook');
        $('#ig').attr('placeholder', 'Lien compte Instagram');
        $('#nom').attr('placeholder', 'Nom');
        $('#ville').attr('placeholder', 'Ville');
        $('#club').attr('placeholder', 'Club actuel');
        $('#poste').attr('placeholder', 'Poste');
        $('#souhaits').attr('placeholder', 'Clubs désirés (5 noms)');
        $('#inscript--button').val('S\'inscire');
    } else {
        document.getElementById("bio").innerHTML = " Players2be is a website where soccer players and football recruiting agents can be linked. Players2be is recognized in France since it opennig in 2018. No matter where you are in the world, our network allows to be close to you. Thanks to this we can send a football recruiting agent to see your performance and be in touch with you. Is it your dream to be part of PSG team, Real Madrid team or Manchester United team ? Post your videos on facebook, Instagram or Youtube, complete the form that you can find at the end of this page and we take care of it ! <p> Try to make your life a dream !</p>";
        document.getElementById("aboutHead").innerHTML = "About <br /> Players2be";
        document.getElementById("en-button").classList.add("translate--button--active");
        document.getElementById("fr-button").classList.remove("translate--button--active");
        $('#ytb').attr('placeholder', 'Link of your YouTube channel');
        $('#facebook').attr('placeholder', 'Link of your Facebook page');
        $('#ig').attr('placeholder', 'Link of your Instagram account');
        $('#nom').attr('placeholder', 'Name');
        $('#ville').attr('placeholder', 'Town');
        $('#club').attr('placeholder', 'Current club');
        $('#poste').attr('placeholder', 'Position');
        $('#souhaits').attr('placeholder', 'Desired clubs (5 names)');
        $('#inscript--button').val('Sign Up');
    }
    return true;
}

window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        document.getElementById("scrollTop").style.display = "block";
    } else {
        document.getElementById("scrollTop").style.display = "none";
    }
}

function topFunction() {
    $('html, body').animate({scrollTop: 0}, 800);
    return false;
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
        return false;
    });
});

$(document).ready(function(){
    $('.hamburger-shell').click(function(){
        $('#menu').slideToggle(300);
        $('.top').toggleClass('rotate');
        $('.middle').toggleClass('rotate-back');
        $('.menu-name').toggleClass('bump');
        $('.bg-cover').toggleClass('reveal');
    });
    $('.bg-cover').click(function(){
        $('#menu').slideToggle(300);
        $('.top').toggleClass('rotate');
        $('.middle').toggleClass('rotate-back');
        $('.menu-name').toggleClass('bump');
        $('.bg-cover').toggleClass('reveal');
    })
});
