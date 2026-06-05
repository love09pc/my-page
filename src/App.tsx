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

import profileImg from "./assets/mainprofile.png";
import projectImg1 from "./assets/project1.png";
import projectImg2 from "./assets/project2.png";
import projectImg3 from "./assets/project3.png";
import projectImg4 from "./assets/project4.png";

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
      greeting: "결과로 증명하는 ",
      role: "개발자 이현우",
      suffix: "입니다.",
      desc1: "Front-end Developer",
      desc2: "Audio Engineer & Composer",
      aboutTitle: "About Me",
      aboutDesc:
        "안녕하세요. 좋은 결과 과정, 좋은 결과로 프로젝트를 이끌어나가는 개발자 이현우입니다. 좋은 과정이라도 결과가 나오지 않는다면 만족하지 않습니다.",
      stackTitle: "Stack",
      stackDesc: "여기에 기술 스택 아이콘과 설명이 들어갈 예정입니다.",
      projectsTitle: "Projects",
      projectsDesc:
        "여기에 팀 프로젝트와 개인 프로젝트 카드가 들어갈 예정입니다.",
      projectsList: [
        {
          id: 1,
          title: "GBSW-Shop2026 (GS26)",
          desc: "동아리 ADA에서 1학년과 2학년 전원이 참여하여, 진행한 프로젝트입니다.",
          tech: ["React", "Flutter", "Spring boot"],
          color: "from-blue-400/20 to-purple-500/20",
          hoverColor: "group-hover:text-blue-500",
          image: projectImg1,
          github: "https://github.com/ADA-Shop",
          link: "https://love09pc.github.io/GBSWShop2026-introduction/",
        },
        {
          id: 2,
          title: "WhoAmI",
          desc: "APC에 참여하여 개발한 프로젝트입니다. 사람의 유형을 검사하여, 자신만의 캐릭터를 만들어주는 사이트입니다.",
          tech: ["FastApi", "JavaScript", "Python"],
          color: "from-green-400/20 to-emerald-500/20",
          hoverColor: "group-hover:text-green-500",
          image: projectImg2,
          github: "https://github.com/WhoAmI-APC",
          link: "asd",
        },
        {
          id: 3,
          title: "AVEX(외주)",
          desc: "현재 주식회사 AVEX와 외주 활동을 하고 있습니다.",
          tech: ["비밀사항"],
          color: "from-orange-400/20 to-red-500/20",
          hoverColor: "group-hover:text-orange-500",
          image: projectImg3,
          github: "a",
          link: "a",
        },
        {
          id: 4,
          title: "Game Project BGM",
          desc: "현재 타 학교의 친구들이 만들고 있는 게임에 BGM 제작을 맡아 작업하고있습니다.",
          tech: ["Cubase"],
          color: "from-cyan-400/20 to-blue-500/20",
          hoverColor: "group-hover:text-cyan-500",
          image: projectImg4,
          github: "a",
          link: "a",
        },
      ],
      activitiesTitle: "Activities & Experience",
      activitiesList: [
        {
          id: 1,
          date: "2025.04 - 현재",
          title: "외주활동(주식회사 - AVEX)",
          desc: "현재 주식회사 AVEX와 주기적으로 소통하며 외주 활동을 하고있습니다.",
        },
        {
          id: 2,
          date: "2025.03 - 현재",
          title: "교내 동아리 ADA",
          desc: "1학년부터 프로젝트 동아리 ADA 가입하여 활동하고 있습니다.",
        },
        {
          id: 3,
          date: "2024.12",
          title: "ITQ 자격증 취득",
          desc: "한국생산성본부",
        },
      ],
    },
    en: {
      greeting: "A result-oriented ",
      role: "Hyunwoo Lee",
      suffix: ", a Developer.",
      desc1: "Front-end Developer",
      desc2: "Audio Engineer & Composer",
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
          title: "GBSW-Shop2026 (GS26)",
          desc: "A collaborative shop service project carried out by all 1st and 2nd year students in the school club ADA.",
          tech: ["React", "Flutter", "Spring boot"],
          color: "from-blue-400/20 to-purple-500/20",
          hoverColor: "group-hover:text-blue-500",
          image: projectImg1,
          github: "https://github.com/ADA-Shop",
          link: "https://love09pc.github.io/GBSWShop2026-introduction/",
        },
        {
          id: 2,
          title: "WhoAmI",
          desc: "Developed during participation in APC. It analyzes personality types to generate a unique personalized character for users.",
          tech: ["FastApi", "JavaScript", "Python"],
          color: "from-green-400/20 to-emerald-500/20",
          hoverColor: "group-hover:text-green-500",
          image: projectImg2,
          github: "https://github.com/WhoAmI-APC",
          link: "asd",
        },
        {
          id: 3,
          title: "AVEX (Freelance)",
          desc: "Currently collaborating on freelance projects and development with AVEX Co., Ltd.",
          tech: ["Confidential"],
          color: "from-orange-400/20 to-red-500/20",
          hoverColor: "group-hover:text-orange-500",
          image: projectImg3,
          github: "a",
          link: "a",
        },
        {
          id: 4,
          title: "Game Project BGM",
          desc: "In charge of music production and composing background music (BGM) for a game being developed by students from other schools.",
          tech: ["Cubase"],
          color: "from-cyan-400/20 to-blue-500/20",
          hoverColor: "group-hover:text-cyan-500",
          image: projectImg4,
          github: "a",
          link: "a",
        },
      ],
      activitiesTitle: "Activities & Experience",
      activitiesList: [
        {
          id: 1,
          date: "2025.04 - Present",
          title: "Freelance Projects (AVEX Co., Ltd.)",
          desc: "Actively working on contract-based development, maintaining professional communication with AVEX.",
        },
        {
          id: 2,
          date: "2025.03 - Present",
          title: "Campus Project Club ADA",
          desc: "Participating in practical web/app development and team projects within the school club ADA since freshman year.",
        },
        {
          id: 3,
          date: "2024.12",
          title: "ITQ Certification",
          desc: "Issued by Korea Productivity Center (KPC).",
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
          className="text-center w-full max-w-5xl"
        >
          <div className="mb-10 flex justify-center">
            <img
              src={profileImg}
              alt="이현우 프로필"
              className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-black dark:border-white shadow-md transition-transform duration-300 hover:scale-105"
            />
          </div>

          <div className="min-h-[140px] md:min-h-[120px] flex items-center justify-center mb-8">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight">
              {t.greeting}
              <span className="text-blue-600 dark:text-white">{t.role}</span>
              {t.suffix}
            </h1>
          </div>

          <div className="min-h-[96px] flex justify-center items-center">
            <p className="text-gray-500 dark:text-[#a3a3a3] text-3xl md:text-5xl mb-10 leading-snug font-bold">
              {t.desc1}
              <br />
              {t.desc2}
            </p>
          </div>
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
        className="py-28 px-4 max-w-5xl mx-auto border-t border-gray-200 dark:border-[#1e1e1e]/50"
      >
        <h2 className="text-5xl font-extrabold mb-12 text-black dark:text-white">
          {t.aboutTitle}
        </h2>
        <div className="text-2xl md:text-3xl text-gray-600 dark:text-[#a3a3a3] leading-loose font-medium md:min-h-[150px]">
          {t.aboutDesc}
        </div>
      </section>

      <section
        id="tech-stack"
        className="py-28 px-4 max-w-5xl mx-auto border-t border-gray-200 dark:border-[#1e1e1e]/50"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h2 className="text-5xl font-extrabold mb-14 text-black dark:text-white">
            {t.stackTitle}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            <div className="h-full p-10 rounded-2xl bg-white dark:bg-[#1a1a1a] border border-gray-100 dark:border-[#333] shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 group">
              <h3 className="text-2xl md:text-3xl font-extrabold mb-8 text-gray-800 dark:text-gray-200 group-hover:text-blue-500 transition-colors">
                Frontend
              </h3>
              <ul className="space-y-4">
                {["React", "TypeScript", "JavaScript", "Flutter"].map(
                  (tech) => (
                    <li
                      key={tech}
                      className="flex items-center text-xl md:text-2xl text-gray-600 dark:text-[#a3a3a3] font-semibold"
                    >
                      <span className="w-2 h-2 rounded-full bg-blue-500 mr-4 opacity-70 group-hover:opacity-100 transition-opacity"></span>
                      {tech}
                    </li>
                  )
                )}
              </ul>
            </div>

            <div className="h-full p-10 rounded-2xl bg-white dark:bg-[#1a1a1a] border border-gray-100 dark:border-[#333] shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 group">
              <h3 className="text-2xl md:text-3xl font-extrabold mb-8 text-gray-800 dark:text-gray-200 group-hover:text-pink-500 transition-colors">
                Backend
              </h3>
              <ul className="space-y-4">
                {["java", "Spring boot", "nodeJS"].map((tech) => (
                  <li
                    key={tech}
                    className="flex items-center text-xl md:text-2xl text-gray-600 dark:text-[#a3a3a3] font-semibold"
                  >
                    <span className="w-2 h-2 rounded-full bg-pink-500 mr-4 opacity-70 group-hover:opacity-100 transition-opacity"></span>
                    {tech}
                  </li>
                ))}
              </ul>
            </div>

            <div className="h-full p-10 rounded-2xl bg-white dark:bg-[#1a1a1a] border border-gray-100 dark:border-[#333] shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 group">
              <h3 className="text-2xl md:text-3xl font-extrabold mb-8 text-gray-800 dark:text-gray-200 group-hover:text-green-500 transition-colors">
                Tools
              </h3>
              <ul className="space-y-4">
                {["Git / GitHub", "Vite", "Figma"].map((tech) => (
                  <li
                    key={tech}
                    className="flex items-center text-xl md:text-2xl text-gray-600 dark:text-[#a3a3a3] font-semibold"
                  >
                    <span className="w-2 h-2 rounded-full bg-green-500 mr-4 opacity-70 group-hover:opacity-100 transition-opacity"></span>
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </section>

      <section
        id="activities"
        className="py-28 px-4 max-w-5xl mx-auto border-t border-gray-200 dark:border-[#1e1e1e]/50"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h2 className="text-5xl font-extrabold mb-16 text-black dark:text-white">
            {t.activitiesTitle}
          </h2>

          <div className="space-y-14 border-l-2 border-gray-200 dark:border-[#333] ml-3 pl-10 relative">
            {t.activitiesList.map((activity) => (
              <div key={activity.id} className="relative group">
                <span className="absolute -left-[51px] top-2 w-5 h-5 rounded-full bg-white dark:bg-[#1a1a1a] border-4 border-blue-500 group-hover:border-purple-500 transition-colors duration-300"></span>
                <div className="flex flex-col md:flex-row md:items-baseline gap-3 md:gap-8 mb-4">
                  <span className="text-base md:text-lg font-extrabold text-blue-600 dark:text-blue-400 shrink-0">
                    {activity.date}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-extrabold text-gray-800 dark:text-gray-200 group-hover:text-blue-500 transition-colors">
                    {activity.title}
                  </h3>
                </div>
                <div className="md:min-h-[80px]">
                  <p className="text-xl md:text-2xl text-gray-600 dark:text-[#a3a3a3] leading-relaxed font-medium">
                    {activity.desc}
                  </p>
                </div>
              </div>
            ))}
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

          <div className="grid grid-cols-1 gap-8">
            {t.projectsList.map((project) => {
              const fallbackUrl = window.location.href;
              const githubUrl =
                project.github && project.github !== "a"
                  ? project.github
                  : fallbackUrl;
              const linkUrl =
                project.link && project.link !== "a" && project.link !== "asd"
                  ? project.link
                  : fallbackUrl;

              return (
                <div
                  key={project.id}
                  onClick={() => {
                    window.open(linkUrl, "_blank", "noreferrer");
                  }}
                  className="rounded-2xl bg-white dark:bg-[#1a1a1a] border border-gray-100 dark:border-[#333] shadow-sm overflow-hidden group hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col md:flex-row cursor-pointer md:min-h-[320px]"
                >
                  <div className="h-60 md:h-auto md:w-[40%] max-w-[400px] shrink-0 bg-[#f8f9fa] dark:bg-[#141414] overflow-hidden relative flex items-center justify-center">
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={`${project.title} 썸네일`}
                        className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <span className="absolute inset-0 flex items-center justify-center text-gray-500 dark:text-gray-400 font-medium">
                        이미지 준비 중
                      </span>
                    )}
                  </div>

                  <div className="p-8 flex flex-col justify-center flex-grow w-full">
                    <div className="flex justify-between items-start mb-4">
                      <h3
                        className={`text-2xl font-bold text-gray-800 dark:text-gray-200 transition-colors ${project.hoverColor}`}
                      >
                        {project.title}
                      </h3>

                      <div className="flex gap-3 text-gray-500 dark:text-gray-400 shrink-0 ml-4">
                        <a
                          href={githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="hover:text-black dark:hover:text-white transition-colors cursor-pointer"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Github size={20} />
                        </a>

                        <a
                          href={linkUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="hover:text-black dark:hover:text-white transition-colors cursor-pointer"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <ExternalLink size={20} />
                        </a>
                      </div>
                    </div>

                    <div className="md:min-h-[100px] mb-6 flex items-start">
                      <p className="text-gray-600 dark:text-[#a3a3a3] leading-relaxed">
                        {project.desc}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2 mt-auto">
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
              );
            })}
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
            href="mailto:lhwmain09@gmail.com"
            className="text-gray-400 hover:text-black dark:text-[#a3a3a3] dark:hover:text-white transition-colors duration-300"
          >
            <Mail size={32} />
          </a>
        </div>
      </section>

      <footer className="pb-10 text-center text-gray-400 dark:text-[#a3a3a3] text-sm">
        © 2026 LeeHyunWoo. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
