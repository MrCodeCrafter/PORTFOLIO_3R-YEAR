// Function to navigate to a specific section or URL
function navigateTo(target) {
    if (target.startsWith('http')) {
      window.location.href = target;
    } else {
      document.getElementById(target).scrollIntoView({ behavior: 'smooth' });
    }
  }
  
  // Function to open a modal
  function openModal(modalId) {
    document.getElementById(modalId).style.display = 'block';
  }
  
  // Function to close a modal
  function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
  }
  
  // Add event listeners to modal close buttons
  document.querySelectorAll('.close').forEach((closeButton) => {
    closeButton.addEventListener('click', () => {
      closeModal(closeButton.closest('.modal').id);
    });
  });
  
  // Add event listeners to navigation buttons
  document.querySelectorAll('nav button').forEach((button) => {
    button.addEventListener('click', () => {
      const target = button.textContent.toLowerCase();
      navigateTo(target);
    });
  });
  