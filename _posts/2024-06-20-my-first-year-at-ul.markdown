---
title: "My First Year at UL 👨‍🎓"
layout: post
categories: academics
tags: [scholarship, study abroad, Ireland]
custom_css: "/assets/css/expandable.css"
---

**Semesters Diary** 

Read about my first year experience as a Computer Science student at UL.

<div class="accordion-posts">
  {% assign first-year-experience = site.categories.first-year-experience | sort: 'semester' %}
  {% for post in first-year-experience %}
    <details>
      <summary><strong>{{ post.title }}</strong></summary>
      <div class="post-content">
        {{ post.content }}
      </div>
    </details>
  {% endfor %}
</div>
