import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isFormValid) {
      setIsSubmitted(true);
      toast({
        title: "Message Sent!",
        description: "Thanks! I'll get back to you soon.",
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
      title: "NLP Chatbot using FastAPI",
      description:
        "Developed a backend chatbot using NLP techniques such as tokenization, stopword removal, and TF-IDF vectorization. It uses cosine similarity to match user queries and integrates Wikipedia API as a fallback for unknown queries.",
      tech: ["FastAPI", "Python", "NLTK", "TF-IDF", "Scikit-learn"],
      link: "https://github.com/usharani963/nlp-chatbot"
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
            <a href="#projects" className="hover:text-teal-600">Projects</a>
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
                  I am a third-year B.Tech student passionate about software development and problem-solving.
                  I have been working on backend systems, NLP projects, and improving my DSA skills.
                </p>
              </div>
              <img
                src="/assets/meenuga.jpeg"
                className="w-60 rounded-lg shadow"
              />
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

      {/* Certifications */}
      <section className="py-20 px-8 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-10">Certifications</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Flipkart Runway Season 5</CardTitle>
              <CardDescription>Participant</CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>MongoDB Python Developer Path</CardTitle>
              <CardDescription>MongoDB University</CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* Education */}
      <section className="py-20 px-8">
        <h2 className="text-3xl font-bold text-center mb-10">Education</h2>
        <Card className="max-w-4xl mx-auto">
          <CardContent className="p-6">
            <h3 className="font-bold text-lg">
              B.Tech – CSE (AI Specialization)
            </h3>
            <p className="text-teal-600">GPCET Kurnool</p>
            <p className="text-gray-500">2023–2027</p>
          </CardContent>
        </Card>
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

      {/* Contact */}
      <section id="contact" className="py-20 px-8 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-10">Contact</h2>

        {isSubmitted ? (
          <p className="text-center text-green-600">
            Message Sent Successfully!
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-4">
            <Input placeholder="Name" onChange={(e) => handleInputChange("name", e.target.value)} />
            <Input placeholder="Email" onChange={(e) => handleInputChange("email", e.target.value)} />
            <Textarea placeholder="Message" onChange={(e) => handleInputChange("message", e.target.value)} />
            <Button disabled={!isFormValid}>Send</Button>
          </form>
        )}
      </section>

      {/* Footer */}
      <footer className="py-6 text-center bg-gray-800 text-white">
        <p>© 2025 Meenuga Usharani</p>
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