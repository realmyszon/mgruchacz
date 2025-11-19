// Ładowanie danych z localStorage
document.addEventListener('DOMContentLoaded', function() {
    const dowodData = JSON.parse(localStorage.getItem('dowodData'));
    
    if (dowodData) {
        document.getElementById('displayImie').textContent = dowodData.imie;
        document.getElementById('displayNazwisko').textContent = dowodData.nazwisko;
        document.getElementById('displayObywatelstwo').textContent = dowodData.obywatelstwo;
        document.getElementById('displayDataUrodzenia').textContent = dowodData.dataUrodzenia;
        document.getElementById('displayPesel').textContent = dowodData.pesel;
        
        // Wyświetl zdjęcie jeśli istnieje
        if (dowodData.photo) {
            const photoContainer = document.getElementById('displayPhoto');
            photoContainer.innerHTML = `<img src="${dowodData.photo}" alt="Zdjęcie">`;
        }
    }
    
    // Aktualizacja czasu
    updateTime();
    setInterval(updateTime, 1000);
});

function updateTime() {
    const now = new Date();
    const timeString = `Czas: ${now.toLocaleTimeString('pl-PL')} ${now.toLocaleDateString('pl-PL')}`;
    document.getElementById('currentTime').textContent = timeString;
}

function goBack() {
    window.location.href = 'index.html';
}