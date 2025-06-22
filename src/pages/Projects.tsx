
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, BarChart3, Database } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'End-to-End Machine Learning Model Deployment',
      icon: BarChart3,
      technologies: ['Python', 'Scikit-Learn', 'Flask', 'Git'],
      description: 'Complete data science pipeline with real-time model deployment using Flask API.',
      features: [
        'EDA and feature engineering for actionable insights',
        'Model training and validation',
        'RESTful API development with Flask',
        'Real-time prediction capabilities',
        'Version control with Git'
      ],
      color: 'from-purple-500 to-purple-600'
    },
    {
      title: 'Banking Domain Analytics',
      icon: Database,
      technologies: ['Python', 'MySQL', 'Power BI'],
      description: 'Extracted and analyzed banking data to visualize key loan and customer trends.',
      features: [
        'Data extraction from MySQL databases',
        'Comprehensive data analysis and visualization',
        'Interactive Power BI dashboards',
        'Dynamic KPIs and performance metrics',
        'Customer behavior analysis'
      ],
      color: 'from-green-500 to-green-600'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-slate-50 py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            Featured Projects
          </h1>
          <p className="text-xl text-slate-600">
            Showcasing my skills in data science and web development
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <Card 
                key={index} 
                className="shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in hover:scale-105"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardHeader className={`bg-gradient-to-r ${project.color} text-white rounded-t-lg`}>
                  <div className="flex items-center space-x-3">
                    <IconComponent className="h-8 w-8" />
                    <CardTitle className="text-xl font-bold">{project.title}</CardTitle>
                  </div>
                </CardHeader>
                
                <CardContent className="p-6">
                  <p className="text-slate-700 mb-6 leading-relaxed">{project.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-slate-800 mb-3">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <Badge key={idx} variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-slate-800 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {project.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-slate-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex space-x-3">
                    <Button variant="outline" size="sm" className="flex items-center space-x-2">
                      <Github className="h-4 w-4" />
                      <span>Code</span>
                    </Button>
                    <Button size="sm" className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700">
                      <ExternalLink className="h-4 w-4" />
                      <span>Demo</span>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
