"use client";

import { useEffect, useMemo, useState } from "react";

const githubUrl = "https://github.com/rasaleusha13";
const linkedinUrl = "https://www.linkedin.com/in/usharasale10/";
const emailUrl = "mailto:rasaleuhsa13@gmail.com";

type GitHubRepo = {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  fork: boolean;
};

/* =========================================================
   TOOLS I WORK WITH
========================================================= */

const technologyGroups = [
  {
    title: "Programming Languages",
    technologies: [
      "Python",
      "SQL",
      "Core Java",
      "JavaScript",
      "HTML5",
      "CSS3",
    ],
  },

  {
    title: "Generative AI & Agentic AI",
    technologies: [
      "OpenAI GPT-4",
      "OpenAI GPT-4o",
      "Claude",
      "Gemini",
      "Llama 3",
      "LangChain",
      "LangGraph",
      "LlamaIndex",
      "RAG",
      "Text-to-SQL",
      "Prompt Engineering",
      "Multi-Agent AI",
      "MCP",
      "AutoGen",
      "CrewAI",
    ],
  },

  {
    title: "Machine Learning & Deep Learning",
    technologies: [
      "Scikit-learn",
      "TensorFlow",
      "Hugging Face Transformers",
      "XGBoost",
      "Random Forest",
      "Gradient Boosting",
      "Logistic Regression",
      "LSTM",
      "Transformer Models",
      "Predictive Analytics",
      "Anomaly Detection",
    ],
  },

  {
    title: "Natural Language Processing (NLP)",
    technologies: [
      "spaCy",
      "Named Entity Recognition",
      "Intent Classification",
      "Sentiment Analysis",
      "Text Classification",
      "Clinical Entity Extraction",
      "Semantic Search",
      "Embedding Models",
    ],
  },

  {
    title: "Vector Databases & Semantic Search",
    technologies: [
      "Qdrant",
      "MongoDB",
      "Azure AI Search",
      "Pinecone",
      "FAISS",
      "Vector Embeddings",
      "Semantic Search",
      "Reranking",
    ],
  },

  {
    title: "Backend & API Development",
    technologies: [
      "FastAPI",
      "Flask",
      "REST APIs",
      "Microservices",
      "API Integration",
      "Event-Driven Architecture",
    ],
  },

  {
    title: "Data Engineering & Streaming",
    technologies: [
      "Apache Spark",
      "PySpark",
      "Apache Kafka",
      "ETL/ELT Pipelines",
      "Apache Airflow",
      "AWS Glue",
      "Data Transformation",
      "Data Validation",
      "Batch Processing",
      "Real-Time Streaming",
    ],
  },

  {
    title: "Databases & Data Warehousing",
    technologies: [
      "PostgreSQL",
      "MySQL",
      "Snowflake",
      "Amazon DynamoDB",
    ],
  },

  {
    title: "Cloud Platforms & Services",
    technologies: [
      "Google Cloud Platform",
      "Vertex AI",
      "Cloud Functions",
      "Pub/Sub",
      "Cloud Storage",
      "Firestore",
      "Compute Engine",
      "Cloud Monitoring",
      "Amazon Web Services",
      "Amazon ECS",
      "AWS Lambda",
      "Amazon S3",
      "AWS Glue",
      "Amazon EC2",
      "Amazon CloudWatch",
      "Microsoft Azure",
      "Azure Virtual Machines",
      "Azure Blob Storage",
    ],
  },

  {
    title: "DevOps, MLOps & LLMOps",
    technologies: [
      "Docker",
      "Kubernetes",
      "Jenkins",
      "Git",
      "Terraform",
      "MLflow",
      "CI/CD Pipelines",
      "Model Deployment",
      "Model Versioning",
      "Prompt Versioning",
    ],
  },

  {
    title: "Monitoring & Observability",
    technologies: [
      "Langfuse",
      "CloudWatch",
      "Prometheus",
      "Grafana",
    ],
  },

  {
    title: "Development Tools",
    technologies: [
      "Git",
      "GitHub",
      "Maven",
      "Postman",
      "VS Code",
      "IntelliJ IDEA",
    ],
  },

  {
    title: "Methodologies & Domain Expertise",
    technologies: [
      "Agile",
      "Scrum",
      "SDLC",
      "Healthcare AI",
      "Provider Billing & Claims",
      "Banking & Financial Services",
      "Wealth Management",
      "Credit Risk Analytics",
      "HIPAA Compliance",
    ],
  },
];

/* =========================================================
   CAPABILITIES
========================================================= */

const capabilities = [
  {
    number: "01",
    title: "Generative AI",
    description:
      "LLM applications, RAG pipelines, prompt engineering, and intelligent AI workflows.",
  },
  {
    number: "02",
    title: "Agentic AI",
    description:
      "Multi-agent workflows, tool calling, orchestration, reasoning, and autonomous task execution.",
  },
  {
    number: "03",
    title: "Machine Learning",
    description:
      "Predictive modeling, classification, anomaly detection, feature engineering, and inference.",
  },
  {
    number: "04",
    title: "NLP",
    description:
      "Intent classification, semantic search, entity extraction, text classification, and language intelligence.",
  },
  {
    number: "05",
    title: "Python Engineering",
    description:
      "Production APIs, backend services, automation, data processing, and AI application development.",
  },
  {
    number: "06",
    title: "Cloud & MLOps",
    description:
      "Cloud deployment, containers, CI/CD, model lifecycle management, monitoring, and observability.",
  },
];

/* =========================================================
   FEATURED PROJECTS
========================================================= */

const featuredProjects = [
  {
    number: "01",
    type: "GENAI / RAG",
    title: "Enterprise RAG",
    subtitle: "Intelligence Platform",
    description:
      "A retrieval-augmented generation platform that uses document ingestion, embeddings, vector search, and LLM reasoning to produce grounded enterprise answers.",
    stack: [
      "Python",
      "FastAPI",
      "RAG",
      "OpenAI",
      "Sentence Transformers",
      "FAISS",
    ],
    github:
      "https://github.com/rasaleusha13/enterprise-rag-intelligence-platform",
  },

  {
    number: "02",
    type: "ML / API",
    title: "Loan Risk",
    subtitle: "Prediction API",
    description:
      "A machine learning prediction service that evaluates applicant information, generates loan risk predictions, and exposes the model through a Python REST API.",
    stack: [
      "Python",
      "FastAPI",
      "Pandas",
      "Scikit-learn",
      "Joblib",
    ],
    github:
      "https://github.com/rasaleusha13/Initial-Loan-Risk-Prediction-API",
  },
];

/* =========================================================
   REPOSITORY HELPERS
========================================================= */

function getRepositoryTechnologies(repoName: string): string[] {
  const name = repoName.toLowerCase();

  if (
    name.includes("enterprise-rag") ||
    name.includes("rag-intelligence")
  ) {
    return [
      "Python",
      "FastAPI",
      "RAG",
      "OpenAI",
      "Sentence Transformers",
      "FAISS",
      "Vector Embeddings",
      "Semantic Search",
      "REST APIs",
    ];
  }

  if (
    name.includes("provider-billing") ||
    name.includes("billing-integrity")
  ) {
    return [
      "Python",
      "FastAPI",
      "Pandas",
      "Scikit-learn",
      "Isolation Forest",
      "Machine Learning",
      "Anomaly Detection",
      "Risk Scoring",
      "REST APIs",
      "Swagger",
    ];
  }

  if (
    name.includes("loan-risk") ||
    name.includes("loan-risk-prediction")
  ) {
    return [
      "Python",
      "FastAPI",
      "Pandas",
      "Scikit-learn",
      "Joblib",
      "Machine Learning",
      "Risk Prediction",
      "REST APIs",
      "Uvicorn",
      "Git",
    ];
  }

  if (
    name.includes("conversational-intent") ||
    name.includes("agent-assist")
  ) {
    return [
      "Python",
      "FastAPI",
      "Pandas",
      "Scikit-learn",
      "NLP",
      "spaCy",
      "TF-IDF",
      "Logistic Regression",
      "Joblib",
      "Pydantic",
      "REST APIs",
    ];
  }

  return ["Python", "Git", "GitHub"];
}

function getRepositoryCategory(repoName: string): string {
  const name = repoName.toLowerCase();

  if (
    name.includes("enterprise-rag") ||
    name.includes("rag-intelligence")
  ) {
    return "GENAI / RAG";
  }

  if (
    name.includes("provider-billing") ||
    name.includes("billing-integrity")
  ) {
    return "MACHINE LEARNING";
  }

  if (
    name.includes("loan-risk") ||
    name.includes("loan-risk-prediction")
  ) {
    return "MACHINE LEARNING / API";
  }

  if (
    name.includes("conversational-intent") ||
    name.includes("agent-assist")
  ) {
    return "NLP / MACHINE LEARNING";
  }

  return "AI / ENGINEERING";
}

function getRepositoryDescription(repo: GitHubRepo): string {
  if (repo.description) {
    return repo.description;
  }

  const name = repo.name.toLowerCase();

  if (
    name.includes("enterprise-rag") ||
    name.includes("rag-intelligence")
  ) {
    return "A retrieval-augmented generation application for document-based question answering using embeddings, vector search, and LLM reasoning.";
  }

  if (
    name.includes("provider-billing") ||
    name.includes("billing-integrity")
  ) {
    return "A machine learning platform for identifying anomalous provider billing patterns and calculating provider risk scores.";
  }

  if (
    name.includes("loan-risk") ||
    name.includes("loan-risk-prediction")
  ) {
    return "A production-style machine learning API that predicts loan applicant risk using financial and credit-related information.";
  }

  if (
    name.includes("conversational-intent") ||
    name.includes("agent-assist")
  ) {
    return "An NLP and machine learning platform that classifies customer intent and provides recommendations to customer service agents.";
  }

  return "AI and software engineering project.";
}

/* =========================================================
   MAIN PAGE
========================================================= */

export default function Home() {
  const [repositories, setRepositories] = useState<GitHubRepo[]>([]);
  const [loadingRepos, setLoadingRepos] = useState(true);
  const [repoError, setRepoError] = useState("");
  const [search, setSearch] = useState("");
  const [language, setLanguage] = useState("All");

  /* Modern interaction state */
  const [navScrolled, setNavScrolled] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  /* =====================================================
     LOAD GITHUB REPOSITORIES
  ===================================================== */

  useEffect(() => {
    async function loadRepositories() {
      try {
        const allRepos: GitHubRepo[] = [];
        let page = 1;

        while (true) {
          const response = await fetch(
            `https://api.github.com/users/rasaleusha13/repos?per_page=100&page=${page}&sort=updated`,
          );

          if (!response.ok) {
            throw new Error("Unable to load repositories");
          }

          const data: GitHubRepo[] = await response.json();

          allRepos.push(...data);

          if (data.length < 100) {
            break;
          }

          page++;
        }

        setRepositories(
          allRepos.filter(
            (repo) =>
              !repo.fork &&
              repo.name !== "usha-portfolio",
          ),
        );
      } catch {
        setRepoError(
          "Repositories could not be loaded right now. Please visit GitHub directly.",
        );
      } finally {
        setLoadingRepos(false);
      }
    }

    loadRepositories();
  }, []);

  /* =====================================================
     NAVIGATION / BACK TO TOP
  ===================================================== */

  useEffect(() => {
    const handleScroll = () => {
      setNavScrolled(window.scrollY > 30);
      setShowBackToTop(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* =====================================================
     SCROLL REVEAL
  ===================================================== */

  useEffect(() => {
    const elements = document.querySelectorAll(
      ".reveal-section, .reveal-card",
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
      },
    );

    elements.forEach((element) => observer.observe(element));

    return () => {
      observer.disconnect();
    };
  }, []);

  /* =====================================================
     LANGUAGES
  ===================================================== */

  const languages = useMemo(() => {
    const values = repositories
      .map((repo) => repo.language)
      .filter((value): value is string => Boolean(value));

    return ["All", ...Array.from(new Set(values)).sort()];
  }, [repositories]);

  /* =====================================================
     FILTERED REPOSITORIES
  ===================================================== */

  const filteredRepositories = useMemo(() => {
    return repositories.filter((repo) => {
      const searchValue = search.toLowerCase();

      const technologies = getRepositoryTechnologies(repo.name)
        .join(" ")
        .toLowerCase();

      const matchesSearch =
        repo.name.toLowerCase().includes(searchValue) ||
        getRepositoryDescription(repo)
          .toLowerCase()
          .includes(searchValue) ||
        technologies.includes(searchValue);

      const matchesLanguage =
        language === "All" || repo.language === language;

      return matchesSearch && matchesLanguage;
    });
  }, [repositories, search, language]);

  return (
    <main
      id="top"
      className="min-h-screen overflow-hidden bg-[#f8f5f1] text-[#29243a]"
    >
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(155,132,205,0.10),transparent_28%),radial-gradient(circle_at_80%_25%,rgba(180,214,202,0.10),transparent_30%),radial-gradient(circle_at_60%_80%,rgba(218,196,224,0.12),transparent_30%)]" />

        <div className="absolute left-[5%] top-[10%] h-[450px] w-[450px] rounded-full bg-[#cbb9e8]/20 blur-[140px]" />

        <div className="absolute right-[5%] top-[30%] h-[500px] w-[500px] rounded-full bg-[#cfe4dc]/20 blur-[150px]" />
      </div>

      {/* =====================================================
          NAVIGATION
      ===================================================== */}

      <header
        className={`portfolio-nav fixed left-0 right-0 top-0 z-50 border-b border-transparent ${
          navScrolled ? "scrolled" : ""
        }`}
      >
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-8 py-7 lg:px-12">
          <a
            href="#top"
            className="text-[42px] font-bold leading-none tracking-[-0.05em] text-[#282238]"
          >
            Usha<span className="text-[#9274c8]">.</span>
          </a>

          <nav className="hidden items-center gap-10 text-[17px] text-[#5c526f] md:flex">
            <a
              href="#engineering"
              className="nav-link transition hover:text-[#8b70be]"
            >
              Engineering
            </a>

            <a
              href="#projects"
              className="nav-link transition hover:text-[#8b70be]"
            >
              Work
            </a>

            <a
              href="#technologies"
              className="nav-link transition hover:text-[#8b70be]"
            >
              Skills
            </a>

            <a
              href="#repositories"
              className="nav-link transition hover:text-[#8b70be]"
            >
              GitHub
            </a>

            <a
              href="#contact"
              className="nav-link transition hover:text-[#8b70be]"
            >
              Connect
            </a>
          </nav>

          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-[#d8d0df] bg-white/50 px-6 py-3 text-[16px] font-medium text-[#41374f] shadow-sm transition hover:border-[#a88bd1] hover:text-[#8065b2]"
          >
            GitHub ↗
          </a>
        </div>
      </header>

      {/* =====================================================
          HERO
      ===================================================== */}

      <section
        id="hero"
        className="mx-auto grid min-h-[calc(100vh-100px)] max-w-[1400px] items-center gap-20 px-8 pb-16 pt-32 lg:grid-cols-[0.95fr_1.05fr] lg:px-12 lg:py-20"
      >
        {/* LEFT */}

        <div className="max-w-[700px]">
          <p className="mb-10 text-[30px] font-semibold uppercase leading-none tracking-[0.20em] text-[#8a70c1]">
            AI / ML ENGINEER
          </p>

          <div className="mb-10">
            <h1 className="text-[40px] font-semibold leading-[1.05] tracking-[-0.035em] text-[#282438] sm:text-[44px] lg:text-[48px]">
              I engineer
            </h1>

            <h1 className="text-[40px] font-semibold leading-[1.05] tracking-[-0.035em] text-[#9689aa] sm:text-[44px] lg:text-[48px]">
              intelligent
            </h1>

            <h1 className="text-[40px] font-semibold leading-[1.05] tracking-[-0.035em] text-[#aaa0b9] sm:text-[44px] lg:text-[48px]">
              systems.
            </h1>
          </div>

          <p className="max-w-[680px] text-[23px] leading-[1.55] text-[#5d5570]">
            I build practical AI systems across Generative AI, LLM
            applications, RAG, Agentic AI, machine learning, Python
            engineering, APIs, and cloud platforms.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="modern-button rounded-full bg-[#9274c8] px-8 py-4 text-[17px] font-semibold text-white shadow-[0_12px_30px_rgba(146,116,200,0.25)] transition hover:bg-[#8566bd]"
            >
              Explore my work →
            </a>

            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="modern-button rounded-full border border-[#d7cedf] bg-white/50 px-8 py-4 text-[17px] font-semibold text-[#4a4058] transition hover:border-[#aa91d0] hover:text-[#8064ae]"
            >
              LinkedIn ↗
            </a>
          </div>

          <div className="mt-11 flex flex-wrap gap-x-8 gap-y-4 text-[20px] text-[#685c7b]">
            <span>Python</span>
            <span>Generative AI</span>
            <span>LLMs</span>
            <span>RAG</span>
            <span>Agentic AI</span>
            <span>FastAPI</span>
            <span>MLOps</span>
          </div>
        </div>

        {/* RIGHT — INTELLIGENT APPLICATION FLOW */}

        <div className="relative mx-auto w-full max-w-[620px]">
          <div className="overflow-hidden rounded-[30px] border border-[#d9d0e2] bg-white/70 shadow-[0_25px_80px_rgba(111,89,143,0.13)] backdrop-blur-sm">
            {/* Header */}

            <div className="flex items-center justify-between border-b border-[#e0d8e5] px-8 py-6">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.30em] text-[#9b8ab4]">
                  AI APPLICATION / 001
                </p>

                <p className="mt-3 text-[17px] font-medium text-[#383044]">
                  Intelligent Application Flow
                </p>
              </div>

              <div className="flex items-center gap-2 text-[13px] font-semibold uppercase tracking-[0.20em] text-[#669985]">
                <span className="ai-online-dot h-2.5 w-2.5 rounded-full bg-[#82bea5]" />
                ONLINE
              </div>
            </div>

            {/* Flow */}

            <div className="relative px-8 py-9">
              {/* Input / Context */}

              <div className="grid grid-cols-2 gap-6">
                <div className="modern-card rounded-2xl border border-[#ded5e6] bg-white px-5 py-5 shadow-sm">
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#eee7fb] text-[20px] text-[#8b70be]">
                      →
                    </div>

                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#a18eb9]">
                        INPUT
                      </p>

                      <p className="mt-2 text-[16px] font-medium text-[#393145]">
                        User Intent
                      </p>
                    </div>
                  </div>
                </div>

                <div className="modern-card rounded-2xl border border-[#ded5e6] bg-white px-5 py-5 shadow-sm">
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#eaf5f1] text-[20px] text-[#71a68e]">
                      +
                    </div>

                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#a18eb9]">
                        CONTEXT
                      </p>

                      <p className="mt-2 text-[16px] font-medium text-[#393145]">
                        Knowledge
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Connector */}

              <div className="mx-auto h-7 w-px bg-[#d5c8df]" />

              {/* Retrieval */}

              <div className="modern-card mx-auto max-w-[430px] rounded-2xl border border-[#d8c8ea] bg-[#f4eefb] px-6 py-6 shadow-sm">
                <div className="flex items-center gap-5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-[18px] text-[#9274c8] shadow-sm">
                    ⌕
                  </div>

                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#9b87b5]">
                      RETRIEVAL
                    </p>

                    <p className="mt-2 text-[18px] font-semibold text-[#51445f]">
                      Vector Search
                    </p>

                    <p className="mt-1 text-[12px] text-[#887a96]">
                      Relevant knowledge
                    </p>
                  </div>
                </div>
              </div>

              {/* Connector */}

              <div className="mx-auto h-6 w-px bg-[#d5c8df]" />

              {/* LLM */}

              <div className="llm-node mx-auto flex h-[92px] w-[92px] flex-col items-center justify-center rounded-[24px] border border-[#c9b8e5] bg-[#eee7fb]">
                <span className="text-[17px] font-semibold tracking-[0.22em] text-[#8469b6]">
                  LLM
                </span>

                <span className="mt-2 text-[9px] font-semibold uppercase tracking-[0.25em] text-[#9c8cb0]">
                  REASONING
                </span>
              </div>

              <p className="mt-4 text-center text-[12px] text-[#81758d]">
                Understand · reason · generate
              </p>

              {/* Connector */}

              <div className="mx-auto h-6 w-px bg-[#d5c8df]" />

              {/* Output */}

              <div className="modern-card mx-auto max-w-[430px] rounded-2xl border border-[#c8e0d8] bg-[#edf8f4] px-6 py-6 shadow-sm">
                <div className="flex items-center gap-5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-[20px] text-[#70a68e] shadow-sm">
                    ✓
                  </div>

                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#7ba28f]">
                      OUTPUT
                    </p>

                    <p className="mt-2 text-[18px] font-semibold text-[#465e55]">
                      Grounded Answer
                    </p>

                    <p className="mt-1 text-[12px] text-[#789087]">
                      Context-aware response
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          ENGINEERING
      ===================================================== */}

      <section
        id="engineering"
        className="reveal-section mx-auto max-w-[1400px] border-t border-[#e5dde8] px-8 py-28 lg:px-12"
      >
        <div className="grid gap-16 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">
          <div>
            <p className="text-[22px] font-semibold uppercase tracking-[0.20em] text-[#8a70c1]">
              Engineering Signal
            </p>

            <h2 className="mt-6 text-[42px] font-semibold leading-[1.12] tracking-[-0.03em] text-[#302a3d]">
              Intelligence becomes useful when it becomes software.
            </h2>

            <p className="mt-7 max-w-md text-[18px] leading-7 text-[#6d637b]">
              I work across the path from data and model intelligence
              to usable production systems.
            </p>
          </div>

          <div className="modern-card rounded-[28px] border border-[#ddd4e2] bg-white/60 p-8 shadow-[0_20px_60px_rgba(100,82,120,0.08)]">
            <div className="grid grid-cols-3 gap-4">
              {[
                ["01", "DATA"],
                ["02", "INTELLIGENCE"],
                ["03", "APPLICATION"],
              ].map(([number, label]) => (
                <div
                  key={number}
                  className="rounded-2xl border border-[#ded6e4] bg-white/70 p-5"
                >
                  <div className="text-[11px] text-[#a297ad]">
                    {number}
                  </div>

                  <div className="mt-6 text-[16px] font-medium tracking-[0.12em] text-[#625770]">
                    {label}
                  </div>
                </div>
              ))}
            </div>

            <div className="my-5 grid grid-cols-3 gap-4">
              {["RAG", "AGENTS", "MACHINE LEARNING"].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-[#d7c8e8] bg-[#f5f0fa] p-5 text-center"
                >
                  <p className="text-[15px] font-semibold tracking-[0.10em] text-[#8268ae]">
                    {item}
                  </p>
                </div>
              ))}
            </div>

            <div className="rounded-2xl border border-[#ded6e4] bg-white/70 p-6">
              <p className="text-[12px] font-semibold uppercase tracking-[0.25em] text-[#a095ad]">
                Production Layer
              </p>

              <p className="mt-3 text-[18px] text-[#5f556d]">
                APIs · Cloud · MLOps · Observability
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CAPABILITIES
      ===================================================== */}

      <section
        id="capabilities"
        className="reveal-section mx-auto max-w-[1400px] border-t border-[#e5dde8] px-8 py-28 lg:px-12"
      >
        <div className="grid gap-14 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="text-[22px] font-semibold uppercase tracking-[0.20em] text-[#8a70c1]">
              Capabilities
            </p>

            <h2 className="mt-6 text-[42px] font-semibold tracking-[-0.03em] text-[#302a3d]">
              What I build.
            </h2>
          </div>

          <div className="grid overflow-hidden rounded-[26px] border border-[#ddd4e2] bg-white/60 sm:grid-cols-2">
            {capabilities.map((item) => (
              <div
                key={item.number}
                className="reveal-card group border-b border-r border-[#e2dbe7] bg-white/40 p-8 transition hover:bg-[#f6f0fa]"
              >
                <span className="text-[13px] text-[#a095ad]">
                  {item.number}
                </span>

                <h3 className="mt-7 text-[23px] font-medium text-[#40364d] transition group-hover:text-[#8065b0]">
                  {item.title}
                </h3>

                <p className="mt-4 text-[18px] leading-7 text-[#6f657c]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          PROJECTS
      ===================================================== */}

      <section
        id="projects"
        className="reveal-section mx-auto max-w-[1400px] border-t border-[#e5dde8] px-8 py-28 lg:px-12"
      >
        <p className="text-[22px] font-semibold uppercase tracking-[0.20em] text-[#8a70c1]">
          Selected Work
        </p>

        <h2 className="mt-6 text-[42px] font-semibold tracking-[-0.03em] text-[#302a3d]">
          Systems I&apos;ve built.
        </h2>

        <div className="mt-12 grid gap-7 lg:grid-cols-2">
          {featuredProjects.map((project) => (
            <article
              key={project.number}
              className="reveal-card modern-card group rounded-[28px] border border-[#ddd4e2] bg-white/60 p-8 shadow-[0_20px_60px_rgba(100,82,120,0.06)] sm:p-10"
            >
              <div className="flex justify-between">
                <span className="text-[13px] text-[#a095ad]">
                  {project.number}
                </span>

                <span className="text-[12px] font-semibold uppercase tracking-[0.20em] text-[#8a70c1]">
                  {project.type}
                </span>
              </div>

              <div className="mt-8 flex h-36 items-center justify-center rounded-2xl border border-[#e0d8e5] bg-[#faf8fb]">
                <div className="flex items-center gap-3 text-[13px]">
                  <span className="rounded-xl border border-[#ddd4e2] bg-white px-5 py-3 text-[#7c7088]">
                    DATA
                  </span>

                  <span className="text-[#a89ab2]">→</span>

                  <span className="rounded-xl border border-[#d3c2e8] bg-[#f1eafb] px-5 py-3 text-[#8268ae]">
                    AI
                  </span>

                  <span className="text-[#a89ab2]">→</span>

                  <span className="rounded-xl border border-[#ddd4e2] bg-white px-5 py-3 text-[#7c7088]">
                    API
                  </span>
                </div>
              </div>

              <h3 className="mt-8 text-[30px] font-semibold tracking-[-0.03em] text-[#302a3d]">
                {project.title}
              </h3>

              <h4 className="mt-1 text-[30px] font-semibold tracking-[-0.03em] text-[#9386a4]">
                {project.subtitle}
              </h4>

              <p className="mt-5 text-[18px] leading-7 text-[#6b6176]">
                {project.description}
              </p>

              <div className="mt-7 flex flex-wrap gap-2.5">
                {project.stack.map((tool) => (
                  <span
                    key={tool}
                    className="skill-tag rounded-full border border-[#ddd4e2] bg-white px-4 py-2 text-[16px] text-[#6c6178]"
                  >
                    {tool}
                  </span>
                ))}
              </div>

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="modern-button mt-8 inline-flex rounded-full border border-[#d2c7dc] px-6 py-3 text-[16px] font-medium text-[#574c64] transition hover:border-[#9d80c7] hover:text-[#8065b0]"
              >
                Explore repository ↗
              </a>
            </article>
          ))}
        </div>
      </section>

      {/* =====================================================
          SKILLS / EXPERTISE
      ===================================================== */}

      <section
        id="technologies"
        className="reveal-section mx-auto max-w-[1400px] border-t border-[#e5dde8] px-8 py-28 lg:px-12"
      >
        <p className="text-[22px] font-semibold uppercase tracking-[0.20em] text-[#8a70c1]">
          Skills & Expertise
        </p>

        <div className="mt-6 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <h2 className="text-[42px] font-semibold tracking-[-0.03em] text-[#302a3d]">
              Technical expertise.
            </h2>

            <p className="mt-5 max-w-3xl text-[18px] leading-7 text-[#6b6176]">
              Technologies, frameworks, cloud platforms, engineering tools,
              and domain expertise I work with across AI and software
              engineering projects.
            </p>
          </div>

          <span className="w-fit rounded-full border border-[#d7c8e8] bg-[#f5f0fa] px-5 py-3 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#8268ae]">
            AI / ML ENGINEERING
          </span>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {technologyGroups.map((group, index) => (
            <div
              key={group.title}
              className="reveal-card modern-card rounded-[24px] border border-[#ddd4e2] bg-white/60 p-7 shadow-sm"
            >
              <div className="mb-6 flex items-center justify-between">
                <h3 className="text-[22px] font-semibold text-[#40364d]">
                  {group.title}
                </h3>

                <span className="text-[12px] font-semibold tracking-[0.18em] text-[#a095ad]">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <div className="flex flex-wrap gap-2.5">
                {group.technologies.map((tool) => (
                  <span
                    key={tool}
                    className="skill-tag rounded-full border border-[#ddd4e2] bg-[#fbfafc] px-4 py-2.5 text-[16px] text-[#625770] transition hover:border-[#b69bd4] hover:bg-[#f6f0fa] hover:text-[#8065b0]"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =====================================================
          ALL REPOSITORIES
      ===================================================== */}

      <section
        id="repositories"
        className="reveal-section mx-auto max-w-[1400px] border-t border-[#e5dde8] px-8 py-28 lg:px-12"
      >
        <p className="text-[22px] font-semibold uppercase tracking-[0.20em] text-[#8a70c1]">
          GitHub / All Work
        </p>

        <div className="mt-6 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <h2 className="text-[42px] font-semibold tracking-[-0.03em] text-[#302a3d]">
              Every repository.
            </h2>
          </div>

          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="modern-button w-fit rounded-full border border-[#d7cedf] bg-white/50 px-6 py-3 text-[16px] text-[#5f536d] transition hover:border-[#a88bd1] hover:text-[#8065b0]"
          >
            Open GitHub ↗
          </a>
        </div>

        {/* Search */}

        <div className="mt-10">
          <input
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search repositories or technologies..."
            className="w-full rounded-2xl border border-[#ddd4e2] bg-white/70 px-6 py-5 text-[17px] text-[#302a3d] outline-none placeholder:text-[#a59aaa] focus:border-[#b39acb]"
          />
        </div>

        {/* Filters */}

        {!loadingRepos && languages.length > 1 && (
          <div className="mt-5 flex flex-wrap gap-2.5">
            {languages.map((item) => (
              <button
                key={item}
                onClick={() => setLanguage(item)}
                className={`rounded-full border px-5 py-2.5 text-[15px] transition ${
                  language === item
                    ? "border-[#bba4d8] bg-[#f2ebf9] text-[#8065b0]"
                    : "border-[#ddd4e2] bg-white/50 text-[#81758d] hover:text-[#5e526b]"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        )}

        <div className="mt-8 flex items-center justify-between">
          <p className="text-[13px] font-semibold uppercase tracking-[0.18em] text-[#a095ad]">
            {loadingRepos
              ? "Loading repositories..."
              : `${filteredRepositories.length} repositories`}
          </p>

          <p className="text-[14px] text-[#a095ad]">
            Public GitHub repositories
          </p>
        </div>

        {/* Repository List */}

        <div className="mt-6 overflow-hidden rounded-[26px] border border-[#ddd4e2] bg-white/50">
          {loadingRepos && (
            <div className="p-14 text-center text-[17px] text-[#82768d]">
              Loading your GitHub repositories...
            </div>
          )}

          {!loadingRepos && repoError && (
            <div className="p-14 text-center">
              <p className="text-[17px] text-[#82768d]">
                {repoError}
              </p>

              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-block text-[16px] text-[#8065b0]"
              >
                View GitHub directly ↗
              </a>
            </div>
          )}

          {!loadingRepos &&
            !repoError &&
            filteredRepositories.length === 0 && (
              <div className="p-14 text-center text-[17px] text-[#82768d]">
                No repositories match your search.
              </div>
            )}

          {!loadingRepos &&
            !repoError &&
            filteredRepositories.map((repo, index) => {
              const technologies = getRepositoryTechnologies(repo.name);
              const category = getRepositoryCategory(repo.name);

              return (
                <a
                  key={repo.id}
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`reveal-card group block p-8 transition hover:bg-[#faf7fc] ${
                    index !== filteredRepositories.length - 1
                      ? "border-b border-[#e4dce8]"
                      : ""
                  }`}
                >
                  <div className="flex flex-col gap-6">
                    <div className="flex flex-col justify-between gap-6 lg:flex-row">
                      <div>
                        <div className="flex items-center gap-4">
                          <span className="text-[13px] text-[#a095ad]">
                            {String(index + 1).padStart(2, "0")}
                          </span>

                          <span className="text-[12px] font-semibold uppercase tracking-[0.20em] text-[#8a70c1]">
                            {category}
                          </span>
                        </div>

                        <h3 className="mt-4 text-[28px] font-semibold tracking-[-0.02em] text-[#332b40] transition group-hover:text-[#8065b0]">
                          {repo.name}
                        </h3>

                        <p className="mt-4 max-w-4xl text-[18px] leading-7 text-[#6c6277]">
                          {getRepositoryDescription(repo)}
                        </p>
                      </div>

                      <div className="flex shrink-0 items-center gap-5 text-[14px] text-[#91859b]">
                        {repo.language && (
                          <span className="flex items-center gap-2">
                            <span className="h-2.5 w-2.5 rounded-full bg-[#9d83c7]" />
                            {repo.language}
                          </span>
                        )}

                        <span>★ {repo.stargazers_count}</span>

                        <span>Forks {repo.forks_count}</span>
                      </div>
                    </div>

                    <div className="border-t border-[#eee8f0] pt-5">
                      <p className="mb-4 text-[12px] font-semibold uppercase tracking-[0.22em] text-[#a095ad]">
                        Tools Used
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {technologies.map((tool) => (
                          <span
                            key={tool}
                            className="skill-tag rounded-full border border-[#ddd4e2] bg-white px-3.5 py-2 text-[15px] text-[#6c6178] transition group-hover:border-[#c9b8d9]"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex justify-end">
                      <span className="text-[15px] text-[#9b8ead] transition group-hover:text-[#8065b0]">
                        Open repository ↗
                      </span>
                    </div>
                  </div>
                </a>
              );
            })}
        </div>
      </section>

      {/* =====================================================
          CONTACT
      ===================================================== */}

      <section
        id="contact"
        className="reveal-section mx-auto max-w-[1400px] border-t border-[#e5dde8] px-8 py-28 lg:px-12"
      >
        <div className="relative overflow-hidden rounded-[30px] border border-[#ddd4e2] bg-white/60 p-10 shadow-[0_20px_70px_rgba(100,82,120,0.08)] sm:p-16">
          <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-[#d8c8eb]/25 blur-[100px]" />

          <div className="relative">
            <p className="text-[22px] font-semibold uppercase tracking-[0.20em] text-[#8a70c1]">
              Open Channel
            </p>

            <h2 className="mt-6 max-w-3xl text-[42px] font-semibold tracking-[-0.03em] text-[#302a3d] sm:text-[50px]">
              Let&apos;s build something intelligent.
            </h2>

            <p className="mt-6 max-w-2xl text-[18px] leading-7 text-[#6b6176]">
              Open to conversations around Generative AI, AI engineering,
              machine learning, intelligent applications, and production
              systems.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href={emailUrl}
                className="modern-button rounded-full bg-[#9274c8] px-8 py-4 text-[17px] font-semibold text-white shadow-[0_12px_30px_rgba(146,116,200,0.20)] transition hover:bg-[#8566bd]"
              >
                Start a conversation
              </a>

              <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="modern-button rounded-full border border-[#d7cedf] bg-white px-8 py-4 text-[17px] font-semibold text-[#51465e] transition hover:border-[#aa91d0] hover:text-[#8065b0]"
              >
                LinkedIn ↗
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          FOOTER
      ===================================================== */}

      <footer className="mx-auto flex max-w-[1400px] flex-col gap-4 border-t border-[#e5dde8] px-8 py-9 text-[16px] text-[#8b7f94] sm:flex-row sm:items-center sm:justify-between lg:px-12">
        <span className="text-[24px] font-semibold text-[#40364d]">
          Usha<span className="text-[#9274c8]">.</span>
        </span>

        <span>
          AI systems · Generative AI · Machine Learning
        </span>

        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="transition hover:text-[#8065b0]"
        >
          GitHub ↗
        </a>
      </footer>

      {/* =====================================================
          BACK TO TOP
      ===================================================== */}

      <button
        type="button"
        onClick={() =>
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          })
        }
        aria-label="Back to top"
        className={`back-to-top ${
          showBackToTop ? "visible" : ""
        } fixed bottom-7 right-7 z-40 flex h-12 w-12 items-center justify-center rounded-full border border-[#d7cedf] bg-white/90 text-[20px] text-[#665a73] shadow-[0_10px_30px_rgba(80,65,100,0.12)] backdrop-blur-sm transition hover:-translate-y-1 hover:border-[#a88bd1] hover:text-[#8065b0]`}
      >
        ↑
      </button>
    </main>
  );
}