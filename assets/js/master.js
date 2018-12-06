AOS.init();

function tradAbout(lang){
        if(lang == 'fr'){
            document.getElementById("bio").innerHTML ="Players2be est une plateforme de mise en relation entre les joueurs\n" +
                "                et les recruteurs de clubs. Players2be reconnu en France , depuis son ouverture en 2018.\n" +
                "                Peu importe l'endroit où vous vous trouver dans le monde, notre réseau nous permet d'être proche de vous et\n" +
                "                d'envoyer un recruteur vous observer et prendre contact avec vous.\n" +
                "                Vous rêvez du PSG, du Réal Madrid ou encore de Manchester United, postez vos vidéos sur Facebook, Instagram ou Youtube,\n" +
                "                remplissez le formulaire en bas de page et nous nous occupons du reste.\n" +
                "                <p>Tentez de faire votre vie un rêve !</p>";
            document.getElementById("aboutHead").innerHTML = "A propos de <br /> Players2be";
            document.getElementById("fr-button").classList.add("translate--button--active");
            document.getElementById("en-button").classList.remove("translate--button--active");
        } else {
            document.getElementById("bio").innerHTML =" Players2be is a website where soccer players and football recruiting agents can be linked. Players2be is recognized in France since it opennig in 2018. No matter where you are in the world, our network allows to be close to you. Thanks to this we can send a football recruiting agent to see your performance and be in touch with you. Is it your dream to be part of PSG team, Real Madrid team or Manchester United team ? Post your videos on facebook, Instagram or Youtube, complete the form that you can find at the end of this page and we take care of it ! <p> Try to make your life a dream !</p>";
            document.getElementById("aboutHead").innerHTML = "About <br /> Players2be";
            document.getElementById("en-button").classList.add("translate--button--active");
            document.getElementById("fr-button").classList.remove("translate--button--active");
        }
        return true;
    }