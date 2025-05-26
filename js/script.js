document.addEventListener('DOMContentLoaded', () => {
    const inputsuhu = document.getElementById('input-suhu');
    const hasilsuhu = document.getElementById('hasil-suhu');
    const detailsuhu = document.getElementById('detail-suhu');

    const konversi = document.getElementById('konversi');
    const reset = document.getElementById('reset');
    const reverse = document.getElementById('reverse');

    let isReversed = false;

    konversi.addEventListener('click', (e) => {
        e.preventDefault();
    
        const value = parseFloat(inputsuhu.value);
        if (isNaN(value)) {
            alert("Masukkan angka suhu yang valid.");
            return;
        }

        if (!isReversed) {
            const result = (value * 1.8) + 32;
            hasilsuhu.value = result.toFixed(2);
            detailsuhu.value = `${value} \u00B0C * (9/5) + 32 = ${result.toFixed(2)} \u00B0F`;
        } else {
            const result = (value - 32) / 1.8;
            hasilsuhu.value = result.toFixed(2);
            detailsuhu.value = `${value} \u00B0F - 32 * (5/9) = ${result.toFixed(2)} \u00B0C`;
        }
    });

    reset.addEventListener('click', (e) => {
        e.preventDefault();
        inputsuhu.value = '';
        hasilsuhu.value = '';
        detailsuhu.value = '';
    });

    reverse.addEventListener('click', (e) => {
        e.preventDefault();
        isReversed = !isReversed;

        document.querySelector('label[for="input-suhu"]').innerHTML = isReversed ? 'Fahrenheit (&deg;F)' : 'Celcius (&deg;C)';
        document.querySelector('label[for="hasil-suhu"]').innerHTML = isReversed ? 'Celcius (&deg;C)' : 'Fahrenheit (&deg;F)';

        inputsuhu.value = '';
        hasilsuhu.value = '';
        detailsuhu.value = `Mode: ${isReversed ? 'Fahrenheit ke Celcius' : 'Celcius ke Fahrenheit'}`;
    });
});