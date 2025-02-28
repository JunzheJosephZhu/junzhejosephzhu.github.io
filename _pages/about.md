---
layout: about
title: about
permalink: /
subtitle: <a class=extra_space href='https://www.linkedin.com/in/joseph-junzhe-zhu-38023113b/'>Linkedin</a> <a class=extra_space href='https://scholar.google.com/citations?user=ss3SR9YAAAAJ&hl=en'>Google Scholar</a> <a class=extra_space href='https://github.com/JunzheJosephZhu'>Github</a> <a href=# class="collapsible extra_space">Wechat</a> <a class="content">josephz2000</a> 

profile:
  align: right
  image: josephzhu.png
  image_circular: false # crops the image to make it circular
  address: >

work: true
news: false  # includes a list of news items
selected_papers: true # includes a list of papers marked as "selected={true}"
previous: true # enables the Previous section
social: true  # includes social icons at the bottom of the page
---
I'm a startup founder working on robotics. Over the past 3 years, I have been a cofounder and the only software engineer at Tepan, developing software for a stovetop bimanual robot that autonomously takes care of everything from ingredient prepping, cooking, seasoning, to self-cleaning.

#### My tech stack nowadays

I spend most of my time doing engineering, but occasionally publish research papers.<br> Click each one to expand:

- <a href="#neural-networks" class="collapsible">Neural Networks</a>
  <span class="content" style=""><br>
  I get down to pretty basic levels of this. Back in undergrad when working on audio there wasn't many standardized architectures, so I usually wrote my own neural networks(e.g. convolutional networks to generate attention masks, implementing transformers using cupy, using Fourier transforms to implement convolutions, recursive RNNs, inference for WaveNets). Recently, things I've been doing include making a custom promptable segmentation model for food ingredients based on ViT Adapter in Detectron2, and training 3D networks that use the heat diffusion process to propagate features on meshes. 
  <br></span>
- <a href="#generative-models" class="collapsible">Information theory/Generative Models</a>
  <span class="content" style=""><br>
  I'm pretty familiar with the theory in general, getting into the nitty gritty details of the whole derivation for diffusion models, flow matching, consistency models, and VAE, by re-deriving everything from scratch. I wrote a paper called HiFA for my side project that broke down the score distillation process of a diffusion model into a pseudo ground-truth generating process. This paper has been cited 100+ times within its first year.
  <br><br>
  I also love reading general probability theory related papers. My favorite one is GAIL, but I haven't 100% understood the proof yet.
  <br><br>
  That said, I am ashamed to admit that "A Mathematical Theory of Communication" has been on my reading list for 5 years now and I still haven't read it.
  <br></span>
- <a href="#ai-infra" class="collapsible">AI Infrastructure</a>
  <span class="content" style=""><br>
  I'm usually forced to figure this out since I'm the only software engineer at Tepan. I've managed all the clusters we had on GCP and spent $250k compute credits within the past year. That includes fine-tuning a DINOv2 using around 64 L4 GPUs for 10 days, while writing custom fine tuning code. Other than that, I delved deep into FSDP model sharding and figured out nitty gritty details like "why can't BatchNorm be FSDP'ed?", checkpointing shards vs whole models, etc, in order to train a Maskformer more efficiently with a bigger batch size. I also wrote a torchserve wrapper for this custom promptable maskformer for efficient serving. I also wrote some TensorRT back in its early days, but it didnt turn out too well because back then there was no GPT and very little support for pytorch ONNX.
  <br></span>
- <a href="#supply-chain" class="collapsible">Hardware Supply Chain and Data Labelling</a>
  <span class="content" style=""><br>
  Supply chain is quite important when running a hardware startup, especially if in China. That requires playing tug-of-war with suppliers, getting information and product samples, cross checking the prices, picking the right one that's both cheap enough and good enough. I've built quite some familiarity with the supply chain for chips, basic brands, and a good sense of the rough range of prices for different products.
  <br><br>
  I also worked extensively with data labellers, from picking a data labelling agency to writing data manuals, and developing ways to monitor the efficiency of data labellers. I curated a dataset of 5M food images of food ingredients, with 1M of them filtered and coarsely annotated, and 50k of them annotated with segmentation masks, all with a budget of 10k USD.
  <br></span>
- <a href="#3d-modelling" class="collapsible">3D modelling and graphics</a>
  <span class="content" style=""><br>
  I am familiar with NeRFs and differentiable rendering pipelines, in particular NVDiffRast and Pytorch3D. I've invented custom losses to make NeRFs sharper by regularizing the distribution of density functions along a ray, and impelemented GGX microfacet BRDFs for NeRFs with point lights(althought that didn't work very well because it needs an environmental map, and that was computationally infeasible). Other than that, I played quite a lot with Poisson reconstruction, and recently explored using Poisson Recon to obtain a mesh that comes with albedo, roughness, and metallic textures, before throwing that into NVDiffRast for further optimization. I have recently been learning GLFW in an attempt to render a robot along with point clouds into a VR headset with high frame rates for teleoperation.</span>
- <a href="#depth-cameras" class="collapsible">depth cameras</a>
  <span class="content" style=""><br>
  I have done a lot of stuff for depth maps and depth cameras. I've worked with structured-light and active stereo cameras coming straight from suppliers like Orbbec and Deptrum, often with lacking functionalities that I have to implement myself, such as efficiently aligning depth streams and RGB streams of different resolutions(they are actually misaligned since their camera holes are not the same, one is IR but the other is RGB), obtaining colored point clouds from those(surprisingly, some suppliers don't even have that function built into their cameras SDKs...). I wrote a python binding for Deptrum SDK because they didn't have one. 
  <br></span>
- <a href="#robotics-software" class="collapsible">Embedded Robotics Software</a>
  <span class="content" style=""><br>
  The entire Tepan robot was built from scratch, the maximum level of packaged-ness we got was a custom servo for some joints, but we had to take apart even that. Therefore, I wrote PID controllers for quite a few different types of motors for STM and Arduino boards(back when I was building in my garage). Theres a lot of low-level engineering involved in this, here are a few examples. Back in 2022 I modified <a href="https://www.airspayce.com/mikem/arduino/AccelStepper/">the arduino AccelStepper</a> library to compute stepper pulse intervals in real time based on high-frequency waypoint inputs on a mere Arduino nano(where I won't be able to use square root/division if I don't want to miss a pulse) by extending <a href="https://www.embedded.com/generate-stepper-motor-speed-profiles-in-real-time/">this paper</a>. Recently(this is probably the <b>biggest</b> engineering <b style="color: red;">NIGHTMARE</b> I ever faced!), we had a custom board with which tried to run FOC on a stepper motor. There was 3 months of struggling here, where the major problems are (i) the UART communication would randomly break down, in the end there was an issue with a cyclic buffer. (ii) there is a thing called "zero electric angle" in FOC, and that was changing all the time even when it was supposed to be consistent, and it turned out that the position sensor wasn't giving absolute but incremental angles from when it was powered on. (iii) The motor just gets stuck randomly when there was a little bit of resistance. This took the longest, initially we thought there were issues with the PWM or some backEMF stuff causing the motor to produce enough force, but in the end after countless testing it turned out that the position sensor magnet wasn't big enough and it was causing small errors (like 0.5 degrees) in position readings, and it just so happened that stepper motor FOC was REALLY sensitive to those errors. 
  <br></span>
- <a href="#kinematics" class="collapsible">Robotics Fundamentals</a>
  <span class="content" style=""><br>Tepan has a really weirdly shaped robot, with two 5 DOF arms, where one branches off from the other. I wrote custom forward kinematic with Jacobian computation using sympy, and wrote a custom null space inverse kinematic solvers(there was a teleop requirement so that I had to use euler angles to parameterize the robot, so the angular component of the Jacobian was for euler angles instead of the usual angular velocity, I had to do some tricky derivations to avoid gimbal lock). I also implemented gravity compensation from scratch.<br></span>
- <a href="#signal-processing" class="collapsible">Signal Processing</a>
  <span class="content" style=""><br>
  I worked on computational speech for quite some time and have a lot of in depth understanding of signal processing math, including convolutions Short Time Fourier Transforms, Wavelets, time varying IIR filters, as well as image signal processing stuff. Aside from published research, I worked on an AI audio codec in Tencent where I turned <a href="https://www.researchgate.net/publication/3999091_Code-excited_Linear_Prediction_CELP_High_Quality_Speech_at_Very_Low_Bit_Rates">Linear Predictive Coding</a>(a type of residual coding for compressing speech) into a differentiable layer in the neural network. Recently I have been working on functional maps, which is basically signal processing for meshes. It turns out that you can apply something similar to Fourier Transform to meshes, call Laplace-Beltrami eigenfunctions. 
  <br></span>
- <a href="#physics-of-electricity" class="collapsible">Physics of Electricity & Mechanics</a>
  <span class="content" style=""><br>  
  I did my undergrad in EE, so I understand how analog & digital circuits work on a fundamental level, and how radio/electromagnetic waves work. (Quick question: what is the difference between radiowave and laser in terms of electromagnetic field?) Thanks to the coaching of <a href="https://math.illinois.edu/resources/department-resources/syllabus-math-487">Prof. Jont Allen</a>, I got to learn about dynamical system, and <a href="https://auditorymodels.org/index.php?n=Courses.ECE498-ECENeuroScience-S21">how neurons work on the electrical level</a>. I also dabbled in fluid mechanics(Navier-Stokes for liquid, Webster Horn for gas and sound), and structural mechanics, although I'm not an expert.
  <br></span>
