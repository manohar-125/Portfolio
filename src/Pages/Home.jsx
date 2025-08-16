import React, { useState, useEffect, useCallback, memo } from "react";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Instagram,
  Sparkles,
} from "lucide-react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import AOS from "aos";
import "aos/dist/aos.css";

// LeetCode Icon Component
const LeetCodeIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 256 256"
    fill="currentColor"
    className={className}
  >
    <path d="M128 0C57.307 0 0 57.307 0 128s57.307 128 128 128c70.693 0 128-57.307 128-128S198.693 0 128 0zm0 240c-61.758 0-112-50.242-112-112S66.242 16 128 16s112 50.242 112 112-50.242 112-112 112zm-7.07-168.485l-60.607 60.607a8 8 0 0011.314 11.314l55.314-55.314 44.314 44.314-44.314 44.314-19.314-19.314a8 8 0 10-11.314 11.314l24 24a8 8 0 0011.314 0l50.607-50.607a8 8 0 000-11.314l-50.607-50.607a8 8 0 00-11.314 0z" />
  </svg>
);

const TYPING_SPEED = 100;
const ERASING_SPEED = 50;
const PAUSE_DURATION = 2000;
const WORDS = [
  "Full Stack Java Developer",
  "AI & Web Enthusiast",
  "Problem Solver",
];
const TECH_STACK = [
  "Java",
  "Spring Boot",
  "JDBC",
  "SQL",
  "MongoDB",
  "Machine Learning",
  "Pandas & NumPy",
];

const SOCIAL_LINKS = [
  { icon: Github, link: "https://github.com/manohar-125", name: "GitHub" },
  {
    icon: Linkedin,
    link: "https://www.linkedin.com/in/shyam-manohar-gupta-a12726230/",
    name: "LinkedIn",
  },
  { icon: Instagram, link: "https://www.instagram.com/manohar_1250/", name: "Instagram" },
  { icon: LeetCodeIcon, link: "https://leetcode.com/u/shyammanohar_1807/", name: "LeetCode" },
];

const SocialLink = memo(({ icon: Icon, link, name }) => (
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className="relative group"
  >
    <button className="group relative p-3">
      <div className="absolute inset-0 bg-gradient-to-r from-[#6366f1] to-[#a855f7] rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-300"></div>
      <div className="relative rounded-xl bg-black/50 backdrop-blur-xl p-2 flex items-center justify-center border border-white/10 group-hover:border-white/20 transition-all duration-300">
        <Icon className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors" />
      </div>
    </button>
    <span className="absolute left-1/2 -bottom-8 -translate-x-1/2 scale-0 group-hover:scale-100 transition-transform bg-[#232425] text-gray-100 text-xs px-2 py-1 rounded-lg shadow-md pointer-events-none z-20">
      {name}
    </span>
  </a>
));

const StatusBadge = memo(() => (
  <div
    className="inline-block animate-float lg:mx-0"
    data-aos="zoom-in"
    data-aos-delay="400"
  >
    <div className="relative group">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-[#6366f1] to-[#a855f7] rounded-full blur opacity-30 group-hover:opacity-50 transition duration-1000"></div>
      <div className="relative px-3 sm:px-4 py-2 rounded-full bg-black/40 backdrop-blur-xl border border-white/10">
        <span className="bg-gradient-to-r from-[#6366f1] to-[#a855f7] text-transparent bg-clip-text sm:text-sm text-[0.7rem] font-medium flex items-center">
          <Sparkles className="sm:w-4 sm:h-4 w-3 h-3 mr-2 text-blue-400" />
          Ready to Innovate
        </span>
      </div>
    </div>
  </div>
));

const MainTitle = memo(() => (
  <div className="space-y-2" data-aos="fade-up" data-aos-delay="600">
    <h1 className="text-5xl sm:text-6xl md:text-6xl lg:text-6xl xl:text-7xl font-bold tracking-tight">
      <span className="relative inline-block">
        <span className="absolute -inset-2 bg-gradient-to-r from-[#6366f1] to-[#a855f7] blur-2xl opacity-20"></span>
        <span className="relative bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
          Shyam
        </span>
      </span>
      <br />
      <span className="relative inline-block mt-2">
        <span className="absolute -inset-2 bg-gradient-to-r from-[#6366f1] to-[#a855f7] blur-2xl opacity-20"></span>
        <span className="relative bg-gradient-to-r from-[#6366f1] to-[#a855f7] bg-clip-text text-transparent">
          Manohar Gupta
        </span>
      </span>
    </h1>
  </div>
));

const TechStack = memo(({ tech }) => (
  <div className="px-4 py-2 hidden sm:block rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-sm text-gray-300 hover:bg-white/10 transition-colors">
    {tech}
  </div>
));

const CTAButton = memo(({ href, text, icon: Icon }) => (
  <a href={href}>
    <button className="group relative w-[160px]">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-[#4f52c9] to-[#8644c5] rounded-xl opacity-50 blur-md group-hover:opacity-90 transition-all duration-700"></div>
      <div className="relative h-11 bg-[#030014] backdrop-blur-xl rounded-lg border border-white/10 leading-none overflow-hidden">
        <div className="absolute inset-0 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 bg-gradient-to-r from-[#4f52c9]/20 to-[#8644c5]/20"></div>
        <span className="absolute inset-0 flex items-center justify-center gap-2 text-sm group-hover:gap-3 transition-all duration-300">
          <span className="bg-gradient-to-r from-gray-200 to-white bg-clip-text text-transparent font-medium z-10">
            {text}
          </span>
          <Icon
            className={`w-4 h-4 text-gray-200 ${
              text === "Contact"
                ? "group-hover:translate-x-1"
                : "group-hover:rotate-45"
            } transform transition-all duration-300 z-10`}
          />
        </span>
      </div>
    </button>
  </a>
));

const Home = () => {
  const [text, setText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const initAOS = () => {
      AOS.init({ once: true, offset: 10 });
    };
    initAOS();
    window.addEventListener("resize", initAOS);
    return () => window.removeEventListener("resize", initAOS);
  }, []);

  useEffect(() => {
    setIsLoaded(true);
    return () => setIsLoaded(false);
  }, []);

  const handleTyping = useCallback(() => {
    if (isTyping) {
      if (charIndex < WORDS[wordIndex].length) {
        setText((prev) => prev + WORDS[wordIndex][charIndex]);
        setCharIndex((prev) => prev + 1);
      } else {
        setTimeout(() => setIsTyping(false), PAUSE_DURATION);
      }
    } else {
      if (charIndex > 0) {
        setText((prev) => prev.slice(0, -1));
        setCharIndex((prev) => prev - 1);
      } else {
        setWordIndex((prev) => (prev + 1) % WORDS.length);
        setIsTyping(true);
      }
    }
  }, [charIndex, isTyping, wordIndex]);

  useEffect(() => {
    const timeout = setTimeout(
      handleTyping,
      isTyping ? TYPING_SPEED : ERASING_SPEED
    );
    return () => clearTimeout(timeout);
  }, [handleTyping]);

  const lottieOptions = {
    src: "https://lottie.host/58753882-bb6a-49f5-a2c0-950eda1e135a/NLbpVqGegK.lottie",
    loop: true,
    autoplay: true,
    style: { width: "100%", height: "100%" },
    className: `w-full h-full transition-all duration-500 ${
      isHovering
        ? "scale-[180%] sm:scale-[160%] md:scale-[150%] lg:scale-[145%] rotate-2"
        : "scale-[175%] sm:scale-[155%] md:scale-[145%] lg:scale-[140%]"
    }`,
  };

  return (
    <div className="min-h-screen bg-[#030014] overflow-hidden" id="Home">
      <div
        className={`relative z-10 transition-all duration-1000 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="container mx-auto px-[5%] sm:px-6 lg:px-[0%] min-h-screen">
          <div className="flex flex-col lg:flex-row items-center justify-center h-screen md:justify-between gap-0 sm:gap-12 lg:gap-20">
            {/* Left */}
            <div
              className="w-full lg:w-1/2 space-y-6 sm:space-y-8 text-left lg:text-left order-1 lg:order-1 lg:mt-0"
              data-aos="fade-right"
              data-aos-delay="200"
            >
              <div className="space-y-4 sm:space-y-6">
                <StatusBadge />
                <MainTitle />
                {/* Typing Effect */}
                <div
                  className="h-8 flex items-center"
                  data-aos="fade-up"
                  data-aos-delay="800"
                >
                  <span className="text-xl md:text-2xl bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text text-transparent font-light">
                    {text}
                  </span>
                  <span className="w-[3px] h-6 bg-gradient-to-t from-[#6366f1] to-[#a855f7] ml-1 animate-blink"></span>
                </div>
                {/* Description */}
                <p
                  className="text-base md:text-lg text-gray-400 max-w-xl leading-relaxed font-light"
                  data-aos="fade-up"
                  data-aos-delay="1000"
                >
                  Passionate Full Stack Java Developer specializing in building
                  scalable web applications, AI-powered solutions, and seamless
                  user experiences.
                </p>
                {/* Tech Stack */}
                <div
                  className="flex flex-wrap gap-3 justify-start"
                  data-aos="fade-up"
                  data-aos-delay="1200"
                >
                  {TECH_STACK.map((tech, index) => (
                    <TechStack key={index} tech={tech} />
                  ))}
                </div>
                {/* CTA Buttons */}
                <div
                  className="flex flex-row gap-3 w-full justify-start"
                  data-aos="fade-up"
                  data-aos-delay="1400"
                >
                  <CTAButton href="#Portfolio" text="Projects" icon={ExternalLink} />
                  <CTAButton href="#Contact" text="Contact" icon={Mail} />
                </div>
                {/* Social Links */}
                <div
                  className="hidden sm:flex gap-4 justify-start"
                  data-aos="fade-up"
                  data-aos-delay="1600"
                >
                  {SOCIAL_LINKS.map((social, index) => (
                    <SocialLink key={index} {...social} />
                  ))}
                </div>
              </div>
            </div>


            {/* Right - Lottie */}
            <div
              className="w-full py-[10%] sm:py-0 lg:w-1/2 h-auto lg:h-[600px] xl:h-[750px] relative flex items-center justify-center order-2 lg:order-2 mt-8 lg:mt-0"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
              data-aos="fade-left"
              data-aos-delay="600"
            >
              <div className="relative w-full opacity-90">
                <div
                  className={`absolute inset-0 bg-gradient-to-r from-[#6366f1]/10 to-[#a855f7]/10 rounded-3xl blur-3xl transition-all duration-700 ease-in-out ${
                    isHovering ? "opacity-50 scale-105" : "opacity-20 scale-100"
                  }`}
                ></div>


                <div
                  className={`relative z-10 w-full opacity-90 transform transition-transform duration-500 ${
                    isHovering ? "scale-105" : "scale-100"
                  }`}
                >
                  <DotLottieReact {...lottieOptions} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(Home);
