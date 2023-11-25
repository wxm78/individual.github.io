const ap = new APlayer({
    container: document.getElementById('aplayer'),
    autoplay: false,
    loop: 'all',
    volume: 0.7,
    listFolded: true,
    listMaxHeight: 60,
    audio: [
        {
            name: '墓志铭',
            artist: 'artist1',
            url: 'https://c6.y.qq.com/base/fcgi-bin/u?__=KR5c4gSTNrdN',
            cover: 'cover1.jpg',
        }
    ]
});