function show(shown, hidden) {
    document.getElementById(shown).style.display='block';
    document.getElementById(hidden).style.display='none';
    return false;
}

function showInput(shown) {
    document.getElementById(shown).style.display='block';
    return false;
}

function hideInput(hidden) {
    document.getElementById(hidden).style.display='none';
    return false;
}

function sendContent() {
    // To do 1 : Mengambil value dari inputan pada form dan disimpan pada variable


    // To do 2 : Mengirim value yang telah diambil ke elemen pada konten 


    show('new','old');
    show('content','form');
}