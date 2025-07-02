---
title: "UL Computer Systems - Reviews 🗒️"
layout: post
categories: academics
tags: [scholarship, study abroad, Ireland]
custom_css: "/assets/css/expandable.css"
---

**Objectives of this post**

I am a Computer Systems student at the University of Limerick. I created this post with the aim to help potential newcomers with the choice of picking the right course/university for them.

**Module Reviews**

Read more about the modules I undertook here:

## Semester Reviews 

<div class="accordion-posts">
  {% assign reviews = site.categories.module-review | sort: 'semester' %}
  {% for post in reviews %}
    <details>
      <summary><strong>{{ post.title }}</strong></summary>
      <div class="post-content">
        {{ post.content | markdownify }}
      </div>
    </details>
  {% endfor %}
</div>
