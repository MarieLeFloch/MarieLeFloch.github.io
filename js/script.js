// Module messages : quand on clique, fait apparaitre un message

const messages = {
    // la fonction init est appelée à la suite de l'évènement domContentLoaded (le DOM a été chargé), puis la fonction init appelle à son tour addLikeEvents
    init: function() {
        messages.addClickEvents();
        number = "06 58 62 90 63";
        breakText = "Après plusieurs contrats (en agriculture et en vente) en 2015/2016, j'ai réalisé plusieurs voyages en 2016/2017 : missions de volontariat (Sénégal, Grèce et Thaîlande) et séjours linguistiques en anglais et espagnol (Malte, Inde et Espagne).";
        
    },

    addClickEvents : function() {
        const phoneButton = document.querySelector(".fa-square-phone");
        phoneButton.addEventListener('click', messages.addNumberMessage)
        // AJOUT 21/04
        const paraphBreak = document.querySelector("#break_button");
        paraphBreak.addEventListener('click', messages.addBreakText)
    },

    addNumberMessage : function(event) {
        event.preventDefault();
        // On vérifie d'abord qu'il n'existe pas déjà un paragraphe
        /*messages.removeNumberMessage();*/
        const pElement = document.querySelector(".numero");
        if (pElement !== null) {
            pElement.remove();
        }else{
        // On crée un élément p, avec une class numéro et un contenu = numéro
        const numberMessage = document.createElement('p');
        numberMessage.classList.add('numero');
        numberMessage.textContent = number;
        // On l'ajoute dans l'élément contenant l'id message
        const emplacementMessage = document.querySelector("nav");
        emplacementMessage.append(numberMessage);
        }
    },

    // AJOUT 21/04
    addBreakText : function(event) {
        event.preventDefault();
        const pElement = document.querySelector(".break");
        if (pElement !== null) {
            pElement.remove();
        }else{
        // On crée un élément p, avec une class numéro et un contenu = numéro
        const breakP = document.createElement('p');
        breakP.classList.add('break');
        breakP.textContent = breakText;
        // On l'ajoute dans l'élément contenant l'id message
        const emplacementParaph = document.querySelector("#break");
        emplacementParaph.append(breakP);
        }
    }
}


document.addEventListener('DOMContentLoaded', messages.init);
