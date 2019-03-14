const DarkDetector = () => {
    return window.matchMedia("prefers-dark-interface").matches || document.getElementsByTagName("body")[0].classList.contains("dm-dark")
}

module.exports = {DarkDetector}
