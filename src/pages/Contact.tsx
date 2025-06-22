
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Phone, Mail, MessageCircle } from 'lucide-react';
import SocialLinks from '@/components/SocialLinks';

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Location',
      content: 'Indore, India',
      color: 'text-red-600'
    },
    {
      icon: Phone,
      title: 'Phone',
      content: '+91 7566655963',
      color: 'text-green-600'
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'hariompawar.eng@gmail.com',
      color: 'text-blue-600'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-slate-50 py-16">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            Get In Touch
          </h1>
          <p className="text-xl text-slate-600">
            Let's connect and discuss opportunities
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {contactInfo.map((info, index) => {
            const IconComponent = info.icon;
            return (
              <Card 
                key={index} 
                className="shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in hover:scale-105"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    <div className={`w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center ${info.color}`}>
                      <IconComponent className="h-8 w-8" />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-slate-800 mb-2">{info.title}</h3>
                  <p className="text-slate-600">{info.content}</p>
                  
                  {info.title === 'Phone' && (
                    <Button variant="outline" size="sm" className="mt-3" asChild>
                      <a href={`tel:${info.content}`}>Call Now</a>
                    </Button>
                  )}
                  
                  {info.title === 'Email' && (
                    <Button variant="outline" size="sm" className="mt-3" asChild>
                      <a href={`mailto:${info.content}`}>Send Email</a>
                    </Button>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Social Media Section */}
        <Card className="shadow-lg animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <CardHeader className="bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-t-lg">
            <CardTitle className="text-2xl font-bold text-center">Connect on Social Media</CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <SocialLinks />
            <p className="text-center text-slate-600 mt-6">
              Follow me on social media for updates on my latest projects and professional journey.
            </p>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <div className="text-center mt-12 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <Card className="bg-gradient-to-r from-slate-600 to-slate-700 text-white">
            <CardContent className="p-8">
              <MessageCircle className="h-12 w-12 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">Ready to Collaborate?</h3>
              <p className="text-lg mb-6">
                I'm always interested in discussing new opportunities, innovative projects, and ways to leverage data for meaningful insights.
              </p>
              <Button size="lg" variant="secondary" asChild>
                <a href="mailto:hariompawar.eng@gmail.com">Start a Conversation</a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;
