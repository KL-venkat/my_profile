import {
    // mobile,
    // backend,
    // creator,
    // web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    // mongodb,
    git,
    figma,
    docker,
    bebo_technologies,
    qasource,
    freelance,
    whitehatjr,
    everbright_sighten,
    food_court,
    proctor_clone,
    threejs,
    lpu
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  /*const services = [
    {
      title: " ",
      icon: web,
    },
    {
      title: "",
      icon: mobile,
    },
    {
      title: "",
      icon: backend,
    },
    {
      title: "",
      icon: creator,
    },
  ];
  */
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    // {
    //   name: "MongoDB",
    //   icon: mongodb,
    // },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Software Engineer",
      company_name: "WhiteHat Jr",
      icon: whitehatjr,
      iconBg: "#383E56",
      date: "Dec 2023 - present",
      points:[
        "Developed functionalities for tracking upcoming and recent meetings, including adding discussions and notes features, within the meetings module.",
        "Assigned and prioritized tasks, ensuring comprehensive review of any upstream dependencies.",
        "Optimized Salesforce CRM and streamlined Stripe payment processing, enhancing data accuracy and reducing billing errors by 40%, improving overall workflow efficiency by 25%.",
//"Ensure high levels of user satisfaction by providing clear and effective solutions.",
        "Managed the entire support ticket lifecycle followed by logging, prioritizing, resolving and documenting incidents.",
        "Collaborated seamlessly with peers and external vendors to resolve technical challenges."
      ]
      
    },
    {
      title: "Freelance Web Developer",
      company_name: "Freelance",
      icon: freelance,
      iconBg: "#383E56",
      date: "July 2023 - Jan 2024",
      points: [
        //"Associated with an consultant and I'm glad for getting this opportunity to be a part of learning driven projects from such jaint clients Jack henry and Charles schwab Projects.",
        "Responsible for building dynamic user interface using react for the requirements raised." ,
       // "Responsible for Unit Testing for the developed feature and Deployment. ",
        "Understanding business requirements, analysing and designing solutions. ",
        //"Handled scrum part followed by PR reviewes, Task management on scrum board, Team collaboration, Bug fixing, Testing and acknowledging the bugs/errors to reporting dev.",
        "Got an demonstrated exposure in agile methodology, particularly in handling Scrum processes. My responsibilities include managing Scrum activities, conducting PR reviews, managing tasks on the Scrum board, collaborating with team members, fixing bugs, Regression feature tasks once deployed in QA, acknowledging bugs and errors, and reporting issues to developers."
      ],
    },
    {
      title: "Software Engineer II",
      company_name: "QASOURCE",
      icon: qasource,
      iconBg: "#E6DEDD",
      date: "March 2022 - Sept 2023",
      points: [
        "Responsible for front-end application development in React js. ",
        "Planning Heirarchy of application according to the Problem statement raised/Ticket's assigned and building components.",
        "Demonstrating the improvement of the user interface in response to the raised problem statement through a Ticket and ensuring timely deliveries.", 
        "Planning and breaking down tasks into deliverable and prepare estimates accordingly.", 
        "Reporting the work status to team and make necessary discussions with client whenever required.", 
        "To Engage in daily standup meetings for team collaboration, ongoing task discussions, assignment prioritization, and strategic project workflow planning."
      ],
    },
    {
      title: "Dev Intern",
      company_name: "bebo Technologies",
      icon: bebo_technologies,
      iconBg: "#383E56",
      date: "Feb 2022 - March 2022",
      points: [
        " Requirement Assessment: Performed Requirements analysis and its implementation by building POC's, creating supportive proofs to meet requirements and alternatively suggested possible workaround to get it completed.",
        " Design and Development: Based on supported tec hnical proofs, documenting the workaround for functionality in tech specifying the best approach followed(like sequence diagrams, workflow to implementation of notes, Hierarchy plans) and developed the tasks workflows as required.",
       "  Build and deployment: Translated design mockups and wireframes into functional and responsive user interfaces. Developed modular, reusable, and scalable frontend components in react and Utilized version control systems (GIT) for code versioning, branching, and for collaboration with other developers.",
        " Addressing Defects: Conducted rigorous testing of defect resolutions to ensure the effectiveness of implemented solutions. Collaborated with testing team to validate the defect fixes and ensure the fixes do not introduce new issues."
      ],
    },
    /*{
      title: "Campus Ambassador",
      company_name: "LPU",
      icon: lpu,
      iconBg: "#383E56",
      date: "June 2019 - April 2023",
      points: [
        "Workshop Facilitation: Host workshops or training sessions on topics relevant to the organization's expertise or interests. This could involve inviting guest speakers, organizing hands-on activities, or facilitating discussions to educate and empower fellow students.",
        "Networking: Foster connections between students, faculty, alumni, and professionals in relevant industries. Organize networking events, panels, or mixers to facilitate meaningful interactions and opportunities for collaboration or mentorship.",
       "Community Outreach: Extend the organization's presence beyond the campus by engaging with community organizations, or industry associations. Collaborate on outreach initiatives, volunteer activities to positively impact the broader community",
        "Feedback Gathering: Act as a conduit for feedback between students and the organization. Solicit input on events, programs, or products, and communicate suggestions or concerns back to the organization for consideration and improvement."
      ],
    },*/
  ];
  
  
  const projects = [
    {
      name: "EverBright Sighten",
      description:
        `The main purpose of the Everbright Sighten application is to provide an
        end-to-end solarsystem design, proposal, and financing solution for contractors and
        sales teams. It is user friendly by providing various solutions like with this application
        solar contractors can quickly and accurately design solar systems, create proposals,
        and provide financing facilities to their customers.`,
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "angular-to-react-migration",
          color: "green-text-gradient",
        },
        {
          name: "qasource",
          color: "pink-text-gradient",
        },
      ],
      image: everbright_sighten,
    },
    {
      name: "Food Court",
      description: `
        Implemented an attractive UI for a Food Court App, showcasing a variety of food items,
        Engineered cart functionality, enabling users to easily add and manage selected items,
        Automated total amount calculation for transparent and surprise-free checkout experiences, and
        Implemented a checkout modal and payment success message feature, enhancing the user journey".
      `,
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "JSON",
          color: "green-text-gradient",
        },
        {
          name: "demo-application",
          color: "pink-text-gradient",
        },
        {
          name: "practice",
          color: "orange-text-gradient",
        },
        {
          name: "grind",
          color: "pink-text-gradient",
        },
      ],
      image: food_court,
      source_code_link: "https://kl-venkat.github.io/Food_court/",
    },
    {
      name: "Proctor Watch Dog",
      description:` This virtual test application is an idea designed to reliably conduct large-scale
       examinations, meeting organizational requirements with unique features. It smoothly handles a large
        number of candidates concurrently and automatically switches to full-screen mode upon starting the test, 
        preventing candidates from switching to other tabs.`,
/*points:[
 ` It by default changes to full screen mode like metti platform once the candidate starts
  the Test. So thereby there would be no possibility of moving to other tabs during
  examination.`,
  ` Additional idea delivered to peers of adding chrome extension specifically for
  conductingexaminations to spy on malware practices something like one desk
  and others.`,
  " Helps to validate candidate in an appropriate way."
],
*/
      tags: [
        {
          name: "in-house-project",
          color: "blue-text-gradient",
        },
        {
          name: "qasource",
          color: "pink-text-gradient",
        },
        {
          name: "harper-dev",
          color: "orange-text-gradient",
        },
        {
          name: "individual-contribution",
          color: "green-text-gradient",
        },
       
      ],
      image: proctor_clone,
      source_code_link: "https://kl-venkat.github.io/proctor_watchdog/",
    },
  ];
  
  export {technologies, experiences, projects };