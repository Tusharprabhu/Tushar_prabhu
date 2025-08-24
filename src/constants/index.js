import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I'm an electronics and communication engineering student at PES University RR campus, with a passion for hardware design and digital circuit modeling. I work extensively with Verilog HDL, SystemC, and various EDA tools, while also exploring AI/ML applications in hardware verification and bioinformatics.`;

export const ABOUT_TEXT = `I am a dedicated Electronics and Communication Engineering student with expertise spanning hardware design, digital circuit verification, and AI/ML applications. My technical journey encompasses working with Verilog, SystemC, Python, and various EDA tools like Cadence Virtuoso. I specialize in systolic array architectures, hardware verification, and have developed innovative solutions combining bioinformatics with AI. My projects range from brain tumor classification systems to hardware Trojan detection using transformer models. I thrive on solving complex technical challenges and continuously expanding my knowledge in both hardware and software domains. Outside of academics, I'm a competitive speed skater with national-level achievements and actively contribute to the IEEE club at my university.`;

export const EXPERIENCES = [
  {
    year: "May 2023 - Present",
    role: "Web Developer",
    company: "IEEE RAS Club, PES University",
    description: `Collaborating with the web development team at the IEEE club, contributing to various projects and initiatives. Working on club website development and technical project implementations using modern web technologies.`,
    technologies: ["HTML", "CSS", "Javascript", "ReactJS", "NodeJS"],
  },
];

export const PROJECTS = [
  {
    title: "Brain Tumor Classification and Personalized Treatment Recommendation",
    image: project1,
    description:
      "Designed an end-to-end bioinformatics pipeline for brain tumor classification and personalized treatment recommendation by leveraging DNABERT for DNA sequence analysis and SmileBERT for AI-driven molecular generation; validated sequences, analyzed feature distributions, and deployed an interactive interface with real-time visual outputs.",
    technologies: ["Python", "PyTorch", "HuggingFace", "RDKit", "DNABERT", "SmileBERT"],
    githubLink: "https://github.com/Tusharprabhu/BraintumorLLMmedication"
  },
  {
    title: "Conversational AI Robot with Real-Time Lip-Sync on Raspberry Pi 5",
    image: project2,
    description:
      "Built a fully interactive humanoid robot using Gemini 1.5 Flash LLM on Raspberry Pi 5 with a Python pipeline for speech recognition, TTS, and real-time lip-sync by mapping text to phonemes, visemes, and servo angles. Designed and 3D-printed a robotic head with a custom silicone expression mesh, actuated via PCA9685 for naturalistic facial animation.",
    technologies: ["Python", "Raspberry Pi 5", "Gemini LLM", "TTS", "PCA9685", "3D Printing", "Speech Recognition"],
    githubLink: "https://github.com/Tusharprabhu/hir"
  },
  {
    title: "2D Floorplan to 3D and AR Visualisation",
    image: project3,
    description:
      "Built an end-to-end 2D-to-3D conversion pipeline using the python openCV library to generate 3D models from floorplan images; Image processing was done on image and Swagger API for real-time image-to-model conversion, and extended functionality to AR using Unity AR Foundation for real-world placement, scaling, and interaction, further extended to use GANS models to generate 2D floorplan design.",
    technologies: ["Python", "OpenCV", "Unity", "AR Foundation", "GANs", "Swagger API", "3D Modeling"],
    githubLink: "https://github.com/Tusharprabhu/floor_plan_to_blender_model"
  },
  {
    title: "7 Variants of Systolic Array Architectures on Cadence Virtuoso",
    image: project4,
    description:
      "Implemented 7 variants of systolic array architectures in SystemC and simulated their behavior on Cadence Virtuoso; conducted detailed DC and parametric analysis for timing validation, pipeline balancing, and functional verification of convolution operations across multiple design topologies.",
    technologies: ["SystemC", "Cadence Virtuoso", "Verilog", "ModelSim", "GTKWave", "DC Analysis"],
    githubLink: "https://github.com/Tusharprabhu/systolic_array_convolution"
  },
  {
    title: "Hardware Trojan Detection System for Verilog using GPT2 Transformer",
    image: project1,
    description:
      "Built a hardware Trojan detection system for Verilog ALU designs using the fine-tuned-codegen-2B-Verilog transformer model (GPT-2, multi-query attention) to compute and compare code perplexity scores. The tool flags anomalies exceeding a 20% threshold as potential Trojans with help of pytorch and plotting it.",
    technologies: ["Python", "PyTorch", "GPT-2", "Verilog", "Matplotlib", "CodeGen", "Multi-Query Attention"],
    githubLink: "https://github.com/Tusharprabhu/HardwareTrojanDetection"
  },
];

export const CONTACT = {
  address: "Bangalore, Karnataka, India",
  phoneNo: "+91 9844334151",
  email: "tusharprabhu2004@gmail.com",
};