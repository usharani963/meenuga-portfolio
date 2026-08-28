import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";
import { Github, Linkedin, Mail, Download, ExternalLink } from "lucide-react";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [isFormValid, setIsFormValid] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const isValid =
      formData.name.length > 0 &&
      formData.email.includes("@") &&
      formData.message.length >= 10;
    setIsFormValid(isValid);
  }, [formData]);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  if (!isFormValid) return;

  try {
    await emailjs.send(
      "service_2nhoigr",
      "template_l3n9gh2",
      {
        name: formData.name,
        email: formData.email,
        message: formData.message,
      },
      "J8eC9EQs1UjNQp6wo"
    );

    setIsSubmitted(true);

    toast({
      title: "Message Sent!",
      description: "Thanks! I'll get back to you soon.",
    });

    setFormData({
      name: "",
      email: "",
      message: "",
    });

  } catch (error) {
    console.error("EmailJS Error:", error);

    toast({
      title: "Failed to send message",
      description: "Please try again later.",
    });
  }
};

  const skills = [
    "Java (OOP)",
    "Python",
    "SQL (Basic)",
    "HTML",
    "CSS",
    "JavaScript",
    "MongoDB (Basic)",
    "Git (Basic)"
  ];

 const projects = [
  {
    title: "MindHaven AI",
    description:
      "AI-powered mental wellness assistant with chatbot support, mood tracking, personalized guidance, and mental health resources using LLMs.",
    tech: ["Python", "FastAPI", "LangChain", "Ollama", "Streamlit"],
    link: "https://github.com/usharani963"
  },
  {
    title: "MERN Chat Application",
    description:
      "Real-time chat application with user authentication, instant messaging, image sharing, typing indicators, and Socket.IO integration.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Socket.IO"],
    link: "https://github.com/usharani963"
  }
];

  return (
    <div className="min-h-screen bg-white">

      {/* ✅ NAVBAR ADDED */}
      <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-teal-600">Usharani</h1>

         <div className="space-x-6 hidden md:flex">
  <a href="#home" className="hover:text-teal-600">Home</a>
  <a href="#about" className="hover:text-teal-600">About</a>
  <a href="#skills" className="hover:text-teal-600">Skills</a>
  <a href="#certifications" className="hover:text-teal-600">Certifications</a>
  <a href="#projects" className="hover:text-teal-600">Projects</a>
  <a href="#internship" className="hover:text-teal-600">Internship</a>
  <a href="#achievements" className="hover:text-teal-600">Achievements</a>
  <a href="#contact" className="hover:text-teal-600">Contact</a>
</div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-8 py-20 pt-24">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-bold text-gray-800 mb-6">
              Hi, I'm <span className="text-teal-600">Meenuga Usharani</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              B.Tech Student at GPCET Kurnool | Exploring Web Technologies, AI & Software Development
            </p>

            <a href="/assets/resume.pdf" download>
              <Button className="bg-teal-50 text-teal-700 border border-teal-200 hover:bg-teal-100 px-8 py-3">
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Button>

            </a>
            <div className="flex gap-4 mt-4">
  <a
    href="https://github.com/usharani963"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Button variant="outline">
      <Github className="mr-2 h-4 w-4" />
      GitHub
    </Button>
  </a>

  <a
    href="https://linkedin.com/in/meenugausharani963"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Button variant="outline">
      <Linkedin className="mr-2 h-4 w-4" />
      LinkedIn
    </Button>
  </a>
</div>
          </div>

          <div className="flex justify-center">
            <img
              src="/assets/meenuga.jpeg"
              alt="profile"
              className="w-72 h-72 rounded-full object-cover border-4 border-white shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <Card>
            <CardContent className="p-10 grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">About Me</h2>
                 <p className="text-gray-600">
      AI and Software Engineering enthusiast pursuing B.Tech in Computer Science
      with specialization in Artificial Intelligence. Skilled in Java, Python,
      React, FastAPI, MongoDB, and Machine Learning. Experienced in developing
      AI-powered applications, real-time systems, and full-stack web solutions.
    </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-20 px-8">
        <h2 className="text-3xl font-bold text-center mb-10">Skills</h2>
        <div className="flex flex-wrap justify-center gap-3">
          {skills.map((skill, i) => (
            <Badge key={i}>{skill}</Badge>
          ))}
        </div>
      </section>
<section id="certifications" className="py-20 px-8 bg-gray-50">
  <h2 className="text-3xl font-bold text-center mb-10">
    Certifications
  </h2>

  <div className="grid md:grid-cols-2 gap-6">

    <Card>
      <CardHeader>
        <CardTitle>AWS Certified Cloud Practitioner</CardTitle>
        <CardDescription>
          Globally Recognized Certification by Amazon Web Services (AWS)
        </CardDescription>
      </CardHeader>
    </Card>

    <Card>
      <CardHeader>
        <CardTitle>AWS Certified AI Practitioner</CardTitle>
        <CardDescription>
          Globally Recognized Certification by Amazon Web Services (AWS)
        </CardDescription>
      </CardHeader>
    </Card>
<Card>
  <CardHeader>
    <CardTitle>Java Programming</CardTitle>
    <CardDescription>
      Successfully completed Java Programming certification through CodeTantra
    </CardDescription>
  </CardHeader>
</Card>
   

    <Card>
      <CardHeader>
        <CardTitle>Tata Data Visualization</CardTitle>
        <CardDescription>
          Forage Virtual Experience Program
        </CardDescription>
      </CardHeader>
    </Card>

    <Card>
      <CardHeader>
        <CardTitle>Flipkart Runway Season 5</CardTitle>
        <CardDescription>
          Participant
        </CardDescription>
      </CardHeader>
    </Card>

  </div>
</section>

      {/* Education */}
    {/* Education */}
<section className="py-20 px-8">
  <h2 className="text-3xl font-bold text-center mb-10">
    Education
  </h2>

  <div className="max-w-4xl mx-auto space-y-6">

    <Card>
      <CardContent className="p-6">
        <h3 className="font-bold text-lg">
          B.Tech – CSE (AI Specialization)
        </h3>
        <p className="text-teal-600">
          G. Pullaiah College of Engineering and Technology, Kurnool
        </p>
        <p className="text-gray-500">
          2023 – 2027
        </p>
      </CardContent>
    </Card>

    <Card>
      <CardContent className="p-6">
        <h3 className="font-bold text-lg">
          Intermediate (Class XII)
        </h3>
        <p className="text-teal-600">
          KVR College for Girls, Kurnool, India
        </p>
        <p className="text-gray-500">
          Completed: April 2023
        </p>
      </CardContent>
    </Card>

    <Card>
      <CardContent className="p-6">
        <h3 className="font-bold text-lg">
          Secondary School Certificate (Class X)
        </h3>
        <p className="text-teal-600">
          Indira Gandhi Memorial High School, Kurnool, India
        </p>
        <p className="text-gray-500">
          Completed: April 2020
        </p>
      </CardContent>
    </Card>

  </div>
</section>

      {/* Projects */}
      <section id="projects" className="py-20 px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="text-teal-600">
                  {project.title}
                </CardTitle>
              </CardHeader>

              <CardContent>
                <p className="text-gray-600 mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <Badge key={i}>{tech}</Badge>
                  ))}
                </div>

                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    GitHub
                  </Button>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
<section id="internship" className="py-20 px-8 bg-gray-50">
  <h2 className="text-3xl font-bold text-center mb-10">
    Internship Experience
  </h2>

  <Card>
    <CardHeader>
      <CardTitle>
        AI & Machine Learning Intern – Rejolt Edtech Private Limited
      </CardTitle>
      <CardDescription>
        September 2025 – February 2026 (6 Months)
      </CardDescription>
      <h4 className="font-semibold mb-3">
  Project: Anomaly Detection in Network Activities Using Generative AI–Enhanced Hybrid Deep Learning
</h4>
    </CardHeader>
    
    <CardContent>
      <ul className="list-disc pl-5 space-y-2 text-gray-600">
        <li>
          Developed an intelligent anomaly detection system to identify abnormal network behavior and potential cyber threats.
        </li>
        <li>
          Built data preprocessing and feature engineering pipelines for network traffic analysis.
        </li>
        <li>
          Implemented hybrid deep learning models to improve anomaly classification accuracy.
        </li>
        <li>
          Explored Generative AI techniques for enhanced pattern analysis and threat detection support.
        </li>
        <li>
          Integrated model predictions into a real-time monitoring workflow for continuous network analysis.
        </li>
        <li>
          Generated classification outputs with confidence scores to assist security analysts in decision-making.
        </li>
      </ul>
    </CardContent>
  </Card>
</section>


          <section id="achievements" className="py-20 px-8 bg-gray-50">
  <h2 className="text-3xl font-bold text-center mb-10">
    Achievements
  </h2>

  <div className="grid md:grid-cols-2 gap-6">

    <Card>
      <CardHeader>
        <CardTitle>TCS CodeVita Season 12</CardTitle>
        <CardDescription>
          Qualified for Round 2 with Global Rank 569.
        </CardDescription>
      </CardHeader>
    </Card>
  
  </div>
</section>
      {/* Contact */}
    <section id="contact" className="py-20 px-8 bg-gray-50">
  <h2 className="text-3xl font-bold text-center mb-10">
    Contact
  </h2>

  {isSubmitted ? (
    <p className="text-center text-green-600">
      Message Sent Successfully!
    </p>
  ) : (
    <form
      onSubmit={handleSubmit}
      className="max-w-xl mx-auto space-y-4"
    >
      <Input
        placeholder="Name"
        value={formData.name}
        onChange={(e) =>
          handleInputChange("name", e.target.value)
        }
      />

      <Input
        type="email"
        placeholder="Email"
        value={formData.email}
        onChange={(e) =>
          handleInputChange("email", e.target.value)
        }
      />

      <Textarea
        placeholder="Message"
        value={formData.message}
        onChange={(e) =>
          handleInputChange("message", e.target.value)
        }
      />

      <Button type="submit" disabled={!isFormValid}>
        Send
      </Button>
    </form>
  )}
</section>
      {/* Footer */}
      <footer className="py-6 text-center bg-gray-800 text-white">
        <p>© 2026 Meenuga Usharani</p>
        <div className="flex justify-center gap-4 mt-2">
          <a href="https://github.com/usharani963"><Github /></a>
          <a href="https://linkedin.com/in/meenugausharani963"><Linkedin /></a>
          <a href="mailto:usharanimeenuga33@gmail.com"><Mail /></a>
        </div>
      </footer>
    </div>
  );
};

export default Index;