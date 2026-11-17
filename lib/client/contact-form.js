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

  // send: check the three we need to get back to someone (name, email and phone), compose the email, show the fallback
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var f = Object.fromEntries(new FormData(form).entries()), ok = true;
    form.querySelectorAll('.bad').forEach(function (el) { el.classList.remove('bad'); el.removeAttribute('aria-invalid'); });
    function bad(el) { el.classList.add('bad'); el.setAttribute('aria-invalid', 'true'); if (ok) el.focus(); ok = false; }
    if ((f.name || '').trim().length < 2) bad(form.elements.namedItem('name'));
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test((f.email || '').trim())) bad(form.elements.namedItem('email'));
    if (((f.phone || '').match(/\d/g) || []).length < 8) bad(form.elements.namedItem('phone'));
    root.querySelector('#errMsg').textContent = ok ? '' : 'Please add your name, email address and phone number so we can get back to you.';
    if (!ok) return;
    var name = (f.name || '').trim(), or = function (v) { return (v || '').trim() || '-'; };
    var subject = name ? 'Enquiry from ' + name : 'Website enquiry';
    var body = 'Name: ' + or(f.name) + '\nEmail: ' + or(f.email) + '\nPhone: ' + or(f.phone) + '\nWebsite: ' + or(f.website) + '\nService: ' + or(f.service) + '\n\n' + (f.message || '').trim();
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
