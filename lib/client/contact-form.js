// Envision contact: the enquiry form's behaviour, shared by /contact and the homepage pop-up (which loads the
// frame from /contact). There's no server behind the site, so "send" composes the email for the visitor's own
// mail app (mailto:) and shows the message to copy as a fallback.
export function initContactForm(root) {
  var ADDR = 'hello@envisionds.com.au';
  var form = root.querySelector('#enquiry'), copyBtn = root.querySelector('#copyEmail');
  if (!form || form.dataset.ready) return;
  form.dataset.ready = '1';

  // copy the email address
  if (copyBtn) copyBtn.addEventListener('click', function () {
    (navigator.clipboard ? navigator.clipboard.writeText(ADDR) : Promise.reject()).catch(function () {
      var r = document.createRange(); r.selectNodeContents(copyBtn); var sel = getSelection(); sel.removeAllRanges(); sel.addRange(r);
    }).finally(function () { copyBtn.classList.add('copied'); setTimeout(function () { copyBtn.classList.remove('copied'); }, 1800); });
  });

  // send: validate, compose the email, show the fallback
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var f = Object.fromEntries(new FormData(form).entries()), ok = true;
    form.querySelectorAll('.bad').forEach(function (el) { el.classList.remove('bad'); });
    if (f.name.trim().length < 2) { form.name.classList.add('bad'); ok = false; }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email)) { form.email.classList.add('bad'); ok = false; }
    if (f.message.trim().length < 10) { form.message.classList.add('bad'); ok = false; }
    root.querySelector('#errMsg').textContent = ok ? '' : 'Please fill in the required fields (a sentence or two about what you need helps us prepare).';
    if (!ok) return;
    var subject = 'Enquiry from ' + f.name.trim();
    var body = 'Name: ' + f.name + '\nEmail: ' + f.email + '\nPhone: ' + (f.phone || '-') + '\nWebsite: ' + (f.website || '-') + '\nService: ' + (f.service || '-') + '\n\n' + f.message;
    var href = 'mailto:' + ADDR + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
    root.querySelector('#sentText').textContent = 'To: ' + ADDR + '\nSubject: ' + subject + '\n\n' + body;
    root.querySelector('#mailAgain').href = href;
    form.classList.add('done');
    try { window.location.href = href; } catch (err) {}
  });
  var copyMsg = root.querySelector('#copyMsg');
  if (copyMsg) copyMsg.addEventListener('click', function () {
    var pre = root.querySelector('#sentText');
    (navigator.clipboard ? navigator.clipboard.writeText(pre.textContent) : Promise.reject())
      .then(function () { copyMsg.textContent = 'Copied'; setTimeout(function () { copyMsg.textContent = 'Copy message'; }, 1800); })
      .catch(function () { var r = document.createRange(); r.selectNodeContents(pre); var sel = getSelection(); sel.removeAllRanges(); sel.addRange(r); });
  });
}
