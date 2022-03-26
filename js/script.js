// Module messages : quand on clique, fait apparaitre un message

const messages = {
    // la fonction init est appelée à la suite de l'évènement domContentLoaded (le DOM a été chargé), puis la fonction init appelle à son tour addLikeEvents
    init: function() {
        messages.addClickEvents();
        
    },

    addClickEvents : function() {
        const phoneButton = document.querySelector(".fa-square-phone");
        phoneButton.addEventListener('click', messages.handleNumberMessage)
    },

    handleNumberMessage : function(event) {
        event.preventDefault();
        const numberMessage = document.createElement('p');
        numberMessage.textContent = "06 58 62 90 63";
        const emplacementMessage = document.querySelector("#message");
        numberMessage.classList.add('numero');
        emplacementMessage.append(numberMessage);
    }

}
// à modifier: si p déjà crée, doit être supprimé, sinon le créer


document.addEventListener('DOMContentLoaded', messages.init);
