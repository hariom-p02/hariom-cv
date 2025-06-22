
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, Calendar } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      degree: 'Master of Big Data Analytics',
      institution: 'DAVV University, Indore',
      duration: 'Aug 2024 – Jul 2025',
      status: 'Current',
      description: 'Advanced studies in data analytics, machine learning, and big data technologies.',
      highlights: ['Advanced Machine Learning', 'Big Data Processing', 'Statistical Analysis', 'Data Visualization']
    },
    {
      degree: 'Bachelor of Computer Science & IT',
      institution: 'RGPV University, IPS Academy, Indore',
      duration: 'Aug 2020 – Jun 2024',
      status: 'Completed',
      description: 'Comprehensive computer science education with focus on programming, algorithms, and software development.',
      highlights: ['Data Structures & Algorithms', 'Database Management', 'Web Development', 'Software Engineering']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-slate-50 py-16">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            Educational Journey
          </h1>
          <p className="text-xl text-slate-600">
            Building knowledge and skills for the future
          </p>
        </div>

        <div className="space-y-8">
          {educationData.map((edu, index) => (
            <Card 
              key={index} 
              className="shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader className="bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-t-lg">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <GraduationCap className="h-8 w-8" />
                    <div>
                      <CardTitle className="text-2xl font-bold">{edu.degree}</CardTitle>
                      <p className="text-blue-100 text-lg">{edu.institution}</p>
                    </div>
                  </div>
                  <Badge 
                    variant={edu.status === 'Current' ? 'default' : 'secondary'}
                    className={edu.status === 'Current' ? 'bg-green-500 hover:bg-green-600' : ''}
                  >
                    {edu.status}
                  </Badge>
                </div>
              </CardHeader>
              
              <CardContent className="p-6">
                <div className="flex items-center space-x-2 mb-4">
                  <Calendar className="h-5 w-5 text-slate-500" />
                  <span className="text-slate-600 font-medium">{edu.duration}</span>
                </div>
                
                <p className="text-slate-700 mb-6 leading-relaxed">{edu.description}</p>
                
                <div>
                  <h4 className="font-semibold text-slate-800 mb-3">Key Areas:</h4>
                  <div className="flex flex-wrap gap-2">
                    {edu.highlights.map((highlight, idx) => (
                      <Badge key={idx} variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                        {highlight}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
