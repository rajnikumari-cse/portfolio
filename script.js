
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <meta name="description"
          content="Rajni Kumari's portfolio showcasing data analytics and frontend development projects.">

    <title>Rajni Kumari | Developer Portfolio</title>

    <link rel="stylesheet" href="portfolio.css">
</head>

<body>

    <!-- Navigation -->
    <header class="header">
        <nav class="navbar">
            <a href="#home" class="logo">Rajni<span>.</span></a>

            <button class="menu-toggle"
                    id="menu-toggle"
                    aria-label="Open navigation menu"
                    aria-expanded="false"
                    aria-controls="nav-links">
                ☰
            </button>

            <ul class="nav-links" id="nav-links">
                <li><a href="#home" class="nav-link active">Home</a></li>
                <li><a href="#about" class="nav-link">About</a></li>
                <li><a href="#skills" class="nav-link">Skills</a></li>
                <li><a href="#projects" class="nav-link">Projects</a></li>
                <li><a href="#education" class="nav-link">Education</a></li>
                <li><a href="#certifications" class="nav-link">Certificates</a></li>
                <li><a href="#contact" class="nav-link">Contact</a></li>
            </ul>
        </nav>
    </header>


    <main>

        <!-- Hero -->
        <section id="home" class="hero section">
            <div class="hero-content reveal">

                <div class="availability">
                    <span class="status-dot"></span>
                    B.Tech IT Student · Open to Opportunities
                </div>

                <p class="eyebrow">HELLO, WELCOME TO MY PORTFOLIO</p>

                <h1>
                    Hi, I'm <span class="gradient-text">Rajni Kumari</span>
                </h1>

                <h2 class="hero-role">
                    I'm an <span id="typing-text">Aspiring Data Analyst</span>
                    <span class="cursor">|</span>
                </h2>

                <p class="hero-description">
                    I turn data into meaningful insights and ideas into
                    responsive websites. I enjoy learning, building projects,
                    and improving my technical skills one step at a time.
                </p>

                <div class="hero-buttons">
                    <a href="#projects" class="btn btn-primary">
                        Explore My Work <span>↗</span>
                    </a>

                    <a href="resume.pdf" class="btn btn-outline" download>
                        Download Resume ↓
                    </a>
                </div>

                <div class="social-links">
                    <a href="https://github.com/rajnikumari-cse"
                       target="_blank" rel="noopener noreferrer">
                        GitHub ↗
                    </a>

                    <a href="https://linkedin.com/in/rajni-kumari-7b0ba6431"
                       target="_blank" rel="noopener noreferrer">
                        LinkedIn ↗
                    </a>

                    <a href="mailto:kumarirajni2408@gmail.com">
                        Email ↗
                    </a>
                </div>
            </div>

            <div class="hero-visual reveal">
                <div class="orbit orbit-one"></div>
                <div class="orbit orbit-two"></div>

                <div class="profile-card">
                    <div class="profile-top">
                        <span class="window-dot purple"></span>
                        <span class="window-dot pink"></span>
                        <span class="window-dot blue"></span>
                        <span class="profile-label">about_me.txt</span>
                    </div>

                    <div class="profile-avatar">RK</div>

                    <h3>Rajni Kumari</h3>
                    <p class="profile-subtitle">Information Technology</p>

                    <div class="profile-divider"></div>

                    <div class="profile-info">
                        <span>Focus</span>
                        <strong>Data Analytics</strong>
                    </div>

                    <div class="profile-info">
                        <span>Also learning</span>
                        <strong>Frontend Development</strong>
                    </div>

                    <div class="code-line">
                        <span>const</span> goal =
                        <span class="code-string">"Keep Growing 🚀"</span>;
                    </div>
                </div>

                <div class="floating-badge badge-python">Python</div>
                <div class="floating-badge badge-html">HTML & CSS</div>
                <div class="floating-badge badge-data">Data Analytics</div>
            </div>

            <a href="#about" class="scroll-hint">SCROLL TO EXPLORE ↓</a>
        </section>


        <!-- About -->
        <section id="about" class="section">
            <div class="section-heading reveal">
                <p class="eyebrow">GET TO KNOW ME</p>
                <h2>About <span class="gradient-text">Me</span></h2>
                <p>A little about my journey and interests.</p>
            </div>

            <div class="about-grid">
                <div class="about-text reveal">
                    <h3>Learning today, building for tomorrow.</h3>

                    <p>
                        I am a B.Tech Information Technology student at
                        Guru Jambheshwar University of Science and Technology,
                        Hisar.
                    </p>

                    <p>
                        I am interested in Data Analytics and Frontend
                        Development. I enjoy working with data, creating
                        dashboards, and building websites using HTML and CSS
                        while developing my JavaScript skills.
                    </p>

                    <p>
                        I believe consistent practice and hands-on projects
                        are important for growing as a developer.
                    </p>

                    <a href="#contact" class="text-link">
                        Let's connect <span>→</span>
                    </a>
                </div>

                <div class="about-highlights reveal">
                    <div class="highlight-card">
                        <span class="highlight-icon">📊</span>
                        <h3>Data Analytics</h3>
                        <p>Exploring data, patterns and useful insights.</p>
                    </div>

                    <div class="highlight-card">
                        <span class="highlight-icon">💻</span>
                        <h3>Web Development</h3>
                        <p>Building clean and responsive web interfaces.</p>
                    </div>

                    <div class="highlight-card">
                        <span class="highlight-icon">🌱</span>
                        <h3>Continuous Learning</h3>
                        <p>Improving through practice and projects.</p>
                    </div>

                    <div class="highlight-card">
                        <span class="highlight-icon">🎯</span>
                        <h3>Career Goal</h3>
                        <p>Gaining practical experience through internships.</p>
                    </div>
                </div>
            </div>
        </section>


        <!-- Skills -->
        <section id="skills" class="section section-alt">
            <div class="section-heading reveal">
                <p class="eyebrow">WHAT I WORK WITH</p>
                <h2>My <span class="gradient-text">Skills</span></h2>
                <p>Technologies I use and continue to practise.</p>
            </div>

            <div class="skills-grid">

                <article class="skill-card reveal">
                    <div class="skill-icon">📈</div>
                    <h3>Data Analytics</h3>
                    <p>Working with data to find patterns and summarize results.</p>

                    <div class="skill-tags">
                        <span>Python</span>
                        <span>Pandas</span>
                        <span>Excel</span>
                        <span>Matplotlib</span>
                    </div>
                </article>

                <article class="skill-card reveal">
                    <div class="skill-icon">🌐</div>
                    <h3>Web Development</h3>
                    <p>Creating structured pages and styling responsive layouts.</p>

                    <div class="skill-tags">
                        <span>HTML</span>
                        <span>CSS</span>
                        <span>JavaScript Basics</span>
                    </div>
                </article>

                <article class="skill-card reveal">
                    <div class="skill-icon">⚙️</div>
                    <h3>Programming & Tools</h3>
                    <p>Building programming fundamentals and managing projects.</p>

                    <div class="skill-tags">
                        <span>C</span>
                        <span>Git</span>
                        <span>GitHub</span>
                        <span>CSV</span>
                    </div>
                </article>

            </div>
        </section>


        <!-- Projects -->
        <section id="projects" class="section">
            <div class="section-heading reveal">
                <p class="eyebrow">SOME THINGS I'VE BUILT</p>
                <h2>Featured <span class="gradient-text">Projects</span></h2>
                <p>Practical projects built while learning new skills.</p>
            </div>

            <div class="project-grid">

                <article class="project-card reveal">
                    <div class="project-top">
                        <span class="project-number">01 / DATA</span>
                        <span class="project-symbol">📊</span>
                    </div>

                    <h3>Python Sales Data Analyzer</h3>

                    <p>
                        Analyzed sales data to calculate total revenue,
                        average order value, top-selling products,
                        and regional performance.
                    </p>

                    <div class="project-tags">
                        <span>Python</span>
                        <span>Pandas</span>
                        <span>Matplotlib</span>
                    </div>

                    <div class="project-links">
                        <a href="https://rajnikumari-cse.github.io/Python-Sales-Data-Analyzer/"
                           target="_blank" rel="noopener noreferrer">
                            Live Demo ↗
                        </a>

                        <a href="https://github.com/rajnikumari-cse/Python-Sales-Data-Analyzer"
                           target="_blank" rel="noopener noreferrer">
                            Source Code ↗
                        </a>
                    </div>
                </article>


                <article class="project-card reveal">
                    <div class="project-top">
                        <span class="project-number">02 / WEB</span>
                        <span class="project-symbol">🎓</span>
                    </div>

                    <h3>Student Performance Dashboard</h3>

                    <p>
                        Created a dashboard presenting student performance,
                        attendance, pass percentage and subject-wise results.
                    </p>

                    <div class="project-tags">
                        <span>HTML</span>
                        <span>CSS</span>
                        <span>Dashboard UI</span>
                    </div>

                    <div class="project-links">
                        <a href="https://rajnikumari-cse.github.io/student-performance-dashboard/"
                           target="_blank" rel="noopener noreferrer">
                            Live Demo ↗
                        </a>
                    </div>
                </article>


                <article class="project-card reveal">
                    <div class="project-top">
                        <span class="project-number">03 / WEB</span>
                        <span class="project-symbol">🍔</span>
                    </div>

                    <h3>Foodie – Food Ordering Website</h3>

                    <p>
                        Designed a food website featuring navigation,
                        food categories, menu items, prices and an
                        Order Now section.
                    </p>

                    <div class="project-tags">
                        <span>HTML</span>
                        <span>CSS</span>
                        <span>Web Design</span>
                    </div>

                    <div class="project-links">
                        <a href="https://rajnikumari-cse.github.io/food-ordering-website/"
                           target="_blank" rel="noopener noreferrer">
                            Live Demo ↗
                        </a>
                    </div>
                </article>


                <article class="project-card reveal">
                    <div class="project-top">
                        <span class="project-number">04 / JAVASCRIPT</span>
                        <span class="project-symbol">✅</span>
                    </div>

                    <h3>To-Do List App</h3>

                    <p>
                        Built a task manager with task addition, completion,
                        deletion, priority labels and task counts.
                    </p>

                    <div class="project-tags">
                        <span>HTML</span>
                        <span>CSS</span>
                        <span>JavaScript</span>
                    </div>

                    <div class="project-links">
                        <a href="https://rajnikumari-cse.github.io/todo-app/"
                           target="_blank" rel="noopener noreferrer">
                            Live Demo ↗
                        </a>
                    </div>
                </article>


                <article class="project-card reveal">
                    <div class="project-top">
                        <span class="project-number">05 / EXCEL</span>
                        <span class="project-symbol">📉</span>
                    </div>

                    <h3>Excel Sales Dashboard</h3>

                    <p>
                        Summarized sales, order count, average order value
                        and high-value orders in a sales dashboard.
                    </p>

                    <div class="project-tags">
                        <span>Excel</span>
                        <span>Charts</span>
                        <span>Data Analysis</span>
                    </div>

                    <div class="project-links">
                        <a href="https://github.com/rajnikumari-cse"
                           target="_blank" rel="noopener noreferrer">
                            GitHub Profile ↗
                        </a>
                    </div>
                </article>


                <article class="project-card reveal">
                    <div class="project-top">
                        <span class="project-number">06 / JAVASCRIPT</span>
                        <span class="project-symbol">🎮</span>
                    </div>

                    <h3>Bat-Ball-Stump Game</h3>

                    <p>
                        Developed a simple game that compares the player's
                        choice with the computer's choice and displays
                        win, lose or tie results.
                    </p>

                    <div class="project-tags">
                        <span>HTML</span>
                        <span>CSS</span>
                        <span>JavaScript</span>
                    </div>

                    <div class="project-links">
                        <a href="https://github.com/rajnikumari-cse"
                           target="_blank" rel="noopener noreferrer">
                            GitHub Profile ↗
                        </a>
                    </div>
                </article>

            </div>
        </section>


        <!-- Education -->
        <section id="education" class="section section-alt">
            <div class="section-heading reveal">
                <p class="eyebrow">MY ACADEMIC BACKGROUND</p>
                <h2>Education & <span class="gradient-text">Training</span></h2>
            </div>

            <div class="timeline">
                <article class="timeline-item reveal">
                    <div class="timeline-dot"></div>

                    <div class="timeline-card">
                        <span class="timeline-date">2023 – 2027</span>
                        <h3>B.Tech in Information Technology</h3>
                        <p>Guru Jambheshwar University of Science and Technology</p>
                        <p class="muted">Hisar, Haryana · Currently pursuing</p>
                    </div>
                </article>
            </div>
        </section>


        <!-- Certifications -->
        <section id="certifications" class="section">
            <div class="section-heading reveal">
                <p class="eyebrow">LEARNING & ACHIEVEMENTS</p>
                <h2>Certifications & <span class="gradient-text">Training</span></h2>
            </div>

            <div class="cert-grid">

                <article class="cert-card reveal">
                    <span class="cert-icon">🔐</span>
                    <h3>Ethical Hacking and Penetration Testing</h3>
                    <p>Cyber Gyan Virtual Internship · C-DAC Noida</p>
                    <span class="cert-date">July – August 2025</span>
                </article>

                <article class="cert-card reveal">
                    <span class="cert-icon">🌐</span>
                    <h3>Web Development</h3>
                    <p>Scholiverse Educare / Skill India</p>
                    <span class="cert-date">Course completion</span>
                </article>

                <article class="cert-card reveal">
                    <span class="cert-icon">💻</span>
                    <h3>Frontend Engineer Learning Programme</h3>
                    <p>TechOtsu</p>
                    <span class="cert-date">August 2026</span>
                </article>

                <article class="cert-card reveal">
                    <span class="cert-icon">🎯</span>
                    <h3>Career Readiness Training</h3>
                    <p>Training and Placement Cell, GJUST</p>
                    <span class="cert-date">4-day training programme</span>
                </article>

            </div>
        </section>


        <!-- Resume CTA -->
        <section class="resume-section section">
            <div class="resume-box reveal">
                <p class="eyebrow">WANT TO KNOW MORE?</p>
                <h2>Take a look at my <span class="gradient-text">Resume</span></h2>
                <p>
                    Explore my education, technical skills, projects
                    and learning experience.
                </p>

                <a href="resume.pdf" class="btn btn-primary" download>
                    Download My Resume ↓
                </a>
            </div>
        </section>


        <!-- Contact -->
        <section id="contact" class="section section-alt">
            <div class="section-heading reveal">
                <p class="eyebrow">LET'S CONNECT</p>
                <h2>Get In <span class="gradient-text">Touch</span></h2>
                <p>Open to internships, projects and learning opportunities.</p>
            </div>

            <div class="contact-card reveal">
                <a href="mailto:kumarirajni2408@gmail.com" class="contact-item">
                    <span class="contact-icon">✉</span>
                    <span>
                        <small>Email</small>
                        <strong>kumarirajni2408@gmail.com</strong>
                    </span>
                    <span class="contact-arrow">↗</span>
                </a>

                <a href="https://linkedin.com/in/rajni-kumari-7b0ba6431"
                   target="_blank" rel="noopener noreferrer"
                   class="contact-item">
                    <span class="contact-icon">in</span>
                    <span>
                        <small>LinkedIn</small>
                        <strong>Connect professionally</strong>
                    </span>
                    <span class="contact-arrow">↗</span>
                </a>

                <a href="https://github.com/rajnikumari-cse"
                   target="_blank" rel="noopener noreferrer"
                   class="contact-item">
                    <span class="contact-icon">⌘</span>
                    <span>
                        <small>GitHub</small>
                        <strong>Explore my repositories</strong>
                    </span>
                    <span class="contact-arrow">↗</span>
                </a>
            </div>
        </section>

    </main>


    <!-- Footer -->
    <footer class="footer">
        <a href="#home" class="logo">Rajni<span>.</span></a>
        <p>Designed and built by Rajni Kumari.</p>
        <p>© <span id="current-year"></span> All rights reserved.</p>
    </footer>

    <button id="back-to-top" class="back-to-top" aria-label="Back to top">
        ↑
    </button>

    <script src="portfolio.js"></script>
</body>
</html>
