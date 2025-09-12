const text = ```
2025 1

```;
const uploadSection = document.getElementById('gallery-upload');
const lines = text.split('\n').map(line => line.trim())
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
        const imgSrc = `../img/gallery/${year}/${i}.png`;
        uploadSection.innerHTML += `<img src="${imgSrc}" alt="Image ${i} of ${year}" loading="lazy">`;
    }
    uploadSection.innerHTML += `</div>`;
}
    