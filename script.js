const steps = [
    "Initial setup.",
    "Created a new branch.",
    "Added some CSS and JS.",
    "Committed the changes.",
    "Pushed to GitHub.",
    "Opened a Pull Request!"
];

let currentStepIndex = 0;

const stepText = document.getElementById('step-text');
const nextStepBtn = document.getElementById('next-step-btn');

nextStepBtn.addEventListener('click', () => {
    currentStepIndex++;
    if (currentStepIndex >= steps.length) {
        currentStepIndex = 0;
    }
    
    // Fade out
    stepText.style.opacity = 0;
    
    // Update text and fade in after 300ms (matching the CSS transition)
    setTimeout(() => {
        stepText.textContent = `Current step: ${steps[currentStepIndex]}`;
        stepText.style.opacity = 1;
    }, 300);
});
