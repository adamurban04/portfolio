---
layout: post
title:  "Contact Me"
categories: academics
tags: [scholarship, study abroad, Ireland]
---

<h1>Contact Me</h1>

<form id="contact-form">
  <input type="text" name="name" required />
  <input type="email" name="email" required />
  <textarea name="message" required></textarea>
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
