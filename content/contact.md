+++
title = "Contact Me"
description = "Contact Me"
date = "2021-09-03"
aliases = ["contact-me"]
author = "Sanel Kukic"
+++

If you wish to contact me, below are the various methods you can do so:

- Email
  - [sanelk2004[at]icloud[dot]com](mailto:sanelk2004@icloud.com?subject=Inquiry+from+sanelkukic.us.eu.org)
  - I have a PGP key for this email, you can view it by [clicking here](/.well-known/sanelk2004@icloud.com_pgp.txt). ***It is highly recommended that you encrypt any and all sensitive messages to me using PGP.***
  - Any email(s) I send from this address are signed using S/MIME. If you receive an email from this email address that is not signed using S/MIME, please report it to me.
- Twitter
  - [@idkhow_to_read](https://twitter.com/idkhow_to_read)
- Discord
  - `idk_how_to_read#9622`
  - You can join my Discord server [here](https://discord.gg/NSVPhwn9rG)
- Instagram
  - [@sanelk2004](https://instagram.com/sanelk2004)
- XMPP
  - [ksanel@og.im](xmpp:ksanel@og.im?message)
  - Join my room: [sanel.kukic@conference.og.im](xmpp:sanel.kukic@conference.og.im?join)
  - My OTR (Off-the-Record) encryption fingerprint: `88A7607F ED545A35 B2264CF8 88E2F7AC C9DA29A2`
  - My OMEMO encryption fingerprint: `136d12fe 3e8844a4 e8d3a70b 1b2090b1 2bfe0a1d 622889f4 71495230 4b0cef73`
  - As long as either of these two fingerprints are present, you can be assured that you are actually talking to me and that the conversation is end-to-end encrypted.
- Matrix
  - [@sanel.k:halogen.city](https://matrix.to/#/@sanel.k:halogen.city)
  - Join my room: [#sanel.kukic:halogen.city](https://matrix.to/#/#sanel.kukic:halogen.city)
  - You can download a Matrix client such as [Element](https://element.io) to message me on Matrix.
  - Please note that the Matrix chatroom is not encrypted because enabling encryption would break compatibility with bots and widgets. If you wish to communicate with me in an encrypted fashion, it is recommended that you do so via the XMPP chatroom with either OTR or OMEMO enabled.
- Mastodon
  - [@sanelkukic@im-in.space](https://im-in.space/@sanelkukic)

You can also fill out the contact form below.

{{< rawhtml >}}
<script src="https://www.google.com/recaptcha/api.js" async defer></script>
<script>
  window.onload = function() {
    var el = document.getElementById('g-recaptcha-response');
    if (el) {
      el.setAttribute('required', 'required');
    }
  }
  window.onbeforeunload = () => {
    for(const form of document.getElementsByTagName('form')) {
      form.reset();
    }
  }
</script>
<style>
  #g-recaptcha-response {
    display: block !important;
    position: absolute;
    margin: -50px 0 0 0 !important;
    z-index: -999999;
    opacity: 0;
  }
</style>
<form
  action="https://formspree.io/f/xnqllbnw"
  method="POST">
  <label>
    Your name:
    <input type="text" name="name" required>
  </label>
  <label>
    Your email:
    <input type="email" name="_replyto" required>
  </label>
  <label>
    Your message:
    <textarea name="message" required></textarea>
  </label>
  <div class="g-recaptcha" data-sitekey="6LfIEkQcAAAAAFK2XLut5G_ir8Dfb2wNbG0S4Osp"></div>
  <button type="submit">Send</button>
</form>
{{< /rawhtml >}}
