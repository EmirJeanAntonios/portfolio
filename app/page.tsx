"use client";
import Image from "next/image";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <section className="flex items-center h-full">
      <div className="basis-1/2">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-7xl font-bold pb-8"
        >
          Emir Jean Antonios
        </motion.h1>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <p className="text-xl leading-8">
            Merhaba, Ben Emir Jean Antonios. Bilgisayar mühendisi olarak,
            yazılım dünyasına olan sevgim ve merakım beni sürekli olarak yeni
            keşiflere ve öğrenmeye yönlendiriyor. Teknolojinin sınırlarını
            zorlayan bir tutkulu gezgin olarak, deneyimlerimi ve becerilerimi
            paylaşmak için buradayım.
          </p>
          <div className="flex pt-4 gap-4">
            <SocialIcon
              style={{ height: 40, width: 40 }}
              label="github profile"
              url="https://github.com/EmirJeanAntonios"
            />
            <SocialIcon
              style={{ height: 40, width: 40 }}
              label="Linkedin profile"
              url="https://www.linkedin.com/in/emir-jean-antonios-698a82b7/"
            />
          </div>
        </motion.div>
      </div>
      <div className="flex-1 flex justify-end">
        <motion.div className="relative  rounded-xl lg:w-[500px] lg:h-[500px]">
          <Image
            src={"/profile.jpeg"}
            layout="fill"
            alt="Emir Jean Antonios"
            objectFit="contain"
            className="rounded-xl grayscale"
          ></Image>
        </motion.div>
      </div>
    </section>
  );
}
