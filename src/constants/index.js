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
    title: "Brain Tumor Classification & Treatment Recommendation",
    image: project1,
    description:
      "Designed an end-to-end bioinformatics pipeline leveraging DNABERT for DNA sequence analysis and SmileBERT for AI-driven molecular generation. Built interactive interface with real-time visual outputs for personalized treatment recommendations.",
    technologies: ["Python", "PyTorch", "HuggingFace", "RDKit", "DNABERT", "SmileBERT"],
  },
  {
    title: "Hardware Trojan Detection System",
    image: project2,
    description:
      "Built a hardware Trojan detection system for Verilog ALU designs using fine-tuned GPT-2 transformer model. Computes code perplexity scores and flags anomalies exceeding 20% threshold as potential Trojans.",
    technologies: ["Python", "PyTorch", "GPT-2", "Verilog", "Matplotlib"],
  },
  {
    title: "2D Floorplan to 3D and AR Visualization",
    image: project3,
    description:
      "Built end-to-end 2D-to-3D conversion pipeline using OpenCV for generating 3D models from floorplan images. Extended functionality to AR using Unity AR Foundation for real-world placement and interaction, with GAN models for 2D floorplan generation.",
    technologies: ["Python", "OpenCV", "Unity", "AR Foundation", "GANs", "Swagger API"],
  },
  {
    title: "Systolic Array Architectures on Cadence Virtuoso",
    image: project4,
    description:
      "Implemented 7 variants of systolic array architectures in SystemC and simulated on Cadence Virtuoso. Conducted detailed DC and parametric analysis for timing validation, pipeline balancing, and functional verification of convolution operations.",
    technologies: ["SystemC", "Cadence Virtuoso", "Verilog", "ModelSim", "GTKWave"],
  },
];

export const CONTACT = {
  address: "Bangalore, Karnataka, India",
  phoneNo: "+91 9844334151",
  email: "tusharprabhu2004@gmail.com",
};