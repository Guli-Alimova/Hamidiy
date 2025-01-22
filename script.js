// Audio fayllar ro‘yxati
const audioFiles = [
    { name: "KIRISH", path:"media/01.KIRISH.mp3"},
    {name:"OZOD O'ZBEKISTON", path:"media/02.OZOD OZBEKISTON.mp3"},
    {name:"QANDOQ QILIB SEVMAY", path:"media/03.QANDOQ QILIB SEVMAY.mp3"} ,
    {name:"BILINGKI QARILIK KELA BOSHLABDI", path:"media/04.BILINGKI QARILIK KELA BOSHLABDI.mp3"},
    {name:"AZIM DARYO BO'LSANG HAM", path:"media/05.AZIM DARYO BO'LSANG HAM.mp3"},
    {name:"Burgut bo'lsam-2", path:"media/05.Burgut bo'lsam-2.mp3"},
    {name:"TOSHKENTIM-JON KENTIM", path: "media/06.TOSHKENTIM-JON KENTIM.mp3"},
    {name:"OTA -ONAGA HIZMAT", path:"media/07.OTA -ONAGA HIZMAT.mp3"} ,
    {name:"TINGLA  AYTAR SO'ZIMNI",path:"media/08.TINGLA  AYTAR SO'ZIMNI.mp3"} ,
    {name:"SINGILJONIM-ESLATAR ONAJONIMNI",path:"media/09.SINGILJONIM-ESLATAR ONAJONIMNI.mp3"},
    {name:"ILM ISTANG",path:"media/10.ILM ISTANG.mp3"},
    {name:"BO'LSANG", path:"media/11.BO'LSANG.mp3"},
    {name:"DILIM VAYRON ETIB QO'YMA", path:"media/12.DILIM VAYRON ETIB QO'YMA.mp3"},
    {name:"ONAJONIM QAYDASIZ",path:"media/13.ONAJONIM QAYDASIZ.mp3"},
    {name:"ONAJONIM QAYDASIZ B.TO'LAGANOV", path:"media/14.ONAJONIM QAYDASIZ B.TO'LAGANOV.mp3"},
    {name:"SHAHID BO'LGAN O'G'LIMGA", path:"media/15.SHAHID BO'LGAN O'G'LIMGA.mp3"},
    {name:"QAYDA EDI", path:"media/16.QAYDA EDI.mp3"} ,
    {name:"BUYUK HOFIZ FAHRIDDINGA", path:"media/17.BUYUK HOFIZ FAHRIDDINGA.mp3"} ,
    {name:"QODIRIYNI QO'MSAYMAN", path:"media/18.QODIRIYNI QO'MSAYMAN.mp3"},
    {name:"NAVRO'Z", path:"media/19.NAVRO'Z.mp3"},
    {name:"NE FOYDA", path:"media/20.NE FOYDA.mp3"},
    {name:"MUHABBATIM- MUHABBAT", path:"media/21.MUHABBATIM- MUHABBAT.mp3"},
    {name:"O MUHABBAT I. MIRUSMONOV", path:"media/22.O MUHABBAT I. MIRUSMONOV.mp3"},
    {name:"UMR", path:"media/23.UMR.mp3"},
    {name:"O'ZBEKCHILIK DEYDILAR", path:"media/24.O'ZBEKCHILIK DEYDILAR.mp3"},
    {name:"DUNYO HAVAS BO'LMASIN", path:"media/25.DUNYO HAVAS BO'LMASIN.mp3"},
    {name:"YIGIT QALBI YIG'LAYDI", path:"media/26.YIGIT QALBI YIG'LAYDI.mp3"} ,
    {name:"FAZOGIR", path:"media/27.FAZOGIR.mp3"} ,
    {name:"BUNI UMR DERLAR.OZBEKISTON HALQ ARTISTI KAMOLIDDIN RAHIMOV", path:"media/28.BUNI UMR DERLAR.OZBEKISTON HALQ ARTISTI KAMOLIDDIN R.mp3"} ,
    {name:"ALLOH YAGONADIR", path:"media/29.ALLOH YAGONADIR.mp3"} ,
    {name:"QIZLARIMGA", path:"media/30.QIZLARIMGA.mp3"} ,
    {name:"INSON QISMATI A PO'LATOV", path:"media/31.INSON QISMATI A PO'LATOV.mp3"},
    {name:"ONA YURTNI ASRAY BILGIN", path:"media/32.ONA YURTNI ASRAY BILGIN.mp3"},
   
   
   
];

// Hozirgi audio indeksi
let currentIndex = 0;

// DOM elementlarni olish
const audioPlayer = document.getElementById('audioPlayer');
const playlist = document.getElementById('playlist');
const nextButton = document.getElementById('nextButton');

// Playlistni chiqarish
audioFiles.forEach((file, index) => {
    const li = document.createElement('li');
    li.textContent = file.name;
    li.addEventListener('click', () => playAudio(index));
    playlist.appendChild(li);
});

// Audio faylni o‘ynatish funksiyasi
function playAudio(index) {
    currentIndex = index;
    audioPlayer.src = audioFiles[currentIndex].path;
    audioPlayer.play();
    updateActivePlaylistItem();
}

// Navbatdagi audio faylni o‘ynatish
function playNext() {
    currentIndex = (currentIndex + 1) % audioFiles.length; // So‘nggi fayldan keyin birinchi faylga qaytish
    playAudio(currentIndex);
}

// Faol (o‘ynatilayotgan) elementni ajratish
function updateActivePlaylistItem() {
    const items = playlist.querySelectorAll('li');
    items.forEach((item, index) => {
        item.style.background = index === currentIndex ? '#28a745' : '#007BFF';
    });
}

// "Next" tugmasi uchun event listener
nextButton.addEventListener('click', playNext);

// Boshlang'ich faylni o‘ynatish
playAudio(currentIndex);

  