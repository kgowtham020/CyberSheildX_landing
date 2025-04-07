// Toggle mobile menu
const menuToggle = document.querySelector('.menu-toggle');
const navUl = document.querySelector('nav ul');
menuToggle.addEventListener('click', () => {
  navUl.classList.toggle('active');
});

// Modal functionality for feature details
const features = document.querySelectorAll('.feature');
const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modal-title');
const modalInfo = document.getElementById('modal-info');
const modalClose = document.getElementById('modal-close');

features.forEach(feature => {
  feature.addEventListener('click', () => {
    // Get title and detailed info from data attributes
    const title = feature.getAttribute('data-title');
    const info = feature.getAttribute('data-info');
    
    // Update modal content
    modalTitle.textContent = title;
    modalInfo.textContent = info;
    
    // Display modal
    modal.style.display = 'block';
  });
});

// Close modal when clicking on close button or outside the modal content
modalClose.addEventListener('click', () => {
  modal.style.display = 'none';
});
window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});
