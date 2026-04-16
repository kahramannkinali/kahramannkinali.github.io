/* 
  PORTFOLIO DATA FILE - DARK THEME EDITION
  ----------------------------------------
  Update this file to change content. 
  No HTML knowledge required.
*/
const portfolioData = {
  // --- General Info ---
  name: "Kahraman KINALI",
  role: "Electrical & Electronics Engineering Student",
  location: "İstanbul,Türkiye/Turkey",
  // --- Hero Section ---
  hero: {
    headline: "Engineering Focuses",
    subheadline: "An EEE student with a focus on IoT, robotics, and sustainable technology/energy.",
    ctaText: "View My Projects",
    ctaLink: "#projects",
    // ✅ FIX 1: Updated name from "Your+Name" to your actual name
    profileImage: "./Profil.jpg"
    // To use a local photo instead: "./images/profile.jpg"
  },
  // --- About Section ---
  about: {
    title: "About Me",
    description: `
      I am an Electrical and Electronics Engineering student passionate about robotics and efficiency. 
      My academic background has provided me with a strong foundation in circuit analysis,and coding in Java while my personal projects have pushed me to learn about many diffrent topics like sustainble energy, infrastucture and grids I am also capable of designing in 3D since middle-school.
I am interesed in topics like Sustainabilty,Renewable Energy and IoT. 
    `,
    skills: ["Java", "3D design", "IoT",]
  },
  // --- Projects Section ---
  projects: [
    {
      title: "Optifarm",
      category: "Startup / AI & IoT",
      description: "Me and my 2 other friends had a change develop a startup idea in an event out university was hosted and in that event I desinged a webiste that was ment to analysie the wheater, soil ,terrain of an spesific area with this input the AI would give you advices that optimizes the yield from the farm.",
      technologies: ["Python", "IoT Sensors", "Machine Learning", "Data Analytics"],
      link: "https://kahramannkinali.github.io/OPTIFARM/" 
    }
  ],
  // --- CV / Resume Section ---
  cv: {
    title: "Curriculum Vitae",
    text: "Interested in my full professional background? Download my resume to see my education, certifications, and detailed experience.",
    buttonText: "Download Resume",
    fileURL: "./Kahraman_KINALI_CV.pdf"
  },
  // --- Contact Section ---
  contact: {
    title: "Get In Touch",
    description: "I am currently open to internships and collaborative projects. Feel free to reach out via email or connect on professional platforms.",
    email: "kinalik@mef.edu", 
    social: {
      linkedin: "https://www.linkedin.com/in/kahraman-kinali-900281324/",
      github: "https://github.com/kahramannkinali",
      twitter: "" 
    }
  },
  // --- Footer ---
  footer: {
    text: "© 2024 Your Name. Built with precision."
  }
};
