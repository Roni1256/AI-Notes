import { Code, LucideComputer, Globe, Smartphone, Shield, Cloud, Cog, Brain, Database, LineChart, Wrench, Palette, Gamepad } from "lucide-react";

const subjects = [
  { 
    icon:LucideComputer,
    category: "Computer and Tech",    
    subjects: [
      {
        name: "Web Development",
        topics: [
          {
            topic: "HTML",
            subject: "Web Development",
            syllabus:
              "Document structure, tags, semantic HTML, forms, media, accessibility.",
            
          },
          {
            topic: "CSS",
            subject: "Web Development",
            syllabus:
              "Selectors, box model, flexbox, grid, responsive design, animations.",
          },
          {
            topic: "JavaScript",
            subject: "Web Development",
            syllabus:
              "DOM, ES6+, functions, async/await, event handling, fetch API.",
          },
          {
            topic: "Frontend Frameworks",
            subject: "Web Development",
            syllabus:
              "React, Angular, Vue basics, components, routing, state management.",
          },
          {
            topic: "Backend Frameworks",
            subject: "Web Development",
            syllabus:
              "Node.js, Django, Laravel, REST APIs, authentication, MVC pattern.",
          },
          {
            topic: "Version Control",
            subject: "Web Development",
            syllabus:
              "Git basics, GitHub flow, branches, merges, pull requests.",
          },
          {
            topic: "Web Security",
            subject: "Web Development",
            syllabus: "OWASP Top 10, HTTPS, XSS, CSRF, secure headers, JWT.",
          },

        ],
        icon: Code,
        premium: true
      },
      {
        name: "Mobile App Development",
        topics: [
          {
            topic: "Android",
            subject: "Mobile App Development",
            syllabus:
              "Java/Kotlin, activities, intents, layouts, Room DB, publishing.",
            
          },
          {
            topic: "iOS",
            subject: "Mobile App Development",
            syllabus:
              "Swift, UIKit, Storyboards, CoreData, navigation, App Store.",
          },
          {
            topic: "Flutter",
            subject: "Mobile App Development",
            syllabus:
              "Dart, widgets, routing, state, animations, platform channels.",
          },
          {
            topic: "React Native",
            subject: "Mobile App Development",
            syllabus: "JSX, native modules, navigation, styling, deployment.",
          },
        ],
        icon: Smartphone,
        premium: false
      },
      {
        name: "Cybersecurity",
        topics: [
          {
            topic: "Network Security",
            subject: "Cybersecurity",
            syllabus:
              "Firewalls, VPNs, proxies, TCP/IP, IDS/IPS, sniffing tools.",
          },
          {
            topic: "Penetration Testing",
            subject: "Cybersecurity",
            syllabus:
              "Kali Linux, Metasploit, payloads, social engineering, exploits.",
          },
          {
            topic: "Ethical Hacking",
            subject: "Cybersecurity",
            syllabus:
              "Reconnaissance, scanning, vulnerability exploitation, password cracking.",
          },
          {
            topic: "Digital Forensics",
            subject: "Cybersecurity",
            syllabus:
              "Disk imaging, log analysis, evidence handling, forensic tools.",
          },
        ],
        icon: Shield,
        premium: true

      },
      {
        name: "Cloud Computing",
        topics: [
          {
            topic: "AWS",
            subject: "Cloud Computing",
            syllabus: "EC2, S3, Lambda, IAM, RDS, VPC, deployment, scaling.",
          },
          {
            topic: "Azure",
            subject: "Cloud Computing",
            syllabus:
              "Azure VM, Blob Storage, Functions, Active Directory, DevOps.",
          },
          {
            topic: "Google Cloud Platform",
            subject: "Cloud Computing",
            syllabus:
              "Compute Engine, Cloud Storage, App Engine, IAM, BigQuery.",
          },
          {
            topic: "Containers & Kubernetes",
            subject: "Cloud Computing",
            syllabus: "Docker, images, Kubernetes basics, Helm, deployments.",
          },
        ],
        icon: Cloud,
        premium: false

      },
      {
        name: "DevOps",
        topics: [
          {
            topic: "CI/CD",
            subject: "DevOps",
            syllabus:
              "Jenkins, GitHub Actions, pipelines, automated testing, blue-green deploys.",
          },
          {
            topic: "Docker",
            subject: "DevOps",
            syllabus:
              "Dockerfiles, containers, images, networks, Compose, registry.",
          },
          {
            topic: "Kubernetes",
            subject: "DevOps",
            syllabus:
              "Pods, services, deployments, autoscaling, Helm, K8s architecture.",
          },
          {
            topic: "Infrastructure as Code",
            subject: "DevOps",
            syllabus:
              "Terraform basics, provisioning, Ansible playbooks, config management.",
          },
        ],
        icon: Cog,
        premium: true

      },
      {
        name: "Artificial Intelligence",
        topics: [
          {
            topic: "Machine Learning",
            subject: "Artificial Intelligence",
            syllabus:
              "Supervised/unsupervised, regression, classification, sklearn.",
          },
          {
            topic: "Deep Learning",
            subject: "Artificial Intelligence",
            syllabus:
              "Neural nets, CNNs, RNNs, backpropagation, TensorFlow/PyTorch.",
          },
          {
            topic: "Computer Vision",
            subject: "Artificial Intelligence",
            syllabus:
              "Image processing, object detection, OpenCV, segmentation.",
          },
          {
            topic: "NLP",
            subject: "Artificial Intelligence",
            syllabus:
              "Tokenization, sentiment analysis, transformers, BERT, spaCy.",
          },
        ],
        icon: Brain,
        premium: false
      },
      {
        name: "Data Science",
        topics: [
          {
            topic: "Data Analysis",
            subject: "Data Science",
            syllabus: "Pandas, NumPy, EDA, data cleaning, visualization.",
          },
          {
            topic: "Statistics",
            subject: "Data Science",
            syllabus:
              "Descriptive stats, probability, hypothesis testing, distributions.",
          },
          {
            topic: "Data Visualization",
            subject: "Data Science",
            syllabus:
              "Matplotlib, Seaborn, dashboards, storytelling with data.",
          },
          {
            topic: "Big Data",
            subject: "Data Science",
            syllabus: "Hadoop, Spark, Hive, MapReduce, data lakes.",
          },
        ],
        icon: LineChart,
        premium: true

      },
      {
        name: "Software Engineering",
        topics: [
          {
            topic: "Agile & Scrum",
            subject: "Software Engineering",
            syllabus:
              "Sprints, Scrum roles, ceremonies, story points, velocity.",
          },
          {
            topic: "Design Patterns",
            subject: "Software Engineering",
            syllabus: "Singleton, Factory, Observer, MVC, Adapter.",
          },
          {
            topic: "System Design",
            subject: "Software Engineering",
            syllabus:
              "Scalability, databases, load balancing, caching, microservices.",
          },
          {
            topic: "Testing",
            subject: "Software Engineering",
            syllabus: "Unit, integration, TDD, test coverage, automation.",
          },
        ],
        icon: Wrench,
        premium: false

      },
      {
        name: "Database Management",
        topics: [
          {
            topic: "SQL",
            subject: "Database Management",
            syllabus:
              "Queries, joins, indexing, constraints, normalization, subqueries.",
          },
          {
            topic: "NoSQL",
            subject: "Database Management",
            syllabus: "MongoDB, document stores, key-value, CAP theorem.",
          },
          {
            topic: "Relational DBs",
            subject: "Database Management",
            syllabus: "MySQL, PostgreSQL, schema design, transactions.",
          },
          {
            topic: "Data Warehousing",
            subject: "Database Management",
            syllabus: "ETL, star schema, OLAP vs OLTP, BI tools.",
          },
        ],
        icon: Database,
        premium: true

      },
      {
        name: "UI/UX Design",
        topics: [
          {
            topic: "Wireframing",
            subject: "UI/UX Design",
            syllabus:
              "User flows, low/high fidelity wireframes, Balsamiq, Figma.",
          },
          {
            topic: "Prototyping",
            subject: "UI/UX Design",
            syllabus: "Interactive prototypes, user testing, feedback loops.",
          },
          {
            topic: "Design Principles",
            subject: "UI/UX Design",
            syllabus: "Contrast, alignment, consistency, hierarchy, usability.",
          },
          {
            topic: "Accessibility",
            subject: "UI/UX Design",
            syllabus: "WCAG, keyboard nav, ARIA roles, color contrast.",
          },
        ],
        icon: Palette,
        premium: false

      },
      {
        name: "Game Development",
        topics: [
          {
            topic: "Game Engines",
            subject: "Game Development",
            syllabus:
              "Unity, Unreal, Godot basics, scripting, rendering pipelines.",
          },
          {
            topic: "2D/3D Graphics",
            subject: "Game Development",
            syllabus: "Sprites, meshes, textures, shaders, physics engines.",
          },
          {
            topic: "Scripting",
            subject: "Game Development",
            syllabus: "C#, GDScript, event systems, input handling.",
          },
          {
            topic: "VR/AR",
            subject: "Game Development",
            syllabus: "Oculus SDK, ARKit/ARCore, spatial tracking, UX for VR.",
          },
        ],
        icon: Gamepad,
        premium: true

      },
    ],
  },
];

export default subjects;
/* Data Structure Format:

*/