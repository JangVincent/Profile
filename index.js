// Page load animations
document.addEventListener('DOMContentLoaded', function() {
    // Load profile.json data
    loadProfileData();
    
    // Scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animatedElements = document.querySelectorAll('.skill-card, .project-card, .contact-item, .license-item');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Profile image click event
    const profileImage = document.getElementById('profileImage');
    if (profileImage) {
        profileImage.addEventListener('click', function() {
            this.style.transform = 'scale(1.1) rotate(5deg)';
            setTimeout(() => {
                this.style.transform = 'scale(1.05)';
            }, 200);
        });
    }

    // Social links hover effects
    const socialLinks = document.querySelectorAll('.social-link');
    socialLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px) scale(1.05)';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Skill cards hover effects
    const skillCards = document.querySelectorAll('.skill-card');
    skillCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            const icon = this.querySelector('.skill-icon');
            if (icon) {
                icon.style.transform = 'scale(1.2) rotate(10deg)';
                icon.style.transition = 'transform 0.3s ease';
            }
        });
        
        card.addEventListener('mouseleave', function() {
            const icon = this.querySelector('.skill-icon');
            if (icon) {
                icon.style.transform = 'scale(1) rotate(0deg)';
            }
        });
    });

    // Project cards click event
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('click', function() {
            this.style.transform = 'scale(0.98)';
            setTimeout(() => {
                this.style.transform = 'translateY(-5px)';
            }, 150);
        });
    });

    // Header scroll effect
    let lastScrollTop = 0;
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const header = document.querySelector('.header');
        
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            // Scrolling down
            header.style.transform = 'translateY(-20px)';
            header.style.opacity = '0.8';
        } else {
            // Scrolling up
            header.style.transform = 'translateY(0)';
            header.style.opacity = '1';
        }
        
        lastScrollTop = scrollTop;
    });

    // Typing effect removed - using CSS animations instead

    // Profile name will use CSS animation only (typing effect removed)

    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Loading animation
    window.addEventListener('load', function() {
        document.body.style.opacity = '0';
        document.body.style.transition = 'opacity 0.5s ease';
        
        setTimeout(() => {
            document.body.style.opacity = '1';
        }, 100);
    });

    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            // Reset all animations with ESC key
            document.querySelectorAll('.skill-card, .project-card').forEach(el => {
                el.style.transform = 'translateY(0)';
            });
        }
    });

    // Touch device support
    if ('ontouchstart' in window) {
        document.body.classList.add('touch-device');
    }

    // Performance optimization: scroll event throttling
    let ticking = false;
    function updateOnScroll() {
        // Scroll-related updates
        ticking = false;
    }

    window.addEventListener('scroll', function() {
        if (!ticking) {
            requestAnimationFrame(updateOnScroll);
            ticking = true;
        }
    });
});

// Load profile.json data
async function loadProfileData() {
    try {
        const response = await fetch('profile.json');
        const profileData = await response.json();
        updateProfilePage(profileData);
    } catch (error) {
        console.log('Profile data load failed, using default values:', error);
        // Use default information if error occurs
        // Social links are already set in HTML, so they will work even without profile.json
    }
}

// Update social links
function updateSocialLinks(socialLinksData) {
    if (socialLinksData) {
        const socialLinks = document.querySelectorAll('.social-link');
        socialLinks.forEach(link => {
            const platform = link.getAttribute('data-platform');
            if (socialLinksData[platform]) {
                link.href = socialLinksData[platform];
                // Add target="_blank" for external links (except email)
                if (platform !== 'email') {
                    link.setAttribute('target', '_blank');
                }
            }
        });
    }
}

// Update webpage with profile data
function updateProfilePage(data) {
    // Basic info update
    if (data.basicInfo) {
        if (data.basicInfo.name) {
            const nameElement = document.getElementById('profileName');
            if (nameElement) nameElement.textContent = data.basicInfo.name;
        }
        
        if (data.basicInfo.title) {
            const titleElement = document.getElementById('profileTitle');
            if (titleElement) titleElement.textContent = data.basicInfo.title;
        }
        
        if (data.basicInfo.tagline) {
            const taglineElement = document.getElementById('profileTagline');
            if (taglineElement) taglineElement.textContent = data.basicInfo.tagline;
        }
        
        if (data.basicInfo.introduction) {
            const bioElement = document.getElementById('profileBio');
            if (bioElement) bioElement.textContent = data.basicInfo.introduction;
        }
    }
    
    // Contact info update
    if (data.contact) {
        if (data.contact.email) {
            const emailElement = document.getElementById('contactEmail');
            if (emailElement) emailElement.textContent = data.contact.email;
        }
        
        if (data.contact.location) {
            const locationElement = document.getElementById('contactLocation');
            if (locationElement) locationElement.textContent = data.contact.location;
        }
    }
    
    // Social links update
    updateSocialLinks(data.socialLinks);
    
    // Skills update
    if (data.skills) {
        if (data.skills.languages) {
            const languagesElement = document.getElementById('languagesSkills');
            if (languagesElement) languagesElement.textContent = data.skills.languages.join(', ');
        }
        
        if (data.skills.frameworksLibraries) {
            const frameworksElement = document.getElementById('frameworksSkills');
            if (frameworksElement) frameworksElement.textContent = data.skills.frameworksLibraries.join(', ');
        }
        
        if (data.skills.cloudDevOps) {
            const cloudElement = document.getElementById('cloudSkills');
            if (cloudElement) cloudElement.textContent = data.skills.cloudDevOps.join(', ');
        }
        
        if (data.skills.databases) {
            const databaseElement = document.getElementById('databaseSkills');
            if (databaseElement) databaseElement.textContent = data.skills.databases.join(', ');
        }
    }
    
    // Career update
    if (data.career && data.career.length > 0) {
        const currentJob = data.career[0]; // First job is current
        const currentJobElement = document.getElementById('currentJob');
        const currentJobPeriodElement = document.getElementById('currentJobPeriod');
        
        if (currentJobElement) {
            currentJobElement.textContent = `${currentJob.company} - ${currentJob.position}`;
        }
        
        if (currentJobPeriodElement) {
            currentJobPeriodElement.textContent = currentJob.period;
        }
        
        // Past experience update
        const experienceTimeline = document.getElementById('experienceTimeline');
        if (experienceTimeline && data.career.length > 1) {
            experienceTimeline.innerHTML = '';
            data.career.slice(1).forEach((job, index) => {
                const experienceItem = document.createElement('div');
                experienceItem.className = 'experience-item';
                
                experienceItem.innerHTML = `
                    <div class="experience-icon">
                        <span class="material-icons">business</span>
                    </div>
                    <div class="experience-content">
                        <h3>${job.company} - ${job.position}</h3>
                        <p>${job.period}</p>
                    </div>
                `;
                experienceTimeline.appendChild(experienceItem);
            });
        }
    }
    
    // Create project tabs
    createProjectTabs(data.career, data.workProjects, data.personalProjects);
    
    // Education update
    if (data.education) {
        if (data.education.school) {
            const schoolElement = document.getElementById('schoolName');
            if (schoolElement) schoolElement.textContent = data.education.school;
        }

        if (data.education.degree) {
            const degreeElement = document.getElementById('degree');
            if (degreeElement) degreeElement.textContent = data.education.degree;
        }
        
        if (data.education.period) {
            const yearElement = document.getElementById('graduationYear');
            if (yearElement) yearElement.textContent = data.education.period;
        }
    }
    
    // Licenses update
    if (data.licenses && data.licenses.length > 0) {
        const licensesGrid = document.getElementById('licensesGrid');
        if (licensesGrid) {
            licensesGrid.innerHTML = '';
            data.licenses.forEach(license => {
                const licenseItem = document.createElement('div');
                licenseItem.className = 'license-item';
                licenseItem.innerHTML = `
                    <span class="material-icons">verified</span>
                    <span>${license}</span>
                `;
                licensesGrid.appendChild(licenseItem);
            });
        }
    }
}

// Create project tabs
function createProjectTabs(careerData, workProjectsData, personalProjectsData) {
    const projectTabs = document.getElementById('projectTabs');
    const projectGrids = document.getElementById('projectGrids');
    
    if (!projectTabs || !projectGrids) {
        return;
    }
    
    // Clear existing content
    projectTabs.innerHTML = '';
    projectGrids.innerHTML = '';
    
    const companies = [];
    
    // Extract company names from career data
    if (careerData && careerData.length > 0) {
        careerData.forEach(job => {
            companies.push(job.company);
        });
    }
    
    // Add personal projects tab
    companies.push('Personal');
    
    // Create tab buttons
    companies.forEach((company, index) => {
        const isActive = index === 0; // First tab is active
        
        // Create tab button
        const tabButton = document.createElement('button');
        tabButton.className = `tab-button ${isActive ? 'active' : ''}`;
        tabButton.setAttribute('data-tab', company.replace(/\s+/g, '').toLowerCase());
        
        const icon = company === 'Personal' ? 'person' : 'business';
        tabButton.innerHTML = `
            <span class="material-icons">${icon}</span>
            <span>${company}</span>
        `;
        
        projectTabs.appendChild(tabButton);
        
        // Create project grid
        const projectGrid = document.createElement('div');
        projectGrid.className = `projects-grid ${isActive ? 'active' : ''}`;
        projectGrid.id = `${company.replace(/\s+/g, '').toLowerCase()}Projects`;
        
        // Map project data
        let projectKey = company;
        if (company === 'Personal') {
            projectKey = 'personal';
        } else if (company === 'CatzeLabs Pte. Ltd.') {
            projectKey = 'CatzeLabs';
        }
        
        // Use actual project data
        if (company === 'Personal' && personalProjectsData && personalProjectsData.length > 0) {
            projectGrid.innerHTML = personalProjectsData.map(project => `
                <div class="project-card personal-project">
                    <div class="project-image">
                        <span class="material-icons">code</span>
                    </div>
                    <div class="project-content">
                        <h3>${project.name}</h3>
                        <p>${project.description}</p>
                        ${project.period ? `<p><strong>Period:</strong> ${project.period}</p>` : ''}
                        ${project.features && project.features.length > 0 ? `<p><strong>Features:</strong> ${project.features.join(', ')}</p>` : ''}
                        <div class="project-tags">
                            ${project.techStack && project.techStack.length > 0 ? 
                                project.techStack.map(tech => `<span class="tag">${tech}</span>`).join('') : 
                                '<span class="tag">Personal Project</span>'
                            }
                        </div>
                        ${project.url ? `<a href="${project.url}" target="_blank" class="project-link">View Project</a>` : ''}
                    </div>
                </div>
            `).join('');
        } else if (workProjectsData[projectKey]) {
            const companyProjects = workProjectsData[projectKey];
            projectGrid.innerHTML = `
                <div class="company-summary">
                    <h3>${company}</h3>
                    <p><strong>Period:</strong> ${companyProjects.period}</p>
                    <p>${companyProjects.summary}</p>
                    <div class="tools-section">
                        <h4>Tools Used:</h4>
                        <div class="tools-grid">
                            ${companyProjects.tools ? Object.entries(companyProjects.tools).map(([category, tools]) => `
                                <div class="tool-category">
                                    <strong>${category}:</strong> ${tools.join(', ')}
                                </div>
                            `).join('') : ''}
                        </div>
                    </div>
                </div>
                ${companyProjects.projects.map(project => `
                    <div class="project-card">
                        <div class="project-image">
                            <span class="material-icons">web</span>
                        </div>
                        <div class="project-content">
                            <h3>${project.name}</h3>
                            <p>${project.description}</p>
                            ${project.role ? `<p><strong>Role:</strong> ${project.role}</p>` : ''}
                            <div class="project-tags">
                                ${project.techStack && project.techStack.length > 0 ? 
                                    project.techStack.map(tech => `<span class="tag">${tech}</span>`).join('') : 
                                    `<span class="tag">${company}</span>`
                                }
                            </div>
                            ${project.url ? `<a href="${project.url}" target="_blank" class="project-link">View Project</a>` : ''}
                        </div>
                    </div>
                `).join('')}
            `;
        } else {
            // Default project card (when no data available)
            projectGrid.innerHTML = `
                <div class="project-card">
                    <div class="project-image">
                        <span class="material-icons">${company === 'Personal' ? 'code' : 'web'}</span>
                    </div>
                    <div class="project-content">
                        <h3>${company} Projects</h3>
                        <p>Projects completed at ${company}</p>
                        <div class="project-tags">
                            <span class="tag">${company}</span>
                        </div>
                    </div>
                </div>
            `;
        }
        
        projectGrids.appendChild(projectGrid);
    });
    
    // Add tab click events
    const tabButtons = document.querySelectorAll('.tab-button');
    const allProjectGrids = document.querySelectorAll('.projects-grid');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetTab = this.getAttribute('data-tab');
            
            // Deactivate all tab buttons
            tabButtons.forEach(btn => btn.classList.remove('active'));
            // Activate clicked tab button
            this.classList.add('active');
            
            // Hide all project grids
            allProjectGrids.forEach(grid => {
                grid.classList.remove('active');
            });
            
            // Show corresponding project grid
            const targetGrid = document.getElementById(targetTab + 'Projects');
            if (targetGrid) {
                targetGrid.classList.add('active');
            }
        });
    });
}

// Utility functions
const utils = {
    // Check if element is in viewport
    isElementInViewport: function(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    },

    // Generate random color
    getRandomColor: function() {
        const colors = [
            'var(--md-sys-color-primary)',
            'var(--md-sys-color-secondary)',
            'var(--md-sys-color-tertiary)'
        ];
        return colors[Math.floor(Math.random() * colors.length)];
    },

    // Smooth animation
    smoothAnimate: function(element, properties, duration = 300) {
        element.style.transition = `all ${duration}ms ease`;
        Object.assign(element.style, properties);
    }
};

// Expose to global scope
window.profileUtils = utils;
