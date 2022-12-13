const offers = document.getElementById("offers");
let completed = false;

const animateValue = (obj, start, end, duration) => {
    let startTimestamp = null;
    const step = timestamp => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        obj.innerHTML = Intl.NumberFormat("de-DE").format(Math.floor(progress * (end - start) + start));
        if (progress < 1) window.requestAnimationFrame(step);
    };
    window.requestAnimationFrame(step);
};

window.addEventListener("scroll", () => {
    if (!completed) {
        if (window.scrollY + window.innerHeight > offers.offsetTop) {
            completed = true;
            animateValue(offers, 38, 3, 1500);
        }
    }
});
