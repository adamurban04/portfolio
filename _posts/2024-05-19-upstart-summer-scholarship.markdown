---
layout: post
title:  "UPSTaRT Summer Scholarship"
date:   2024-05-19 12:39:08 +0100
categories: jekyll update
---

***[Active]***

**Intro**

I am very delighted I got the opportunity to be working on an ongoing research at UL during the summer of 2024 as part of UPSTaRT (S&E Undergraduate Programme of Summer Training and Research Track). I applied with the support of Prof. Conor Ryan and Dr Meghana Kshiragar and the project: "Discovering Novel Biomarkers for Pan Cancers". I will also be closely working with one of my classmates James Conolly.
  
In this blog post I write everything about my experience and outcomes of my research work.

**Meetings**

During this programme I have attended weekly meetings with my mentor and two other interns. The purpose of those meetings were to discuss our progress, receive feedback and plan the next steps. Then we were having a weekly lab meeting every Monday, where we shared this with the whole [BDS](https://bds.ul.ie/) (Biocomputing and Development Systems) group.

**Week 1 and Week 2**

*27th May - 3rd June*

In the first week my objective was to familiarize myself with R, RStudio and ShinyApp. I did this by watching YouTube videos, walking through the Learn R course on Codeacademy and following the Get Started tutorials on the official Shiny website. After that I also read papers my advisors gave me to understand the aims and objectives and the biological part of the project.

*3rd June - 10th June*

In the second week, I built the first version of [my R Shiny App](https://adamurban.shinyapps.io/Research/) with data visualisations created for a Lung Adenocarcinoma clinical dataset obtained from [cBioPortal](https://www.cbioportal.org/study/clinicalData?id=luad_tcga_pan_can_atlas_2018) and hosted it on Shinyapps.io.

**Week 3 and Week 4**

*10th June - 17th June*

In the third week, I added more clinical datasets and a choice for the user to select a specific dataset and get insights into them. I also created a [videopresentation](https://www.youtube.com/watch?v=f1_ApnHoYWM) showcasing my progress.

*17th June - 24th June*

In the fourth week, I created an R markdown notebook, which makes it easy for anyone to view the code and follow the steps of my data analysis. I also added an image dataset containing CT scans of non-small cell lung cancer patients. The app lets you get insights into the dataset and view the CT scans.

**Week 5 and Week 6**

*24th June - 1st July*

In the fifth week, I made the plots interactive using the plotly package and added a correlation matrix for numeric data in the clinical datasets. I also gave a presentation in Culhane Lab (School of Medicine) on the topic "Data bias visualisation tool".

*1st July - 7th July*

In the sixth week I worked on the feedback I got from the Culhane Lab, meaning table1 R package. With this, I created a stratified analysis of clinical data by the user’s chosen category variable. This is a great asset in identifying data biases.
I decided to split the code into multiple files for better organisation as the source file was already reaching a thousand lines. Although for deployment purposes I also had to keep one merged file. I also updated the User Interface with styled tab headings.

**Week 7 and Week 8**

*7th July - 15th July*

In the seventh week I focused on exploring RadioGx and PharmacoGx R Bioconductor packages from BHKLab and a statistical test “t-test” to understand how I can utilise this for a radiogenomic analysis in in our Shiny App. Radiogenomic analysis combines radiobiological data with genomic data to uncover insights into how different cell lines respond to radiation therapy. Utilizing tools like the T-test and RadioGx can significantly enhance our understanding of these responses and lead to more effective cancer treatments.  
  
T-test in Radiogenomic Analysis
The T-test is a statistical method used to determine if there are significant differences between the means of two groups. In the context of radiogenomic analysis, it can be employed to compare the radiation sensitivity of different cell lines or tissue types.

*15th July - 21th July*

I updated the correlation matrix to only show the upper triangular area (since the matrix is symmetric), which makes the analysis easier.

**Week 9 and Week 10**

*21st June - 29th July*


*29th June - 5th August*

**Motivation and Results (after w5)**

The motivation for this project is to create a tool that provides **both** summary statistics and the means for identifying data bias across multiple modalities such as tabular clinical data, genomic data or image data like CT, MRI and FMRI scans. Those are the insights into the age, gender, survival status, race and ethnicity of the cohorts in the dataset.

The result is a Shiny App, useful for identifying data bias. It offers summary statistics, easy-to-view visual inspection with the interactive plots and a correlation matrix. You can view the code and resources for this tool at its [GitHub repository](https://github.com/adamurban04/UPSTaRT) or the actual Shiny app at [shinyapps.io](https://adamurban.shinyapps.io/Research/)
