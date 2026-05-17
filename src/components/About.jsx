import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
// import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-60 h-60 object-contain'
        />
        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        {/* I'm passionate Tech professional with experience in
        Frontend Developement and expertise in React JS. I possess Proven ability to 
        collaborate effectively with cross-functional teams to deliver high-quality solutions. 
        My journey in the tech has equipped me 
        with a strong foundation in web-technologies allowing me to create seamless
        and engaging user experiences.<br/> Let's work together to bring your ideas to life! */}
        Passionate Techie with experience in frontend engineering, CRM workflows, and customer operations, currently transitioning into Salesforce Platform Development. 
        Skilled in building responsive web applications using React.js and collaborating with cross-functional teams to deliver reliable, user-focused solutions.
        <br/>
          <br/>
        My professional experience working across development and customer support operations has provided me with a strong understanding of business workflows, 
        customer lifecycle management, and enterprise tools including Zendesk and Salesforce. I am focused on expanding my expertise in Salesforce technologies, workflow automation, 
        and platform-based solutions to help organizations improve operational efficiency and customer experience.<br/> Let's work together to bring your ideas to life!
      </motion.p>

      {/* <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service?.title} index={index} {...service} />
        ))}
      </div> */}
    </>
  );
};

export default SectionWrapper(About, "about");