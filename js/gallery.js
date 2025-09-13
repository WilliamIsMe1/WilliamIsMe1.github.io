const text = `
2025 3
`;

const uploadSection = document.getElementById('gallery-upload');
const lines = text.split('\n').map(line => line.trim());

for (const line of lines) {
    if (!line) continue; // skip blanks
    let [year, count] = line.split(' ').map(x => x.trim());
    year = parseInt(year);
    count = parseInt(count);
    if (isNaN(year) || isNaN(count)) {
        console.warn('Invalid line in gallery index:', line);
        continue;
    }

    let blockHtml = `<h2>${year}</h2><div class="gallery-year-inner">`;
    for (let i = 1; i <= count; i++) {
        const imgSrc = `../img/gallery/${year}/${i}.png`;
        blockHtml += `<img src="${imgSrc}" alt="Image ${i} of ${year}" loading="lazy">`;
    }
    blockHtml += `</div>`;

    uploadSection.innerHTML += blockHtml;
}
