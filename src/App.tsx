import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  ExternalLink,
  Github,
  Instagram,
  Mail,
  Moon,
  Sun,
  Globe,
} from "lucide-react";

function App() {
  const [isDark, setIsDark] = useState(true);
  const [lang, setLang] = useState<"ko" | "en">("ko");

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  const content = {
    ko: {
      greeting: "안녕하세요, ",
      role: "개발자 이현우",
      suffix: "입니다.",
      desc1: "Front-end Developer",
      desc2: 'Front-end is "Ganji"',
      aboutTitle: "About Me",
      aboutDesc:
        "안녕하세요. 협업 중심적 소통하는 개발자 이현우 입니다. 기술적으로도 협업적으로도 여러 분야에서 빛날 수 있는 저를 만들어가기 위해 스스로 돌아봅니다.",
      stackTitle: "Stack",
      stackDesc: "여기에 기술 스택 아이콘과 설명이 들어갈 예정입니다.",
      projectsTitle: "Projects",
      projectsDesc:
        "여기에 팀 프로젝트와 개인 프로젝트 카드가 들어갈 예정입니다.",
      projectsList: [
        {
          id: 1,
          title: "프로젝트1",
          desc: "프로젝트에 대한 설명",
          tech: ["React", "TypeScript", "Tailwind CSS"],
          color: "from-blue-400/20 to-purple-500/20",
          hoverColor: "group-hover:text-blue-500",
        },
        {
          id: 2,
          title: "프로젝트2",
          desc: "프로젝트에 대한 설명",
          tech: ["React", "TypeScript", "Tailwind CSS"],
          color: "from-green-400/20 to-emerald-500/20",
          hoverColor: "group-hover:text-green-500",
        },
        {
          id: 3,
          title: "프로젝트3",
          desc: "프로젝트에 대한 설명",
          tech: ["React", "TypeScript", "Tailwind CSS"],
          color: "from-orange-400/20 to-red-500/20",
          hoverColor: "group-hover:text-orange-500",
        },
        {
          id: 4,
          title: "프로젝트4",
          desc: "프로젝트에 대한 설명",
          tech: ["React", "TypeScript", "Tailwind CSS"],
          color: "from-cyan-400/20 to-blue-500/20",
          hoverColor: "group-hover:text-cyan-500",
        },
      ],
    },
    en: {
      greeting: "Hello, I'm ",
      role: "Hyunwoo Lee",
      suffix: ", a Developer.",
      desc1: "Front-end Developer",
      desc2: 'Front-end is "Ganji"',
      aboutTitle: "About Me",
      aboutDesc:
        "Hello. I am Hyunwoo Lee, a developer who communicates with a focus on collaboration. I reflect on myself to become someone who can shine in various fields, both technically and collaboratively.",
      stackTitle: "Stack",
      stackDesc: "Tech stack icons and descriptions will be placed here.",
      projectsTitle: "Projects",
      projectsDesc: "Team and personal project cards will be placed here.",
      projectsList: [
        {
          id: 1,
          title: "Project1",
          desc: "Description of the project",
          tech: ["React", "TypeScript", "Tailwind CSS"],
          color: "from-blue-400/20 to-purple-500/20",
          hoverColor: "group-hover:text-blue-500",
        },
        {
          id: 2,
          title: "Project2",
          desc: "Description of the project",
          tech: ["React", "TypeScript", "Tailwind CSS"],
          color: "from-green-400/20 to-emerald-500/20",
          hoverColor: "group-hover:text-green-500",
        },
        {
          id: 3,
          title: "Project3",
          desc: "Description of the project",
          tech: ["React", "TypeScript", "Tailwind CSS"],
          color: "from-orange-400/20 to-red-500/20",
          hoverColor: "group-hover:text-orange-500",
        },
        {
          id: 4,
          title: "Project4",
          desc: "Description of the project",
          tech: ["React", "TypeScript", "Tailwind CSS"],
          color: "from-cyan-400/20 to-blue-500/20",
          hoverColor: "group-hover:text-cyan-500",
        },
      ],
    },
  };

  const t = content[lang];

  return (
    <div className="min-h-screen font-sans transition-colors duration-300 bg-gray-50 text-gray-900 dark:bg-[#121212] dark:text-[#e5e5e5] selection:bg-gray-300 dark:selection:bg-[#1e1e1e] selection:text-black dark:selection:text-white">
      <div className="fixed top-6 right-6 z-50 flex items-center gap-1 px-3 py-1.5 rounded-full bg-white/70 dark:bg-[#1e1e1e]/70 backdrop-blur-md border border-gray-200 dark:border-[#333] shadow-sm">
        <button
          onClick={() => setLang(lang === "ko" ? "en" : "ko")}
          className="p-2 rounded-full hover:bg-gray-200/50 dark:hover:bg-[#333]/50 transition-colors flex items-center gap-2 font-semibold text-gray-700 dark:text-[#e5e5e5] text-sm"
        >
          <Globe size={18} />
          <span>{lang === "ko" ? "EN" : "KR"}</span>
        </button>

        <div className="w-[1px] h-4 bg-gray-300 dark:bg-gray-600 mx-1"></div>

        <button
          onClick={() => setIsDark(!isDark)}
          className="p-2 rounded-full hover:bg-gray-200/50 dark:hover:bg-[#333]/50 transition-colors text-gray-700 dark:text-[#e5e5e5]"
        >
          {isDark ? <Sun size={18} /> : <Moon size={18} />}
        </button>
      </div>

      <section className="min-h-screen flex flex-col items-center justify-center px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
            {t.greeting}
            <span className="text-blue-600 dark:text-white">{t.role}</span>
            {t.suffix}
          </h1>
          <p className="text-gray-500 dark:text-[#a3a3a3] text-xl md:text-2xl max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
            {t.desc1}
            <br />
            {t.desc2}
          </p>
        </motion.div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 text-gray-400 dark:text-[#a3a3a3]"
        >
          ↓
        </motion.div>
      </section>

      <section
        id="about"
        className="py-24 px-4 max-w-5xl mx-auto border-t border-gray-200 dark:border-[#1e1e1e]/50"
      >
        <h2 className="text-4xl font-bold mb-10 text-black dark:text-white">
          {t.aboutTitle}
        </h2>
        <div className="text-xl md:text-2xl text-gray-600 dark:text-[#a3a3a3] leading-relaxed">
          {t.aboutDesc}
        </div>
      </section>

      <section
        id="tech-stack"
        className="py-24 px-4 max-w-5xl mx-auto border-t border-gray-200 dark:border-[#1e1e1e]/50"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h2 className="text-4xl font-bold mb-12 text-black dark:text-white">
            {t.stackTitle}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-8 rounded-2xl bg-white dark:bg-[#1a1a1a] border border-gray-100 dark:border-[#333] shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 group">
              <h3 className="text-xl font-bold mb-6 text-gray-800 dark:text-gray-200 group-hover:text-blue-500 transition-colors">
                Frontend
              </h3>
              <ul className="space-y-3">
                {["React", "TypeScript", "JavaScript", "Flutter"].map(
                  (tech) => (
                    <li
                      key={tech}
                      className="flex items-center text-gray-600 dark:text-[#a3a3a3] font-medium"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-3 opacity-70 group-hover:opacity-100 transition-opacity"></span>
                      {tech}
                    </li>
                  )
                )}
              </ul>
            </div>

            <div className="p-8 rounded-2xl bg-white dark:bg-[#1a1a1a] border border-gray-100 dark:border-[#333] shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 group">
              <h3 className="text-xl font-bold mb-6 text-gray-800 dark:text-gray-200 group-hover:text-pink-500 transition-colors">
                Backend
              </h3>
              <ul className="space-y-3">
                {["java", "Spring boot", "nodeJS"].map((tech) => (
                  <li
                    key={tech}
                    className="flex items-center text-gray-600 dark:text-[#a3a3a3] font-medium"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-pink-500 mr-3 opacity-70 group-hover:opacity-100 transition-opacity"></span>
                    {tech}
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-8 rounded-2xl bg-white dark:bg-[#1a1a1a] border border-gray-100 dark:border-[#333] shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 group">
              <h3 className="text-xl font-bold mb-6 text-gray-800 dark:text-gray-200 group-hover:text-green-500 transition-colors">
                Tools
              </h3>
              <ul className="space-y-3">
                {["Git / GitHub", "Vite", "Figma"].map((tech) => (
                  <li
                    key={tech}
                    className="flex items-center text-gray-600 dark:text-[#a3a3a3] font-medium"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 mr-3 opacity-70 group-hover:opacity-100 transition-opacity"></span>
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </section>

      <section
        id="projects"
        className="py-24 px-4 max-w-5xl mx-auto border-t border-gray-200 dark:border-[#1e1e1e]/50"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h2 className="text-4xl font-bold mb-12 text-black dark:text-white">
            {t.projectsTitle}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {t.projectsList.map((project) => (
              <div
                key={project.id}
                className="rounded-2xl bg-white dark:bg-[#1a1a1a] border border-gray-100 dark:border-[#333] shadow-sm overflow-hidden group hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col"
              >
                <div className="h-48 w-full bg-gray-200 dark:bg-[#2a2a2a] overflow-hidden relative shrink-0">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${project.color} group-hover:scale-105 transition-transform duration-500`}
                  ></div>
                  <span className="absolute inset-0 flex items-center justify-center text-gray-500 dark:text-gray-400 font-medium">
                    Project Image {project.id}
                  </span>
                </div>

                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-4">
                    <h3
                      className={`text-2xl font-bold text-gray-800 dark:text-gray-200 transition-colors ${project.hoverColor}`}
                    >
                      {project.title}
                    </h3>
                    <div className="flex gap-3 text-gray-500 dark:text-gray-400 shrink-0 ml-4">
                      <a
                        href="#"
                        className="hover:text-black dark:hover:text-white transition-colors"
                      >
                        <Github size={20} />
                      </a>
                      <a
                        href="#"
                        className="hover:text-black dark:hover:text-white transition-colors"
                      >
                        <ExternalLink size={20} />
                      </a>
                    </div>
                  </div>

                  <p className="text-gray-600 dark:text-[#a3a3a3] mb-8 leading-relaxed flex-grow">
                    {project.desc}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((techItem) => (
                      <span
                        key={techItem}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-gray-100 dark:bg-[#333] text-gray-600 dark:text-gray-300"
                      >
                        {techItem}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="py-12 flex flex-col items-center justify-center border-t border-gray-200 dark:border-[#1e1e1e]/50">
        <div className="flex items-center justify-center gap-8 mb-4">
          <a
            href="https://github.com/love09pc"
            target="_blank"
            rel="noreferrer"
            className="text-gray-400 hover:text-black dark:text-[#a3a3a3] dark:hover:text-white transition-colors duration-300"
          >
            <Github size={32} />
          </a>
          <a
            href="https://instagram.com/2025_love09pc"
            target="_blank"
            rel="noreferrer"
            className="text-gray-400 hover:text-black dark:text-[#a3a3a3] dark:hover:text-white transition-colors duration-300"
          >
            <Instagram size={32} />
          </a>
          <a
            href="mailto:love99pc@gmail.com"
            className="text-gray-400 hover:text-black dark:text-[#a3a3a3] dark:hover:text-white transition-colors duration-300"
          >
            <Mail size={32} />
          </a>
        </div>
      </section>

      <footer className="pb-10 text-center text-gray-400 dark:text-[#a3a3a3] text-sm">
        © 2025 LeeHyunWoo. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
