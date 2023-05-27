const sidebar = document.getElementById ("sidebar"),
      handle = document.getElementById ("handle");

const resize = e => {
    let newWidth =
        e.clientX - sidebar.offsetLeft;
    if (newWidth<54) newWidth = 54;
    sidebar.style.width = `${newWidth}px`;
};
const stopResize = e => {
    window.removeEventListener("mousemove", resize);
    window.removeEventListener("mouseup", stopResize);
};
const initResize = () => {
    window.addEventListener("mousemove", resize);
    window.addEventListener("mouseup", stopResize);
};
handle.addEventListener("mousedown", initResize);

//Navigation top bar

const sections = document.querySelectorAll("section"), 
navLinks = document.querySelectorAll("nav a");

const resetLinks = () =>
navLinks.forEach(link => link.classList.remove("active"));

const handleScroll = () => {
    const { pageYOffset} = window;
    sections.forEach(section => {const {id, offsetTop, clientHeight} =section;
    const offset = offsetTop - 1;

    if(
        pageYOffset >= offset &&
        pageYOffset < offset + clientHeight) {
            resetLinks();
            navLinks.forEach(link => {
                if (link.dataset.scroll === id) {
                    link.classList.add("active");
                }
            });
        }
    });
};  
document.addEventListener("scroll", handleScroll);
