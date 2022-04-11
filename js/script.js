// Module messages : quand on clique, fait apparaitre un message

const messages = {
    // la fonction init est appelée à la suite de l'évènement domContentLoaded (le DOM a été chargé), puis la fonction init appelle à son tour addLikeEvents
    init: function() {
        messages.addClickEvents();
        
    },

    addClickEvents : function() {
        const phoneButton = document.querySelector(".fa-square-phone");
        phoneButton.addEventListener('click', messages.addNumberMessage)
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
        numberMessage.textContent = "06 58 62 90 63";
        // On l'ajoute dans l'élément contenant l'id message
        const emplacementMessage = document.querySelector("nav");
        emplacementMessage.append(numberMessage);
        }
    },

    /*removeNumberMessage : function() {
        const pElement = emplacementMessage.querySelector(".numero");
        if (pElement !== null) {
            pElement.remove();
        }
    }*/

}


document.addEventListener('DOMContentLoaded', messages.init);
