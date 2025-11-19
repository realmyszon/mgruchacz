document.getElementById('dowodForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Pobieranie danych z formularza
    const formData = {
        imie: document.getElementById('imie').value.toUpperCase(),
        nazwisko: document.getElementById('nazwisko').value.toUpperCase(),
        obywatelstwo: document.getElementById('obywatelstwo').value.toUpperCase(),
        dataUrodzenia: formatDate(document.getElementById('dataUrodzenia').value),
        pesel: document.getElementById('pesel').value,
        photo: document.getElementById('photoPreview').querySelector('img')?.src || ''
    };
    
    // Zapisywanie danych w localStorage
    localStorage.setItem('dowodData', JSON.stringify(formData));
    
    // Przekierowanie do mDowodu
    window.location.href = 'mdowod.html';
});

function formatDate(dateString) {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}.${month}.${year}`;
}

// Obsługa zdjęcia
document.getElementById('photoInput').addEventListener('change', function(e) {
    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const photoPreview = document.getElementById('photoPreview');
            photoPreview.innerHTML = `<img src="${e.target.result}" alt="Zdjęcie">`;
        };
        reader.readAsDataURL(file);
    }
});

// Ustaw dzisiejszą datę jako domyślną dla daty urodzenia
document.getElementById('dataUrodzenia').valueAsDate = new Date();