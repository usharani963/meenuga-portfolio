
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";
import { Github, Linkedin, Mail, Phone, Download, ExternalLink } from "lucide-react";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isFormValid, setIsFormValid] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const isValid = formData.name.length > 0 && 
                   formData.email.includes('@') && 
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
    "HTML5", "CSS3 (Tailwind)", "JavaScript", "Java (Spring Boot)", 
    "MongoDB", "REST APIs", "Git & GitHub", "Responsive Design"
  ];

  const projects = [
    {
      title: "Food Chatbot",
      description: "An interactive web-based chatbot for a fast food business using FastAPI and MongoDB for order tracking and conversation flow.",
      link: "#"
    },
    {
      title: "InstaChat",
      description: "A real-time chat app built with the MERN stack featuring image sharing, group messaging, and online indicators.",
      link: "#"
    },
    {
      title: "Fake News Detection App",
      description: "Android application powered by an LSTM-based machine learning model to classify news as real or fake. Built with TensorFlow Lite for on-device inference.",
      link: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-8 py-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-800 mb-6">
              Hi, I'm <span className="text-teal-600">Meenuga Usharani</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              B.Tech Student @ GPCET Kurnool | Passionate about Web Technologies
            </p>
          <a href="/assets/resume.pdf" download>
            <Button 
              className="bg-teal-50 text-teal-700 border border-teal-200 hover:bg-teal-100 hover:shadow-lg transition-all duration-300 px-8 py-3"
            >
              <Download className="mr-2 h-4 w-4" />
              Download Resume (PDF)
            </Button>
          </a>

          </div>
          <div className="flex justify-center lg:justify-end">
            <div className="w-80 h-80 bg-gradient-to-br from-teal-100 to-teal-200 rounded-full flex items-center justify-center">
              <img 
                src="/assets/meenuga.jpeg" 
                alt="Meenuga Usharani"
                className="w-72 h-72 rounded-full object-cover border-4 border-white shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <Card className="hover:shadow-lg hover:border-teal-200 transition-all duration-300 hover:-translate-y-1">
            <CardContent className="p-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl font-bold text-gray-800 mb-6">About Me</h2>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    I'm currently pursuing my B.Tech in Computer Applications & Informatics at GPCET Kurnool. 
                    I'm a driven learner with a strong interest in web technologies and backend systems, especially 
                    Java and MongoDB. Recently represented my college in the India Skills Competition at the State Level.
                  </p>
                </div>
                <div className="flex justify-center">
                  <div className="w-64 h-64 bg-gradient-to-br from-teal-100 to-teal-200 rounded-lg flex items-center justify-center">
                    <img 
                      src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=300&h=300&fit=crop&crop=face" 
                      alt="About Meenuga"
                      className="w-56 h-56 rounded-lg object-cover border-4 border-white shadow-lg"
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="bg-teal-50 text-teal-700 border border-teal-200 hover:bg-teal-100 hover:scale-105 transition-all duration-300 py-3 px-6 text-center justify-center cursor-pointer rounded-full text-sm font-medium"
                title={`Proficient in ${skill}`}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Certifications</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="hover:shadow-lg hover:border-teal-200 transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <CardTitle className="text-teal-700">Flipkart Runway Season 5</CardTitle>
                <CardDescription>Participant: Meenuga Usharani</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Participated in the Online Assessment organized by Flipkart
                </p>
                <p className="text-sm text-gray-500">Signed: Flipkart Team – Authorized Signatory</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg hover:border-teal-200 transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <CardTitle className="text-teal-700">MongoDB Python Developer Path</CardTitle>
                <CardDescription>MongoDB University</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-2">Credential ID: MDByne7hphrz2</p>
                <p className="text-gray-600 mb-4">Issued: May 26, 2025</p>
                <p className="text-sm text-gray-500">
                  Skills: MongoDB CRUD, Aggregation, Indexing, Pymongo, Query Optimization
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Education</h2>
          <Card className="hover:shadow-lg hover:border-teal-200 transition-all duration-300">
            <CardContent className="p-10">
              <div className="flex items-start space-x-6">
                <div className="w-4 h-4 bg-teal-500 rounded-full mt-2 hover:scale-125 transition-transform duration-300"></div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    B.Tech – Computer Science and Engineering with Specialization in Artificial Intelligence
                  </h3>
                  <p className="text-lg text-teal-600 mb-2">GPCET Kurnool</p>
                  <p className="text-gray-600 mb-2">2023–2027</p>
                  <p className="text-sm text-gray-500" title="Robust academic foundation with IEEE, labs & innovation support">
                    AICTE-approved, NBA-accredited, JNTUA-affiliated
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="hover:shadow-lg hover:border-teal-200 transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <CardTitle className="text-teal-700">{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <Button variant="outline" size="sm" className="text-teal-600 border-teal-200 hover:bg-teal-50">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View on GitHub
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Get In Touch</h2>
          
          {isSubmitted ? (
            <Card className="text-center p-10">
              <CardContent>
                <h3 className="text-2xl font-bold text-teal-700 mb-4">Thanks! I'll get back to you soon.</h3>
                <p className="text-gray-600">Your message has been received successfully.</p>
              </CardContent>
            </Card>
          ) : (
            <Card>
              <CardContent className="p-10">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name">Name</Label>
                    <Input 
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      placeholder="Enter your Name"
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input 
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      placeholder="Enter your Email Id"
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      placeholder="Hi Meenuga, I'd like to..."
                      rows={4}
                      required
                    />
                    {formData.message.length > 0 && formData.message.length < 10 && (
                      <p className="text-red-500 text-sm mt-1">Message is too short.</p>
                    )}
                  </div>
                  
                  <Button 
                    type="submit" 
                    disabled={!isFormValid}
                    className="w-full bg-teal-600 hover:bg-teal-700 disabled:bg-gray-300"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-8 bg-gray-800 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-300">© 2025 Meenuga Usharani</p>
            
            <div className="flex items-center space-x-6">
              <a 
                href="mailto:usharanimeenuga33@gmail.com" 
                className="flex items-center text-gray-300 hover:text-teal-400 transition-colors duration-300"
              >
                <Mail className="mr-2 h-4 w-4" />
                usharanimeenuga33@gmail.com
              </a>
              
              <a 
                href="https://linkedin.com/in/meenugausharani963" 
                className="text-gray-300 hover:text-teal-400 transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              
              <a 
                href="https://github.com/usharani963" 
                className="text-gray-300 hover:text-teal-400 transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
