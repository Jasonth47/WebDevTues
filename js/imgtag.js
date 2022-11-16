function getImageTag() {
    const imageURLs = [

        "img\\IMG_1827.webp",
        "img\\IMG_1887.webp",
        "img\\IMG_2159.webp",

    ]
    var img = '<img src=\"';
    var randomIndex = Math.floor(Math.random() * imageURLs.length);
    img += imageURLs[randomIndex];
    img += '\" alt=\"Profile Photo\" class="main-photo"/>';
    return img;
}
