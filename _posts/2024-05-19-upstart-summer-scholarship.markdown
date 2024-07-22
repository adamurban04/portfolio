---
layout: post
title:  "UPSTaRT Summer Scholarship"
date:   2024-05-19 12:39:08 +0100
categories: jekyll update
custom_css: "/assets/css/custom.css"
---

***[Active]***

## Intro

I am delighted I got the opportunity to work on ongoing research at UL during the summer of 2024 as part of UPSTaRT (S&E Undergraduate Programme of Summer Training and Research Track). I applied with the support of Prof. Conor Ryan and Dr Meghana Kshiragar and the project: "**Discovering Novel Biomarkers for Pan Cancers**". I also worked closely with one of my classmates James Conolly.
  
In this blog post, I wrote about my experience and the outcomes of my research project.

####  Motivation (w0-w5)

The motivation for this project is to create a tool that provides **both summary statistics and the means for identifying data bias** across multiple modalities such as tabular clinical data, genomic data or image data like CT, MRI and FMRI scans.

#### Meetings

During this programme I have been attending weekly meetings with my mentor and two other interns. The purpose of those meetings was to discuss our progress, receive feedback and plan the next steps. We were also having a lab meeting every Monday, in which we shared our progress with the whole [BDS](https://bds.ul.ie/) (Biocomputing and Development Systems) group.  

---  
<br>

### Week 1 and Week 2

*27th May - 3rd June*

In the first week, my objective was to familiarize myself with **R**, RStudio and ShinyApp. I did this by watching YouTube videos, walking through the Learn R course on Codeacademy and following the Get Started tutorials on the official Shiny website. After that, I also read papers my advisors gave me to understand the aims and objectives and the biological part of the project.

*3rd June - 10th June*

I built the first version of [my R Shiny App](https://adamurban.shinyapps.io/Research/) with **data visualisations** created for a Lung Adenocarcinoma [clinical dataset]((https://www.cbioportal.org/study/clinicalData?id=luad_tcga_pan_can_atlas_2018)) obtained from cBioPortal and hosted it on Shinyapps.io.

![appPic1]({{ "/images/app1.jpg" | relative_url }})

### Week 3 and Week 4

*10th June - 17th June*

I added more clinical datasets and a choice for the user to select a specific dataset and get insights into them. I also gave a presentation showcasing my progress.

*17th June - 24th June*

I created an R markdown notebook, which makes it easy for anyone to view the code and follow the steps of my data analysis. I also added an [image dataset](https://www.cancerimagingarchive.net/collection/nsclc-radiomics/) from NIH containing CT scans of non-small cell lung cancer patients. The app lets you get insights into the dataset and view the CT scans with its **DICOM Viewer** feature.

![appPic2]({{ "/images/app2.jpg" | relative_url }})

### Week 5 and Week 6

*24th June - 1st July*

I made the plots interactive using the plotly package and added a **correlation matrix** for numeric data in the clinical datasets. I also gave a presentation in Culhane Lab (School of Medicine) on the topic "Data bias visualisation tool".

*1st July - 7th July*

I worked on the feedback I got from the Culhane Lab, specifically **table1 R package**. With this package, I created a **stratified analysis** of clinical data by the user’s chosen category variable. This is a great asset for identifying data biases.  
I decided to split the code into multiple files for better organisation as the source file was already reaching a thousand lines. Although for deployment purposes I also had to keep one merged file. I also updated the User Interface with styled tab headings.

![appPic3]({{ "/images/app3.jpg" | relative_url }})

### Week 7 and Week 8

*7th July - 15th July*

I focused on exploring **RadioGx** and **PharmacoGx** R Bioconductor packages from BHKLab and a statistical test **“t-test”** to understand how I can utilise this for a radiogenomic analysis in in our Shiny App.  
Radiogenomic analysis combines radiobiological data with genomic data to uncover insights into how different cell lines respond to radiation therapy. Utilizing tools like the T-test and RadioGx can significantly enhance our understanding of these responses and lead to more effective cancer treatments.  

*15th July - 21th July*

I updated the correlation matrix to only show the upper triangular area (since the matrix is symmetric), which makes the analysis easier.  
I employed a **T-test**, a statistical method used to determine if there are significant differences between the means of two groups, to **compare the drug sensitivity** of different drugs, cell lines or tissue types.  
I utilised **RadioGx** package for comprehensive analysis of **cell line responses to radiation**, which can be useful when determining the correct dosage for a patient.  
There is also the feature of calculating the sensitivity signatures for cell lines based on molecular data, such as RNA expression profiles. The function identifies which molecular features (genes) are associated with the cell lines' response to radiation. This can be useful for:
- Biomarker Discovery: Identify genes that can serve as biomarkers for predicting radiation sensitivity or resistance in cancer cells
- Combination Therapy: Combine radiation therapy with drugs targeting genes associated with radio-resistance to enhance treatment effectiveness.
- Personalized Medicine: Tailor radiation therapy based on the molecular signatures of a patient’s tumor, improving treatment outcomes.

![appPic4]({{ "/images/app4.jpg" | relative_url }})

### Week 9 and Week 10

*21st June - 29th July*

...

*29th June - 5th August*

...  
  

---  
<br>

###  Results

The result is a Shiny App, useful for identifying data bias. It offers summary statistics, easy-to-view visual inspection of clinical datasets utilizing interactive plots with insights into age, gender, survival status, race and ethnicity of patients, an inspection of CT Scans saved as DICOM files, a correlation matrix for numeric data in clinical datasets, stratified analysis, t-test statistics on drug response data (IC50 values), and a comprehensive analysis of cell line responses to radiation.  
In this app, we focused on lung adenocarcinoma, but it is useful for pan cancers.  

You can view the code and resources for this tool at its [GitHub repository](https://github.com/adamurban04/UPSTaRT) or the actual Shiny app at [shinyapps.io](https://adamurban.shinyapps.io/Research/)
