var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
        var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
        })

function copyMessage(){
    var copyText = document.getElementById('text')
    copyText.select()
    copyText.setSelectionRange(0, 999)
    document.execCommand("copy")
    alert("تم نسخ النص !");
}