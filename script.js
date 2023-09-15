window.addEventListener('scroll', function() {
	var body = document.body;
	var scrollTop = document.documentElement.scrollTop || body.scrollTop;
	if (scrollTop > 0) {
		body.classList.add('scrolled');
	} else {
		body.classList.remove('scrolled');
	}
});
function adjustContentHeight() {
    const content = document.querySelector('.content');
    const footer = document.querySelector('.footer');
    const windowHeight = window.innerHeight;
    const footerHeight = footer.offsetHeight;
    const contentHeight = content.offsetHeight;
    const contentPadding = parseInt(getComputedStyle(content).paddingTop) + parseInt(getComputedStyle(content).paddingBottom);
    const minHeight = windowHeight - footerHeight - contentPadding;
    if (contentHeight < minHeight) {
      content.style.minHeight = `${minHeight}px`;
    }
  }
  window.addEventListener('load', adjustContentHeight);
  window.addEventListener('resize', adjustContentHeight);
  var button = document.getElementById("myButton");

button.addEventListener("click", function() {
  alert("Redirecting to another website!");
});
