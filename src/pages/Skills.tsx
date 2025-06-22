
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, Globe, BarChart, Brain } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming',
      icon: Code,
      color: 'from-blue-500 to-blue-600',
      skills: ['Python (Numpy, Pandas, Matplotlib, Seaborn, Scikit-learn)', 'SQL', 'JavaScript']
    },
    {
      title: 'Web Technologies',
      icon: Globe,
      color: 'from-green-500 to-green-600',
      skills: ['HTML', 'CSS', 'React', 'Node.js', 'Flask']
    },
    {
      title: 'Data Analytics',
      icon: BarChart,
      color: 'from-purple-500 to-purple-600',
      skills: ['Power BI', 'Excel', 'Exploratory Data Analysis (EDA)', 'Data Visualization', 'Statistical Analysis']
    },
    {
      title: 'Core Competencies',
      icon: Brain,
      color: 'from-orange-500 to-orange-600',
      skills: ['Machine Learning', 'Data Structures & Algorithms', 'Critical Thinking', 'Communication', 'Problem Solving']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-slate-50 py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            Skills & Expertise
          </h1>
          <p className="text-xl text-slate-600">
            Technologies and competencies I work with
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card 
                key={index} 
                className="shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in hover:scale-105"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className={`bg-gradient-to-r ${category.color} text-white rounded-t-lg`}>
                  <div className="flex items-center space-x-3">
                    <IconComponent className="h-8 w-8" />
                    <CardTitle className="text-2xl font-bold">{category.title}</CardTitle>
                  </div>
                </CardHeader>
                
                <CardContent className="p-6">
                  <div className="space-y-3">
                    {category.skills.map((skill, idx) => (
                      <div key={idx} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <Badge 
                          variant="outline" 
                          className="bg-slate-50 text-slate-700 border-slate-200 text-sm py-1 px-3"
                        >
                          {skill}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Additional Skills Section */}
        <div className="mt-12 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <Card className="shadow-lg">
            <CardHeader className="bg-gradient-to-r from-slate-600 to-slate-700 text-white rounded-t-lg">
              <CardTitle className="text-2xl font-bold text-center">Additional Expertise</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {['Git & Version Control', 'Database Design', 'API Development', 'Data Mining', 'Team Collaboration', 'Project Management', 'Technical Writing', 'Continuous Learning'].map((skill, idx) => (
                  <Badge 
                    key={idx} 
                    variant="outline" 
                    className="bg-blue-50 text-blue-700 border-blue-200 text-center py-2"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Skills;
