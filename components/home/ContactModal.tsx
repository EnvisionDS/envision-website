// CONTACT POP-UP: the frame is loaded in from contact.html when a contact link is clicked
export default function ContactModal() {
  return (
    <div id="modal" role="dialog" aria-modal="true" aria-labelledby="contactTitle" aria-hidden="true">
      <div className="backdrop"></div>
      <div id="morph"></div>
      <div className="frame" id="contactFrame"></div>
    </div>
  );
}
