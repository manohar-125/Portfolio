import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CardProject from "../components/CardProject";
import TechStackIcon from "../components/TechStackIcon";
import AOS from "aos";
import "aos/dist/aos.css";
import Certificate from "../components/Certificate";
import { Code, Award, Boxes } from "lucide-react";

// Toggle Button
const ToggleButton = ({ onClick, isShowingMore }) => (
  <button
    onClick={onClick}
    className="px-3 py-1.5 text-slate-300 hover:text-white text-sm font-medium transition-all duration-300 ease-in-out flex items-center gap-2 bg-white/5 hover:bg-white/10 rounded-md border border-white/10 hover:border-white/20 backdrop-blur-sm"
  >
    {isShowingMore ? "See Less" : "See More"}
  </button>
);

function TabPanel({ children, value, index, ...other }) {
  return (
    <div role="tabpanel" hidden={value !== index} {...other}>
      {value === index && (
        <Box sx={{ p: { xs: 1, sm: 3 } }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

// Skills
const techStacks = [
  { icon: "dist/c.svg", language: "C" },
  { icon: "dist/java.svg", language: "Java" },
  { icon: "dist/sql.svg", language: "SQL" },
  { icon: "html.svg", language: "HTML" },
  { icon: "dist/php.svg", language: "PHP" },
  { icon: "css.svg", language: "CSS" },
  { icon: "javascript.svg", language: "JavaScript" },
  { icon: "dist/python.svg", language: "Python" },
  { icon: "dist/mongodb.svg", language: "MongoDB" },
  { icon: "dist/mssql.svg", language: "Microsoft SQL Server" },
  { icon: "latex.svg", language: "LaTeX" },
  { icon: "jdbc.svg", language: "JDBC" },
];

// Projects (replace Img URLs with your own later)
const projectData = [
  {
    Img: "dist/21404.jpg",
    Title: "Employee Management System",
    Description:
      "Java Swing desktop application with MySQL for managing employee records. Includes authentication, CRUD operations, and intuitive GUI with dashboard and forms.",
    Link: "https://github.com/manohar-125/EmployeeManagementSystem",
  },
  {
    Img: "dist/istockphoto-2164305472-612x612.webp",
    Title: "Breast Cancer Prediction System",
    Description:
      "Python-based Logistic Regression model with 95% accuracy for predicting malignant or benign cancer using the Wisconsin dataset. Includes real-time prediction feature.",
    Link: "https://github.com/manohar-125/Breast-Cancer-Classification",
  },
  {
    Img: "dist/premium_photo-1673735396428-d51dc2a7a62d.jpg",
    Title: "Tic-Tac-Toe AI using Minimax",
    Description:
      "A console-based Tic-Tac-Toe game featuring an unbeatable AI using the Minimax algorithm in Python. Play as 'X' against an optimal computer opponent, with board state updates and outcome detection.",
    Link: "https://github.com/manohar-125/tic_tac_toe",
  },
  {
    Img: "dist/premium_photo-1677094310893-0d6594c211ea.jpg",
    Title: "Rule-Based Chatbot",
    Description:
      "A simple Python chatbot leveraging regex and rule-based matching to greet users, answer common questions, and respond accurately based on time and input. Features fallback replies for unknown queries.",
    Link: "https://github.com/manohar-125/Chatbot",
  },
  {
    Img: "dist/cogwheels-working-processinfographic-elementchart-with-arrows-wheels_183665-1576.jpg",
    Title: "Image Captioning using Transformers",
    Description:
      "An AI-powered tool that automatically generates captions for images using Vision Transformers and GPT-2. Built with Hugging Face, PyTorch, and Google Colab. Upload any image and get a relevant caption instantly.",
    Link: "https://github.com/manohar-125/Image_Captioning_tool",
  },
];

// Certificates (Google Drive direct links)
const certificateData = [
  {
    ImgSertif:
      "https://drive.google.com/uc?export=view&id=19_S6sKRA2LmU4Ic6EKprV7Ve9DZ4qKjQ",
  },
  {
    ImgSertif:
      "https://drive.google.com/uc?export=view&id=1fdZqmgF7MZq5jICXOFdI9QYdGqcCquKS",
  },
  {
    ImgSertif:
      "https://drive.google.com/uc?export=view&id=1gHPgn0khsqNwrL48OEnr5ZKnA2znIyQi",
  },
];

export default function FullWidthTabs() {
  const theme = useTheme();
  const [value, setValue] = useState(0);
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [showAllCertificates, setShowAllCertificates] = useState(false);
  const isMobile = window.innerWidth < 768;
  const initialItems = isMobile ? 4 : 6;

  useEffect(() => {
    AOS.init({ once: false });
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const displayedProjects = showAllProjects
    ? projectData
    : projectData.slice(0, initialItems);
  const displayedCertificates = showAllCertificates
    ? certificateData
    : certificateData.slice(0, initialItems);

  return (
    <div
      className="md:px-[10%] px-[5%] w-full sm:mt-0 mt-[3rem] bg-[#030014] overflow-hidden"
      id="Portfolio"
    >
      {/* Header */}
      <div
        className="text-center pb-10"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <h2 className="inline-block text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]">
          Portfolio Showcase
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto text-sm md:text-base mt-2">
          Explore my journey through projects, certifications, and technical
          expertise.
        </p>
      </div>

      <Box sx={{ width: "100%" }}>
        <AppBar
          position="static"
          elevation={0}
          sx={{
            bgcolor: "transparent",
            borderRadius: "12px",
            "& .MuiTab-root": {
              fontSize: { xs: "0.9rem", md: "1rem" },
              fontWeight: "600",
              color: "#cbd5e1",
              textTransform: "none",
              transition: "all 0.4s",
              "&:hover": { color: "#fff" },
              "&.Mui-selected": {
                color: "transparent",
                background: "linear-gradient(45deg, #6366f1, #a855f7)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              },
            },
            "& .MuiTabs-indicator": {
              height: "3px",
              backgroundColor: "#a855f7",
            },
          }}
          className="md:px-4"
        >
          <Tabs
            value={value}
            onChange={handleChange}
            textColor="secondary"
            indicatorColor="secondary"
            variant="fullWidth"
          >
            <Tab icon={<Code />} label="Projects" />
            <Tab icon={<Award />} label="Certificates" />
            <Tab icon={<Boxes />} label="Tech Stack" />
          </Tabs>
        </AppBar>

        <SwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={value}
          onChangeIndex={setValue}
        >
          {/* Projects */}
          <TabPanel value={value} index={0} dir={theme.direction}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {displayedProjects.map((project, index) => (
                <CardProject key={index} {...project} />
              ))}
            </div>
            {projectData.length > initialItems && (
              <div className="mt-6">
                <ToggleButton
                  onClick={() => setShowAllProjects((p) => !p)}
                  isShowingMore={showAllProjects}
                />
              </div>
            )}
          </TabPanel>

          {/* Certificates */}
          <TabPanel value={value} index={1} dir={theme.direction}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {displayedCertificates.map((certificate, index) => (
                <Certificate key={index} {...certificate} />
              ))}
            </div>
            {certificateData.length > initialItems && (
              <div className="mt-6">
                <ToggleButton
                  onClick={() => setShowAllCertificates((p) => !p)}
                  isShowingMore={showAllCertificates}
                />
              </div>
            )}
          </TabPanel>

          {/* Tech Stack */}
          <TabPanel value={value} index={2} dir={theme.direction}>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5 pb-[5%]">
              {techStacks.map((stack, index) => (
                <TechStackIcon
                  key={index}
                  TechStackIcon={stack.icon}
                  Language={stack.language}
                />
              ))}
            </div>
          </TabPanel>
        </SwipeableViews>
      </Box>
    </div>
  );
}
