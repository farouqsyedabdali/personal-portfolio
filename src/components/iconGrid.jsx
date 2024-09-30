import React from 'react';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaGitSquare, FaSass, FaJava } from 'react-icons/fa';
import { DiMongodb, DiMysql, DiHtml5 } from 'react-icons/di';
import { SiTypescript, SiNextDotJs, SiExpress } from 'react-icons/si';

const techIcons = [
  { icon: FaHtml5, name: 'HTML' },
  { icon: FaCss3Alt, name: 'CSS' },
  { icon: FaJsSquare, name: 'JavaScript' },
  { icon: FaReact, name: 'React' },
  { icon: SiExpress, name: 'Express.js' },
  { icon: FaNodeJs, name: 'Node.js' },
  { icon: FaJava, name: 'Java' },
  { icon: SiTypescript, name: 'TypeScript' },
  { icon: DiMysql, name: 'MySQL' },
  { icon: DiHtml5, name: 'HTML5' }
];

function IconGrid() {
  return (
    <div className="bg-black p-10">
      <div className="grid grid-cols-3 gap-4 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
        {techIcons.map((tech, index) => (
          <div key={index} className="flex flex-col items-center justify-center p-4 bg-gray-800 rounded-lg">
            <tech.icon className="text-3xl text-white mb-2" />
            <span className="text-sm text-white">{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default IconGrid;
