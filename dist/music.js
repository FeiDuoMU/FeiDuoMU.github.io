const ap = new APlayer({
    container: document.getElementById('aplayer'),
    autoplay: false,
    loop: 'all',
    volume: 0.4,
    listFolded: true,
    listMaxHeight: 40,
    audio: [
        {
            name: '時代を超える想い',
            artist:'和田薫',
            url: 'http://music.163.com/song/media/outer/url?id=541114.mp3',
            cover: 'https://fmphoto.oss-cn-chengdu.aliyuncs.com/Photo/6414c239c5a7fc839b4e9b59c567bd9f109c609d.jpg%401192w.avif',
            theme:'#020b15ff'
        }
    ]
});