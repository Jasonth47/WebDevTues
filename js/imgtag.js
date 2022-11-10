function getImageTag() {
    const imageURLs = [

        "img\\IMG_1827.jpg",
        "img\\IMG_1887.jpg",
        "img\\IMG_2159.JPG",

    ]
    var img = '<img src=\"';
    var randomIndex = Math.floor(Math.random() * imageURLs.length);
    img += imageURLs[randomIndex];
    img += '\" alt=\"Profile Photo\" class="main-photo"/>';
    return img;
}
