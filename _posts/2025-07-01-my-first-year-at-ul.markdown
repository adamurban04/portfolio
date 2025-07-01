---
title: "My First Year at UL"
layout: post
categories: academics
tags: [scholarship, study abroad, Ireland]
---

**Semesters Diary**

I wrote about my first year experience as a Computer Science student at UL. Read about it here:

<ul>
  {% assign reviews = site.categories.first-year-experience | sort: 'semester' %}
  {% for post in reviews %}
    <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
  {% endfor %}
</ul> 
