export const navItems = ['About', 'Expertise', 'Projects', 'Experience', 'Certificates', 'Technical Content', 'Contact'];

export const aboutContent = [
  {
    text: "Passionate about building data-intensive applications and quantitative solutions for financial markets. Currently pursuing M.Sc. in Big Data Analytics at St. Xavier's College, Mumbai.",
    label: "Data Analyst"
  },
  {
    text: "Designing scalable ETL pipelines, developing data-driven applications, and building quantitative models that transform complex datasets into actionable insights.",
    label: "Quant Developer"
  },
  {
    text: "Combining quantitative methods, scalable data engineering, and software development to solve complex financial and analytical problems.",
    label: "Data Engineering"
  }
];

export const educationData = [
  {
    institution: "St. Xavier's College, Mumbai",
    degree: "M.Sc. Big Data Analytics",
    date: "June 2025 – April 2027"
  },
  {
    institution: "University of Mumbai",
    degree: "B.Sc. Information Technology",
    date: "June 2022 – April 2025"
  }
];

export const extracurricularData = [
  {
    organization: "St. Xavier's College FinCell",
    role: "Quantitative Analyst (July 2025 – Present)",
    points: [
      "Developed quantitative finance projects",
      "Built financial analytics applications"
    ]
  },
  {
    organization: "St. Xavier's College AWS Club",
    role: "Core Committe Member (2026 – Present)",
    points: [
      "Developed cloud-based AWS projects",
      "Explored cloud architecture and deployment"
    ]
  }
];

export const careerInterests = [
  "Quant Development",
  "Data Engineering",
  "Data Science",
  "Fintech",
  "Algorithmic Trading",
  "Cloud Computing"
];

export const personalQuote = "I enjoy solving complex financial problems by combining quantitative methods, scalable data engineering, and software development.";

export interface ExperienceItem {
  title: string;
  role: string;
  date: string;
  company: string;
  points: string[];
  tech: string[];
  color: string;
}

export const experiences: ExperienceItem[] = [
  {
    title: "Data Analyst",
    role: "Data Analyst",
    date: "Sept 2023 – Present",
    company: "Asterix StratComm",
    points: [
      "> Designed and optimized Python ETL pipelines using Pandas and NumPy to ingest, clean, transform, and standardize 80K+ FMCG records, reducing processing time by 65%.",
      "> Built automated data quality frameworks with schema validation, missing-value imputation, duplicate detection, and consistency checks, improving data accuracy by 30%.",
      "> Developed interactive Streamlit dashboards with KPI tracking, advanced filtering, and drill-down analytics, reducing reporting turnaround by 70%.",
      "> Performed advanced Exploratory Data Analysis (EDA) to uncover pricing trends, product segmentation, and regional insights across six FMCG product categories.",
      "> Created reusable data transformation workflows, improving code maintainability and accelerating analytics feature delivery by 50%."
    ],
    tech: [
      "Python",
      "Pandas",
      "NumPy",
      "Streamlit",
      "ETL",
      "EDA",
      "Data Analytics"
    ],
    color: "#FFE135"
  },

  {
    title: "Data Analyst",
    role: "Data Analyst",
    date: "February 2025 – July 2025",
    company: "Come To Be Talent Development Services LLP",
    points: [
      ">Built automated web scraping pipelines using Selenium, Requests, and BeautifulSoup to collect coach profiles from the ICF website.",
      ">Extracted and cleaned structured data including names, credentials, locations, and contact information.",
      ">Automated data collection workflows, eliminating repetitive manual effort and improving data acquisition efficiency.",
      ">Processed and exported scraped datasets into CSV format for lead generation and business development."
    ],
    tech: [
      "Python",
      "Selenium",
      "BeautifulSoup",
      "Requests",
      "Pandas",
      "Web Scraping"
    ],
    color: "#FF6B9D"
  }
];

export const expertiseData = [
  {
    title: "Quantitative Development & Financial Analytics",
    animationType: "coding",
    desc: "Designing quantitative models, option pricing calculators, Greeks sensitivity engines, and backtesting platforms for financial engineering.",
    color: "#FF6B9D",
    cls: "acc-pink"
  },
  {
    title: "Data Engineering & ETL Pipelines",
    animationType: "workflow",
    desc: "Building scalable ETL pipelines, automated data quality frameworks, and consistency check modules to ingest and clean large-scale datasets.",
    color: "#4ECDC4",
    cls: "acc-blue"
  },
  {
    title: "Machine Learning & Predictive Modeling",
    animationType: "fullstack",
    desc: "Developing end-to-end ML solutions, classification engines, econometric volatility forecasting (GARCH), and sports outcome predictions.",
    color: "#95E06C",
    cls: "acc-lime"
  },
  {
    title: "Interactive Analytics Dashboards",
    animationType: "gtm",
    desc: "Creating interactive Streamlit & Plotly dashboards featuring KPI tracking, drill-down analytics, and graph visualisations.",
    color: "#FFE135",
    cls: "acc-yellow"
  },
  {
    title: "Algorithmic Trading & Stochastic Modeling",
    animationType: "seo",
    desc: "Simulating Markov chains, random walks, Monte Carlo option pricing, risk analytics, and factor-based equity research platforms.",
    color: "#FF6B35",
    cls: "acc-orange"
  },
  {
    title: "Cloud Computing & AWS Architecture",
    animationType: "cognitive",
    desc: "Deploying data-intensive applications and cloud infrastructure on AWS, leveraging containerization and cloud-native workflows.",
    color: "#C77DFF",
    cls: "acc-purple"
  }
];

export const techTools = [
  {
    category: "Languages & Core",
    emoji: "⚡",
    color: "#FFE135",
    tools: ["Python", "SQL", "R", "C++", "HTML/CSS", "JavaScript"]
  },
  {
    category: "Data & ML",
    emoji: "🧠",
    color: "#FF6B9D",
    tools: ["Pandas", "NumPy", "Scikit-Learn", "SciPy", "Statsmodels", "NetworkX"]
  },
  {
    category: "Quant & Finance",
    emoji: "📈",
    color: "#4ECDC4",
    tools: ["QuantLib", "Riskfolio-Lib", "GARCH Models", "Monte Carlo", "Financial Engineering"]
  },
  {
    category: "Analytics & Viz",
    emoji: "📊",
    color: "#95E06C",
    tools: ["Streamlit", "Plotly", "Matplotlib", "Seaborn", "Power BI"]
  },
  {
    category: "Cloud & DevOps",
    emoji: "☁️",
    color: "#C77DFF",
    tools: ["AWS", "Docker", "Git", "GitHub", "Linux"]
  },
  {
    category: "Databases",
    emoji: "🗄️",
    color: "#FF6B35",
    tools: ["PostgreSQL", "MySQL", "MongoDB", "SQLite"]
  }
];

export interface ProjectItem {
  id: number;
  name: string;
  description: string;
  tags: string[];
  demo: string;
  github: string;
}

export const Project: ProjectItem[] = [
  {
    id: 1,
    name: "Introverts vs Extroverts",
    description: "Classifying Personality into Introvert or Extrovert using Machine Learning.",
    tags: ["Python", "ScikitLearn", "Pandas", "Plotly"],
    demo: "https://psychologyclassification.streamlit.app/",
    github: "https://github.com/MichaelF102/Psychology_Classification",
  },
  {
    id: 2,
    name: "Stochastic Processes",
    description:
      "A Python-based research project exploring Markov chains, random walks, Poisson processes, and other stochastic models. Includes simulation, analysis, and visualization of random processes.",
    tags: ["Python", "NumPy", "Pandas", "Statsmodels"],
    demo: "https://quant-stochasticprocesses.streamlit.app/",
    github: "https://github.com/MichaelF102/Stochastic-Processes-",
  },
  {
    id: 3,
    name: "Quantlib interactive Guide",
    description:
      "An interactive web-based learning tool for the QuantLib library. Covers core concepts of financial engineering, pricing models, risk analytics, and stochastic processes with practical examples.",
    tags: ["Python", "QuantLib", "Finance", "DataAnalytics"],
    demo: "https://quantlibguide.streamlit.app/",
    github: "https://github.com/MichaelF102/Quantlib-Interactive-Guide",
  },
  {
    id: 4,
    name: "Graph Dashboard",
    description:
      "A versatile Graph Visualization built with Plotly and Networkx, demonstrating Graph Properties In Interactive Dashboard.",
    tags: ["Python", "Plotly", "Networkx"],
    demo: "https://graphdashboard.streamlit.app/",
    github: "https://github.com/MichaelF102/Graph_Dashboard",
  },
  {
    id: 5,
    name: "Credit Card Fraud Detection",
    description:
      "A Comprehensive study of credit card transactions using data science and machine learning to detect fraudulent activities.",
    tags: ["Python", "Pandas", "ScikitLearn"],
    demo: "https://creditcardfraudanalysisprediction.streamlit.app/",
    github: "https://github.com/MichaelF102/Credit_card_Analysis",
  },
  {
    id: 6,
    name: "Monte Carlo Simulation",
    description:
      "A Monte Carlo simulation project exploring option pricing, risk analysis, and financial modeling using computational simulation techniques.",
    tags: ["Python", "NumPy", "Pandas", "FinancialEngineering"],
    demo: "https://montecarlosimu.streamlit.app/",
    github: "https://github.com/MichaelF102/Monte_Carlo",
  },
  {
    id: 7,
    name: "Stock Market Analysis",
    description:
      "A comprehensive study of the Indian stock market using data science and machine learning.",
    tags: ["Python", "Pandas", "ScikitLearn"],
    demo: "https://stockmarketanalysdl.streamlit.app/",
    github: "https://github.com/MichaelF102/StockMarketAnalysis",
  },
  {
    id: 8,
    name: "Benchmarking Different Programming Languages",
    description: "Benchmarking C, C++,Python,Java and GO on Different parameters and Recording my observations.",
    tags: ["Python", "C++", "Java", "GO", "DataAnalytics"],
    demo: "https://ciaone2509006.streamlit.app/",
    github: "https://github.com/MichaelF102/ciaone",
  },
  {
    id: 9,
    name: "Uber Analytics",
    description:
      "An In-depth Analysis of The Uber Dataset, Exploring various insights and trends in the dataset",
    tags: ["python", "numpy", "pandas", "plotly", "DataAnalytics"],
    demo: "https://uberanalytics1.streamlit.app/",
    github: "https://github.com/MichaelF102/Uber_Analytics",
  },
  {
    id: 10,
    name: "Alpha Forage- Portfolio Optimization",
    description:
      "AlphaForge is an institutional-grade quantitative investment and research platform for factor-based equity research, portfolio optimization, historical strategy backtesting, and risk analytics.",
    tags: ["Python", "NumPy", "riskfolio-lib", "scipy", "plotly"],
    demo: "https://github.com/MichaelF102/Alpha-Forage",
    github: "https://github.com/MichaelF102/Alpha-Forage",
  },
  {
    id: 11,
    name: "Options Pricing Dashboard",
    description:
      "The platform provides interactive calculators and risk engines helping users visualize option premiums, Greeks, sensitivity curves, price path simulations, and multi-leg strategies.",
    tags: ["Python", "numPy", "scipy", "plotly", "streamlit"],
    demo: "https://optionspricinginteractive.streamlit.app/",
    github: "https://github.com/MichaelF102/Options-Pricing",
  },
  {
    id: 12,
    name: "Quant Volatility Forecasting",
    description:
      "This Project enables quantitative analysts, risk managers, and traders to analyze, estimate, diagnose, and forecast asset return volatility using Econometrics Models",
    tags: ["Python", "numPy", "scipy", "garch", "streamlit"],
    demo: "https://quantvolatilityforecasting.streamlit.app/",
    github: "https://github.com/MichaelF102/Quant-Volatility-Forecasting",
  },
  {
    id: 13,
    name: "IPL Next Ball Prediction",
    description:
      "An end-to-end Machine Learning solution designed to predict ball-by-ball outcomes in Indian Premier League (IPL) matches",
    tags: ["Python", "numPy", "scikit-learn", "scipy", "streamlit"],
    demo: "https://iplnextballprediction.streamlit.app/",
    github: "https://github.com/MichaelF102/IPLNextBallPrediction",
  },
  {
    id: 14,
    name: "Multimodal Navigation System",
    description:
      "Multimodal Routing Engine: Integrates mode-specific OSRM routing servers for driving, cycling, and walking with customizable priority preferences (Fastest vs. Shortest).",
    tags: ["Python", "osm api", "folium", "osrm", "streamlit"],
    demo: "https://multimodalnavigationsystem.streamlit.app/",
    github: "https://github.com/MichaelF102/MultimodalNavigationSystem",
  },
  {
    id: 15,
    name: "HMM Stock Regime Detection",
    description:
      "A Hidden Markov Model (HMM) Market Regime Detection, Portfolio Optimization, Backtesting Dashboard, and Interactive Theory Dashboard",
    tags: ["Python", "statsmodels", "hmmlearn", "scipy", "streamlit"],
    demo: "https://hmmregimedetection.streamlit.app/",
    github: "https://github.com/MichaelF102/HMM-Regime-Detection",
  },
  {
    id: 16,
    name: "AI Model Analytics Dashboard",
    description:
      "AI Model Analytics Dashboard: Provides comprehensive performance tracking, parameters and comparative evaluation for AI/ML models.",
    tags: ["Python", "plotly", "pandas", "numpy", "streamlit"],
    demo: "https://aimodelanalytics.streamlit.app/",
    github: "https://github.com/MichaelF102/AI_Model_Analytics",
  },
  {
    id: 17,
    name: "Customer Churn Prediction",
    description:
      "Customer Churn Prediction:predict which customers are likely to churn and identify the key factors driving churn",
    tags: ["Python", "xgboost", "scikit-learn", "plotly", "streamlit"],
    demo: "https://telcocustomerchurnpred.streamlit.app/",
    github: "https://github.com/MichaelF102/CustomerChurnPrediction",
  },
  {
    id: 18,
    name: "FIFA World Cup Performance Analytics Dashboard ",
    description:
      "FIFA World Cup Performance Analytics Dashboard ",
    tags: ["Python", "numpy", "plotly", "pandas", "streamlit"],
    demo: "https://fifa2026analytics.streamlit.app/",
    github: "https://github.com/MichaelF102/FIFA_Analytics",
  },
  {
    id: 19,
    name: "AML Detection and Analysis",
    description:
      "Anti Money Laundering Detection and Analysis using ML and Graph Networks",
    tags: ["Python", "networkx", "ml", "optuna", "streamlit"],
    demo: "https://amlanalysis.streamlit.app/",
    github: "https://github.com/MichaelF102/AML2",
  },
  {
    id: 20,
    name: "Fundamental Analysis Dashboard",
    description:
      "Fundamental Analysis and Stock Valuation Dashboard for Indian and US Markets using yfinance and Screener.in",
    tags: ["Python", "yfinance", "bs4", "pandas", "streamlit"],
    demo: "https://stockmarketfundamentals.streamlit.app/",
    github: "https://github.com/MichaelF102/Stock_Fundamentals",
  },
  {
    id: 21,
    name: "Technical Analysis Terminal",
    description:
      "Interactive Technical Analysis Terminal for Equites",
    tags: ["Python", "yfinance", "plotly", "pandas", "streamlit"],
    demo: "https://technicalterminal.streamlit.app/",
    github: "https://github.com/MichaelF102/Technical_Terminal",
  },
  {
    id: 22,
    name: "Benchmarking Single Node vs Distributed Processing",
    description:
      "Comparing Pyspark on training Rnadom Forest on both single node and distributed processing",
    tags: ["Python", "Machine Learning", "Pyspark", "Random Forest", "streamlit"],
    demo: "https://singlevsdistributedml.streamlit.app/",
    github: "https://github.com/MichaelF102/ET2_NormalVsPyspark",
  },

];

const categoryMapping: Record<number, string> = {
  1: "Data Science",
  2: "Quant Finance",
  3: "Quant Finance",
  4: "Data Analytics",
  5: "Data Science",
  6: "Quant Finance",
  7: "Data Analytics",
  8: "Data Analytics",
  9: "Data Engineering",
  10: "Quant Finance",
  11: "Quant Finance",
  12: "Quant Finance",
  13: "Data Science",
  14: "Data Engineering",
  15: "Quant Finance",
  16: "Data Analytics",
  17: "Data Science",
  18: "Data Analytics",
  19: "Data Science",
  20: "Quant Finance",
  21: "Quant Finance",
  22: "Data Engineering",
};

const colorPalette = ["#FFE135", "#4ECDC4", "#FF6B9D", "#95E06C", "#C77DFF", "#FF6B35"];

export const projectsData = Project.map((p, idx) => ({
  id: p.id,
  title: p.name,
  name: p.name,
  desc: p.description,
  description: p.description,
  category: categoryMapping[p.id] || "Data Science",
  tech: p.tags,
  tags: p.tags,
  demo: p.demo,
  github: p.github,
  link: p.demo || p.github,
  color: colorPalette[idx % colorPalette.length],
}));

export const socialLinks = [
  { label: "GitHub", url: "https://github.com/MichaelF102", icon: "github" },
  { label: "LinkedIn", url: "https://in.linkedin.com/in/michael-fernandes-7a3b6227a", icon: "linkedin" },
  { label: "Email", url: "https://mail.google.com/mail/?view=cm&fs=1&to=michaelferns3210@gmail.com", icon: "email" },
];

export interface SkillCategory {
  title: string;
  skills: string[];
}

export const skills: SkillCategory[] = [
  {
    title: "Programming Languages",
    skills: [
      "Python",
      "SQL",
      "R",
      "Java",
      "JavaScript",
      "C++",
      "Bash"
    ]
  },

  {
    title: "Data Science",
    skills: [
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "TensorFlow",
      "Keras",
      "XGBoost",
      "LightGBM",
      "Optuna",
      "SciPy",
      "Statsmodels",
      "Matplotlib",
      "Plotly",
      "Seaborn"
    ]
  },

  {
    title: "Data Engineering",
    skills: [
      "Apache Spark",
      "Apache Hadoop",
      "Apache Kafka",
      "Apache Airflow",
      "dbt",
      "Delta Lake",
      "Apache Iceberg",
      "Data Warehousing",
      "Data Lakehouse",
      "MongoDB",
      "PostgreSQL",
      "Snowflake",
      "Databricks"
    ]
  },

  {
    title: "Quantitative Finance",
    skills: [
      "Algorithmic Trading",
      "Quantitative Research",
      "Time Series Forecasting",
      "Portfolio Optimization",
      "Risk Analytics",
      "Factor Investing",
      "Backtesting",
      "Hidden Markov Models (HMM)",
      "Monte Carlo Simulation",
      "Financial Econometrics",
      "Volatility Modeling",
      "Statistical Arbitrage"
    ]
  },

  {
    title: "Data Analytics",
    skills: [
      "Power BI",
      "Tableau",
      "Streamlit",
      "Excel",
      "Exploratory Data Analysis",
      "Feature Engineering",
      "Data Cleaning",
      "Data Visualization",
      "Statistical Analysis",
      "Dashboard Development"
    ]
  },

  {
    title: "Cloud Computing (AWS)",
    skills: [
      "Amazon S3",
      "Amazon EC2",
      "AWS Lambda",
      "AWS Glue",
      "Amazon Redshift",
      "Amazon RDS",
      "Amazon Athena",
      "AWS IAM",
      "CloudWatch"
    ]
  },

  {
    title: "Developer Tools",
    skills: [
      "Git",
      "GitHub",
      "Docker",
      "Jupyter Notebook",
      "VS Code",
      "Linux",
      "GitHub Actions"
    ]
  }
];

export interface CertificateItem {
  id: string;
  title: string;
  issuer: string;
  image: string;
  pdfUrl?: string;
  tags: string[];
  date: string;
  color: string;
}

export const certificatesData: CertificateItem[] = [
  {
    id: "aws-data-eng",
    title: "AWS Academy Graduate - Data Engineering",
    issuer: "AWS Academy",
    image: "/images/AWS_Academy_Graduate_Data_Engineering.png",
    pdfUrl: "/images/AWS_Academy_Graduate_Data_Engineering.pdf",
    tags: ["#AWS", "#DataEngineering", "#Cloud"],
    date: "April 06, 2026",
    color: "#FFE135"
  },
  {
    id: "gfg-ml-ds",
    title: "Complete Machine Learning & Data Science Program | GeeksforGeeks",
    issuer: "GeeksforGeeks",
    image: "/images/GeeksforGeeks_Machine_Learning_Data_Science.png",
    pdfUrl: "/images/GeeksforGeeks_Machine_Learning_Data_Science.pdf",
    tags: ["#MachineLearning", "#DataScience", "#Python"],
    date: "November 2024",
    color: "#4ECDC4"
  },
  {
    id: "gfg-genai",
    title: "Mastering Generative AI and ChatGPT | GeeksforGeeks",
    issuer: "GeeksforGeeks",
    image: "/images/GeeksforGeeks_Generative_AI_ChatGPT.png",
    pdfUrl: "/images/GeeksforGeeks_Generative_AI_ChatGPT.pdf",
    tags: ["#GenerativeAI", "#ChatGPT", "#LLMs"],
    date: "December 2024",
    color: "#95E06C"
  },
  {
    id: "aws-ml-foundations",
    title: "AWS Academy Graduate - Machine Learning Foundations",
    issuer: "AWS Academy",
    image: "/images/AWS_Academy_Graduate_Machine_Learning_Foundations.png",
    pdfUrl: "/images/AWS_Academy_Graduate_Machine_Learning_Foundations.pdf",
    tags: ["#AWS", "#MachineLearning", "#Cloud"],
    date: "April 22, 2026",
    color: "#FF6B9D"
  },
  {
    id: "aws-cloud-foundations",
    title: "AWS Academy Graduate - Cloud Foundations",
    issuer: "AWS Academy",
    image: "/images/AWS_Academy_Graduate_Cloud_Foundations.png",
    pdfUrl: "/images/AWS_Academy_Graduate_Cloud_Foundations.pdf",
    tags: ["#AWS", "#Cloud", "#Infrastructure"],
    date: "February 17, 2026",
    color: "#C77DFF"
  },
  {
    id: "iitb-algo-trading",
    title: "Algorithmic Trading Workshop | Techfest, IIT Bombay",
    issuer: "Techfest, IIT Bombay",
    image: "/images/Algorithmic_Trading_IIT_Bombay.png",
    pdfUrl: "/images/AWS_Academy_Graduate_Cloud_Foundations.pdf",
    tags: ["#AlgorithmicTrading", "#Finance", "#IITBombay"],
    date: "January 2025",
    color: "#FF6B35"
  }
];

export interface TechnicalContentItem {
  id: string;
  title: string;
  description: string;
  category: string;
  pdfUrl: string;
  image: string;
  tags: string[];
  date: string;
  color: string;
}

export const technicalContentData: TechnicalContentItem[] = [
  {
    id: "de-concepts",
    title: "10 Must-Know Data Engineering Concepts",
    description: "A comprehensive visual carousel covering core architectural patterns, partitioning, indexing, and distributed computing fundamentals.",
    category: "Data Engineering",
    pdfUrl: "/Writings/10_de_concepts.pdf",
    image: "/images/writings/10_de_concepts.png",
    tags: ["#DataEngineering", "#Architecture", "#BigData"],
    date: "2026",
    color: "#FFE135"
  },
  {
    id: "spark-architecture",
    title: "Apache Spark Architecture & Execution Pipeline",
    description: "Deep dive into Spark Driver, Executors, DAG Scheduler, Task Scheduler, RDDs, and memory management.",
    category: "PySpark & Spark",
    pdfUrl: "/Writings/apache_spark_architecture.pdf",
    image: "/images/writings/apache_spark_architecture.png",
    tags: ["#ApacheSpark", "#Architecture", "#DistributedComputing"],
    date: "2026",
    color: "#4ECDC4"
  },
  {
    id: "kafka-fundamentals",
    title: "Apache Kafka Fundamentals: Event Streaming & Architecture",
    description: "Visual guide to Kafka Topics, Partitions, Consumer Groups, Brokers, Zookeeper/KRaft, and fault-tolerance.",
    category: "Data Engineering",
    pdfUrl: "/Writings/kafka_fundamentals.pdf",
    image: "/images/writings/kafka_fundamentals.png",
    tags: ["#ApacheKafka", "#EventStreaming", "#RealTime"],
    date: "2026",
    color: "#FF6B9D"
  },
  {
    id: "medallion-architecture",
    title: "Medallion Architecture: Bronze, Silver & Gold Data Layers",
    description: "Designing scalable Lakehouse pipelines with raw ingestion (Bronze), cleaned data (Silver), and business-ready aggregates (Gold).",
    category: "Cloud & Lakehouse",
    pdfUrl: "/Writings/medallion.pdf",
    image: "/images/writings/medallion.png",
    tags: ["#Medallion", "#Lakehouse", "#DataEngineering"],
    date: "2026",
    color: "#95E06C"
  },
  {
    id: "mcp-protocol",
    title: "Model Context Protocol (MCP): Architecture & AI Agent Integrations",
    description: "Understanding MCP protocol specifications, prompt templates, resource management, and connecting LLMs to external data sources.",
    category: "AI & LLMs",
    pdfUrl: "/Writings/mcp.pdf",
    image: "/images/writings/mcp.png",
    tags: ["#MCP", "#AIAgents", "#LLMs"],
    date: "2026",
    color: "#C77DFF"
  },
  {
    id: "quantum-ml",
    title: "Quantum Machine Learning Fundamentals",
    description: "Exploring Quantum Bits (Qubits), Quantum Circuits, Variational Quantum Eigensolvers (VQE), and Quantum Neural Networks.",
    category: "Quantitative & Quantum",
    pdfUrl: "/Writings/Quantum Machine Learning Fundamentals.pdf",
    image: "/images/writings/Quantum Machine Learning Fundamentals.png",
    tags: ["#QuantumComputing", "#MachineLearning", "#QML"],
    date: "2026",
    color: "#FF6B35"
  },
  {
    id: "pyspark-ops",
    title: "10 Essential PySpark DataFrame Operations",
    description: "High-performance PySpark DataFrame transformations, windowing functions, join optimizations, and broadcasting techniques.",
    category: "PySpark & Spark",
    pdfUrl: "/Writings/10_pyspark_1.pdf",
    image: "/images/writings/10_pyspark_1.png",
    tags: ["#PySpark", "#DataFrames", "#Optimization"],
    date: "2026",
    color: "#38B6FF"
  },
  {
    id: "iceberg-deepdive",
    title: "Apache Iceberg: Open Table Format & ACID Transactions",
    description: "Schema evolution, hidden partitioning, time travel queries, and metadata management with Apache Iceberg.",
    category: "Cloud & Lakehouse",
    pdfUrl: "/Writings/Apache_Iceberg_2.pdf",
    image: "/images/writings/Apache_Iceberg_2.png",
    tags: ["#ApacheIceberg", "#ACID", "#Lakehouse"],
    date: "2026",
    color: "#FFE135"
  },
  {
    id: "langchain-guide",
    title: "LangChain Fundamentals: Building LLM Applications & Agents",
    description: "Chains, Memory, Retrieval-Augmented Generation (RAG), Vector Stores, and Autonomous Agent orchestration.",
    category: "AI & LLMs",
    pdfUrl: "/Writings/langchain_1.pdf",
    image: "/images/writings/langchain_1.png",
    tags: ["#LangChain", "#RAG", "#AIAgents"],
    date: "2026",
    color: "#4ECDC4"
  },
  {
    id: "sql-de-functions",
    title: "10 Essential SQL Functions Every Data Engineer Uses",
    description: "Window functions, CTEs, conditional aggregations, JSON parsing, and query optimization patterns.",
    category: "SQL & Databases",
    pdfUrl: "/Writings/10_sql_functions_every_de_use.pdf",
    image: "/images/writings/10_sql_functions_every_de_use.png",
    tags: ["#SQL", "#DataEngineering", "#ETL"],
    date: "2026",
    color: "#95E06C"
  },
  {
    id: "data-modeling",
    title: "Data Modeling: Dimensional Modeling, Star & Snowflake Schema",
    description: "Fact tables, Dimension tables, Slowly Changing Dimensions (SCD Types 1-3), and ER diagrams for data warehousing.",
    category: "SQL & Databases",
    pdfUrl: "/Writings/Data_Modelling.pdf",
    image: "/images/writings/Data_Modelling.png",
    tags: ["#DataModeling", "#StarSchema", "#DataWarehouse"],
    date: "2026",
    color: "#FF6B9D"
  },
  {
    id: "airflow-dag",
    title: "Apache Airflow: Workflow Orchestration & DAG Design",
    description: "Operators, Sensors, TaskGroups, XComs, Dynamic DAG generation, and production scheduling practices.",
    category: "Data Engineering",
    pdfUrl: "/Writings/airflow-1.pdf",
    image: "/images/writings/airflow-1.png",
    tags: ["#ApacheAirflow", "#DAGs", "#Orchestration"],
    date: "2026",
    color: "#C77DFF"
  },
  {
    id: "dbt-analytics",
    title: "dbt (data build tool): Modular Transformations & Analytics Engineering",
    description: "Ref functions, Jinja templating, incremental models, dbt tests, and automated documentation generation.",
    category: "Data Engineering",
    pdfUrl: "/Writings/dbt.pdf",
    image: "/images/writings/dbt.png",
    tags: ["#dbt", "#AnalyticsEngineering", "#SQL"],
    date: "2026",
    color: "#FF6B35"
  },
  {
    id: "deltalake-iceberg",
    title: "Delta Lake vs. Apache Iceberg: Modern Lakehouse Formats",
    description: "Architectural comparison of transaction logs, time travel, concurrency control, and ecosystem compatibility.",
    category: "Cloud & Lakehouse",
    pdfUrl: "/Writings/deltalake_iceberg.pdf",
    image: "/images/writings/deltalake_iceberg.png",
    tags: ["#DeltaLake", "#ApacheIceberg", "#Lakehouse"],
    date: "2026",
    color: "#38B6FF"
  },
  {
    id: "databricks-lakehouse",
    title: "Databricks Unified Analytics & Lakehouse Platform",
    description: "Photon engine, Unity Catalog governance, Auto Loader, and Delta Live Tables (DLT) pipeline management.",
    category: "Cloud & Lakehouse",
    pdfUrl: "/Writings/databricks_1.pdf",
    image: "/images/writings/databricks_1.png",
    tags: ["#Databricks", "#Lakehouse", "#Spark"],
    date: "2026",
    color: "#FFE135"
  },
  {
    id: "pyspark-ta",
    title: "10 PySpark Techniques for Technical Analysis & Quant Finance",
    description: "Calculating moving averages, Bollinger bands, volatility indicators, and rolling statistics at scale over market data.",
    category: "PySpark & Spark",
    pdfUrl: "/Writings/10_pyspark_ta.pdf",
    image: "/images/writings/10_pyspark_ta.png",
    tags: ["#PySpark", "#QuantFinance", "#TechnicalAnalysis"],
    date: "2026",
    color: "#4ECDC4"
  },
  {
    id: "hadoop-fundamentals",
    title: "Apache Hadoop Fundamentals: HDFS, YARN & MapReduce",
    description: "Distributed file storage concepts, NameNode/DataNode architecture, YARN resource allocation, and MapReduce execution stages.",
    category: "Data Engineering",
    pdfUrl: "/Writings/Apache Hadoop Fundamentals.pdf",
    image: "/images/writings/Apache Hadoop Fundamentals.png",
    tags: ["#Hadoop", "#HDFS", "#BigData"],
    date: "2026",
    color: "#95E06C"
  },
  {
    id: "data-orchestration",
    title: "Data Orchestration: Pipelines, Scheduling & Monitoring",
    description: "Comparing Airflow, Prefect, Dagster, and Temporal for robust, self-healing data pipeline orchestration.",
    category: "Data Engineering",
    pdfUrl: "/Writings/data-orchestration1.pdf",
    image: "/images/writings/data-orchestration1.png",
    tags: ["#DataOrchestration", "#Pipelines", "#Airflow"],
    date: "2026",
    color: "#FF6B9D"
  },
  {
    id: "data-lake",
    title: "Data Lake Architecture & Ingestion Strategies",
    description: "Batch vs streaming ingestion, data partitioning strategies, file format comparison (Parquet, ORC, Avro), and governance.",
    category: "Cloud & Lakehouse",
    pdfUrl: "/Writings/datalake.pdf",
    image: "/images/writings/datalake.png",
    tags: ["#DataLake", "#Architecture", "#Cloud"],
    date: "2026",
    color: "#C77DFF"
  },
  {
    id: "spark-concepts",
    title: "10 Core Apache Spark Architectural Concepts",
    description: "Essential Spark concepts: RDDs, DataFrames, Spark SQL, Catalyst Optimizer, Tungsten Execution Engine, and Shuffle operations.",
    category: "PySpark & Spark",
    pdfUrl: "/Writings/10_spark-concepts.pdf",
    image: "/images/writings/10_spark-concepts.png",
    tags: ["#ApacheSpark", "#SparkSQL", "#Catalyst"],
    date: "2026",
    color: "#FF6B35"
  },
  {
    id: "sql-functions-da",
    title: "10 High-Impact SQL Functions Every Data Analyst Uses",
    description: "COALESCE, CASE WHEN, RANK/DENSE_RANK, LAG/LEAD, NTILE, and string parsing functions for analytics.",
    category: "SQL & Databases",
    pdfUrl: "/Writings/10_sql_functions.pdf",
    image: "/images/writings/10_sql_functions.png",
    tags: ["#SQL", "#DataAnalytics", "#Reporting"],
    date: "2026",
    color: "#38B6FF"
  },
  {
    id: "de-books",
    title: "Top Data Engineering Books & Roadmap for 2026",
    description: "Curated reading list, core skill tree, system design topics, and learning roadmap for modern data engineers.",
    category: "Data Engineering",
    pdfUrl: "/Writings/de_books_2026.pdf",
    image: "/images/writings/de_books_2026.png",
    tags: ["#DataEngineering", "#Roadmap", "#Books"],
    date: "2026",
    color: "#FFE135"
  },
  {
    id: "pyspark-df",
    title: "PySpark DataFrames & Optimization Strategies",
    description: "Avoid shuffles, partition pruning, caching vs checkpointing, and tuning executor memory for PySpark jobs.",
    category: "PySpark & Spark",
    pdfUrl: "/Writings/pyspark_df.pdf",
    image: "/images/writings/pyspark_df.png",
    tags: ["#PySpark", "#Optimization", "#DataEngineering"],
    date: "2026",
    color: "#4ECDC4"
  },
  {
    id: "spark-fundamentals",
    title: "Apache Spark Fundamentals & Distributed Computing",
    description: "Foundational guide to distributed memory, fault tolerance, transformations vs actions, and cluster managers.",
    category: "PySpark & Spark",
    pdfUrl: "/Writings/spark fundamentals.pdf",
    image: "/images/writings/spark fundamentals.png",
    tags: ["#ApacheSpark", "#DistributedSystems", "#BigData"],
    date: "2026",
    color: "#95E06C"
  },
  {
    id: "htap-ltap",
    title: "HTAP / LTAP: Hybrid Transactional & Analytical Processing",
    description: "Combining OLTP and OLAP in a single database architecture to eliminate ETL latency for real-time analytics.",
    category: "SQL & Databases",
    pdfUrl: "/Writings/ltap.pdf",
    image: "/images/writings/ltap.png",
    tags: ["#HTAP", "#RealTimeAnalytics", "#Databases"],
    date: "2026",
    color: "#FF6B9D"
  }
];

export const quantContentData: TechnicalContentItem[] = [
  {
    id: "alpha-discovery",
    title: "Alpha Discovery & Quantitative Signals",
    description: "Systematic framework for discovering, validating, and backtesting quantitative alpha signals in equity markets.",
    category: "Quant Research",
    pdfUrl: "/quant_content/Alpha_Discovery.pdf",
    image: "/images/quant_content/Alpha_Discovery.png",
    tags: ["#QuantAlpha", "#SignalDiscovery", "#Backtesting"],
    date: "2026",
    color: "#FFE135"
  },
  {
    id: "black-scholes",
    title: "Black-Scholes-Merton Option Pricing Model",
    description: "Mathematical derivation, assumptions, partial differential equations (PDEs), and practical applications of the Black-Scholes model.",
    category: "Options & Derivatives",
    pdfUrl: "/quant_content/Black_Scholes.pdf",
    image: "/images/quant_content/Black_Scholes.png",
    tags: ["#OptionsPricing", "#BlackScholes", "#FinancialEngineering"],
    date: "2026",
    color: "#4ECDC4"
  },
  {
    id: "greeks",
    title: "The Greek Compass: Derivatives Risk Analytics",
    description: "Comprehensive guide to Delta, Gamma, Vega, Theta, and Rho sensitivity metrics for option portfolio hedging.",
    category: "Options & Derivatives",
    pdfUrl: "/quant_content/Greeks.pdf",
    image: "/images/quant_content/Greeks.png",
    tags: ["#OptionGreeks", "#RiskManagement", "#Hedging"],
    date: "2026",
    color: "#FF6B9D"
  },
  {
    id: "india-quant",
    title: "Quantitative Finance & Trading Landscape in India",
    description: "In-depth overview of algorithmic trading, market structures, SEBI regulatory frameworks, and quant careers in India.",
    category: "Quant Ecosystem",
    pdfUrl: "/quant_content/India_Quant.pdf",
    image: "/images/quant_content/India_Quant.png",
    tags: ["#IndianMarkets", "#AlgoTrading", "#MarketStructure"],
    date: "2026",
    color: "#95E06C"
  },
  {
    id: "mcs-types",
    title: "Monte Carlo Simulation Techniques & Variance Reduction",
    description: "Types of Monte Carlo simulations, antithetic variates, control variates, and importance sampling in financial modeling.",
    category: "Stochastic & Risk",
    pdfUrl: "/quant_content/MCS_Types.pdf",
    image: "/images/quant_content/MCS_Types.png",
    tags: ["#MonteCarlo", "#VarianceReduction", "#Simulation"],
    date: "2026",
    color: "#C77DFF"
  },
  {
    id: "market-microstructure",
    title: "Market Microstructure & Order Book Dynamics",
    description: "Limit order books, bid-ask spread dynamics, market impact models, order flow toxicity, and liquidity metrics.",
    category: "HFT & Microstructure",
    pdfUrl: "/quant_content/Market_Microstructure.pdf",
    image: "/images/quant_content/Market_Microstructure.png",
    tags: ["#MarketMicrostructure", "#OrderBook", "#Liquidity"],
    date: "2026",
    color: "#FF6B35"
  },
  {
    id: "mean-reversion",
    title: "Statistical Arbitrage & Mean Reversion Strategies",
    description: "Pairs trading, Johansen cointegration, Augmented Dickey-Fuller (ADF) tests, and Ornstein-Uhlenbeck stochastic processes.",
    category: "Trading Strategies",
    pdfUrl: "/quant_content/Mean_Reversion.pdf",
    image: "/images/quant_content/Mean_Reversion.png",
    tags: ["#StatArb", "#PairsTrading", "#Cointegration"],
    date: "2026",
    color: "#38B6FF"
  },
  {
    id: "modern-quant-ecosystem",
    title: "The Modern Quantitative Finance Ecosystem",
    description: "Complete tech stack, data providers, execution venues, cloud infrastructure, and mathematical toolkits for modern quants.",
    category: "Quant Ecosystem",
    pdfUrl: "/quant_content/Modern_Quant_Ecosystem.pdf",
    image: "/images/quant_content/Modern_Quant_Ecosystem.png",
    tags: ["#QuantTech", "#FinTech", "#SystematicTrading"],
    date: "2026",
    color: "#FFE135"
  },
  {
    id: "monte-carlo",
    title: "Monte Carlo Simulations in Quantitative Finance",
    description: "Simulating geometric Brownian motion (GBM), path-dependent options, and value-at-risk (VaR) estimation.",
    category: "Stochastic & Risk",
    pdfUrl: "/quant_content/Monte_Carlo.pdf",
    image: "/images/quant_content/Monte_Carlo.png",
    tags: ["#MonteCarlo", "#StochasticModeling", "#RiskAnalytics"],
    date: "2026",
    color: "#4ECDC4"
  },
  {
    id: "ocaml-quant",
    title: "OCaml in High-Frequency & Quantitative Finance",
    description: "Why top quant funds like Jane Street leverage functional programming, static typing, and high performance in OCaml.",
    category: "Quant Tech & C++",
    pdfUrl: "/quant_content/OCaml.pdf",
    image: "/images/quant_content/OCaml.png",
    tags: ["#OCaml", "#FunctionalProgramming", "#HFT"],
    date: "2026",
    color: "#FF6B9D"
  },
  {
    id: "quant-order-types",
    title: "Quantitative Trading Order Types & Execution Algorithms",
    description: "Limit, Market, Iceberg, TWAP, VWAP, and Implementation Shortfall execution algorithms.",
    category: "HFT & Microstructure",
    pdfUrl: "/quant_content/Quant-Order_Types.pdf",
    image: "/images/quant_content/Quant-Order_Types.png",
    tags: ["#OrderTypes", "#AlgorithmicExecution", "#VWAP"],
    date: "2026",
    color: "#95E06C"
  },
  {
    id: "quant-researcher",
    title: "Complete Guide to Becoming a Quantitative Researcher",
    description: "Core skill matrix, math fundamentals, portfolio management, interview preparation, and research methodology.",
    category: "Career & Guides",
    pdfUrl: "/quant_content/Quant-researcher.pdf",
    image: "/images/quant_content/Quant-researcher.png",
    tags: ["#QuantResearcher", "#CareerGuide", "#QuantResearch"],
    date: "2026",
    color: "#C77DFF"
  },
  {
    id: "quant-algo-engine",
    title: "Building a Production-Grade Algorithmic Trading Engine",
    description: "Architecture design for event-driven backtesting, real-time market data ingestion, order routing, and risk checks.",
    category: "Trading Strategies",
    pdfUrl: "/quant_content/Quant_AlgorithmicTrading_Engine.pdf",
    image: "/images/quant_content/Quant_AlgorithmicTrading_Engine.png",
    tags: ["#AlgoTrading", "#SystemDesign", "#Backtester"],
    date: "2026",
    color: "#FF6B35"
  },
  {
    id: "quant-alpha",
    title: "Quant Alpha Factors & Portfolio Construction",
    description: "Cross-sectional factor modeling, momentum, value, quality, volatility factors, and risk-budgeted portfolio construction.",
    category: "Portfolio & Alpha",
    pdfUrl: "/quant_content/Quant_Alpha.pdf",
    image: "/images/quant_content/Quant_Alpha.png",
    tags: ["#AlphaFactors", "#PortfolioOptimization", "#FactorInvesting"],
    date: "2026",
    color: "#38B6FF"
  },
  {
    id: "quant-analyst",
    title: "Complete Guide to Quantitative Analyst Roles & Skills",
    description: "Detailed roadmap covering desk quants, risk quants, model validation, financial engineering, and essential math.",
    category: "Career & Guides",
    pdfUrl: "/quant_content/Quant_Analyst.pdf",
    image: "/images/quant_content/Quant_Analyst.png",
    tags: ["#QuantAnalyst", "#FinancialEngineering", "#CareerGuide"],
    date: "2026",
    color: "#FFE135"
  },
  {
    id: "quant-cpp",
    title: "C++ for Quantitative Finance & High-Frequency Trading",
    description: "Low-latency C++ techniques, memory management, template metaprogramming, cache optimization, and lock-free queues.",
    category: "Quant Tech & C++",
    pdfUrl: "/quant_content/Quant_Cpp.pdf",
    image: "/images/quant_content/Quant_Cpp.png",
    tags: ["#Cpp", "#LowLatency", "#HFT"],
    date: "2026",
    color: "#4ECDC4"
  },
  {
    id: "quant-developer",
    title: "The Quantitative Developer Skill Tree & Architecture",
    description: "Designing trading engines, data pipelines, low-latency execution systems, and system design patterns for quant devs.",
    category: "Career & Guides",
    pdfUrl: "/quant_content/Quant_Developer.pdf",
    image: "/images/quant_content/Quant_Developer.png",
    tags: ["#QuantDeveloper", "#SystemDesign", "#SoftwareEngineering"],
    date: "2026",
    color: "#FF6B9D"
  },
  {
    id: "quant-hft",
    title: "High-Frequency Trading (HFT): Architecture & Microsecond Latency",
    description: "FPGA acceleration, kernel bypass (Solarflare), market data parsing (ITCH/OUCH), and co-location dynamics.",
    category: "HFT & Microstructure",
    pdfUrl: "/quant_content/Quant_HFT.pdf",
    image: "/images/quant_content/Quant_HFT.png",
    tags: ["#HFT", "#LowLatency", "#KernelBypass"],
    date: "2026",
    color: "#95E06C"
  },
  {
    id: "quant-jane",
    title: "Jane Street & Prop Trading Firm Preparation Guide",
    description: "Mental math, probability puzzles, market making games, and interview strategy for top prop trading firms.",
    category: "Career & Guides",
    pdfUrl: "/quant_content/Quant_Jane.pdf",
    image: "/images/quant_content/Quant_Jane.png",
    tags: ["#PropTrading", "#JaneStreet", "#Brainteasers"],
    date: "2026",
    color: "#C77DFF"
  },
  {
    id: "quant-lib",
    title: "QuantLib Masterclass: Financial Engineering in Python & C++",
    description: "Hands-on guide to QuantLib yield curves, interest rate swap pricing, bond analytics, and option valuation engines.",
    category: "Quant Tech & C++",
    pdfUrl: "/quant_content/Quant_Lib.pdf",
    image: "/images/quant_content/Quant_Lib.png",
    tags: ["#QuantLib", "#FinancialEngineering", "#YieldCurves"],
    date: "2026",
    color: "#FF6B35"
  },
  {
    id: "quant-options-pm",
    title: "Options Portfolio Management & Volatility Surface Modeling",
    description: "Managing option books, volatility smile/skew dynamics, delta-neutral hedging, and variance swap trading.",
    category: "Options & Derivatives",
    pdfUrl: "/quant_content/Quant_OptionsPM.pdf",
    image: "/images/quant_content/Quant_OptionsPM.png",
    tags: ["#OptionsPM", "#VolatilitySurface", "#VolTrading"],
    date: "2026",
    color: "#38B6FF"
  },
  {
    id: "quant-python",
    title: "Python for Quantitative Finance & Vectorized Backtesting",
    description: "Leveraging NumPy, Pandas, SciPy, Numba, and VectorBT for ultra-fast vectorized backtesting and quantitative analytics.",
    category: "Quant Tech & C++",
    pdfUrl: "/quant_content/Quant_Python.pdf",
    image: "/images/quant_content/Quant_Python.png",
    tags: ["#Python", "#Vectorization", "#Backtesting"],
    date: "2026",
    color: "#FFE135"
  },
  {
    id: "quant-stoch-vol",
    title: "Stochastic Volatility Models: Heston & SABR",
    description: "Calibration of Heston stochastic volatility model and SABR volatility smile formulation for exotic option pricing.",
    category: "Stochastic & Risk",
    pdfUrl: "/quant_content/Quant_StockhastiVM.pdf",
    image: "/images/quant_content/Quant_StockhastiVM.png",
    tags: ["#HestonModel", "#StochasticVolatility", "#SABR"],
    date: "2026",
    color: "#4ECDC4"
  },
  {
    id: "quant-trader",
    title: "Complete Guide to Quantitative Trading Strategies",
    description: "Developing, testing, and executing systematic trading models across asset classes with risk controls.",
    category: "Trading Strategies",
    pdfUrl: "/quant_content/Quant_trader.pdf",
    image: "/images/quant_content/Quant_trader.png",
    tags: ["#QuantTrader", "#SystematicTrading", "#RiskManagement"],
    date: "2026",
    color: "#FF6B9D"
  },
  {
    id: "rl-quant",
    title: "Reinforcement Learning in Algorithmic Trading & Execution",
    description: "Deep Q-Networks (DQN), PPO, and Actor-Critic models for optimal order execution and automated portfolio rebalancing.",
    category: "Trading Strategies",
    pdfUrl: "/quant_content/RL_Quant.pdf",
    image: "/images/quant_content/RL_Quant.png",
    tags: ["#ReinforcementLearning", "#AIinFinance", "#RLTrading"],
    date: "2026",
    color: "#95E06C"
  },
  {
    id: "sharpe-ratio",
    title: "Sharpe Ratio, Sortino Ratio & Risk-Adjusted Metrics",
    description: "Mathematical nuances, probabilistic Sharpe ratio (PSR), deflated Sharpe ratio (DSR), and benchmarking performance.",
    category: "Portfolio & Alpha",
    pdfUrl: "/quant_content/Sharpe_Ratio.pdf",
    image: "/images/quant_content/Sharpe_Ratio.png",
    tags: ["#SharpeRatio", "#RiskAdjustedReturn", "#Performance"],
    date: "2026",
    color: "#C77DFF"
  },
  {
    id: "time-series-quant",
    title: "Time Series Analysis for Quantitative Trading",
    description: "ARIMA, GARCH, Kalman Filters, cointegration, stationarity tests, and spectral analysis for financial data.",
    category: "Quant Research",
    pdfUrl: "/quant_content/Time_Series_Quant.pdf",
    image: "/images/quant_content/Time_Series_Quant.png",
    tags: ["#TimeSeries", "#GARCH", "#KalmanFilter"],
    date: "2026",
    color: "#FF6B35"
  },
  {
    id: "top15-rp",
    title: "Top 15 Milestone Research Papers in Quantitative Finance",
    description: "Summaries of landmark papers by Black-Scholes, Markowitz, Fama-French, Merton, and modern quantitative literature.",
    category: "Quant Research",
    pdfUrl: "/quant_content/Top15_RP.pdf",
    image: "/images/quant_content/Top15_RP.png",
    tags: ["#ResearchPapers", "#ClassicQuant", "#Literature"],
    date: "2026",
    color: "#38B6FF"
  },
  {
    id: "gauss-markov",
    title: "Gauss-Markov Theorem & OLS in Financial Econometrics",
    description: "BLUE estimators, homoscedasticity, multicollinearity, autocorrelation, and robust regression in finance.",
    category: "Quant Research",
    pdfUrl: "/quant_content/gauss_markov.pdf",
    image: "/images/quant_content/gauss_markov.png",
    tags: ["#GaussMarkov", "#Econometrics", "#OLS"],
    date: "2026",
    color: "#FFE135"
  },
  {
    id: "yfinance-guide",
    title: "Automated Financial Data Extraction with yfinance & Python",
    description: "Fetching real-time & historical market data, fundamental metrics, option chains, and corporate actions.",
    category: "Quant Tech & C++",
    pdfUrl: "/quant_content/yfinance.pdf",
    image: "/images/quant_content/yfinance.png",
    tags: ["#yfinance", "#MarketData", "#PythonFinance"],
    date: "2026",
    color: "#4ECDC4"
  }
];

