---
layout: post
title:  "Contact Me"
categories: academics
tags: [scholarship, study abroad, Ireland]
---

<h1>Contact Me</h1>

<form id="contactForm">
  <input type="text" name="name" placeholder="Your Name" required><br>
  <input type="email" name="email" placeholder="Your Email" required><br>
  <textarea name="message" placeholder="Your Message" required></textarea><br>
  <button type="submit">Send</button>
</form>

<p id="statusMessage" style="margin-top:10px;"></p>

<script>
document.getElementById("contactForm").addEventListener("submit", async function(e) {
  e.preventDefault();

  const form = e.target;
  const data = {
    name: form.name.value,
    email: form.email.value,
    message: form.message.value
  };

  try {
    const response = await fetch("http://localhost:3000/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });

    const result = await response.json();

    if (result.success) {
      document.getElementById("statusMessage").innerText = "✅ Message sent successfully!";
      form.reset();
    } else {
      document.getElementById("statusMessage").innerText = "❌ Error sending message.";
    }
  } catch (err) {
    document.getElementById("statusMessage").innerText = "❌ Network error.";
  }
});
</script>