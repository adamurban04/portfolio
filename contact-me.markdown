---
layout: page
title: Contact Me
permalink: /contact/
nav: true
---

<link rel="stylesheet" href="{{ '/assets/css/contact.css' | relative_url }}">

You can contact me through the following form.

<form id="contact-form">
  <label for="name">Name</label>
  <input type="text" name="name" id="name" required />
  <label for="message">Message</label>
  <textarea name="message" id="message" required></textarea>
  <button type="submit">Send</button>
</form>

<script>
  document.getElementById('contact-form').addEventListener('submit', async function (e) {
    e.preventDefault();

    const formData = new FormData(this);
    const payload = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message')
    };

    try {
      const res = await fetch('https://portfolio-iruy.onrender.com/api/messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      const data = await res.json();
      if (data.success) {
        alert('Message sent!');
        this.reset();
      } else {
        alert('Something went wrong.');
      }
    } catch (err) {
      alert('Error submitting form.');
      console.error(err);
    }
  });
</script>


