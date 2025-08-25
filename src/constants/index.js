// ================================================================
// PROJECT ASSETS
// ================================================================
import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

// ================================================================
// HERO SECTION CONTENT
// ================================================================
export const HERO_CONTENT = `I'm an electronics and communication engineering student at PES University RR campus, with a passion for hardware design and digital circuit modeling. I work extensively with Verilog HDL, SystemC, and various EDA tools, while also exploring AI/ML applications in hardware verification and bioinformatics.`;

// ================================================================
// ABOUT SECTION CONTENT
// ================================================================
export const ABOUT_TEXT = `Hey there! I'm an ECE student at PES University who's obsessed with making hardware and AI work together in cool ways. I spend my days diving deep into circuit designs, coding AI models, and building robots that actually do interesting stuff.

My playground includes everything from Verilog and SystemC for hardcore hardware design to Python for AI magic. I love getting my hands dirty with EDA tools and creating solutions that blur the lines between traditional electronics and cutting-edge tech.

When I'm not debugging circuits or training models, you'll find me contributing to the IEEE RAS Club as a web developer. I'm always hunting for that sweet spot where innovation meets real-world impact.

Oh, and I'm also a competitive speed skater with some national-level wins under my belt – because why not be fast on wheels AND in problem-solving?`;

// ================================================================
// PROFESSIONAL EXPERIENCE
// ================================================================
export const EXPERIENCES = [
  {
    year: "May 2025 - Present",
    role: "Robotics Developer & Web Developer",
    company: "IEEE RAS Club, PES University",
    description: `Developed an interactive humanoid robot with real-time lip-sync using Gemini 1.5 Flash LLM on Raspberry Pi 5, integrating speech recognition, TTS, and servo-actuated facial animation. Designed and 3D-printed a robotic head with a custom silicone expression mesh for naturalistic movements. Additionally contributed to web development projects and technical implementations for club initiatives.`,
    technologies: [
      "Python", 
      "Raspberry Pi 5", 
      "Gemini LLM", 
      "TTS", 
      "Speech Recognition", 
      "3D Printing", 
      "Servo Control", 
      "ReactJS", 
      "NodeJS"
    ],
  },
];

// ================================================================
// PROJECT PORTFOLIO
// ================================================================
export const PROJECTS = [
  {
    title: "FPGA-Based CNN Hardware Accelerator for MNIST Digit Classification on AMD Kria KR260",
    image: project1,
    description:
      "Designed and implemented a hardware accelerator on AMD Kria KR260 FPGA using Verilog and Vivado for efficient MNIST digit classification, achieving ~98% accuracy with parallel MAC units for convolution, ReLU activation, max pooling, and AXI-Stream interface for PS-PL communication; optimized latency and power through pipelining, BRAM memory management, and DSP slice utilization.",
    technologies: [
      "Verilog", 
      "Vivado", 
      "FPGA", 
      "AMD Kria KR260", 
      "CNN", 
      "AXI-Stream",
    ],
    githubLink: "https://github.com/Tusharprabhu/CNN_Image_classification-on-K26"
  },

  {
    title: "Brain Tumor Classification and Personalized Treatment Recommendation",
    image: project2,
    description:
      "Designed an end-to-end bioinformatics pipeline for brain tumor classification and personalized treatment recommendation by leveraging DNABERT for DNA sequence analysis and SmileBERT for AI-driven molecular generation; validated sequences, analyzed feature distributions, and deployed an interactive interface with real-time visual outputs.",
    technologies: [
      "Python", 
      "PyTorch", 
      "HuggingFace", 
      "RDKit", 
      "DNABERT", 
      "SmileBERT"
    ],
    githubLink: "https://github.com/Tusharprabhu/BraintumorLLMmedication"
  },

  {
    title: "Conversational AI Robot with Real-Time Lip-Sync on Raspberry Pi 5",
    image: project3,
    description:
      "Built a fully interactive humanoid robot using Gemini 1.5 Flash LLM on Raspberry Pi 5 with a Python pipeline for speech recognition, TTS, and real-time lip-sync by mapping text to phonemes, visemes, and servo angles. Designed and 3D-printed a robotic head with a custom silicone expression mesh, actuated via PCA9685 for naturalistic facial animation.",
    technologies: [
      "Python", 
      "Raspberry Pi 5", 
      "Gemini LLM", 
      "TTS", 
      "PCA9685", 
      "3D Printing", 
      "Speech Recognition"
    ],
    githubLink: "https://github.com/Tusharprabhu/hir"
  },

  {
    title: "2D Floorplan to 3D and AR Visualisation",
    image: project4,
    description:
      "Built an end-to-end 2D-to-3D conversion pipeline using the python openCV library to generate 3D models from floorplan images; Image processing was done on image and Swagger API for real-time image-to-model conversion, and extended functionality to AR using Unity AR Foundation for real-world placement, scaling, and interaction, further extended to use GANS models to generate 2D floorplan design.",
    technologies: [
      "Python", 
      "OpenCV", 
      "Unity", 
      "AR Foundation", 
      "GANs", 
      "Swagger API", 
      "3D Modeling"
    ],
    githubLink: "https://github.com/Tusharprabhu/floor_plan_to_blender_model"
  },

  {
    title: "7 Variants of Systolic Array Architectures on Cadence Virtuoso",
    image: project1,
    description:
      "Implemented 7 variants of systolic array architectures in SystemC and simulated their behavior on Cadence Virtuoso; conducted detailed DC and parametric analysis for timing validation, pipeline balancing, and functional verification of convolution operations across multiple design topologies.",
    technologies: [
      "SystemC", 
      "Cadence Virtuoso", 
      "Verilog", 
      "ModelSim", 
      "GTKWave", 
      "DC Analysis"
    ],
    githubLink: "https://github.com/Tusharprabhu/systolic_array_convolution"
  },

  {
    title: "Hardware Trojan Detection System for Verilog using GPT2 Transformer",
    image: project2,
    description:
      "Built a hardware Trojan detection system for Verilog ALU designs using the fine-tuned-codegen-2B-Verilog transformer model (GPT-2, multi-query attention) to compute and compare code perplexity scores. The tool flags anomalies exceeding a 20% threshold as potential Trojans with help of pytorch and plotting it.",
    technologies: [
      "Python", 
      "PyTorch", 
      "GPT-2", 
      "Verilog", 
      "Matplotlib", 
      "CodeGen", 
      "Multi-Query Attention"
    ],
    githubLink: "https://github.com/Tusharprabhu/HardwareTrojanDetection"
  },

  {
    title: "Automated Iris & Pupil Detection in Eye Images",
    image: project3,
    description:
      "Short script for automated iris and pupil detection using OpenCV (Haar cascades, CLAHE, HoughCircles) with Matplotlib visualization; robust to missing detections and suitable for frontal eye images.",
    technologies: [
      "Python",
      "OpenCV",
      "NumPy",
      "Matplotlib",
      "Image Processing",
      "Haar Cascades",
      "CLAHE"
    ],
    githubLink: "https://github.com/Tusharprabhu/opencv"
  },

  {
    title: "Song Recommendation System using KNN",
    image: project4,
    description:
      "Simple KNN-based song recommender using danceability and energy features; includes preprocessing (standardization) and a notebook for interactive recommendations.",
    technologies: [
      "Python",
      "pandas",
      "scikit-learn",
      "KNN",
      "Data Preprocessing"
    ],
    githubLink: "https://github.com/Tusharprabhu/song-recommender"
  },
];

// ================================================================
// CONTACT INFORMATION
// ================================================================
export const CONTACT = {
  address: "Bangalore, Karnataka, India",
  phoneNo: "+91 1514334489",
  email: "tusharpes2004@gmail.com",
};