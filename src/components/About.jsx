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
        I'm passionate Tech professional with experience in
        Frontend Developement,CRM workflows, and customer operations. I possess Proven ability to 
        collaborate effectively with cross-functional teams to deliver high-quality solutions. 
        My journey in the tech has equipped me 
        with a strong foundation in web-technologies, testing processes, allowing me to create seamless
        and engaging user experiences.<br/> Let's work together to bring your ideas to life!
        {/* Passionate Techie with experience in frontend development, CRM workflows, and customer operations, currently transitioning into SAP. 
        Skilled in building responsive web applications using React.js and collaborating with cross-functional teams to deliver reliable, user-focused solutions. */}
        {/* Analytical professional with experience spanning customer operations, CRM systems, and technology-driven business processes, currently focused on building a career in data analytics. 
        Skilled at transforming operational and customer data into actionable insights that support business decision-making and improve customer experiences. */}
        <br/>
          <br/>
        {/* My professional experience working across development and customer support operations has provided me with a strong understanding of business workflows, 
        customer lifecycle management, and enterprise tools including Zendesk and Salesforce. I am focused on expanding my expertise in learning technologies, Testing methodologies, workflow automation, 
        and platform-based solutions to help organizations improve operational efficiency and customer experience.<br/> Let's work together to bring your ideas to life! */}
        {/* Combining a technical background with strong understanding of business processes, I am developing expertise in SQL, Excel, Power BI/Tableau, and data visualization to transform complex datasets into clear, actionable insights. 
        Passionate about leveraging data to solve business challenges, improve customer experiences, and support strategic objectives. */}
        Leveraging a strong technical background and business process understanding, I am developing expertise in Software Testing, including test case creation, manual testing, bug reporting, defect lifecycle management, and SDLC and STLC concepts. 
        Passionate about ensuring software reliability, improving product quality, and delivering exceptional customer experiences through effective quality assurance.
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