"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="flex items-center h-full py-16">
      <div className="basis-2/3">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-7xl font-bold pb-8"
        >
          Hakkımda
        </motion.h1>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="lg:max-w-[90%] text-justify"
        >
          <p className="text-xl leading-8 mb-4">
            Merhaba, ben Emir Jean Antonios. Beykent üniversitesi Bilgisayar
            Mühendisliği bölümünden mezunum. Bilgisayar mühendisliği serüvenime
            Haydarpaşa Teknik ve Mesleki Anadolu Lisesinde Bilişim bölümü
            okuyarak başladım. Lise yıllarımda PHP, C#, Javascript, HTML, CSS,
            SQL dillerinin derslerini aldım ve orta seviye bir web developer
            olarak Beykent üniversitesine başladım. Beykent Üniversitesinde
            aldığım teknik dersler ile hem bir mühendis gibi düşünmeyi öğrendim
            hem de yazılım bilgimi algoritmik düşünerek geliştirdim.
          </p>
          <p className="text-xl leading-8 mb-4">
            Kanada'da 3 hafta kaldım. Kaldığım süre boyunca ingilizce eğitimi
            aldım ve Kanada'yı gezme fırsatı yakaladım. Daha sonra Amerika'ya
            geçtim ve Philadelphia, Washington ve New york'u gezdim. Lise 4 te
            okulumun robot kulübü ile San francisco da 1 hafta boyunca robot
            yarışmasında çevirmen olarak görev aldım. Üniversite yıllarımda
            erasmus yaptım ve Çekya'da 6 ay kaldım.
          </p>
          <p className="text-xl leading-8 mb-4">
            Şu an Amerika menşeli bir firmada remote Frontend Developer olarak
            çalışıyorum. Bu deneyim, uluslararası bir perspektifle yazılım
            geliştirme fırsatı sunuyor ve uzaktan çalışma becerilerimi
            geliştirmeme yardımcı oluyor. Bu süreçte, farklı kültürlerden ve
            uzmanlıklardan gelen ekip üyeleriyle işbirliği yaparak projelerde
            daha etkili bir şekilde çalışmayı öğreniyorum. Ayrıca, modern web
            teknolojileri ve uygulama geliştirme alanındaki son trendleri takip
            ederek, projelerimizi her zaman en son teknolojilerle güncel
            tutuyoruz. Bu deneyim, bilgisayar mühendisliği kariyerimi daha da
            ileriye taşıma konusundaki tutkumu ve kararlılığımı pekiştiriyor.
          </p>
          <p className="text-xl leading-8">
            Her gün yeni bir gelişme yaşadığımız bilgisayar teknolojisini takip
            edip kendimi geliştiriyor ve çok sevdiğim mesleğimi en iyi şekilde
            yapmaya çalışıyorum.
          </p>
        </motion.div>
      </div>
      <div className="flex-1 flex justify-end">
        <motion.div className="relative  rounded-xl w-full lg:h-[500px]">
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
