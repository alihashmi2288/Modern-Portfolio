import React, { forwardRef } from 'react';
import type { Skill } from '../types';
import Section from './Section';
import { ReactIcon, TypeScriptIcon, NodeIcon, TailwindIcon, GitIcon, PythonIcon, OpenAIIcon } from './IconComponents';

const skillsData: { category: string; list: Skill[] }[] = [
    {
        category: 'Frontend',
        list: [
            { name: 'React', icon: ReactIcon },
            { name: 'TypeScript', icon: TypeScriptIcon },
            { name: 'Tailwind CSS', icon: TailwindIcon },
            { name: 'Next.js', icon: (props) => <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor" {...props}><path d="M16.928 2.348c-4.735 0-8.572 3.837-8.572 8.572s3.837 8.572 8.572 8.572 8.572-3.837 8.572-8.572-3.837-8.572-8.572-8.572zm0 15.932c-4.053 0-7.348-3.295-7.348-7.36s3.295-7.36 7.348-7.36 7.348 3.295 7.348 7.36-3.295 7.36-7.348 7.36zM3.658 9.242h3.816v1.272H4.93v2.544h2.544v1.272H3.658v2.544H2.386V9.242h1.272zm4.446 0h1.272l2.226 5.419 2.226-5.419h1.272v7.632H14.1v-5.69l-1.91 4.6-1.91-4.6v5.69H8.104V9.242z"/></svg> },
        ],
    },
    {
        category: 'Backend',
        list: [
            { name: 'Node.js', icon: NodeIcon },
            { name: 'Express', icon: (props) => <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor" {...props}><path d="M24 18.358c-.015-.246-.076-.483-.178-.707l-1.61-3.626c-.15-.337-.367-.61-.634-.803l-5.263-3.763c-.156-.112-.34-.176-.534-.176h-3.328l2.95 2.95h.378c.453 0 .822.37.822.823v1.398c0 .453-.37.823-.822.823h-3.328l4.473 4.473c.26.26.42.61.42.99v.15c0 .3-.1.577-.282.813l-2.09 2.72c-.173.226-.41.37-.67.388h-9.04c-.453 0-.822-.37-.822-.823v-2.09c0-.453.37-.823.822-.823h7.228l-4.1-4.1H2.4c-.453 0-.822-.37-.822-.823v-1.398c0-.453.37-.823.822-.823h7.193l-2.77-2.77H1.578c-.29 0-.554-.15-.71-.396L0 7.915c-.173-.27-.204-.604-.082-.91.12-.304.396-.51.72-.51h10.92L14.4.267C14.59.09 14.85 0 15.12 0h3.36c.453 0 .822.37.822.823v2.09c0 .453-.37.823-.822.823h-2.128l-2.203 2.204h1.306c.29 0 .553.15.71.397l2.823 4.234c.174.26.204.585.09.88-.112.29-.38.49-.69.49h-1.316l2.13 2.13h.387c.453 0 .822.37.822.823v2.09c0 .453-.37.823-.822.823h-1.32c-.016 0-.03-.006-.046-.006z"/></svg> },
            { name: 'Python', icon: PythonIcon },
        ],
    },
    {
        category: 'Tools & Databases',
        list: [
            { name: 'Git', icon: GitIcon },
            { name: 'Figma', icon: (props) => <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor" {...props}><path d="M12 0c-2.75 0-5 2.25-5 5v5c0 2.75 2.25 5 5 5s5-2.25 5-5V5c0-2.75-2.25-5-5-5zM7 14.5c0 .28-.22.5-.5.5s-.5-.22-.5-.5v-4c0-.28.22-.5.5-.5s.5.22.5.5v4zM12 24c2.75 0 5-2.25 5-5s-2.25-5-5-5-5 2.25-5 5 2.25 5 5 5z"/></svg> },
            { name: 'MongoDB', icon: (props) => <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor" {...props}><path d="M15.462 20.32c-3.136.257-5.526-1.57-5.83-4.524-.03-.303.045-.615.152-.915.227-.63.66-1.166 1.25-1.545.973-.623 2.215-.85 3.442-.622 3.12.57 5.107 3.33 4.545 6.32a4.94 4.94 0 0 1-3.56 3.286zM12.18 10.19c-.315-.99-.78-1.92-1.365-2.79a11.53 11.53 0 0 0-4.636-4.528C5.115 2.19 3.84 1.76 2.52 1.965c-1.35.21-2.43 1.156-2.43 2.476v11.1c0 1.275 1.035 2.31 2.31 2.31.045 0 .09-.015.135-.015.015 1.515.78 2.91 2.055 3.84 1.17.84 2.655 1.2 4.14 1.05 1.35-.15 2.61-.81 3.51-1.845 1.125-1.29 1.755-2.956 1.74-4.695.014-2.085-.855-4.08-2.52-5.46-1.125-.945-2.49-1.59-3.96-1.935z"/></svg> },
            { name: 'OpenAI SDK', icon: OpenAIIcon },
        ],
    },
];


const Skills = forwardRef<HTMLElement>((props, ref) => {
    return (
        <Section ref={ref} id="skills">
            <h2 className="text-center text-4xl font-bold text-slate-100 mb-16">
                My Tech <span className="text-cyan-400">Arsenal</span>
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                 {skillsData.flatMap(({ category, list }) => 
                    list.map(skill => (
                        <div key={skill.name} className="group relative bg-slate-900/50 p-6 rounded-xl border border-slate-700/50 text-center transition-all duration-300 hover:border-cyan-500/50 hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/10">
                            <div className="flex justify-center mb-4">
                               <skill.icon className="w-12 h-12 text-slate-400 group-hover:text-cyan-400 transition-colors duration-300" />
                            </div>
                            <h3 className="font-bold text-lg text-slate-300 group-hover:text-white transition-colors duration-300">{skill.name}</h3>
                        </div>
                    ))
                )}
            </div>
        </Section>
    );
});

Skills.displayName = 'Skills';

export default Skills;