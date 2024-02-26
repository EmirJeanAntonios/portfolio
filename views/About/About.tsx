"use client";
import Image from "next/image";
import { motion } from "framer-motion";
type translations = {
  title: string;
  content1: string;
  content2: string;
  content3: string;
  content4: string;
};

interface IAboutProps {
  translations: translations;
}

export default function About({ translations }: IAboutProps) {
  return (
    <section className="flex items-center h-full xl:py-16 overflow-y-auto">
      <div className="xl:basis-2/3 p-4 xl:p-0 text-center  h-full">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-3xl lg:text-5xl xl:text-7xl font-bold pb-8"
        >
          {translations.title}
        </motion.h1>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="xl:max-w-[90%] text-justify"
        >
          <p className="text-lg xl:text-xl leading-8 mb-4">
            {translations.content1}
          </p>
          <p className="text-lg xl:text-xl leading-8 mb-4">
            {translations.content2}
          </p>
          <p className="text-lg xl:text-xl leading-8 mb-4">
            {translations.content3}
          </p>
          <p className="text-lg xl:text-xl leading-8">
            {translations.content4}
          </p>
        </motion.div>
      </div>
      <div className="flex-1 flex justify-end">
        <motion.div className="relative  rounded-xl w-full xl:h-[500px]">
          <Image
            src={"/profile.jpeg"}
            layout="fill"
            alt="Emir Jean Antonios"
            objectFit="cover"
            className="rounded-xl grayscale"
          ></Image>
        </motion.div>
      </div>
    </section>
  );
}
