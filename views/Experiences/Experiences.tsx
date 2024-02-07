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
  title: string;
}

export default function Experience({ title }: IExperienceProps) {
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
        <VerticalTimeline>
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
            <p className="!text-sm flex gap-2 flex-wrap">
              <Tag>Reactjs</Tag>
              <Tag>Component Library Development</Tag>
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
            <p className="!text-sm flex gap-2 flex-wrap">
              <Tag>Nextjs</Tag>
              <Tag>PHP Laravel</Tag>
            </p>
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
            <p className="!text-sm flex gap-2 flex-wrap">
              <Tag>TypeScript</Tag>
              <Tag>Redux.js</Tag>
              <Tag>Amazon Web Services (AWS)</Tag>
              <Tag>MySQL</Tag>
              <Tag>Nginx</Tag>
              <Tag>React.js</Tag>
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
            <p className="!text-sm flex gap-2 flex-wrap">
              <Tag>TypeScript</Tag>
              <Tag>Redux.js</Tag>
              <Tag>Amazon Web Services (AWS)</Tag>
              <Tag>MySQL</Tag>
              <Tag>Nginx</Tag>
              <Tag>React.js</Tag>
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
            <p className="!text-sm flex gap-2 flex-wrap">
              <Tag>Amazon Web Services (AWS)</Tag>
              <Tag>MySQL</Tag>
              <Tag>Nginx</Tag>
              <Tag>React.js </Tag>
              <Tag>HTML</Tag>
              <Tag>Cascading Style Sheets (CSS) </Tag>
              <Tag>JavaScript </Tag>
              <Tag>WordPress </Tag>
              <Tag>Laravel </Tag>
              <Tag>PHP</Tag>
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
            <p className="!text-sm flex gap-2">
              <Tag>C# </Tag>
              <Tag>MVC </Tag>
              <Tag>asp.net</Tag>
            </p>
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
            <p className="!text-sm flex gap-2">
              <Tag>Hardware</Tag>
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </section>
  );
}
