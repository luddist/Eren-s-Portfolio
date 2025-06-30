const $themeBtn = document.querySelector("[data-theme-btn]");
const $HTML = document.documentElement;
let isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

if (sessionStorage.getItem("theme")) {
  $HTML.dataset.theme = sessionStorage.getItem("theme");
} else {
    $HTML.dataset.theme = isDark ? "dark" : "light";
}

const changeTheme = () => {
 
    $HTML.dataset.theme = sessionStorage.getItem("theme") === "light" ? "dark" : "light";
    sessionStorage.setItem("theme", $HTML.dataset.theme); 
}

$themeBtn.addEventListener("click", changeTheme);

const $tabBtn = document.querySelectorAll("[data-tab-btn]");
let [lastActiveTab] = document.querySelectorAll("[data-tab-content]")
let [lastActiveTabBtn] = $tabBtn

$tabBtn.forEach(item => {
  item.addEventListener("click", function () {

    lastActiveTab.classList.remove("active");
    lastActiveTabBtn.classList.remove("active");

    const $tabContent = document.querySelector(`
      [data-tab-content="${item.dataset.tabBtn}"]`);
      $tabContent.classList.add("active");
      this.classList.add("active");

      lastActiveTab = $tabContent;
      lastActiveTabBtn = this;
  });
});

const langToggleBtn = document.getElementById('langToggleBtn');
const langText = langToggleBtn.querySelector('.lang-text');

langToggleBtn.addEventListener('click', () => {
  if (langText.textContent === 'EN') {
    langText.textContent = 'TR';
    
    // Manuel çeviri başlasın:
    document.getElementById('about-lang').textContent = 'Hakkımda';
    document.getElementById('card-lang').textContent = 'HTML5, CSS3 ve JavaScript kullanarak modern ve kullanıcı dostu arayüzler geliştiriyorum. Takım çalışmasına yatkın, kendini sürekli geliştirmeye açık bir front-end geliştiriciyim. Git ve GitHub gibi versiyon kontrol sistemleriyle düzenli ve iş birliğine açık geliştirme süreçlerine aktif olarak katkı sağlıyorum.';
    document.getElementById('proje').textContent = 'Projeler';
    document.getElementById('gecmis').textContent = 'Özgeçmiş';
    document.getElementById('iletisim').textContent = 'İletişim';
    document.getElementById('deneyim').textContent = 'Deneyim';
    document.getElementById('egitim').textContent = 'Eğitim';
    document.getElementById('uni').textContent = 'ÖNLİSANS: BİLGİSAYAR PROGRAMCILIĞI, ANKARA MEDİPOL ÜNİVERSİTESİ';
    document.getElementById('lise').textContent = 'LİSE DİPLOMASI: AĞ İŞLETMENLİĞİ, BALGAT MESLEKİ VE TEKNİK ANADOLU LİSESİ';
    document.getElementById('mta-bilgi').innerHTML = '-Yerleşke genelindeki ağ altyapısının kurulumu, bakımı ve sorun giderme işlemlerine destek verdim.<br>-Cat6 kabloları RJ45 dizilimine göre hazırlayıp bağlantı testlerini gerçekleştirdim.<br>-Ağ ekipmanlarının (modem, switch, access point) kurulum ve yapılandırmasına yardımcı oldum.<br>-Cisco Packet Tracer ile sanal ağlar oluşturarak temel topolojiler üzerine pratik kazandım.';
    document.getElementById('mta').textContent = 'MADEN TEKTİK ARAMA IT | AĞ YÖNETİMİ STAJI';
    document.getElementById('tepe-bilgi').innerHTML = '-Küçük işletmelere yönelik kullanıcı dostu web sayfaları tasarladım.<br>-HTML5 ve CSS3 kullanarak responsive sayfalar oluşturdum.<br>-Backend ve tasarım ekibiyle takım çalışması içinde çalıştım.';
    document.getElementById('tepe').textContent = 'TEPE INSAAT IT | FRONT-END STAJI';
    document.getElementById('mart').textContent = 'Mart 2023';
    document.getElementById('skil').textContent = 'Yetenek ve Teknolojiler';
    document.getElementById('iletisim-bilgi').textContent = 'İletişim Bilgileri';
  } else {
    langText.textContent = 'EN';
    
    // İngilizceye dön:
    document.getElementById('about-lang').textContent = 'About';
    document.getElementById('card-lang').textContent = 'I develop modern and user-friendly interfaces using HTML5, CSS3, and JavaScript. As a front-end developer who thrives in team environments and is eager to learn, I actively contribute to structured and collaborative development processes through version control tools like Git and GitHub.';
    document.getElementById('proje').textContent = 'Projects';
    document.getElementById('gecmis').textContent = 'Resume';
    document.getElementById('iletisim').textContent = 'Contact';
    document.getElementById('deneyim').textContent = 'Experience';
    document.getElementById('egitim').textContent = 'Education';
    document.getElementById('uni').textContent = 'ASSOCIATE DEGREE: COMPUTER PROGRAMMING, ANKARA MEDIPOL UNIVERSITY';
    document.getElementById('lise').textContent = 'HIGH SCHOOL: NETWORK MANAGEMENT, BALGAT MESLEKI VE TEKNIK ANADOLU LISESI';
    document.getElementById('mta-bilgi').innerHTML = '-Supported the setup, maintenance, and troubleshooting of campus-wide network infrastructure.<br>-Prepared Cat6 cables based on RJ45 standards and performed connection tests.<br>-Assisted in the installation and configuration of network devices such as modems, switches, and access points.<br>-Built virtual networks using Cisco Packet Tracer and gained hands-on experience with basic topologies.';
    document.getElementById('mta').textContent = 'MADEN TEKTİK ARAMA IT | NETWORK MANAGEMENT INTERN';
    document.getElementById('tepe-bilgi').innerHTML = '-Designed user-friendly web pages tailored for small businesses.<br>-Developed responsive web pages using HTML5 and CSS3.<br>-Collaborated effectively with the backend and design teams to ensure seamless integration.';
    document.getElementById('tepe').textContent = 'TEPE INSAAT IT | FRONT-END DEV INTERN';
    document.getElementById('mart').textContent = 'March 2023';
    document.getElementById('skil').textContent = 'Skills and Technologies';
    document.getElementById('iletisim-bilgi').textContent = 'Contact Info';
  }
});
