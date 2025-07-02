---
title: "My First Year at UL"
layout: post
categories: academics
tags: [scholarship, study abroad, Ireland]
---

**Semesters Diary**

Read about my first year experience as a Computer Science student at UL.

<ul>
  {% assign reviews = site.categories.first-year-experience | sort: 'semester' %}
  {% for post in reviews %}
    <li>
      <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
    </li>
  {% endfor %}
</ul>
