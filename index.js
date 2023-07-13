const pointer = document.querySelector(".pointer");
const content = document.querySelectorAll(".content");
const tab = document.querySelectorAll(".tab i");

tab.forEach((e) => {
    e.addEventListener("click", (_) => {
        tab.forEach((e)=> e.classList.remove("active"));
        content.forEach((e)=> e.classList.remove("active"));

        let currentTab = _.target.getAttribute("data-tab");
        let currenContent = document.querySelector(
            `.content[data-content="${currentTab}"]`
        );

        currenContent.classList.add("active");
        pointer.style.transform = `translateX(${58 * currentTab}px)`;
        _.target.classList.add("active");
    });
});