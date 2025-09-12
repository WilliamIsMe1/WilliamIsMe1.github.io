document.addEventListener('DOMContentLoaded', () => {
    var uploadSection = document.getElementById ('gallery-upload');

    async function getIndex() {
        const url = '/img/gallery/index.txt';
        const response = await fetch(url);
        const text = await response.text();
        return text;
    }

    getIndex().then(text => {
        const lines = text.split('\n').map(line => line.split('#')[0].trim()) // Remove comments and trim
        let galleryHtml = '';
        for (const line of lines) {
            var [year, count] = line.split(' ').map(x => x.trim());
            year = parseInt(year);
            count = parseInt(count);
            if (isNaN(year) || isNaN(count)) {
                console.warn('Invalid line in gallery index:', line);
                continue;
            }
            uploadSection.innerHTML += `<h2>${year}</h2><div class="gallery-year-inner">`;
            for (let i = 1; i <= count; i++) {
                const imgSrc = `/img/gallery/${year}/$  {i}.png`;
                uploadSection.innerHTML += `<img src="${imgSrc}" alt="Image ${i} of ${year}" loading="lazy">`;
            }
            uploadSection.innerHTML += `</div>`;
        }
    uploadSection.innerHTML = galleryHtml;
    }).catch(error => {
        console.error('Error fetching gallery   index:', error);
        alert(error);
        uploadSection.innerHTML = '<p>Error loading gallery. Please try again later.</p><pre>' + error + '</pre>';
    });
});