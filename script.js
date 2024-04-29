var dropdownButtons = document.querySelectorAll(".dropdownButton");
dropdownButtons.forEach(function(button) {
  button.addEventListener('click', function(event) {
    var dropdowns = document.querySelectorAll(".dropdownContent");
    dropdowns.forEach((dropdown) => {
      if (dropdown !== button.nextElementSibling) {
        dropdown.classList.remove('show');
      }
    });
    var dropdownContent = button.nextElementSibling;
    dropdownContent.classList.toggle("show");
    event.stopPropagation();
  });
});


window.addEventListener('click', function(event) {
  if (!event.target.matches('.dropdownButton')) {
    var dropdowns = document.querySelectorAll(".dropdownContent");
    dropdowns.forEach(function(dropdown) {
      dropdown.classList.remove('show');
    });
  }
});