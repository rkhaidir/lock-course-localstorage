document.addEventListener("DOMContentLoaded", function() {

    let materiSatu = document.querySelector("#materi-1")
    let materiDua = document.querySelector("#materi-2")

    // function untuk membuka materi
    let openMateri = (getLink, getLocal) => {
        const getLocalStorage = localStorage.getItem(getLocal)
        if(getLocalStorage != null) {
            getLink.classList.remove("disabled")
        }
    }

    openMateri(materiSatu, 'materi-1')
    openMateri(materiDua, "materi-2")
})