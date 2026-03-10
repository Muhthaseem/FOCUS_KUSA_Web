// projects-loader.js - Handles dynamic loading and sorting of projects

import { projects } from './projects-data.js';

export class ProjectLoader {
    constructor() {
        this.projects = projects;
        this.sortedProjects = this.sortProjectsByDate();
    }

    // Sort projects by date (newest first)
    sortProjectsByDate() {
        return Object.entries(this.projects)
            .sort(([,a], [,b]) => new Date(b.date) - new Date(a.date))
            .reduce((acc, [key, value]) => {
                acc[key] = value;
                return acc;
            }, {});
    }

    // Get all projects sorted by date
    getAllProjects() {
        return this.sortedProjects;
    }

    // Get projects by category
    getProjectsByCategory(category) {
        const filtered = {};
        for (const [key, project] of Object.entries(this.sortedProjects)) {
            if (project.category === category) {
                filtered[key] = project;
            }
        }
        return filtered;
    }

    // Generate HTML for a project card
    generateProjectCard(projectKey, projectData) {
        const imagePath = `./assets/images/projects/${projectKey}/1.jpg`;
        const badgeText = this.getBadgeText(projectData.category);

        return `
            <div class="project-card reveal" data-category="${projectData.category}" data-project="${projectKey}">
                <div class="project-card__image"
                    style="background-image: linear-gradient(to bottom, rgba(15, 23, 42, 0.3), rgba(15, 23, 42, 0.9)), url('${imagePath}'); background-size: cover; background-position: center; position: relative; border-radius: 16px 16px 0 0;">
                    <span class="project-card__badge">${badgeText}</span>
                </div>
                <div class="project-card__body">
                    <div class="project-card__category">${projectData.badge}</div>
                    <h3 class="project-card__title">${projectData.title.replace(/ – .*$/, '')}</h3>
                    <p class="project-card__desc">${this.getShortDescription(projectData)}</p>
                    <div class="project-card__year">
                        <img src="https://img.icons8.com/ios-filled/50/ffffff/calendar--v1.png" alt="icon" class="icon-img" />
                        ${this.formatDate(projectData.date)}
                    </div>
                    <p class="project-card__click-hint">
                        <img src="https://img.icons8.com/ios-filled/50/ffffff/info.png" alt="" class="icon-img" style="width:0.9em;height:0.9em;opacity:0.7;" />
                        Click for full details
                    </p>
                </div>
            </div>
        `;
    }

    // Get badge text based on category
    getBadgeText(category) {
        const badgeMap = {
            guidance: 'Guidance',
            academic: 'Academic',
            competitions: 'Competition',
            seminars: 'Seminar',
            community: 'Community',
            welcoming: 'Welcoming'
        };
        return badgeMap[category] || category;
    }

    // Get short description from sections or meta
    getShortDescription(projectData) {
        // Try to get from first section content, or fallback to meta
        if (projectData.sections && projectData.sections.length > 0) {
            const firstPara = projectData.sections[0].content.match(/<p>(.*?)<\/p>/);
            if (firstPara) {
                return firstPara[1].replace(/<strong>|<\/strong>/g, '').substring(0, 120) + '...';
            }
        }
        return 'Click for full details about this project.';
    }

    // Format date for display
    formatDate(dateString) {
        const date = new Date(dateString);
        const now = new Date();
        const year = date.getFullYear();

        if (year === now.getFullYear()) {
            return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
        } else {
            return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
        }
    }

    // Populate the projects grid
    populateProjectsGrid(containerId = 'projectsGrid') {
        const container = document.getElementById(containerId);
        if (!container) return;

        let html = '';
        for (const [key, project] of Object.entries(this.sortedProjects)) {
            html += this.generateProjectCard(key, project);
        }

        container.innerHTML = html;

        // Re-initialize any reveal animations or other dynamic features
        this.initializeProjectCards();
    }

    // Initialize project card interactions
    initializeProjectCards() {
        // This will be called after populating the grid
        // Add any card-specific initialization here
        const cards = document.querySelectorAll('.project-card');
        cards.forEach(card => {
            card.addEventListener('click', () => {
                const projectKey = card.dataset.project;
                if (projectKey && window.showProjectModal) {
                    window.showProjectModal(projectKey);
                }
            });
        });
    }
}

// Create global instance
export const projectLoader = new ProjectLoader();