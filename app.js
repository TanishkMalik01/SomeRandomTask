// Modern Study Timetable Application - FULLY FUNCTIONAL JavaScript

// Application data
const appData = {
   "schedule": [
    {"time": "6:00 AM", "activity": "Wake Up & Morning Routine", "type": "routine", "description": "Wake up refreshed, hydrate, prepare for gym"},
    {"time": "6:15 AM", "activity": "Gym Session", "type": "health", "description": "Morning workout - strength training, cardio, or functional fitness"},
    {"time": "7:30 AM", "activity": "Return from Gym", "type": "travel", "description": "Commute back, cool down"},
    {"time": "7:30 AM - 8:00 AM", "activity": "Instagram Scroll", "type": "break", "description": "Social media browsing, tech content, relaxation"},
    {"time": "8:00 AM - 8:30 AM", "activity": "Breakfast & Getting Ready", "type": "meal", "description": "Nutritious post-workout breakfast, shower, prepare for college"},{"time": "9:10 AM", "activity": "Leave for College", "type": "travel", "description": "Travel time - review notes or listen to tech podcasts"},
    {"time": "9:30 AM - 3:00 PM", "activity": "College Classes", "type": "academic", "description": "Active participation, note-taking, networking"},
    {"time": "3:00 PM", "activity": "Return Home", "type": "travel", "description": "Commute back - mental transition time"},
    {"time": "3:30 PM - 4:30 PM", "activity": "Python Coding Practice", "type": "study", "description": "Daily Python exercises, coding challenges", "focus": "python"},
    {"time": "4:30 PM - 5:00 PM", "activity": "Cybersecurity Reading", "type": "study", "description": "Security articles, vulnerability reports", "focus": "cybersecurity"},
    {"time": "5:00 PM - 6:00 PM", "activity": "Snack Time", "type": "meal", "description": "Healthy snacks - nuts, fruits, green tea"},
    {"time": "6:00 PM - 7:30 PM", "activity": "Project Development", "type": "project", "description": "Work on cybersecurity/Python projects", "focus": "projects"},
    {"time": "7:30 PM - 8:00 PM", "activity": "Physical Activity", "type": "health", "description": "Exercise, walk, or stretching"},
    {"time": "8:00 PM - 8:40 PM", "activity": "Review & Plan", "type": "planning", "description": "Review day's learning, plan tomorrow"},
    {"time": "8:40 PM - 9:00 PM", "activity": "Dinner", "type": "meal", "description": "Balanced dinner with proteins and vegetables"},
    {"time": "9:00 PM - 9:30 PM", "activity": "Digest & Unwind", "type": "break", "description": "Light activity, music, or family time"},
    {"time": "9:30 PM - 10:00 PM", "activity": "Python Deep Dive", "type": "study", "description": "Advanced Python concepts, libraries", "focus": "python"},
    {"time": "10:00 PM - 10:05 PM", "activity": "Micro Break", "type": "break", "description": "Stretch, hydrate, eye rest"},
    {"time": "10:05 PM - 10:35 PM", "activity": "Cybersecurity Theory", "type": "study", "description": "Security concepts, tools, methodologies", "focus": "cybersecurity"},
    {"time": "10:35 PM - 10:40 PM", "activity": "Micro Break", "type": "break", "description": "Quick movement, breathing exercise"},
    {"time": "10:40 PM - 11:00 PM", "activity": "Practical Labs", "type": "study", "description": "Hands-on security tools, Python scripting", "focus": "practical"},
    {"time": "11:00 PM - 11:45 PM", "activity": "Active Rest Period", "type": "break", "description": "Light meal, relaxation, no screens"},
    {"time": "11:45 PM - 12:15 AM", "activity": "Project Work", "type": "project", "description": "Coding projects, debugging, testing", "focus": "projects"},
    {"time": "12:15 AM - 1:00 AM", "activity": "Sleep Preparation", "type": "routine", "description": "Wind down, no screens, prepare for quality sleep"}
  ],
  "weekly_focus": {
    "python_topics": [
      "Python Basics - Variables, Data Types, Operators",
      "Control Structures - Loops, Conditionals, Functions", 
      "Data Structures - Lists, Dictionaries, Sets, Tuples",
      "File Handling & Error Management",
      "Object-Oriented Programming Fundamentals",
      "Libraries - Requests, JSON, CSV handling",
      "Web Scraping & APIs",
      "Data Analysis with Pandas & NumPy"
    ],
    "cybersecurity_topics": [
      "Security Fundamentals & Risk Assessment",
      "Network Security & Protocols",
      "Cryptography & Encryption",
      "Web Application Security",
      "Penetration Testing Basics",
      "Incident Response & Digital Forensics",
      "Security Tools & SIEM",
      "Cloud Security & DevSecOps"
    ],
    "project_ideas": [
      "Password Strength Checker (Python + Security)",
      "Network Scanner Tool",
      "File Encryption/Decryption Tool",
      "Vulnerability Scanner",
      "Keylogger Detection System", 
      "Security Audit Dashboard",
      "Penetration Testing Toolkit",
      "Cybersecurity Incident Response App"
    ]
  },
  "study_guidelines": {
    "study_techniques": [
      "Use Pomodoro Technique (25min work + 5min break)",
      "Practice active recall and spaced repetition",
      "Alternate between theory and practical coding",
      "Document learning progress daily",
      "Join online communities and forums"
    ],
    "productivity_tips": [
      "Keep phone in another room during study",
      "Use proper lighting and ergonomic setup", 
      "Stay hydrated - keep water bottle nearby",
      "Take notes by hand for better retention",
      "Review previous day's work before starting new"
    ],
    "project_workflow": [
      "Start with simple projects and gradually increase complexity",
      "Always version control with Git",
      "Focus on clean, documented code",
      "Test thoroughly before considering complete",
      "Share projects on GitHub for portfolio"
    ]
  }
};

// Application state - ALL INTERACTIVE DATA
let state = {
  completedActivities: new Set(),
  currentTheme: 'light',
  pythonWeek: 0,
  cyberWeek: 0,
  weeklyProgress: {
    python: Array(8).fill(0), // Progress percentage for each week
    cybersecurity: Array(8).fill(0)
  },
  completedProjects: new Set(),
  studyHours: 0,
  dayStreak: 1,
  lastActivity: null
};

// Motivational messages based on progress
const motivationalMessages = [
  "Just getting started! 🎯",
  "Making progress! 🌟",
  "You're on fire! 🔥",
  "Halfway there! 💪",
  "Almost done! 🚀",
  "Excellent work! ⭐",
  "Outstanding! 🏆",
  "Perfect day! 🎉"
];

// Initialize the application
function init() {
  console.log('🚀 Initializing Study Timetable App...');
  
  // Detect system theme
  state.currentTheme = detectSystemTheme();
  
  // Setup all event listeners FIRST
  setupEventListeners();
  
  // Render all sections
  renderSchedule();
  renderWeeklyFocus();
  renderStudyGuidelines();
  renderProgressSection();
  
  // Apply theme and update all progress
  applyTheme(state.currentTheme);
  updateAllProgress();
  
  // Show welcome message
  showWelcomeMessage();
  
  console.log('✅ Study Timetable App initialized successfully!');
}

// Setup ALL event listeners - MAKE EVERYTHING CLICKABLE
function setupEventListeners() {
  console.log('🔧 Setting up event listeners...');
  
  // Theme toggle
  const themeToggle = document.getElementById('theme-toggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', toggleTheme);
    console.log('✅ Theme toggle listener added');
  }
  
  // Mobile menu
  const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
  if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', toggleMobileMenu);
    console.log('✅ Mobile menu listener added');
  }
  
  // Navigation - FIXED
  document.addEventListener('click', function(e) {
    const navLink = e.target.closest('.nav__link');
    if (navLink && navLink.dataset.section) {
      e.preventDefault();
      const targetSection = navLink.dataset.section;
      console.log('🔄 Navigating to:', targetSection);
      showSection(targetSection);
      setActiveNavLink(navLink);
    }
  });

  // Weekly navigation buttons - Use event delegation
  document.addEventListener('click', function(e) {
    if (e.target.id === 'python-prev') {
      navigateWeek('python', -1);
    } else if (e.target.id === 'python-next') {
      navigateWeek('python', 1);
    } else if (e.target.id === 'cyber-prev') {
      navigateWeek('cybersecurity', -1);
    } else if (e.target.id === 'cyber-next') {
      navigateWeek('cybersecurity', 1);
    }
  });

  // Quick action buttons - Use event delegation
  document.addEventListener('click', function(e) {
    if (e.target.id === 'mark-study-complete' || e.target.closest('#mark-study-complete')) {
      markStudySessionComplete();
    } else if (e.target.id === 'take-break' || e.target.closest('#take-break')) {
      takeBreakAction();
    } else if (e.target.id === 'add-study-hour' || e.target.closest('#add-study-hour')) {
      addStudyHourAction();
    } else if (e.target.id === 'reset-progress' || e.target.closest('#reset-progress')) {
      resetAllProgress();
    }
  });

  // Progress section interactions - Use event delegation
  document.addEventListener('click', function(e) {
    // Topic toggle buttons
    if (e.target.closest('.topic-toggle')) {
      const topicItem = e.target.closest('.topic-item');
      if (topicItem) {
        const subject = topicItem.dataset.topic;
        if (subject === 'python') {
          toggleTopicCompletion('python', state.pythonWeek);
        } else if (subject === 'cybersecurity') {
          toggleTopicCompletion('cybersecurity', state.cyberWeek);
        }
      }
      return;
    }
    
    // Progress bar clicks
    if (e.target.closest('.progress-bar')) {
      const topicItem = e.target.closest('.topic-item');
      if (topicItem) {
        const subject = topicItem.dataset.topic;
        const progressBar = e.target.closest('.progress-bar');
        const rect = progressBar.getBoundingClientRect();
        const clickX = e.clientX - rect.left;
        const width = rect.width;
        const percentage = Math.round((clickX / width) * 100);
        
        if (subject === 'python') {
          setTopicProgress('python', state.pythonWeek, percentage);
        } else if (subject === 'cybersecurity') {
          setTopicProgress('cybersecurity', state.cyberWeek, percentage);
        }
      }
      return;
    }
    
    // Milestone toggles
    if (e.target.closest('.milestone-toggle')) {
      const milestone = e.target.closest('.milestone');
      if (milestone && milestone.dataset.project) {
        const projectIndex = parseInt(milestone.dataset.project);
        toggleProjectCompletion(projectIndex);
      }
      return;
    }
  });

  // Close mobile menu when clicking outside
  document.addEventListener('click', (e) => {
    const navigation = document.getElementById('navigation');
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    if (navigation && !navigation.contains(e.target) && 
        mobileMenuToggle && !mobileMenuToggle.contains(e.target)) {
      navigation.classList.remove('open');
    }
  });

  // Handle window resize
  window.addEventListener('resize', () => {
    const navigation = document.getElementById('navigation');
    if (window.innerWidth > 768 && navigation) {
      navigation.classList.remove('open');
    }
  });
  
  console.log('✅ All event listeners set up successfully');
}

// Theme management
function detectSystemTheme() {
  return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function toggleTheme() {
  state.currentTheme = state.currentTheme === 'light' ? 'dark' : 'light';
  applyTheme(state.currentTheme);
  console.log('🎨 Theme changed to:', state.currentTheme);
  
  // Add visual feedback
  const themeToggle = document.getElementById('theme-toggle');
  if (themeToggle) {
    themeToggle.style.transform = 'scale(0.9)';
    setTimeout(() => {
      themeToggle.style.transform = 'scale(1)';
    }, 150);
  }
}

function applyTheme(theme) {
  document.documentElement.setAttribute('data-color-scheme', theme);
  updateThemeIcon(theme);
}

function updateThemeIcon(theme) {
  const themeToggle = document.getElementById('theme-toggle');
  if (themeToggle) {
    const themeIcon = themeToggle.querySelector('.theme-icon');
    if (themeIcon) {
      themeIcon.textContent = theme === 'light' ? '🌙' : '☀️';
    }
  }
}

// Mobile menu
function toggleMobileMenu() {
  const navigation = document.getElementById('navigation');
  if (navigation) {
    navigation.classList.toggle('open');
    console.log('📱 Mobile menu toggled');
  }
}

// Navigation
function showSection(sectionId) {
  const sections = document.querySelectorAll('.section');
  if (!sections) return;
  
  sections.forEach(section => {
    section.classList.remove('active');
    if (section.id === sectionId) {
      section.classList.add('active');
      console.log('📄 Showing section:', sectionId);
    }
  });
  
  // Close mobile menu after navigation
  const navigation = document.getElementById('navigation');
  if (navigation) {
    navigation.classList.remove('open');
  }
}

function setActiveNavLink(activeLink) {
  const navLinks = document.querySelectorAll('.nav__link');
  if (!navLinks) return;
  
  navLinks.forEach(link => link.classList.remove('active'));
  activeLink.classList.add('active');
}

// Schedule rendering with CLICKABLE checkboxes
function renderSchedule() {
  const scheduleTimeline = document.getElementById('schedule-timeline');
  if (!scheduleTimeline) return;
  
  scheduleTimeline.innerHTML = '';

  appData.schedule.forEach((item, index) => {
    const timelineItem = createTimelineItem(item, index);
    scheduleTimeline.appendChild(timelineItem);
  });
  
  console.log('📅 Schedule rendered with', appData.schedule.length, 'items');
}

function createTimelineItem(item, index) {
  const timelineItem = document.createElement('div');
  timelineItem.className = 'timeline-item';
  
  const isCompleted = state.completedActivities.has(index);
  
  timelineItem.innerHTML = `
    <div class="timeline-card ${isCompleted ? 'timeline-card--completed' : ''}">
      <div class="timeline-header">
        <span class="timeline-time">${item.time}</span>
        <input type="checkbox" class="timeline-checkbox" data-index="${index}" 
               ${isCompleted ? 'checked' : ''}>
      </div>
      <h3 class="timeline-title">${item.activity}</h3>
      <p class="timeline-description">${item.description}</p>
      ${item.focus ? `<span class="timeline-tag timeline-tag--${item.focus}">${item.focus}</span>` : ''}
    </div>
  `;

  // Add checkbox event listener with visual feedback
  const checkbox = timelineItem.querySelector('.timeline-checkbox');
  if (checkbox) {
    checkbox.addEventListener('change', (e) => {
      const index = parseInt(e.target.dataset.index);
      const card = timelineItem.querySelector('.timeline-card');
      
      if (e.target.checked) {
        state.completedActivities.add(index);
        card.classList.add('timeline-card--completed');
        
        // Add completion animation
        card.style.transform = 'scale(0.98)';
        setTimeout(() => {
          card.style.transform = 'scale(1)';
        }, 200);
        
        // Update study hours if it's a study activity
        if (item.type === 'study' || item.type === 'project') {
          state.studyHours += 0.5;
        }
        
        console.log('✅ Activity completed:', item.activity);
      } else {
        state.completedActivities.delete(index);
        card.classList.remove('timeline-card--completed');
        
        // Reduce study hours if unchecking study activity
        if (item.type === 'study' || item.type === 'project') {
          state.studyHours = Math.max(0, state.studyHours - 0.5);
        }
        
        console.log('❌ Activity unchecked:', item.activity);
      }
      
      updateAllProgress();
      state.lastActivity = item.activity;
      updateNextTask();
    });
  }

  return timelineItem;
}

// Weekly focus rendering
function renderWeeklyFocus() {
  renderPythonWeeks();
  renderCybersecurityWeeks();
  renderProjectIdeas();
}

function renderPythonWeeks() {
  const container = document.getElementById('python-weeks');
  if (!container) return;
  
  container.innerHTML = '';
  
  appData.weekly_focus.python_topics.forEach((topic, index) => {
    const weekCard = document.createElement('div');
    weekCard.className = 'week-card';
    weekCard.innerHTML = `
      <div class="week-number">Week ${index + 1}</div>
      <h4 class="week-topic">${topic}</h4>
    `;
    
    // Add click handler for visual feedback
    weekCard.addEventListener('click', () => {
      weekCard.style.transform = 'scale(0.98)';
      setTimeout(() => {
        weekCard.style.transform = 'scale(1)';
      }, 150);
    });
    
    container.appendChild(weekCard);
  });
}

function renderCybersecurityWeeks() {
  const container = document.getElementById('cybersecurity-weeks');
  if (!container) return;
  
  container.innerHTML = '';
  
  appData.weekly_focus.cybersecurity_topics.forEach((topic, index) => {
    const weekCard = document.createElement('div');
    weekCard.className = 'week-card';
    weekCard.innerHTML = `
      <div class="week-number">Week ${index + 1}</div>
      <h4 class="week-topic">${topic}</h4>
    `;
    
    // Add click handler for visual feedback
    weekCard.addEventListener('click', () => {
      weekCard.style.transform = 'scale(0.98)';
      setTimeout(() => {
        weekCard.style.transform = 'scale(1)';
      }, 150);
    });
    
    container.appendChild(weekCard);
  });
}

function renderProjectIdeas() {
  const container = document.getElementById('project-ideas');
  if (!container) return;
  
  container.innerHTML = '';
  
  const difficulties = ['easy', 'medium', 'hard', 'medium', 'hard', 'medium', 'hard', 'hard'];
  
  appData.weekly_focus.project_ideas.forEach((project, index) => {
    const projectCard = document.createElement('div');
    projectCard.className = 'project-card';
    const difficulty = difficulties[index] || 'medium';
    
    projectCard.innerHTML = `
      <h4 class="project-title">${project}</h4>
      <span class="project-difficulty project-difficulty--${difficulty}">${difficulty}</span>
    `;
    
    // Add click handler
    projectCard.addEventListener('click', () => {
      projectCard.style.transform = 'scale(0.98)';
      setTimeout(() => {
        projectCard.style.transform = 'scale(1)';
      }, 150);
    });
    
    container.appendChild(projectCard);
  });
}

// Study guidelines rendering
function renderStudyGuidelines() {
  renderGuidelineList('study-techniques', appData.study_guidelines.study_techniques);
  renderGuidelineList('productivity-tips', appData.study_guidelines.productivity_tips);
  renderGuidelineList('project-workflow', appData.study_guidelines.project_workflow);
}

function renderGuidelineList(containerId, guidelines) {
  const container = document.getElementById(containerId);
  if (!container) return;
  
  container.innerHTML = '';
  
  guidelines.forEach(guideline => {
    const li = document.createElement('li');
    li.textContent = guideline;
    
    // Add hover animation
    li.addEventListener('mouseenter', () => {
      li.style.transform = 'translateX(5px)';
    });
    li.addEventListener('mouseleave', () => {
      li.style.transform = 'translateX(0)';
    });
    
    container.appendChild(li);
  });
}

// PROGRESS SECTION - FULLY FUNCTIONAL
function renderProgressSection() {
  // Render current week topics with CLICKABLE progress bars
  renderCurrentWeekTopics();
  renderProjectMilestones();
  updateWeekNavigation('python');
  updateWeekNavigation('cybersecurity');
  console.log('📊 Progress section rendered');
}

function renderCurrentWeekTopics() {
  // Python topic
  const pythonTopicContainer = document.querySelector('[data-topic="python"]');
  if (pythonTopicContainer) {
    const currentTopic = appData.weekly_focus.python_topics[state.pythonWeek];
    const topicTitle = pythonTopicContainer.querySelector('.topic-title');
    if (topicTitle) {
      topicTitle.textContent = currentTopic;
    }
    
    // Update progress display
    const progressFill = pythonTopicContainer.querySelector('.progress-fill');
    const progressText = pythonTopicContainer.querySelector('.progress-text-small');
    const currentProgress = state.weeklyProgress.python[state.pythonWeek];
    
    if (progressFill) progressFill.style.width = `${currentProgress}%`;
    if (progressText) progressText.textContent = `${currentProgress}%`;
    
    if (currentProgress === 100) {
      pythonTopicContainer.classList.add('completed');
    } else {
      pythonTopicContainer.classList.remove('completed');
    }
  }
  
  // Cybersecurity topic
  const cyberTopicContainer = document.querySelector('[data-topic="cybersecurity"]');
  if (cyberTopicContainer) {
    const currentTopic = appData.weekly_focus.cybersecurity_topics[state.cyberWeek];
    const topicTitle = cyberTopicContainer.querySelector('.topic-title');
    if (topicTitle) {
      topicTitle.textContent = currentTopic;
    }
    
    // Update progress display
    const progressFill = cyberTopicContainer.querySelector('.progress-fill');
    const progressText = cyberTopicContainer.querySelector('.progress-text-small');
    const currentProgress = state.weeklyProgress.cybersecurity[state.cyberWeek];
    
    if (progressFill) progressFill.style.width = `${currentProgress}%`;
    if (progressText) progressText.textContent = `${currentProgress}%`;
    
    if (currentProgress === 100) {
      cyberTopicContainer.classList.add('completed');
    } else {
      cyberTopicContainer.classList.remove('completed');
    }
  }
}

function renderProjectMilestones() {
  const milestonesContainer = document.querySelector('.milestones-grid');
  if (!milestonesContainer) return;
  
  // Clear existing milestones
  milestonesContainer.innerHTML = '';
  
  const icons = ['🔐', '🌐', '🔒', '🛡️', '🔍', '📊', '🛠️', '🚨'];
  
  appData.weekly_focus.project_ideas.slice(0, 4).forEach((project, index) => {
    const milestone = document.createElement('div');
    milestone.className = `milestone ${state.completedProjects.has(index) ? 'completed' : ''}`;
    milestone.dataset.project = index;
    
    milestone.innerHTML = `
      <div class="milestone-icon">${icons[index]}</div>
      <div class="milestone-content">
        <span class="milestone-title">${project}</span>
        <button class="milestone-toggle" aria-label="Mark project as complete">
          <span class="checkbox-custom"></span>
        </button>
      </div>
    `;
    
    milestonesContainer.appendChild(milestone);
  });
}

// Weekly navigation
function navigateWeek(subject, direction) {
  console.log('🔄 Navigating week:', subject, direction);
  
  if (subject === 'python') {
    const newWeek = state.pythonWeek + direction;
    if (newWeek >= 0 && newWeek < 8) {
      state.pythonWeek = newWeek;
      updateWeekNavigation('python');
      renderCurrentWeekTopics();
    }
  } else if (subject === 'cybersecurity') {
    const newWeek = state.cyberWeek + direction;
    if (newWeek >= 0 && newWeek < 8) {
      state.cyberWeek = newWeek;
      updateWeekNavigation('cybersecurity');
      renderCurrentWeekTopics();
    }
  }
}

function updateWeekNavigation(subject) {
  if (subject === 'python') {
    const weekIndicator = document.getElementById('python-week-indicator');
    const prevBtn = document.getElementById('python-prev');
    const nextBtn = document.getElementById('python-next');
    
    if (weekIndicator) {
      weekIndicator.textContent = `Week ${state.pythonWeek + 1}`;
    }
    if (prevBtn) {
      prevBtn.disabled = state.pythonWeek === 0;
    }
    if (nextBtn) {
      nextBtn.disabled = state.pythonWeek === 7;
    }
  } else if (subject === 'cybersecurity') {
    const weekIndicator = document.getElementById('cyber-week-indicator');
    const prevBtn = document.getElementById('cyber-prev');
    const nextBtn = document.getElementById('cyber-next');
    
    if (weekIndicator) {
      weekIndicator.textContent = `Week ${state.cyberWeek + 1}`;
    }
    if (prevBtn) {
      prevBtn.disabled = state.cyberWeek === 0;
    }
    if (nextBtn) {
      nextBtn.disabled = state.cyberWeek === 7;
    }
  }
}

// Topic progress functions - CLICKABLE FUNCTIONALITY
function toggleTopicCompletion(subject, week) {
  const currentProgress = state.weeklyProgress[subject][week];
  const newProgress = currentProgress === 100 ? 0 : 100;
  setTopicProgress(subject, week, newProgress);
  console.log('🎯 Topic toggled:', subject, 'week', week + 1, 'progress:', newProgress + '%');
}

function setTopicProgress(subject, week, percentage) {
  state.weeklyProgress[subject][week] = Math.max(0, Math.min(100, percentage));
  
  // Update visual representation
  const topicContainer = document.querySelector(`[data-topic="${subject}"]`);
  if (topicContainer) {
    const progressFill = topicContainer.querySelector('.progress-fill');
    const progressText = topicContainer.querySelector('.progress-text-small');
    const topicItem = topicContainer;
    
    if (progressFill) {
      progressFill.style.width = `${percentage}%`;
    }
    if (progressText) {
      progressText.textContent = `${percentage}%`;
    }
    
    // Update completed state
    if (percentage === 100) {
      topicItem.classList.add('completed');
    } else {
      topicItem.classList.remove('completed');
    }
    
    // Visual feedback
    topicItem.style.transform = 'scale(0.98)';
    setTimeout(() => {
      topicItem.style.transform = 'scale(1)';
    }, 200);
  }
  
  updateAllProgress();
  console.log('📈 Progress updated:', subject, 'week', week + 1, percentage + '%');
}

// Project completion functions
function toggleProjectCompletion(projectIndex) {
  if (state.completedProjects.has(projectIndex)) {
    state.completedProjects.delete(projectIndex);
    console.log('❌ Project uncompleted:', projectIndex);
  } else {
    state.completedProjects.add(projectIndex);
    console.log('✅ Project completed:', projectIndex);
  }
  
  // Update visual representation
  const milestone = document.querySelector(`[data-project="${projectIndex}"]`);
  if (milestone) {
    if (state.completedProjects.has(projectIndex)) {
      milestone.classList.add('completed');
    } else {
      milestone.classList.remove('completed');
    }
    
    // Visual feedback
    milestone.style.transform = 'scale(0.95)';
    setTimeout(() => {
      milestone.style.transform = 'scale(1)';
    }, 200);
  }
  
  updateAllProgress();
}

// Quick action functions
function markStudySessionComplete() {
  // Find next incomplete study activity
  const studyActivities = appData.schedule.filter((item, index) => 
    (item.type === 'study' || item.focus) && !state.completedActivities.has(index));
  
  if (studyActivities.length > 0) {
    const nextStudyIndex = appData.schedule.findIndex(item => item === studyActivities[0]);
    state.completedActivities.add(nextStudyIndex);
    state.studyHours += 0.5;
    
    // Visual feedback
    const btn = document.getElementById('mark-study-complete');
    if (btn) {
      btn.style.transform = 'scale(0.9)';
      btn.style.background = 'var(--color-success)';
      setTimeout(() => {
        btn.style.transform = 'scale(1)';
        btn.style.background = '';
      }, 300);
    }
    
    updateAllProgress();
    renderSchedule(); // Re-render to show updated checkboxes
    console.log('📚 Study session marked complete');
  }
}

function takeBreakAction() {
  // Mark a break as taken
  const breakActivities = appData.schedule.filter((item, index) => 
    item.type === 'break' && !state.completedActivities.has(index));
  
  if (breakActivities.length > 0) {
    const nextBreakIndex = appData.schedule.findIndex(item => item === breakActivities[0]);
    state.completedActivities.add(nextBreakIndex);
    
    // Visual feedback
    const btn = document.getElementById('take-break');
    if (btn) {
      btn.style.transform = 'scale(0.9)';
      btn.style.background = 'var(--color-info)';
      setTimeout(() => {
        btn.style.transform = 'scale(1)';
        btn.style.background = '';
      }, 300);
    }
    
    updateAllProgress();
    renderSchedule();
    console.log('☕ Break taken');
  }
}

function addStudyHourAction() {
  state.studyHours += 1;
  
  // Visual feedback
  const btn = document.getElementById('add-study-hour');
  if (btn) {
    btn.style.transform = 'scale(0.9)';
    btn.style.background = 'var(--color-primary)';
    setTimeout(() => {
      btn.style.transform = 'scale(1)';
      btn.style.background = '';
    }, 300);
  }
  
  updateAllProgress();
  console.log('⏰ Study hour added');
}

function resetAllProgress() {
  if (confirm('Are you sure you want to reset all progress? This cannot be undone.')) {
    // Reset all state
    state.completedActivities.clear();
    state.weeklyProgress.python.fill(0);
    state.weeklyProgress.cybersecurity.fill(0);
    state.completedProjects.clear();
    state.studyHours = 0;
    state.dayStreak = 1;
    state.pythonWeek = 0;
    state.cyberWeek = 0;
    
    // Visual feedback
    const btn = document.getElementById('reset-progress');
    if (btn) {
      btn.style.transform = 'scale(0.9)';
      btn.style.background = 'var(--color-error)';
      setTimeout(() => {
        btn.style.transform = 'scale(1)';
        btn.style.background = '';
      }, 300);
    }
    
    // Re-render everything
    renderSchedule();
    renderProgressSection();
    updateAllProgress();
    
    console.log('🔄 All progress reset');
  }
}

// Progress update functions
function updateAllProgress() {
  updateMainProgress();
  updateProgressStats();
  updateProjectProgress();
  updateMotivationalMessage();
  updateNextTask();
}

function updateMainProgress() {
  const totalActivities = appData.schedule.length;
  const completed = state.completedActivities.size;
  const percentage = Math.round((completed / totalActivities) * 100);
  
  // Update completion rate in stats
  const completionRate = document.getElementById('completion-rate');
  if (completionRate) {
    completionRate.textContent = `${percentage}%`;
  }
  
  // Update progress circle
  const progressCircle = document.getElementById('progress-circle');
  const progressPercentage = document.getElementById('progress-percentage');
  
  if (progressCircle && progressPercentage) {
    const circumference = 2 * Math.PI * 60; // radius = 60
    const offset = circumference - (percentage / 100) * circumference;
    
    progressCircle.style.strokeDasharray = `${circumference} ${circumference}`;
    progressCircle.style.strokeDashoffset = offset;
    progressPercentage.textContent = `${percentage}%`;
  }
}

function updateProgressStats() {
  // Update completed tasks
  const completedTasks = document.getElementById('completed-tasks');
  if (completedTasks) {
    completedTasks.textContent = state.completedActivities.size;
  }
  
  // Update study hours
  const studyHoursDisplay = document.getElementById('study-hours');
  if (studyHoursDisplay) {
    studyHoursDisplay.textContent = `${state.studyHours.toFixed(1)}h`;
  }
  
  // Update streak counter
  const streakCounter = document.getElementById('streak-counter');
  if (streakCounter) {
    streakCounter.textContent = state.dayStreak;
  }
}

function updateProjectProgress() {
  const totalProjects = 4;
  const completedCount = state.completedProjects.size;
  const percentage = Math.round((completedCount / totalProjects) * 100);
  
  const projectsCompleted = document.getElementById('projects-completed');
  if (projectsCompleted) {
    projectsCompleted.textContent = `${completedCount} of ${totalProjects} completed`;
  }
  
  const projectProgress = document.getElementById('project-progress');
  if (projectProgress) {
    projectProgress.style.width = `${percentage}%`;
  }
}

function updateMotivationalMessage() {
  const percentage = Math.round((state.completedActivities.size / appData.schedule.length) * 100);
  const messageIndex = Math.min(Math.floor(percentage / 12.5), motivationalMessages.length - 1);
  
  const motivationalMessage = document.getElementById('motivational-message');
  if (motivationalMessage) {
    motivationalMessage.textContent = motivationalMessages[messageIndex];
  }
}

function updateNextTask() {
  // Find next incomplete activity
  const nextIncomplete = appData.schedule.find((item, index) => 
    !state.completedActivities.has(index));
  
  const nextTask = document.getElementById('next-task');
  if (nextTask) {
    nextTask.textContent = nextIncomplete ? nextIncomplete.activity : 'All tasks complete! 🎉';
  }
  
  const todaysFocus = document.getElementById('todays-focus');
  if (todaysFocus) {
    const currentTopic = appData.weekly_focus.python_topics[state.pythonWeek];
    todaysFocus.textContent = currentTopic.split(' - ')[0];
  }
}

// Welcome message
function showWelcomeMessage() {
  const now = new Date();
  const hour = now.getHours();
  let greeting;
  
  if (hour < 12) {
    greeting = "Good morning! Ready to start your productive day? ☀️";
  } else if (hour < 17) {
    greeting = "Good afternoon! Keep up the great work! 💪";
  } else {
    greeting = "Good evening! Time for some focused study sessions! 🌙";
  }
  
  console.log(`🎓 ${greeting}`);
}

// Error handling
window.addEventListener('error', (e) => {
  console.error('Application error:', e.error);
});

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  init();
});

// Export for debugging (optional)
if (typeof window !== 'undefined') {
  window.StudyApp = {
    state,
    toggleTheme,
    updateAllProgress,
    resetAllProgress,
    showSection,
    navigateWeek,
    toggleTopicCompletion,
    setTopicProgress,
    toggleProjectCompletion
  };
}

