---
title: "My University Module Reviews"
layout: post
categories: academics
tags: [scholarship, study abroad, Ireland]
---

**Objectives of this post**

I am a Computer Science student at the University of Limerick. I created this post with the aim to help potential newcomers with the choice of picking the right course/university for them.

**Module Reviews**

Read more about the modules I undertook here:

## Semester Reviews 

<ul>
    <li><a href="/portfolio/module-review/ul-in-general">UL in general</a></li>
  {% assign reviews = site.categories.module-review | sort: 'semester' %}
  {% for post in reviews %}
    <li>
      <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
    </li>
  {% endfor %}
</ul>
