---
title: 'NeurIPS 2020'
excerpt: 'Takeaways from 2020 Virtual-only Conference on Neural Information Processing Systems. I participated in expo, sessions, tutorials and workshops.'
coverImage: '/assets/project/neurips/cover.jp2'
date: '2020-12-12T05:35:07.322Z'
ogImage:
  url: '/assets/project/neurips/cover.jp2'
tags: 'note ml'
index: 3
---

Status: in progress.

- **Day 1: [Expo](https://neurips.cc/Expo/Conferences/2020/Expo)**
  - Challenges in the adoption of Machine Learning in Health Care [Amazon science]
    - Challenges includes data accessibility, HIPPA & stateless service, variance across subdomains, solutions vary depending on the provider settings, abbreviation and typos in unstructured clinical text
    - Amazon Comprehend Medical
      - active learning (data annotations hards vs data hungry DL systems), computational expensive (CNN-CNN-LSTM architecture)
      - transfer leaning (typos in unstructured data, diverse subdomain) - named entity recognition (NER), parameter sharing (hard sharing and loosely coupled parameter soft sharing with Tunable Transfer Network (TNN)), dynamic transfer learning
      - continual learning (time-sensitive data, more data for diversity) - evolve to new data set but maintain quality, also across ontology, multi domain pre-training (catastrophic forgetting mitigated by elastic weight consolidation and learning rate control + experience replay)
      - Applications: CORD-19, transcribe medical + comprehend medical, multi modal knowledge extraction, mortality risk prediction
  - How we leverage machine learning and AI to develop life-changing medicines - a case study with COVID-19 [Benevolent AI]
  - AI against COVID-19 at IBM Research [IBM]
  - Fairness, Explainability, and Privacy in AI/ML Systems [Amazon science]
  - Modern ML Meets Financial Markets: Insights and Challenges [Hudson River Trading AI Labs]
  - Hypotheses Generation for Applications in Biomedicine and Gastronomy [SONY]
  - Accelerating Eye Movement Research Via Smartphone Gaze [Google Research]
  - New Challenges in User-Generated Content [Alibaba Group]
  - Machine Learning for All-Inclusive Finance [Ant Group & Alipay]
  - Medical Transcription Analysis [Amazon science]
  - Discovering genetic medicines using the Deep Genomics AI Drug Discovery Platform [Deep Genomics]

- **Day 2: [Tutorials](https://neurips.cc/virtual/2020/protected/e_tutorials.html)**,  **Session 1** - [Keynote](https://neurips.cc/virtual/2020/protected/invited_16166.html) + Tracks ([Representation/Relational](https://neurips.cc/virtual/2020/protected/session_oral_21099.html), [COVID/Health/Bio Applications](https://www.google.com/url?q=https://neurips.cc/virtual/2020/protected/session_oral_21094.html&source=gmail&ust=1607607028441000&usg=AFQjCNECADzSDBeKKLl44QHUkyoZUAhY_g), [Language/Audio Applications](https://neurips.cc/virtual/2020/protected/session_oral_21097.html), [Reinforcement Learning](https://neurips.cc/virtual/2020/protected/session_oral_21091.html)), **Workshop** - [New In ML](https://neurips.cc/virtual/2020/protected/affinity_workshop_19448.html)

- **Day 3: Session 2 -** [Keynote](https://neurips.cc/virtual/2020/protected/invited_16168.html) + Tracks ([Clustering/Ranking](https://neurips.cc/virtual/2020/protected/session_oral_21077.html), [Dynamical Sys/Density/Sparsity](https://neurips.cc/virtual/2020/protected/session_oral_21080.html), [Vision Applications](https://neurips.cc/virtual/2020/protected/session_oral_21068.html), [Deep Learning](https://neurips.cc/virtual/2020/protected/session_oral_21071.html), [Reinforcement Learning](https://neurips.cc/virtual/2020/protected/session_oral_21070.html), [Social/Privacy](https://neurips.cc/virtual/2020/protected/session_oral_21076.html), [Learning Theory](https://neurips.cc/virtual/2020/protected/session_oral_21088.html)), **Session 3** - [Keynote](https://neurips.cc/virtual/2020/protected/invited_16163.html) + Tracks ([Vision Applications](https://neurips.cc/virtual/2020/protected/session_oral_21089.html), [Deep Learning/Theory](https://neurips.cc/virtual/2020/protected/session_oral_21093.html), [Reinforcement Learning](https://neurips.cc/virtual/2020/protected/session_oral_21090.html)), **COVID-19 [Symposium](https://neurips.cc/virtual/2020/protected/e_covid19.html)**

- **Day 4: Session 4** - [Lecture](https://neurips.cc/virtual/2020/protected/invited_16165.html) + Tracks ([COVID/Applications/Composition](https://neurips.cc/virtual/2020/protected/session_oral_21075.html), [Continual/Meta/Misc Learning](https://neurips.cc/virtual/2020/protected/session_oral_21078.html), [Kernel Methods/Optimization](https://neurips.cc/virtual/2020/protected/session_oral_21081.html), [Deep Learning](https://neurips.cc/virtual/2020/protected/session_oral_21072.html), [Probabilistic/Causality](https://neurips.cc/virtual/2020/protected/session_oral_21086.html), [Social/Adversarial Learning](https://neurips.cc/virtual/2020/protected/session_oral_21087.html), [Optimization](https://neurips.cc/virtual/2020/protected/session_oral_21084.html)), **Session 5** - [Keynote](https://neurips.cc/virtual/2020/protected/invited_16164.html) + Tracks ([Vision Applications](https://neurips.cc/virtual/2020/protected/session_oral_21095.html), [Graph/Meta Learning/Software](https://neurips.cc/virtual/2020/protected/session_oral_21098.html), [Learning Theory](https://neurips.cc/virtual/2020/protected/session_oral_21101.html)), **Workshop** - [Women in ML](https://neurips.cc/virtual/2020/protected/affinity_workshop_19543.html)

- **Day 5: Session 6** - Lecture + Tracks ([Probabilistic Models/Statistics](https://neurips.cc/virtual/2020/protected/session_oral_21079.html), [Graph/Relational/Theory](https://neurips.cc/virtual/2020/protected/session_oral_21082.html), [Unsupervised/Probabilistic](https://neurips.cc/virtual/2020/protected/session_oral_21074.html), [Deep Learning](https://neurips.cc/virtual/2020/protected/session_oral_21073.html), [Neuroscience](https://neurips.cc/virtual/2020/protected/session_oral_21083.html), [Optimization/Theory](https://neurips.cc/virtual/2020/protected/session_oral_21085.html), [Reinforcement Learning](https://neurips.cc/virtual/2020/protected/session_oral_21069.html)), **Session 7** - Keynote + Tracks ([Optimization](https://neurips.cc/virtual/2020/protected/session_oral_21100.html), [Health/AutoML/(Soft|Hard)ware](https://neurips.cc/virtual/2020/protected/session_oral_21096.html), [Deep Learning](https://neurips.cc/virtual/2020/protected/session_oral_21092.html), [Neuroscience/Probabilistic](https://neurips.cc/virtual/2020/protected/session_oral_21102.html))

- **Day 6: [Workshops](https://neurips.cc/virtual/2020/protected/e_workshops.html), [Competitions](https://neurips.cc/virtual/2020/protected/e_competitions.html)**

- **Day 7: [Workshops](https://neurips.cc/virtual/2020/protected/e_workshops.html), [Competitions](https://neurips.cc/virtual/2020/protected/e_competitions.html)**
