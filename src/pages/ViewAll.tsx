
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import SocialLinks from '@/components/SocialLinks';
import { 
  GraduationCap, 
  Calendar, 
  BarChart3, 
  Database, 
  Code, 
  Globe, 
  Brain,
  MapPin, 
  Phone, 
  Mail,
  ExternalLink,
  Github,
  Download,
  ArrowRight
} from 'lucide-react';

const ViewAll = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-slate-50">
      
      {/* Hero Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="relative mb-8 animate-fade-in">
            <div className="w-48 h-48 mx-auto rounded-full overflow-hidden shadow-2xl ring-4 ring-white">
              <img
                src="/lovable-uploads/f2ed0b2b-dcae-4467-9b3b-8a8588955b57.png"
                alt="Hariom Pawar"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-green-500 rounded-full border-4 border-white"></div>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-slate-800 mb-6 animate-fade-in">
            Hi, I am <span className="text-blue-600">Hariom</span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-slate-600 mb-8 font-light animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Web and Data Professional
          </h2>

          <Card className="max-w-4xl mx-auto mb-12 shadow-lg animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <CardContent className="p-8">
              <p className="text-lg text-slate-700 leading-relaxed">
                Passionate about transforming data into actionable insights and building robust web solutions. 
                Currently pursuing a Master's in Big Data Analytics while specializing in machine learning, 
                data visualization, and full-stack development.
              </p>
            </CardContent>
          </Card>

          <div className="animate-fade-in mb-8" style={{ animationDelay: '0.6s' }}>
            <SocialLinks />
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-slate-800 text-center mb-12">Education</h2>
          
          <div className="space-y-8">
            <Card className="shadow-lg">
              <CardHeader className="bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-t-lg">
                <div className="flex items-center space-x-3">
                  <GraduationCap className="h-8 w-8" />
                  <div>
                    <CardTitle className="text-2xl font-bold">Master of Big Data Analytics</CardTitle>
                    <p className="text-blue-100 text-lg">DAVV University, Indore</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <div className="flex items-center space-x-2 mb-4">
                  <Calendar className="h-5 w-5 text-slate-500" />
                  <span className="text-slate-600 font-medium">Aug 2024 – Jul 2025</span>
                  <Badge className="bg-green-500 hover:bg-green-600">Current</Badge>
                </div>
                <p className="text-slate-700">Advanced studies in data analytics, machine learning, and big data technologies.</p>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardHeader className="bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-t-lg">
                <div className="flex items-center space-x-3">
                  <GraduationCap className="h-8 w-8" />
                  <div>
                    <CardTitle className="text-2xl font-bold">Bachelor of Computer Science & IT</CardTitle>
                    <p className="text-blue-100 text-lg">RGPV University, IPS Academy, Indore</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <div className="flex items-center space-x-2 mb-4">
                  <Calendar className="h-5 w-5 text-slate-500" />
                  <span className="text-slate-600 font-medium">Aug 2020 – Jun 2024</span>
                  <Badge variant="secondary">Completed</Badge>
                </div>
                <p className="text-slate-700">Comprehensive computer science education with focus on programming, algorithms, and software development.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-slate-800 text-center mb-12">Featured Projects</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader className="bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-t-lg">
                <div className="flex items-center space-x-3">
                  <BarChart3 className="h-8 w-8" />
                  <CardTitle className="text-xl font-bold">End-to-End ML Model Deployment</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-slate-700 mb-4">Complete data science pipeline with real-time model deployment using Flask API.</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {['Python', 'Scikit-Learn', 'Flask', 'Git'].map((tech, idx) => (
                    <Badge key={idx} variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex space-x-3">
                  <Button variant="outline" size="sm">
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </Button>
                  <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Demo
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader className="bg-gradient-to-r from-green-500 to-green-600 text-white rounded-t-lg">
                <div className="flex items-center space-x-3">
                  <Database className="h-8 w-8" />
                  <CardTitle className="text-xl font-bold">Banking Domain Analytics</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-slate-700 mb-4">Extracted and analyzed banking data to visualize key loan and customer trends.</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {['Python', 'MySQL', 'Power BI'].map((tech, idx) => (
                    <Badge key={idx} variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex space-x-3">
                  <Button variant="outline" size="sm">
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </Button>
                  <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-slate-800 text-center mb-12">Skills & Expertise</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="shadow-lg">
              <CardHeader className="bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-t-lg">
                <div className="flex items-center space-x-3">
                  <Code className="h-6 w-6" />
                  <CardTitle className="text-xl font-bold">Programming</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="p-4">
                <div className="flex flex-wrap gap-2">
                  {['Python', 'SQL', 'JavaScript'].map((skill, idx) => (
                    <Badge key={idx} variant="outline" className="bg-slate-50 text-slate-700">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardHeader className="bg-gradient-to-r from-green-500 to-green-600 text-white rounded-t-lg">
                <div className="flex items-center space-x-3">
                  <Globe className="h-6 w-6" />
                  <CardTitle className="text-xl font-bold">Web Technologies</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="p-4">
                <div className="flex flex-wrap gap-2">
                  {['HTML', 'CSS', 'React', 'Flask'].map((skill, idx) => (
                    <Badge key={idx} variant="outline" className="bg-slate-50 text-slate-700">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardHeader className="bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-t-lg">
                <div className="flex items-center space-x-3">
                  <BarChart3 className="h-6 w-6" />
                  <CardTitle className="text-xl font-bold">Data Analytics</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="p-4">
                <div className="flex flex-wrap gap-2">
                  {['Power BI', 'Excel', 'EDA'].map((skill, idx) => (
                    <Badge key={idx} variant="outline" className="bg-slate-50 text-slate-700">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardHeader className="bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-t-lg">
                <div className="flex items-center space-x-3">
                  <Brain className="h-6 w-6" />
                  <CardTitle className="text-xl font-bold">Core Competencies</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="p-4">
                <div className="flex flex-wrap gap-2">
                  {['Machine Learning', 'Algorithms', 'Critical Thinking'].map((skill, idx) => (
                    <Badge key={idx} variant="outline" className="bg-slate-50 text-slate-700">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-slate-800 text-center mb-12">Contact Information</h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="shadow-lg text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">Location</h3>
                <p className="text-slate-600">Indore, India</p>
              </CardContent>
            </Card>

            <Card className="shadow-lg text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">Phone</h3>
                <p className="text-slate-600">+91 7566655963</p>
              </CardContent>
            </Card>

            <Card className="shadow-lg text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">Email</h3>
                <p className="text-slate-600">hariompawar.eng@gmail.com</p>
              </CardContent>
            </Card>
          </div>

          <Card className="shadow-lg">
            <CardHeader className="bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-t-lg">
              <CardTitle className="text-2xl font-bold text-center">Connect on Social Media</CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <SocialLinks />
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default ViewAll;
