"use client";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { motion } from "framer-motion";
import { FaBusinessTime as BusinessIcon } from "react-icons/fa";
import Tag from "@/components/Tag";

interface IExperienceProps {
  title: string
}

export default function Experience({title}:IExperienceProps) {
  return (
    <section className="h-full pt-16">
      <div className="text-center">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-3xl lg:text-7xl  font-bold pb-8"
        >
          {title}
        </motion.h1>
      </div>
      <div className="pt-8">
        <VerticalTimeline lineColor="#000">
          <VerticalTimelineElement
            contentStyle={{ background: "#000", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  #000" }}
            date="Mar 2023 - Present"
            dateClassName="text-black"
            iconStyle={{ background: "#000", color: "#fff" }}
            icon={<BusinessIcon />}
          >
            <h3 className="text-2xl font-bold pb-3">Frontend Developer</h3>
            <h4 className="text-md">HelioCampus, United States - Remote</h4>
            <p className="!text-sm lg:block flex flex-wrap gap-2">
              <Tag>Reactjs</Tag> <Tag>Component Library Development</Tag>
              <Tag>MUI</Tag>
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            contentStyle={{ background: "#000", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  #000" }}
            date="Jan 2023 - Mar 2023"
            dateClassName="text-black"
            iconStyle={{ background: "#000", color: "#fff" }}
            icon={<BusinessIcon />}
          >
            <h3 className="text-2xl font-bold pb-3">
              Frontend Developer - Team Lead
            </h3>
            <h4 className="text-md">Liberyus, Ankara - Remote</h4>
            <p className="!text-sm">Nextjs, PHP Laravel</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            contentStyle={{ background: "#000", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  #000" }}
            date="Apr 2022 - Nov 2022"
            dateClassName="text-black"
            iconStyle={{ background: "#000", color: "#fff" }}
            icon={<BusinessIcon />}
          >
            <h3 className="text-2xl font-bold pb-3">
              Co-Founder - Full Stack Developer
            </h3>
            <h4 className="text-md">Yavroom</h4>
            <p className="!text-sm">
              TypeScript - Redux.js - Amazon Web Services (AWS) - MySQL - Nginx
              - React.js
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            contentStyle={{ background: "#000", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  #000" }}
            date="Dec 2021 - Sep 2022"
            dateClassName="text-black"
            iconStyle={{ background: "#000", color: "#fff" }}
            icon={<BusinessIcon />}
          >
            <h3 className="text-2xl font-bold pb-3">
              Co-Founder - Full Stack Developer
            </h3>
            <h4 className="text-md">Metaversy</h4>
            <p className="!text-sm">
              TypeScript - Redux.js - Amazon Web Services (AWS) - MySQL - Nginx
              - React.js
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            contentStyle={{ background: "#000", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  #000" }}
            date="Dec 2020 - Apr 2022"
            dateClassName="text-black"
            iconStyle={{ background: "#000", color: "#fff" }}
            icon={<BusinessIcon />}
          >
            <h3 className="text-2xl font-bold pb-3">Frontend Developer</h3>
            <h4 className="text-md">Arina Digital</h4>
            <p className="!text-sm">
              Amazon Web Services (AWS) - MySQL - Nginx - React.js - HTML -
              Cascading Style Sheets (CSS) - JavaScript - WordPress - Laravel -
              PHP
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            contentStyle={{ background: "#000", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  #000" }}
            date="Jun 2016 - Jul 2016"
            dateClassName="text-black"
            iconStyle={{ background: "#000", color: "#fff" }}
            icon={<BusinessIcon />}
          >
            <h3 className="text-2xl font-bold pb-3">Internship Trainee</h3>
            <h4 className="text-md">KoçSistem</h4>
            <p className="!text-sm">C#, MVC, asp.net</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            contentStyle={{ background: "#000", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  #000" }}
            date="Jun 2015 - Jul 2015"
            dateClassName="text-black"
            iconStyle={{ background: "#000", color: "#fff" }}
            icon={<BusinessIcon />}
          >
            <h3 className="text-2xl font-bold pb-3">Internship Trainee</h3>
            <h4 className="text-md">KoçSistem</h4>
            <p className="!text-sm">Hardware</p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </section>
  );
}
