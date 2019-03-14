const DarkDetector = ({
    query = true,
    bodyclass = false,
    time = false
}) => {
    // CSS media query
    if (query && window.matchMedia('(prefers-color-scheme: dark)').matches) return true

    // Class on body
    if (bodyclass && document.getElementsByTagName("body")[0].classList.contains(typeof bodyclass === "boolean" ? "dm-dark" : bodyclass)) return true

    // Night time
    if (time && new Date().getHours() >= time.min ? time.min : 6 && new Date().getHours() <= time.max ? time.max : 20) return true

    // If all checks fail
    return false
}

export default {
    DarkDetector
}
