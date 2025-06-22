
import { Instagram, Linkedin, Github, Code } from 'lucide-react';
import { Button } from '@/components/ui/button';

const SocialLinks = () => {
  const socialLinks = [
    {
      name: 'Instagram',
      icon: Instagram,
      url: 'https://www.instagram.com/hariom__565?igsh=MXVyNXB2ZnV3YjNncA==',
      color: 'hover:text-pink-600',
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://linkedin.com/in/hariompawar-eng',
      color: 'hover:text-blue-600',
    },
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/hariom-p02',
      color: 'hover:text-gray-800',
    },
    {
      name: 'LeetCode',
      icon: Code,
      url: 'https://leetcode.com/u/hariom-eng',
      color: 'hover:text-orange-600',
    },
  ];

  return (
    <div className="flex justify-center space-x-6">
      {socialLinks.map((link) => {
        const IconComponent = link.icon;
        return (
          <Button
            key={link.name}
            variant="ghost"
            size="lg"
            asChild
            className={`transition-all duration-300 ${link.color} hover:scale-110`}
          >
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.name}
            >
              <IconComponent className="h-6 w-6" />
            </a>
          </Button>
        );
      })}
    </div>
  );
};

export default SocialLinks;
