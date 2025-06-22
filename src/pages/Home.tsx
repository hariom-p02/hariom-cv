
import SocialLinks from '@/components/SocialLinks';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Download } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-slate-50">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center">
          {/* Profile Image */}
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

          {/* Welcome Message */}
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h1 className="text-5xl md:text-6xl font-bold text-slate-800 mb-6">
              Hi, I am <span className="text-blue-600">Hariom</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-slate-600 mb-8 font-light">
              Web and Data Professional
            </h2>
          </div>

          {/* Description */}
          <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Card className="max-w-4xl mx-auto mb-12 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <p className="text-lg text-slate-700 leading-relaxed">
                  Passionate about transforming data into actionable insights and building robust web solutions. 
                  Currently pursuing a Master's in Big Data Analytics while specializing in machine learning, 
                  data visualization, and full-stack development. I combine analytical thinking with creative 
                  problem-solving to deliver impactful technology solutions.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Social Links */}
          <div className="animate-fade-in mb-12" style={{ animationDelay: '0.6s' }}>
            <h3 className="text-xl font-semibold text-slate-700 mb-6">Connect with me</h3>
            <SocialLinks />
          </div>

          {/* Action Buttons */}
          <div className="animate-fade-in flex flex-col sm:flex-row gap-4 justify-center" style={{ animationDelay: '0.8s' }}>
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
              <Link to="/projects">
                View My Work
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="border-slate-300 hover:bg-slate-50">
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
