---
title: "My University Module Reviews"
layout: post
categories: academics
tags: [scholarship, study abroad, Ireland]
---

**Objectives of this post**

I am a Computer Science student at the University of Limerick. I created this post with the aim to help potential newcomers with the choice of picking the right course/university for them.

**UL campus and facilities**

University of Limerick is a fantastic university. It has top class facilities, spacious library with big study rooms easily available to book for groups of people, great record of graduate employment rate. The beautiful green campus is a big thing and its value should not be underestimated. Walking alongside the Shannon river coming back from shopping was one of the most calming experiences in my first year. The Computer Science building with all its lab rooms filled with Windows/MAC computers is a great space to work on your projects. It's an amazing feeling to be on the fourth floor in the evening and watch all the lamps shining in the dark below the building.

**People and Communities**

It is important to socialise, interact with other people, make friends. Luckily, that is easy at UL. With its number of societies and clubs, I believe that if you make at least a little bit of effort you will find many people that share similar interests with you. You can also check out the international friday night organised by the Music Society. This might be the best weekly event at UL and I am saying this as a person, who generally doesn't enjoy parties. People come here to talk, dance and meet new people from different or even same countries. It is exciting to share stories, experiences and enjoy the fun. You might just end up having the best time of your life at this university.

To say something about the people in our course; most students I interacted with seem interested in all the technologies we are learning about and take uni seriously. There are around 150 first-years in our course, which I think is not too big of a number and it allows a more personal experience. The lecturers we have are very decent people. They all are people who care to help and thanks to their approach it is generally enjoyable to attend all lectures, labs and tutorials.

**Module Reviews**

Read more about the modules I undertook here:

## Semester Reviews

<ul>
  {% assign reviews = site.categories.module-review | sort: 'semester' %}
  {% for post in reviews %}
    <li><a href="{{ post.url }}">{{ post.title }}</a></li>
  {% endfor %}
</ul>
