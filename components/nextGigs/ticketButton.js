// ticket-button.js
class TicketButton extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    // Inhalte löschen, falls mehrfach initialisiert
    this.shadowRoot.innerHTML = '';

    // <a> Element erstellen
    const link = document.createElement('a');
    link.textContent = this.textContent.trim() || 'Get Ticket';
    link.href = this.getAttribute('href') || '#';
    link.className = 'ticket-button';
    link.target = "_blank";

    // Stylesheet-Link
    const styleLink = document.createElement('link');
    styleLink.setAttribute('rel', 'stylesheet');
    styleLink.setAttribute('href', `/components/nextGigs/ticketButton.css?v=${Date.now()}`);

    // Alles in Shadow DOM einfügen
    this.shadowRoot.appendChild(styleLink);
    this.shadowRoot.appendChild(link);
  }
}

customElements.define('ticket-button', TicketButton);
