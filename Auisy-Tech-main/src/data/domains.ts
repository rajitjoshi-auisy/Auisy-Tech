export interface IndustryVertical {
  title: string
  brief: string
  tags: string[]
  clients?: string[]
}

export interface DomainData {
  slug: string
  title: string
  tagline: string
  heroTitle: string
  image: string
  description: string
  techStack: {
    label: string
    category: 'cloud' | 'data' | 'devops' | 'frontend' | 'backend' | 'ai' | 'security' | 'platform'
  }[]
  stats: { value: string; label: string }[]
  solutions: { title: string; description: string; icon: string }[]
  capabilities: { title: string; description: string; icon: string }[]
  caseStudies: { title: string; summary: string }[]
  verticals?: IndustryVertical[]
}

export const domains: DomainData[] = [
  // ─── 1. Banking & Finance ───
  {
    slug: 'banking-finance',
    title: 'Banking & Finance',
    tagline: 'Transforming ideas into action with cutting-edge technology solutions tailored for financial institutions in the digital age.',
    heroTitle: 'Innovative Banking & Finance Solutions',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=500&fit=crop',
    description:
      'At Auisy, we understand that financial institutions face unique challenges in today\'s rapidly evolving digital landscape. Our comprehensive suite of technology solutions is designed to help banks, credit unions, investment firms, and insurance companies thrive in this new era. From digital transformation and cybersecurity to AI-powered analytics and blockchain solutions, we provide the expertise and technology you need to stay ahead of the competition while maintaining regulatory compliance and customer trust.',
    techStack: [
      { label: 'AWS', category: 'cloud' },
      { label: 'Azure', category: 'cloud' },
      { label: 'Microservices', category: 'backend' },
      { label: 'Java', category: 'backend' },
      { label: 'Node.js', category: 'backend' },
      { label: 'Kafka', category: 'data' },
      { label: 'Redis', category: 'data' },
      { label: 'PostgreSQL', category: 'data' },
      { label: 'React', category: 'frontend' },
      { label: 'React Native', category: 'frontend' },
      { label: 'Kubernetes', category: 'devops' },
      { label: 'CI/CD', category: 'devops' },
      { label: 'TensorFlow', category: 'ai' },
      { label: 'Machine Learning', category: 'ai' },
      { label: 'Blockchain', category: 'platform' },
      { label: 'PCI DSS', category: 'security' },
    ],
    stats: [
      { value: '15+', label: 'Years Experience' },
      { value: '200+', label: 'Financial Clients' },
      { value: '94%', label: 'Client Retention' },
    ],
    solutions: [
      { title: 'Digital Banking Transformation', description: 'Modernize your banking systems with comprehensive digital transformation solutions. From mobile banking apps to seamless omnichannel experiences.', icon: 'Smartphone' },
      { title: 'Fintech Integration', description: 'Bridge the gap between traditional banking and innovative fintech solutions with our seamless integration services while maintaining security and compliance.', icon: 'Link' },
      { title: 'Cybersecurity & Compliance', description: 'Protect your institution and customers with advanced cybersecurity solutions that ensure regulatory compliance and defend against evolving cyber threats.', icon: 'Shield' },
      { title: 'AI & Machine Learning', description: 'Leverage artificial intelligence for fraud detection, risk assessment, personalized recommendations, and automated customer service.', icon: 'Brain' },
      { title: 'Blockchain Solutions', description: 'Explore blockchain technology for secure transactions, smart contracts, and decentralized finance applications tailored for your specific business needs.', icon: 'Blocks' },
      { title: 'Data Analytics & Insights', description: 'Transform financial data into actionable insights with advanced analytics. Understand customer behavior, optimize operations, and make data-driven decisions.', icon: 'BarChart3' },
    ],
    capabilities: [
      { title: 'Enhanced Security', description: 'Implement multi-layered security protocols to protect sensitive financial data, prevent fraud, and maintain customer trust.', icon: 'Lock' },
      { title: 'Operational Efficiency', description: 'Streamline processes, reduce manual interventions, and optimize workflows to significantly cut operational costs.', icon: 'Zap' },
      { title: 'Enhanced Customer Experience', description: 'Deliver personalized, seamless experiences across all channels to increase customer satisfaction, loyalty, and lifetime value.', icon: 'Users' },
      { title: 'Regulatory Compliance', description: 'Stay ahead of evolving financial regulations with automated compliance tools, regular updates, and built-in controls.', icon: 'Scale' },
    ],
    caseStudies: [
      { title: 'Digital Transformation for Regional Bank', summary: 'Helped a regional bank modernize its core banking systems, resulting in a 35% increase in digital customer engagement and 28% reduction in operational costs.' },
      { title: 'AI-Powered Fraud Detection', summary: 'Implemented advanced AI algorithms for a credit card provider, reducing fraud incidents by 62% while minimizing false positives by 40%.' },
      { title: 'Blockchain for Trade Finance', summary: 'Created a secure blockchain solution for international trade finance, reducing processing time from days to minutes and enhancing transparency.' },
    ],
    verticals: [
      {
        title: 'Regulators & Government Bodies',
        brief: 'Secure, auditable platforms for regulatory compliance, e-governance, and citizen service delivery.',
        tags: ['Compliance Platforms', 'e-Governance', 'XBRL', 'Audit Systems', 'Data Sovereignty', 'AWS GovCloud'],
        clients: ['Securities and Exchange Board of India (SEBI)', 'Ministry of Urban Development'],
      },
      {
        title: 'Financial Services',
        brief: 'Core banking modernization, trading platforms, and real-time analytics for capital markets and wealth management.',
        tags: ['Core Banking', 'Trading Platforms', 'Oracle', 'SAP', 'Kafka', 'Microservices', 'Redis'],
        clients: ['CareEdge Group (formerly CARE Ratings)', 'Angel One Limited (formerly Angel Broking)'],
      },
      {
        title: 'Insurance',
        brief: 'Claims automation, underwriting intelligence, and digital-first policyholder engagement platforms.',
        tags: ['Claims Automation', 'AI Underwriting', 'OCR', 'Policy Admin', 'Snowflake', 'Predictive Analytics'],
        clients: ['ManipalCigna Health Insurance (formerly Cigna TTK)', 'IndiaFirst Life Insurance'],
      },
      {
        title: 'Healthcare',
        brief: 'Interoperable health platforms, telemedicine, and clinical workflow automation for providers and MedTech.',
        tags: ['FHIR / HL7', 'EHR Systems', 'Telemedicine', 'HIPAA', 'WebRTC', 'Deep Learning'],
        clients: ['Midmark India', 'Janak Healthcare'],
      },
      {
        title: 'Industrial Conglomerate',
        brief: 'Enterprise resource planning, supply chain intelligence, and IoT-driven predictive maintenance at scale.',
        tags: ['SAP', 'ERP', 'IoT / MQTT', 'Predictive ML', 'TimescaleDB', 'Grafana', 'Digital Twins'],
        clients: ['RPG Group'],
      },
      {
        title: 'Telecommunications',
        brief: 'BSS/OSS transformation, 5G enablement, and AI-powered network operations for telecom operators.',
        tags: ['5G / O-RAN', 'OSS/BSS', 'AIOps', 'Edge Computing', 'Cassandra', 'Real-Time Analytics'],
        clients: ['Amdocs Limited', 'Bharti Airtel Limited'],
      },
    ],
  },

  // ─── 2. Government / Semi Government ───
  {
    slug: 'government',
    title: 'Government / Semi Government',
    tagline: 'Empowering government and semi-government organizations with secure, innovative, and citizen-centric technology solutions for the digital era.',
    heroTitle: 'Transforming Government & Public Services',
    image: 'https://images.unsplash.com/photo-1541872703-74c5e44368f9?w=800&h=500&fit=crop',
    description:
      'At Auisy, we help government and semi-government entities modernize operations, enhance citizen engagement, and ensure robust security. Our tailored IT solutions enable agencies to streamline workflows, comply with regulations, and deliver transparent, efficient public services in a rapidly evolving landscape. From cloud migration and cybersecurity to AI-driven automation and digital portals, we support your digital transformation journey — making governance more agile, resilient, and citizen-focused.',
    techStack: [
      { label: 'AWS GovCloud', category: 'cloud' },
      { label: 'Azure Government', category: 'cloud' },
      { label: 'On-Premise', category: 'cloud' },
      { label: 'Java', category: 'backend' },
      { label: 'Python', category: 'backend' },
      { label: '.NET', category: 'backend' },
      { label: 'PostgreSQL', category: 'data' },
      { label: 'Oracle', category: 'data' },
      { label: 'React', category: 'frontend' },
      { label: 'Angular', category: 'frontend' },
      { label: 'Accessibility (WCAG)', category: 'frontend' },
      { label: 'AI & Automation', category: 'ai' },
      { label: 'Data Analytics', category: 'ai' },
      { label: 'Zero Trust Security', category: 'security' },
      { label: 'Data Sovereignty', category: 'security' },
      { label: 'Kubernetes', category: 'devops' },
    ],
    stats: [
      { value: '10+', label: 'Years Public Sector Experience' },
      { value: '50+', label: 'Government Clients' },
      { value: '99%', label: 'Data Security Compliance' },
    ],
    solutions: [
      { title: 'Digital Government Transformation', description: 'Modernize government operations and services with digital platforms, reducing paperwork, streamlining workflows, and improving accessibility for all constituents.', icon: 'Landmark' },
      { title: 'Cloud & Infrastructure Modernization', description: 'Enable secure, scalable, and cost-effective operations through cloud migration, data center optimization, and hybrid cloud solutions tailored for public sector needs.', icon: 'Cloud' },
      { title: 'Cybersecurity & Regulatory Compliance', description: 'Protect sensitive government data and ensure compliance with robust cybersecurity solutions, threat detection, and regulatory support.', icon: 'ShieldCheck' },
      { title: 'AI & Automation for Public Services', description: 'Leverage AI-powered chatbots, intelligent document processing, and automation to enhance citizen services and optimize resource allocation.', icon: 'Bot' },
      { title: 'Citizen Engagement Platforms', description: 'Implement online portals, mobile apps, and data transparency initiatives to improve communication and engagement with citizens.', icon: 'Globe' },
      { title: 'Document & Records Management', description: 'Streamline document handling, ensure data integrity, and support paperless operations for efficiency, accuracy, and sustainability.', icon: 'FileText' },
    ],
    capabilities: [
      { title: 'Regulatory Expertise', description: 'Deep knowledge of government regulations and compliance requirements ensures your projects meet all legal and policy standards.', icon: 'Scale' },
      { title: 'Citizen-Centric Design', description: 'We prioritize user experience for citizens and public servants, making government services more accessible, intuitive, and effective.', icon: 'Users' },
      { title: 'Scalable Infrastructure', description: 'Our solutions are built for scalability, supporting everything from local government offices to nationwide agencies.', icon: 'Server' },
      { title: 'Advanced Security', description: 'Protect sensitive public data with state-of-the-art cybersecurity, encryption, and continuous monitoring.', icon: 'Lock' },
    ],
    caseStudies: [
      { title: 'Smart City Portal Implementation', summary: 'Developed a unified digital portal for a metropolitan city, streamlining citizen services, online payments, and real-time issue reporting, resulting in a 40% increase in citizen satisfaction.' },
      { title: 'Cloud Migration for State Department', summary: 'Facilitated secure cloud migration for a state government department, reducing IT costs by 30% while ensuring data sovereignty and compliance with national regulations.' },
      { title: 'Digital Records Management System', summary: 'Implemented a robust digital records management system for a semi-government agency, enabling paperless operations and improving document retrieval speed by 70%.' },
    ],
  },

  // ─── 3. IT & Consulting ───
  {
    slug: 'it-consulting',
    title: 'IT & Consulting',
    tagline: 'Accelerating digital transformation and business growth with innovative technology consulting, strategy, and implementation.',
    heroTitle: 'Expert IT & Consulting Services',
    image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=500&fit=crop',
    description:
      'At Auisy, we empower organizations to harness technology for competitive advantage. Our IT and consulting experts guide you from strategy to execution — modernizing systems, optimizing processes, and unlocking new opportunities in a digital-first world. From IT strategy and cloud migration to application development, cybersecurity, and data analytics, we deliver tailored solutions that drive efficiency, resilience, and innovation.',
    techStack: [
      { label: 'AWS', category: 'cloud' },
      { label: 'Azure', category: 'cloud' },
      { label: 'GCP', category: 'cloud' },
      { label: 'Java', category: 'backend' },
      { label: 'Python', category: 'backend' },
      { label: 'Node.js', category: 'backend' },
      { label: '.NET', category: 'backend' },
      { label: 'React', category: 'frontend' },
      { label: 'Angular', category: 'frontend' },
      { label: 'Kubernetes', category: 'devops' },
      { label: 'Terraform', category: 'devops' },
      { label: 'CI/CD', category: 'devops' },
      { label: 'AI & ML', category: 'ai' },
      { label: 'RPA', category: 'ai' },
      { label: 'Business Intelligence', category: 'ai' },
      { label: 'SOC 2', category: 'security' },
    ],
    stats: [
      { value: '200+', label: 'Consulting Projects' },
      { value: '98%', label: 'Client Satisfaction' },
      { value: '20+', label: 'Industries Served' },
    ],
    solutions: [
      { title: 'IT Strategy & Advisory', description: 'Align technology with business goals through expert consulting, digital roadmaps, and transformation planning.', icon: 'Lightbulb' },
      { title: 'Cloud Migration & Modernization', description: 'Seamlessly move to the cloud, modernize legacy systems, and unlock agility with secure, scalable solutions.', icon: 'Cloud' },
      { title: 'Application Development', description: 'Design, build, and maintain custom software and platforms tailored to your unique business needs.', icon: 'Code' },
      { title: 'Cybersecurity & Risk Management', description: 'Protect your data, systems, and reputation with robust cybersecurity strategies and compliance solutions.', icon: 'Shield' },
      { title: 'Data Analytics & AI', description: 'Unlock insights and drive smarter decisions with advanced analytics, business intelligence, and AI solutions.', icon: 'BarChart3' },
      { title: 'Process Automation', description: 'Streamline operations and boost productivity with RPA, workflow automation, and digital process optimization.', icon: 'Workflow' },
    ],
    capabilities: [
      { title: 'End-to-End Delivery', description: 'From strategy and design to implementation and support, we deliver results at every stage.', icon: 'Link' },
      { title: 'Industry Expertise', description: 'Deep experience across sectors including finance, healthcare, manufacturing, and more.', icon: 'Users' },
      { title: 'Innovation Focus', description: 'Embracing the latest in AI, cloud, and automation to future-proof your business.', icon: 'Lightbulb' },
      { title: 'Dedicated Support', description: 'Responsive teams committed to your success, every step of the way.', icon: 'Headphones' },
    ],
    caseStudies: [
      { title: 'Enterprise Digital Transformation', summary: 'Guided a global manufacturer through IT modernization, resulting in 30% faster product launches and significant cost savings.' },
      { title: 'Cloud Migration for Financial Services', summary: 'Enabled a financial client to migrate core systems to the cloud, improving agility and reducing infrastructure costs by 40%.' },
      { title: 'AI & Analytics for Retail', summary: 'Implemented advanced analytics and AI-driven insights for a retail chain, boosting sales and optimizing inventory management.' },
    ],
  },

  // ─── 4. Ecommerce & Retail ───
  {
    slug: 'ecommerce-retail',
    title: 'Ecommerce & Retail',
    tagline: 'Empowering retailers and online businesses to thrive with technology-driven innovation, seamless customer experiences, and data-driven growth strategies.',
    heroTitle: 'Smart Solutions for Ecommerce & Retail',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=500&fit=crop',
    description:
      'At Auisy, we help ecommerce and retail brands unlock new opportunities in a rapidly evolving marketplace. Our end-to-end solutions drive growth, optimize operations, and create engaging omnichannel experiences for your customers. From scalable ecommerce platforms and secure payment integrations to AI-powered personalization and supply chain automation, we deliver the technology and expertise you need to stay ahead of the competition.',
    techStack: [
      { label: 'AWS', category: 'cloud' },
      { label: 'GCP', category: 'cloud' },
      { label: 'Node.js', category: 'backend' },
      { label: 'Python', category: 'backend' },
      { label: 'GraphQL', category: 'backend' },
      { label: 'React', category: 'frontend' },
      { label: 'Next.js', category: 'frontend' },
      { label: 'React Native', category: 'frontend' },
      { label: 'MongoDB', category: 'data' },
      { label: 'Redis', category: 'data' },
      { label: 'Elasticsearch', category: 'data' },
      { label: 'Kubernetes', category: 'devops' },
      { label: 'Docker', category: 'devops' },
      { label: 'AI Personalization', category: 'ai' },
      { label: 'Recommendation Engine', category: 'ai' },
      { label: 'PCI DSS', category: 'security' },
    ],
    stats: [
      { value: '12+', label: 'Years Retail Experience' },
      { value: '150+', label: 'Ecommerce Projects' },
      { value: '98%', label: 'Client Satisfaction' },
    ],
    solutions: [
      { title: 'Ecommerce Platform Development', description: 'Build scalable, secure, and feature-rich ecommerce websites and mobile apps tailored to your brand and business model.', icon: 'ShoppingCart' },
      { title: 'Payment Gateway Integration', description: 'Integrate secure and flexible payment solutions to enable seamless transactions and support multiple payment methods.', icon: 'CreditCard' },
      { title: 'Omnichannel Customer Experience', description: 'Deliver consistent and engaging experiences across online, mobile, and in-store channels to boost loyalty and sales.', icon: 'Users' },
      { title: 'Inventory & Supply Chain Automation', description: 'Optimize inventory management and automate supply chain processes for greater efficiency and reduced costs.', icon: 'Truck' },
      { title: 'Data Analytics & Personalization', description: 'Leverage data analytics and AI to personalize product recommendations, pricing, and marketing for higher conversion rates.', icon: 'BarChart3' },
      { title: 'Cybersecurity & Fraud Prevention', description: 'Protect your business and customers with advanced security solutions and real-time fraud detection.', icon: 'Shield' },
    ],
    capabilities: [
      { title: 'High-Performance Platforms', description: 'Lightning-fast, scalable, and reliable ecommerce platforms to handle high traffic and peak sales events.', icon: 'Zap' },
      { title: 'Mobile-First Approach', description: 'Responsive design and mobile app development to capture customers wherever they shop.', icon: 'Smartphone' },
      { title: 'Loyalty & Rewards Programs', description: 'Boost repeat purchases with integrated loyalty, rewards, and referral solutions.', icon: 'Gift' },
      { title: '24/7 Customer Support', description: 'Omnichannel customer service solutions, including chatbots and live support, to enhance satisfaction and trust.', icon: 'Headphones' },
    ],
    caseStudies: [
      { title: 'Omnichannel Retail Transformation', summary: 'Enabled a leading fashion brand to unify online and offline sales, resulting in a 35% increase in customer retention and 50% faster order fulfillment.' },
      { title: 'Scaling Ecommerce for Growth', summary: 'Built a robust ecommerce platform for a fast-growing startup, supporting 10x sales growth and seamless integration with logistics partners.' },
      { title: 'Automated Inventory & Supply Chain', summary: 'Implemented AI-driven inventory management for a retail chain, reducing stockouts by 60% and improving profit margins.' },
    ],
  },

  // ─── 5. Manufacturing ───
  {
    slug: 'manufacturing',
    title: 'Manufacturing',
    tagline: 'Transforming factories and supply chains with smart, efficient, and secure technology solutions for the Industry 4.0 era.',
    heroTitle: 'Empowering Manufacturing with Digital Innovation',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=500&fit=crop',
    description:
      'At Auisy, we help manufacturers modernize operations, boost productivity, and stay competitive through digital transformation. Our solutions enable smart factories, real-time monitoring, and data-driven decision-making across the production lifecycle. From IoT-enabled automation and predictive maintenance to supply chain optimization and advanced analytics, we deliver the expertise and technology to power your manufacturing success.',
    techStack: [
      { label: 'AWS IoT', category: 'cloud' },
      { label: 'Azure IoT Hub', category: 'cloud' },
      { label: 'Java', category: 'backend' },
      { label: 'Python', category: 'backend' },
      { label: 'Go', category: 'backend' },
      { label: 'TimescaleDB', category: 'data' },
      { label: 'InfluxDB', category: 'data' },
      { label: 'Kafka', category: 'data' },
      { label: 'Grafana', category: 'data' },
      { label: 'React', category: 'frontend' },
      { label: 'IoT / MQTT', category: 'platform' },
      { label: 'SAP Integration', category: 'platform' },
      { label: 'Predictive ML', category: 'ai' },
      { label: 'Computer Vision', category: 'ai' },
      { label: 'Kubernetes', category: 'devops' },
      { label: 'Terraform', category: 'devops' },
    ],
    stats: [
      { value: '15+', label: 'Years Industry Experience' },
      { value: '80+', label: 'Manufacturing Clients' },
      { value: '99.5%', label: 'Project Uptime' },
    ],
    solutions: [
      { title: 'Smart Factory Automation', description: 'Implement IoT, robotics, and automation to streamline production, reduce downtime, and increase throughput.', icon: 'Factory' },
      { title: 'Real-Time Data & Analytics', description: 'Gain actionable insights with real-time monitoring, predictive analytics, and KPI dashboards for better decision-making.', icon: 'BarChart3' },
      { title: 'Predictive Maintenance', description: 'Reduce unplanned downtime and maintenance costs with AI-driven predictive maintenance solutions.', icon: 'Settings' },
      { title: 'Cybersecurity for OT & IT', description: 'Protect your manufacturing systems and intellectual property with advanced cybersecurity and network segmentation.', icon: 'Shield' },
      { title: 'Supply Chain Optimization', description: 'Enhance supply chain visibility, demand forecasting, and logistics with integrated digital solutions.', icon: 'Truck' },
      { title: 'Quality Management Systems', description: 'Deploy digital quality control and compliance systems to ensure high standards and regulatory adherence.', icon: 'CheckCircle' },
    ],
    capabilities: [
      { title: 'Industrial IoT Integration', description: 'Seamless integration of sensors, devices, and systems for real-time data and process automation.', icon: 'Cpu' },
      { title: 'Robotics & Automation', description: 'Advanced robotics solutions to boost productivity, safety, and consistency on the shop floor.', icon: 'Bot' },
      { title: 'Compliance & Quality Control', description: 'Digital quality management and compliance tracking for industry standards and certifications.', icon: 'ClipboardCheck' },
      { title: '24/7 Support', description: 'Dedicated support teams to ensure your manufacturing operations run smoothly and securely.', icon: 'Headphones' },
    ],
    caseStudies: [
      { title: 'Smart Factory Transformation', summary: 'Enabled a leading manufacturer to automate production lines, resulting in a 30% increase in output and 25% reduction in downtime.' },
      { title: 'Predictive Maintenance Implementation', summary: 'Deployed AI-driven maintenance for a plant, cutting equipment failures by 40% and saving significant operational costs.' },
      { title: 'Supply Chain Optimization', summary: 'Integrated real-time logistics and demand forecasting, reducing inventory costs by 20% and improving delivery times.' },
    ],
  },

  // ─── 6. Startups ───
  {
    slug: 'startups',
    title: 'Startups',
    tagline: 'Accelerating innovation and growth for startups with agile, scalable, and cost-effective technology solutions.',
    heroTitle: 'Empowering Startups to Scale & Succeed',
    image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&h=500&fit=crop',
    description:
      'At Auisy, we help startups turn bold ideas into reality. Our team delivers rapid prototyping, MVP development, cloud infrastructure, and growth-focused digital solutions to help you launch, scale, and disrupt your industry. Whether you\'re building your first product or scaling to millions of users, we provide the technology, guidance, and support you need at every stage of your startup journey.',
    techStack: [
      { label: 'AWS', category: 'cloud' },
      { label: 'GCP', category: 'cloud' },
      { label: 'Vercel', category: 'cloud' },
      { label: 'Node.js', category: 'backend' },
      { label: 'Python', category: 'backend' },
      { label: 'Go', category: 'backend' },
      { label: 'React', category: 'frontend' },
      { label: 'Next.js', category: 'frontend' },
      { label: 'React Native', category: 'frontend' },
      { label: 'Flutter', category: 'frontend' },
      { label: 'PostgreSQL', category: 'data' },
      { label: 'MongoDB', category: 'data' },
      { label: 'Redis', category: 'data' },
      { label: 'Docker', category: 'devops' },
      { label: 'CI/CD', category: 'devops' },
      { label: 'Analytics', category: 'ai' },
    ],
    stats: [
      { value: '200+', label: 'Startups Supported' },
      { value: '50+', label: 'Successful MVP Launches' },
      { value: '98%', label: 'Client Retention' },
    ],
    solutions: [
      { title: 'MVP Development', description: 'Rapid prototyping and MVP builds to validate your idea and get to market quickly with minimal risk.', icon: 'Rocket' },
      { title: 'Cloud & DevOps', description: 'Cloud-native infrastructure, CI/CD pipelines, and scalable architectures to support your growth from day one.', icon: 'Cloud' },
      { title: 'App & Web Development', description: 'Custom web and mobile app development with a focus on user experience, performance, and scalability.', icon: 'Code' },
      { title: 'Product Strategy & Consulting', description: 'Expert guidance on product-market fit, go-to-market strategy, and technology stack selection for startups.', icon: 'Lightbulb' },
      { title: 'Security & Compliance', description: 'Implement best practices for data security, privacy, and regulatory compliance from the start.', icon: 'Shield' },
      { title: 'Growth Hacking & Analytics', description: 'Leverage analytics, A/B testing, and growth hacking techniques to optimize user acquisition and retention.', icon: 'TrendingUp' },
    ],
    capabilities: [
      { title: 'Agile & Lean Development', description: 'Iterative, feedback-driven processes to build, test, and launch quickly with minimal waste.', icon: 'Workflow' },
      { title: 'Dedicated Startup Teams', description: 'Flexible, cross-functional teams that adapt to your changing needs and priorities.', icon: 'Users' },
      { title: 'Ready-to-Scale Infrastructure', description: 'Cloud-native solutions designed for rapid scaling and global reach.', icon: 'Server' },
      { title: 'Mentorship & Support', description: 'Ongoing guidance, technical support, and mentorship from idea to exit.', icon: 'Headphones' },
    ],
    caseStudies: [
      { title: 'Rapid MVP Launch', summary: 'Helped a fintech startup launch their MVP in just 8 weeks, attracting early users and securing seed funding.' },
      { title: 'Scaling to 1M+ Users', summary: 'Architected a cloud-native platform for a SaaS startup, enabling them to scale seamlessly to over one million users worldwide.' },
      { title: 'Growth Hacking Success', summary: 'Implemented data-driven growth strategies for a B2C app, increasing user retention by 45% within three months.' },
    ],
  },

  // ─── 7. Education & E-Learning ───
  {
    slug: 'education-elearning',
    title: 'Education & E-Learning',
    tagline: 'Transforming learning experiences for schools, universities, and online educators with innovative, scalable, and engaging digital solutions.',
    heroTitle: 'Empowering Education & E-Learning',
    image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&h=500&fit=crop',
    description:
      'At Auisy, we help educational institutions and e-learning providers harness technology to deliver accessible, interactive, and effective learning experiences. Our solutions support digital classrooms, online courses, and collaborative learning for students and educators worldwide. From Learning Management Systems (LMS) and virtual classrooms to AI-powered assessments and mobile learning, we provide the expertise and technology to drive educational success in the digital age.',
    techStack: [
      { label: 'AWS', category: 'cloud' },
      { label: 'Azure', category: 'cloud' },
      { label: 'Node.js', category: 'backend' },
      { label: 'Python', category: 'backend' },
      { label: 'React', category: 'frontend' },
      { label: 'React Native', category: 'frontend' },
      { label: 'WebRTC', category: 'frontend' },
      { label: 'PostgreSQL', category: 'data' },
      { label: 'MongoDB', category: 'data' },
      { label: 'Redis', category: 'data' },
      { label: 'Docker', category: 'devops' },
      { label: 'Kubernetes', category: 'devops' },
      { label: 'AI Assessments', category: 'ai' },
      { label: 'Adaptive Learning', category: 'ai' },
      { label: 'LMS Platforms', category: 'platform' },
      { label: 'SCORM / xAPI', category: 'platform' },
    ],
    stats: [
      { value: '300K+', label: 'Learners Impacted' },
      { value: '100+', label: 'Institutions Served' },
      { value: '99%', label: 'Platform Uptime' },
    ],
    solutions: [
      { title: 'Learning Management Systems (LMS)', description: 'Custom LMS platforms for course delivery, tracking, and administration tailored to your institution\'s needs.', icon: 'BookOpen' },
      { title: 'Virtual Classrooms', description: 'Engage students with live, interactive classes, video conferencing, and collaborative tools for remote learning.', icon: 'Video' },
      { title: 'Mobile Learning Apps', description: 'Deliver education on-the-go with responsive web portals and native mobile apps for students and teachers.', icon: 'Smartphone' },
      { title: 'AI-Powered Assessments', description: 'Leverage artificial intelligence for adaptive testing, personalized feedback, and automated grading.', icon: 'Brain' },
      { title: 'Student Engagement Tools', description: 'Boost participation and retention with gamification, discussion boards, and real-time progress tracking.', icon: 'Users' },
      { title: 'Data Security & Privacy', description: 'Protect student data and ensure compliance with robust cybersecurity and privacy solutions.', icon: 'Shield' },
    ],
    capabilities: [
      { title: 'Global Accessibility', description: 'Platforms and apps optimized for learners and educators anywhere in the world, on any device.', icon: 'Globe' },
      { title: 'Easy Integrations', description: 'Seamless integration with SIS, payment gateways, content libraries, and third-party tools.', icon: 'Link' },
      { title: 'Learning Analytics', description: 'Real-time dashboards and analytics to track progress, engagement, and outcomes.', icon: 'BarChart3' },
      { title: '24/7 Support', description: 'Dedicated support teams to ensure your educational platforms run smoothly and securely.', icon: 'Headphones' },
    ],
    caseStudies: [
      { title: 'Virtual Learning for Schools', summary: 'Helped a school district implement virtual classrooms, enabling uninterrupted learning for over 10,000 students during remote education periods.' },
      { title: 'LMS for University', summary: 'Deployed a custom LMS for a leading university, streamlining course management and improving student engagement by 35%.' },
      { title: 'AI-Based Assessments', summary: 'Implemented adaptive testing and automated grading for an e-learning provider, reducing grading time by 60% and providing instant feedback to learners.' },
    ],
  },

  // ─── 8. Insurance ───
  {
    slug: 'insurance',
    title: 'Insurance',
    tagline: 'Empowering insurers, brokers, and insurtechs with secure, digital-first technology for efficiency, compliance, and customer delight.',
    heroTitle: 'Innovative Solutions for the Insurance Industry',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=500&fit=crop',
    description:
      'At Auisy, we help insurance companies modernize operations, enhance customer engagement, and drive growth. Our technology solutions streamline policy management, claims processing, and compliance for insurers and insurtechs of all sizes. From cloud migration and AI-powered underwriting to customer portals and regulatory automation, we deliver the expertise and technology to help you thrive in a rapidly changing insurance landscape.',
    techStack: [
      { label: 'AWS', category: 'cloud' },
      { label: 'Google Cloud', category: 'cloud' },
      { label: 'Python', category: 'backend' },
      { label: '.NET', category: 'backend' },
      { label: 'Microservices', category: 'backend' },
      { label: 'PostgreSQL', category: 'data' },
      { label: 'Snowflake', category: 'data' },
      { label: 'Apache Spark', category: 'data' },
      { label: 'React', category: 'frontend' },
      { label: 'Angular', category: 'frontend' },
      { label: 'OCR', category: 'ai' },
      { label: 'AI Underwriting', category: 'ai' },
      { label: 'Predictive Analytics', category: 'ai' },
      { label: 'Docker', category: 'devops' },
      { label: 'Jenkins', category: 'devops' },
      { label: 'IRDAI / GDPR', category: 'security' },
    ],
    stats: [
      { value: '50+', label: 'Insurance Clients' },
      { value: '99.9%', label: 'System Uptime' },
      { value: '15+', label: 'Years Industry Experience' },
    ],
    solutions: [
      { title: 'Policy Administration Systems', description: 'Modern, flexible platforms for policy issuance, management, renewals, and endorsements.', icon: 'FileText' },
      { title: 'Claims Management Automation', description: 'Accelerate claims processing with workflow automation, fraud detection, and digital documentation.', icon: 'FileCheck' },
      { title: 'Customer Self-Service Portals', description: 'Empower policyholders with online portals for policy access, claims filing, and real-time support.', icon: 'Monitor' },
      { title: 'AI-Powered Underwriting', description: 'Leverage artificial intelligence for faster, more accurate risk assessment and pricing.', icon: 'Brain' },
      { title: 'Regulatory Compliance & Security', description: 'Ensure compliance with evolving regulations and protect sensitive data with robust cybersecurity.', icon: 'ShieldCheck' },
      { title: 'Cloud Transformation', description: 'Modernize legacy systems and increase agility with secure, scalable cloud solutions for insurance.', icon: 'Cloud' },
    ],
    capabilities: [
      { title: 'Data Privacy & Security', description: 'End-to-end encryption, secure infrastructure, and compliance with industry standards (IRDAI, GDPR, etc.).', icon: 'Lock' },
      { title: 'Legacy System Integration', description: 'Seamless integration with core insurance systems, third-party services, and payment gateways.', icon: 'Link' },
      { title: 'Analytics & Reporting', description: 'Real-time dashboards and analytics for underwriting, claims, and customer engagement.', icon: 'BarChart3' },
      { title: '24/7 Support', description: 'Dedicated support teams to ensure your insurance operations run smoothly and securely.', icon: 'Headphones' },
    ],
    caseStudies: [
      { title: 'Claims Automation for Insurer', summary: 'Implemented automated claims workflows, reducing processing time by 60% and improving customer satisfaction scores.' },
      { title: 'Customer Portal Launch', summary: 'Developed a self-service portal for a leading broker, resulting in a 45% reduction in support requests and faster claims resolution.' },
      { title: 'AI Underwriting Transformation', summary: 'Deployed AI-powered underwriting for a specialty insurer, increasing quote accuracy and reducing manual review time by 50%.' },
    ],
  },

  // ─── 9. Media & Entertainment ───
  {
    slug: 'media-entertainment',
    title: 'Media & Entertainment',
    tagline: 'Empowering content creators, broadcasters, and entertainment companies with cutting-edge digital technology for a dynamic audience.',
    heroTitle: 'Innovative Solutions for Media & Entertainment',
    image: '/images/domain/media.jpg',
    description:
      'At Auisy, we help media and entertainment brands captivate audiences, streamline production, and monetize content with innovative digital solutions. Our expertise enables seamless content delivery, audience analytics, and multi-platform engagement for broadcasters, studios, publishers, and streaming services. From OTT platforms and live streaming to digital rights management and AI-powered content recommendations, we deliver the technology and support you need to thrive in the fast-paced media landscape.',
    techStack: [
      { label: 'AWS MediaServices', category: 'cloud' },
      { label: 'GCP', category: 'cloud' },
      { label: 'CDN (CloudFront)', category: 'cloud' },
      { label: 'Node.js', category: 'backend' },
      { label: 'Python', category: 'backend' },
      { label: 'Go', category: 'backend' },
      { label: 'React', category: 'frontend' },
      { label: 'React Native', category: 'frontend' },
      { label: 'Smart TV SDKs', category: 'frontend' },
      { label: 'MongoDB', category: 'data' },
      { label: 'Elasticsearch', category: 'data' },
      { label: 'Redis', category: 'data' },
      { label: 'AI Recommendations', category: 'ai' },
      { label: 'Content Analytics', category: 'ai' },
      { label: 'DRM', category: 'security' },
      { label: 'HLS / DASH', category: 'platform' },
    ],
    stats: [
      { value: '100M+', label: 'Viewers Reached' },
      { value: '50+', label: 'Media Clients' },
      { value: '99.9%', label: 'Platform Uptime' },
    ],
    solutions: [
      { title: 'OTT & Streaming Platforms', description: 'Build scalable, high-performance OTT and live streaming platforms for video, audio, and interactive content.', icon: 'Play' },
      { title: 'Digital Asset Management', description: 'Organize, store, and distribute media assets with secure, user-friendly digital asset management solutions.', icon: 'FolderOpen' },
      { title: 'Live Broadcasting Solutions', description: 'Enable seamless live event streaming and broadcast production with robust, low-latency solutions.', icon: 'Radio' },
      { title: 'AI Content Recommendations', description: 'Increase engagement and retention with AI-driven personalized content curation and recommendations.', icon: 'Brain' },
      { title: 'Digital Rights Management', description: 'Protect your intellectual property with advanced DRM, watermarking, and anti-piracy solutions.', icon: 'Shield' },
      { title: 'Audience Analytics', description: 'Leverage real-time analytics to understand your audience, optimize content, and drive monetization.', icon: 'BarChart3' },
    ],
    capabilities: [
      { title: 'Global Content Delivery', description: 'CDN integration and multi-region hosting for seamless, high-quality streaming worldwide.', icon: 'Globe' },
      { title: 'Multi-Platform Integration', description: 'Deliver content across web, mobile, smart TVs, and connected devices with unified user experiences.', icon: 'Monitor' },
      { title: 'Audience Engagement Tools', description: 'Interactive features, social sharing, and gamification to boost audience participation and loyalty.', icon: 'Users' },
      { title: '24/7 Support', description: 'Dedicated support teams to ensure your media platforms run smoothly and securely.', icon: 'Headphones' },
    ],
    caseStudies: [
      { title: 'OTT Platform Launch', summary: 'Built a scalable OTT platform for a national broadcaster, reaching 10 million viewers and supporting live sports streaming with zero downtime.' },
      { title: 'Live Event Streaming', summary: 'Enabled a media company to broadcast concerts and events globally, increasing audience engagement by 50%.' },
      { title: 'AI Content Recommendations', summary: 'Implemented AI-powered recommendations for a streaming service, boosting watch time and user retention by 35%.' },
    ],
  },

  // ─── 10. Telecom ───
  {
    slug: 'telecom',
    title: 'Telecom',
    tagline: 'Empowering telecom operators and service providers with next-gen technology for connectivity, automation, and growth.',
    heroTitle: 'Innovative Solutions for Telecom',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=500&fit=crop',
    description:
      'At Auisy, we help telecom companies modernize networks, optimize operations, and deliver seamless customer experiences. Our solutions support the shift to 5G, cloud, and AI-powered operations, enabling you to stay ahead in a fast-evolving industry. From network virtualization and edge computing to omnichannel customer engagement and advanced analytics, we provide the expertise and technology to drive your telecom transformation and growth.',
    techStack: [
      { label: 'AWS', category: 'cloud' },
      { label: 'Google Cloud', category: 'cloud' },
      { label: 'Edge Computing', category: 'cloud' },
      { label: 'Java', category: 'backend' },
      { label: 'Go', category: 'backend' },
      { label: 'Node.js', category: 'backend' },
      { label: 'Kafka', category: 'data' },
      { label: 'Cassandra', category: 'data' },
      { label: 'Redis', category: 'data' },
      { label: 'Elasticsearch', category: 'data' },
      { label: 'React', category: 'frontend' },
      { label: 'Flutter', category: 'frontend' },
      { label: '5G / O-RAN', category: 'platform' },
      { label: 'AIOps', category: 'ai' },
      { label: 'Predictive Analytics', category: 'ai' },
      { label: 'Kubernetes', category: 'devops' },
    ],
    stats: [
      { value: '100M+', label: 'Subscribers Impacted' },
      { value: '30+', label: 'Telecom Projects' },
      { value: '99.99%', label: 'Network Uptime' },
    ],
    solutions: [
      { title: '5G & Network Virtualization', description: 'Deploy scalable 5G, O-RAN, and virtualized networks for enhanced speed, flexibility, and cost savings.', icon: 'Wifi' },
      { title: 'Cloud & Edge Computing', description: 'Leverage cloud-native and edge architectures to deliver low-latency services and unlock new business models.', icon: 'Cloud' },
      { title: 'AI-Driven Operations', description: 'Optimize networks and customer engagement with AI for predictive maintenance, anomaly detection, and personalized experiences.', icon: 'Brain' },
      { title: 'Omnichannel Customer Experience', description: 'Deliver seamless support and engagement across all channels with real-time analytics and automation.', icon: 'Users' },
      { title: 'OSS/BSS Modernization', description: 'Modernize your operations and business support systems for agility, automation, and faster time-to-market.', icon: 'Settings' },
      { title: 'Cybersecurity & Compliance', description: 'Protect networks and data with robust security solutions and ensure regulatory compliance in a connected world.', icon: 'Shield' },
    ],
    capabilities: [
      { title: 'Network Scalability', description: 'Future-ready solutions for seamless scaling and rapid deployment of new services.', icon: 'Server' },
      { title: 'Real-Time Analytics', description: 'Actionable insights for network optimization, customer experience, and business growth.', icon: 'BarChart3' },
      { title: 'Omnichannel Engagement', description: 'Unified customer journeys across web, mobile, retail, and support channels.', icon: 'Monitor' },
      { title: '24/7 Support', description: 'Dedicated teams to ensure your telecom services run smoothly and securely.', icon: 'Headphones' },
    ],
    caseStudies: [
      { title: 'Rapid 5G Network Launch', summary: 'Enabled a national telecom to deploy a 5G network with virtualized RAN, reducing rollout time and costs while supporting millions of new connections.' },
      { title: 'OSS/BSS Modernization', summary: 'Transformed legacy systems for a regional operator, enabling real-time billing, faster order fulfillment, and improved customer satisfaction.' },
      { title: 'AI-Driven Network Operations', summary: 'Deployed AIOps for a mobile provider, reducing outages by 40% and enabling predictive maintenance across the network.' },
    ],
  },
]

export function getDomainBySlug(slug: string): DomainData | undefined {
  return domains.find(d => d.slug === slug)
}
