

ace();
bigmom();
char();
danzo();
erwin();
falcon();
gojo();
hinata();
izumi();
jean();
kakashi();
light();
mino();
nami();
orochi();
pika();
q();
ren();
saitama();
take();
ussop();
vio();
wing();
yama();
zero();
function ace() {
  let acebtn = document.getElementById("ace_button");
  acebtn.addEventListener("click", function () {
    let img = document.getElementById("akainu_img");
    img.src = "photo/ace.png";
    img.id = "ace_img";
    document.getElementsByClassName("akainu")[0].innerText = "ACE";
    document.getElementsByClassName("akainu_para")[0].innerHTML =
      "ACE, the only son of Roger and half brother of Luffy.";
    document.getElementsByClassName("akainu_para")[1].innerHTML =
      "<ul><li>Anime : One Piece</li><li>Power : Flame Flame Fruit</li></ul>";
    let btn = document.getElementById("ace_button");
    btn.innerHTML = "AKAINU";
    btn.id = "akainu_btn";
    akainu();
  });
}
function akainu() {
  let akainubtn = document.getElementById("akainu_btn");
  akainubtn.addEventListener("click", function () {
    let img = document.getElementById("ace_img");
    img.src = "photo/akainu.png";
    img.id = "akainu_img";
    document.getElementsByClassName("akainu")[0].innerText = "AKAINU";
    document.getElementsByClassName("akainu_para")[0].innerHTML =
      "Recognised as the Admiral, who killed ACE. ";
    document.getElementsByClassName("akainu_para")[1].innerHTML =
      "<ul><li>Anime : One Piece</li><li>Power : Magma Magma Fruit</li></ul>";
    let btn = document.getElementById("akainu_btn");
    btn.innerHTML = "ACE";
    btn.id = "ace_button";
    ace();
  });
}
//brookkk

function bigmom() {
  let bigmombtn = document.getElementById("bigmom_button");
  bigmombtn.addEventListener("click", function () {
    let img = document.getElementById("brook_img");
    img.src = "photo/Charlotte_Linlin.png";
    img.id = "bigmom_img";
    document.getElementsByClassName("brook")[0].innerText = "BIG MOM";
    document.getElementsByClassName("brook_para")[0].innerHTML =
      "One of the four Emperor of the sea. Linlin has the largest family....MAMAMAMAMA";
    document.getElementsByClassName("brook_para")[1].innerHTML =
      "<ul><li>Anime : One Piece</li><li>Power : Zeus, Prometheus and Napoleon</li></ul>";
    let btn = document.getElementById("bigmom_button");
    btn.innerHTML = "BROOK";
    btn.id = "brook_btn";
    brook();
  });
}
function brook() {
  let brookbtn = document.getElementById("brook_btn");
  brookbtn.addEventListener("click", function () {
    let img = document.getElementById("bigmom_img");
    img.src = "photo/brook.png";
    img.id = "brook_img";
    document.getElementsByClassName("brook")[0].innerText = "BROOK";
    document.getElementsByClassName("brook_para")[0].innerHTML =
      `Brook is the musician and one of the two swordsmen of Straw Hat Pirates.`;
    document.getElementsByClassName("brook_para")[1].innerHTML =
      "<ul><li>Anime : One Piece</li><li>Power : Yomi Yomi Fruit</li></ul>";
    let btn = document.getElementById("brook_btn");
    btn.innerHTML = "BIGMOM";
    btn.id = "bigmom_button";
    bigmom();
  });
}

//caven and char
function char() {
  let charbtn = document.getElementById("char_button");
  charbtn.addEventListener("click", function () {
    let img = document.getElementById("caven_img");
    img.src = "photo/char.png";
    img.id = "char_img";
    document.getElementsByClassName("caven")[0].innerText = "CHARLOTTE PUDDING";
    document.getElementsByClassName("caven_para")[0].innerHTML =
      "Sanji's Fiancee. Daughter of Big Mom. After kissing Sanji, she deletes his memory using her devil fruit power.";
    document.getElementsByClassName("caven_para")[1].innerHTML =
      "<ul><li>Anime : One Piece</li><li>Power : Memory Memory Fruit</li></ul>";
    let btn = document.getElementById("char_button");
    btn.innerHTML = "CAVENDISH";
    btn.id = "caven_btn";
    caven();
  });
}
function caven() {
  let cavenbtn = document.getElementById("caven_btn");
  cavenbtn.addEventListener("click", function () {
    let img = document.getElementById("char_img");
    img.src = "photo/caven.png";
    img.id = "caven_img";
    document.getElementsByClassName("caven")[0].innerText = "CAVENDISH SAMA";
    document.getElementsByClassName("caven_para")[0].innerHTML =
      "Also known as Hakuba, the another personality of the Pirate Prince of Beautiful Pirates";

    document.getElementsByClassName("caven_para")[1].innerHTML =
      "<ul><li>Anime : One Piece</li><li>Power : Busoshoku Haki</li></ul>";
    let btn = document.getElementById("caven_btn");
    btn.innerHTML = "CHARLOTTE";
    btn.id = "char_button";
    char();
  });
}
//doffy and danzo
function danzo() {
  let danzobtn = document.getElementById("danzo_button");
  danzobtn.addEventListener("click", function () {
    let img = document.getElementById("doffy_img");
    img.src = "photo/danzo.png";
    img.id = "danzo_img";
    document.getElementsByClassName("doffy")[0].innerText = "DANZO SHIMURA";
    document.getElementsByClassName("doffy_para")[0].innerHTML =
      "Major Antagonist in NARUTO. He is the leader of an organization called Root.";
    document.getElementsByClassName("doffy_para")[1].innerHTML =
      "<ul><li>Anime : Naruto</li><li>Power : Sharingan and Wood Release Jutsu</li></ul>";
    let btn = document.getElementById("danzo_button");
    btn.innerHTML = "DOFLAMINGO";
    btn.id = "doffy_btn";
    doffy();
  });
}
function doffy() {
  let doffybtn = document.getElementById("doffy_btn");
  doffybtn.addEventListener("click", function () {
    let img = document.getElementById("danzo_img");
    img.src = "photo/doffy.png";
    img.id = "doffy_img";
    document.getElementsByClassName("doffy")[0].innerText = "DOFLAMINGO";
    document.getElementsByClassName("doffy_para")[0].innerHTML =
      "Captain of the Donquixote Pirates. Also called King of Dressrosa";

    document.getElementsByClassName("doffy_para")[1].innerHTML =
      "<ul><li>Anime : One Piece</li><li>Power : String String Fruit</li></ul>";
    let btn = document.getElementById("doffy_btn");
    btn.innerHTML = "danzo";
    btn.id = "danzo_button";
    danzo();
  });
}
//eren and erwin
function erwin() {
  let erwinbtn = document.getElementById("erwin_button");
  erwinbtn.addEventListener("click", function () {
    let img = document.getElementById("eren_img");
    img.src = "photo/erwin.png";
    img.id = "erwin_img";
    document.getElementsByClassName("eren")[0].innerText = "ERWIN SMITH";
    document.getElementsByClassName(
      "eren_para"
    )[0].innerHTML = `He is the 13th commander of the survey corps. His famous dialogue "TATAKAE" which means go on and fight. `;
    document.getElementsByClassName("eren_para")[1].innerHTML =
      "<ul><li>Anime : Attack On Titan</li><li>Power : Leadership and decisive person</li></ul>";
    let btn = document.getElementById("erwin_button");
    btn.innerHTML = "EREN";
    btn.id = "eren_btn";
    eren();
  });
}
function eren() {
  let erenbtn = document.getElementById("eren_btn");
  erenbtn.addEventListener("click", function () {
    let img = document.getElementById("erwin_img");
    img.src = "photo/eren.png";
    img.id = "eren_img";
    document.getElementsByClassName("eren")[0].innerText = "Eren YEAGER";
    document.getElementsByClassName("eren_para")[0].innerHTML =
      "Both antagonist and protagonist of the anime - Attack On Titan";

    document.getElementsByClassName("eren_para")[1].innerHTML =
      "<ul><li>Anime : Attack On Titan</li><li>Power : Founding Titan : Power to time travel</li></ul>";
    let btn = document.getElementById("eren_btn");
    btn.innerHTML = "ERWIN";
    btn.id = "erwin_button";
    erwin();
  });
}

//frieza and falcon
function falcon() {
  let falconbtn = document.getElementById("falcon_button");
  falconbtn.addEventListener("click", function () {
    let img = document.getElementById("frieza_img");
    img.src = "photo/falcon.png";
    img.id = "falcon_img";
    document.getElementsByClassName("frieza")[0].innerText = "FALCON GRICE";
    document.getElementsByClassName(
      "frieza_para"
    )[0].innerHTML = `He is an Eldian Warrior and candidate to inherit one of the titan : Jaw Titan from Pork Galliard.`;
    document.getElementsByClassName("frieza_para")[1].innerHTML =
      "<ul><li>Anime : Attack On Titan</li><li>Power : Jaw Titan</li></ul>";
    let btn = document.getElementById("falcon_button");
    btn.innerHTML = "FRIEZA";
    btn.id = "frieza_btn";
    frieza();
  });
}
function frieza() {
  let friezabtn = document.getElementById("frieza_btn");
  friezabtn.addEventListener("click", function () {
    let img = document.getElementById("falcon_img");
    img.src = "photo/frieza.png";
    img.id = "frieza_img";
    document.getElementsByClassName("frieza")[0].innerText = "FRIEZA";
    document.getElementsByClassName("frieza_para")[0].innerHTML =
      "He is the Emperor of the universe. Known for his ruthlessness and power, he controls the imperial army and later was killed by Goku.";

    document.getElementsByClassName("frieza_para")[1].innerHTML =
      "<ul><li>Anime : Dragon Ball Z</li><li>Power : Superhuman Strength</li></ul>";
    let btn = document.getElementById("frieza_btn");
    btn.innerHTML = "FALCON GRICE";
    btn.id = "falcon_button";
    falcon();
  });
}

//Goku and gojo satoru
function gojo() {
  let gojobtn = document.getElementById("gojo_button");
  gojobtn.addEventListener("click", function () {
    let img = document.getElementById("goku_img");
    img.src = "photo/gojo.png";
    img.id = "gojo_img";
    document.getElementsByClassName("goku")[0].innerText = "GOJO SATORU";
    document.getElementsByClassName(
      "goku_para"
    )[0].innerHTML = `Gojo, protagonists of the Jujutsu Kaisen. Teacher at the Tokyo Jujutsu High School. `;
    document.getElementsByClassName("goku_para")[1].innerHTML =
      "<ul><li>Anime : Jujutsu Kaisen</li><li>Power : Limitless and Six Eyes</li></ul>";
    let btn = document.getElementById("gojo_button");
    btn.innerHTML = "GOKU";
    btn.id = "goku_btn";
    goku();
  });
}
function goku() {
  let gokubtn = document.getElementById("goku_btn");
  gokubtn.addEventListener("click", function () {
    let img = document.getElementById("gojo_img");
    img.src = "photo/goku.png";
    img.id = "goku_img";
    document.getElementsByClassName("goku")[0].innerText = "GOKU";
    document.getElementsByClassName("goku_para")[0].innerHTML =
      "Main protagonist of the Dragon Ball. The most powerful dragon in existence. ";

    document.getElementsByClassName("goku_para")[1].innerHTML =
      "<ul><li>Anime : Dragon Ball Z</li><li>Power : King of the Dragon</li></ul>";
    let btn = document.getElementById("goku_btn");
    btn.innerHTML = "GOJO SATORU";
    btn.id = "gojo_button";
    gojo();
  });
}
//hinata hodaka
function hinata() {
  let hinatabtn = document.getElementById("hinata_button");
  hinatabtn.addEventListener("click", function () {
    let img = document.getElementById("hyuga_img");
    img.src = "photo/hinata.png";
    img.id = "hinata_img";
    document.getElementsByClassName("hyuga")[0].innerText = "HINATA";
    document.getElementsByClassName(
      "hyuga_para"
    )[0].innerHTML = `The Sunshine Girl and lover of Hodaka. Sacrifices herself to stop the everraining season of Tokyo`;
    document.getElementsByClassName("hyuga_para")[1].innerHTML =
      "<ul><li>Anime : Weathering with you </li><li>Power :  Controls weather</li></ul>";
    let btn = document.getElementById("hinata_button");
    btn.innerHTML = "HINATA HYUGA";
    btn.id = "hyuga_btn";
    hyuga();
  });
}
function hyuga() {
  let hyugabtn = document.getElementById("hyuga_btn");
  hyugabtn.addEventListener("click", function () {
    let img = document.getElementById("hinata_img");
    img.src = "photo/hyuga.png";
    img.id = "hyuga_img";
    document.getElementsByClassName("hyuga")[0].innerText = "HINATA HYUGA";
    document.getElementsByClassName("hyuga_para")[0].innerHTML =
      "Princess of the Hyuga clan. Wife of Naruto and mother of Himawari and Boruto.";
    document.getElementsByClassName("hyuga_para")[1].innerHTML =
      "<ul><li>Anime : Naruto</li><li>Power : Byakugan</li></ul>";
    let btn = document.getElementById("hyuga_btn");
    btn.innerHTML = "HINATA";
    btn.id = "hinata_button";
    hinata();
  });
}
//itachi izumi
function izumi() {
  let izumibtn = document.getElementById("izumi_button");
  izumibtn.addEventListener("click", function () {
    let img = document.getElementById("itachi_img");
    img.src = "photo/izumi.png";
    img.id = "izumi_img";
    document.getElementsByClassName("itachi")[0].innerText = "IZUMI MIYAMURA";
    document.getElementsByClassName(
      "itachi_para"
    )[0].innerHTML = `Along with his quiet personality in the school, Miyamura has a complete deliquent side after the school.`;
    document.getElementsByClassName("itachi_para")[1].innerHTML =
      "<ul><li>Anime : Horimiya</li><li>Nature : Ambi-vert and courageous</li></ul>";
    let btn = document.getElementById("izumi_button");
    btn.innerHTML = "ITACHI UCHIHA";
    btn.id = "itachi_btn";
    itachi();
  });
}
function itachi() {
  let itachibtn = document.getElementById("itachi_btn");
  itachibtn.addEventListener("click", function () {
    let img = document.getElementById("izumi_img");
    img.src = "photo/itachi.png";
    img.id = "itachi_img";
    document.getElementsByClassName("itachi")[0].innerText = "ITACHI UCHIHA";
    document.getElementsByClassName("itachi_para")[0].innerHTML =
      "Itachi assasinated his whole Uchiha Clan being the lone survivor along with his brother Sasuke. He was also the member of ROOT";
    document.getElementsByClassName("itachi_para")[1].innerHTML =
      "<ul><li>Anime : Naruto</li><li>Power : Sharingan</li></ul>";
    let btn = document.getElementById("itachi_btn");
    btn.innerHTML = "IZUMI MIYAMURA";
    btn.id = "izumi_button";
    izumi();
  });
}
//JIRAIYA JEAN
function jean() {
  let jeanbtn = document.getElementById("jean_button");
  jeanbtn.addEventListener("click", function () {
    let img = document.getElementById("jiraiya_img");
    img.src = "photo/jean.png";
    img.id = "jean_img";
    document.getElementsByClassName("jiraiya")[0].innerText = "JEAN";
    document.getElementsByClassName(
      "jiraiya_para"
    )[0].innerHTML = `The commanding Officer of the survey corps. He is a brown haired man. He is also known to have love interest in Mikasa.`;
    document.getElementsByClassName("jiraiya_para")[1].innerHTML =
      "<ul><li>Anime : Attack On Titan</li><li>Nature : Assertive</li></ul>";
    let btn = document.getElementById("jean_button");
    btn.innerHTML = "JIRAIYA";
    btn.id = "jiraiya_btn";
    jiraiya();
  });
}
function jiraiya() {
  let jiraiyabtn = document.getElementById("jiraiya_btn");
  jiraiyabtn.addEventListener("click", function () {
    let img = document.getElementById("jean_img");
    img.src = "photo/jiraiya.png";
    img.id = "jiraiya_img";
    document.getElementsByClassName("jiraiya")[0].innerText = "JIRAIYA";
    document.getElementsByClassName("jiraiya_para")[0].innerHTML =
      "Sensei of fourth hokage i.e. Minato. Sage mode user. He also taught Naruto, Minato's son. He died fighting pain";

    document.getElementsByClassName("jiraiya_para")[1].innerHTML =
      "<ul><li>Anime : Naruto</li><li>Power : Sage mode, Rasengan</li></ul>";
    let btn = document.getElementById("jiraiya_btn");
    btn.innerHTML = "JEAN";
    btn.id = "jean_button";
    jean();
  });
}
//kamado kakashi
function kakashi() {
  let kakashibtn = document.getElementById("kakashi_button");
  kakashibtn.addEventListener("click", function () {
    let img = document.getElementById("kamado_img");
    img.src = "photo/kakashi.png";
    img.id = "kakashi_img";
    document.getElementsByClassName("kamado")[0].innerText = "KAKASHI HATAKE";
    document.getElementsByClassName(
      "kamado_para"
    )[0].innerHTML = `Also known as the white flash of Konoha. The sensei of team 7 and also the member of former team seven with Obito and Rin `;
    document.getElementsByClassName("kamado_para")[1].innerHTML =
      "<ul><li>Anime : Naruto</li><li>Power : Copy Ninja and Sharingan</li></ul>";
    let btn = document.getElementById("kakashi_button");
    btn.innerHTML = "KAMADO TANJIRO";
    btn.id = "kamado_btn";
    kamado();
  });
}
function kamado() {
  let kamadobtn = document.getElementById("kamado_btn");
  kamadobtn.addEventListener("click", function () {
    let img = document.getElementById("kakashi_img");
    img.src = "photo/kamado.png";
    img.id = "kamado_img";
    document.getElementsByClassName("kamado")[0].innerText = "KAMADO TANJIRO";
    document.getElementsByClassName("kamado_para")[0].innerHTML =
      "Protagonist of Demon Slayer, who joined the Demon Slayer Corps tu turn her sister back to human from demon.";
    document.getElementsByClassName("kamado_para")[1].innerHTML =
      "<ul><li>Anime : Demon Slayer</li><li>Power : Sun and Water breathing</li></ul>";
    let btn = document.getElementById("kamado_btn");
    btn.innerHTML = "KAKASHI HATAKE";
    btn.id = "kakashi_button";
    kakashi();
  });
}
//luffy and light
function light() {
  let lightbtn = document.getElementById("light_button");
  lightbtn.addEventListener("click", function () {
    let img = document.getElementById("luffy_img");
    img.src = "photo/light.png";
    img.id = "light_img";
    document.getElementsByClassName("luffy")[0].innerText = "LIGHT YAGAMI";
    document.getElementsByClassName(
      "luffy_para"
    )[0].innerHTML = `He gets the diary from the devil, so whosoevers name he writes on that diary is killed within few minos. `;
    document.getElementsByClassName("luffy_para")[1].innerHTML =
      "<ul><li>Anime : Death Note</li><li>Power : Diary</li></ul>";
    let btn = document.getElementById("light_button");
    btn.innerHTML = "LUFFY";
    btn.id = "luffy_btn";
    luffy();
  });
}
function luffy() {
  let luffybtn = document.getElementById("luffy_btn");
  luffybtn.addEventListener("click", function () {
    let img = document.getElementById("light_img");
    img.src = "photo/luffy.png";
    img.id = "luffy_img";
    document.getElementsByClassName("luffy")[0].innerText = "MONKEY D. LUFFY";
    document.getElementsByClassName("luffy_para")[0].innerHTML =
      "Luffy is the Captain of the Straw Hat Pirates. He is also the son and Grandson of Dragon and Garp.";

    document.getElementsByClassName("luffy_para")[1].innerHTML =
      "<ul><li>Anime : One Piece</li><li>Power : Rubber Rubber Fruit</li></ul>";
    let btn = document.getElementById("luffy_btn");
    btn.innerHTML = "light";
    btn.id = "light_button";
    light();
  });
}

//manji and mino
function mino() {
  let minobtn = document.getElementById("mino_button");
  minobtn.addEventListener("click", function () {
    let img = document.getElementById("manji_img");
    img.src = "photo/mino.png";
    img.id = "mino_img";
    document.getElementsByClassName("manji")[0].innerText = "MINORIN KUSHIEDA";
    document.getElementsByClassName(
      "manji_para"
    )[0].innerHTML = `She is the side character and crush of the male character. Full of positivity and enthusiasm.`;
    document.getElementsByClassName("manji_para")[1].innerHTML =
      "<ul><li>Anime : Toradora</li><li>Nature : Energitic and Positive</li></ul>";
    let btn = document.getElementById("mino_button");
    btn.innerHTML = "MANJIRO SANO";
    btn.id = "manji_btn";
    manji();
  });
}
function manji() {
  let manjibtn = document.getElementById("manji_btn");
  manjibtn.addEventListener("click", function () {
    let img = document.getElementById("mino_img");
    img.src = "photo/manji.png";
    img.id = "manji_img";
    document.getElementsByClassName("manji")[0].innerText = "MANJIRO SANO";
    document.getElementsByClassName("manji_para")[0].innerHTML =
      "Both antagonist and protagonist of the anime - Attack On Titan";

    document.getElementsByClassName("manji_para")[1].innerHTML =
      "<ul><li>Anime : Attack On Titan</li><li>Power : Founding Titan : Power to time travel</li></ul>";
    let btn = document.getElementById("manji_btn");
    btn.innerHTML = "MINORIN";
    btn.id = "mino_button";
    mino();
  });
}
//naruto and nami
function nami() {
  let namibtn = document.getElementById("nami_button");
  namibtn.addEventListener("click", function () {
    let img = document.getElementById("naruto_img");
    img.src = "photo/nami.png";
    img.id = "nami_img";
    document.getElementsByClassName("naruto")[0].innerText = "NAMI";
    document.getElementsByClassName(
      "naruto_para"
    )[0].innerHTML = `She is the third member of the straw hat pirates. Her weapon is the takt made by ussop and later she was also acquainted with Zeus. `;
    document.getElementsByClassName("naruto_para")[1].innerHTML =
      "<ul><li>Anime : One Piece</li><li>Power : Takt and Clever</li></ul>";
    let btn = document.getElementById("nami_button");
    btn.innerHTML = "NARUTO";
    btn.id = "naruto_btn";
    naruto();
  });
}
function naruto() {
  let narutobtn = document.getElementById("naruto_btn");
  narutobtn.addEventListener("click", function () {
    let img = document.getElementById("nami_img");
    img.src = "photo/naruto.png";
    img.id = "naruto_img";
    document.getElementsByClassName("naruto")[0].innerText = "NARUTO UZUMAKI";
    document.getElementsByClassName("naruto_para")[0].innerHTML =
      "He is the son of Minato and disciple of Jiraiya and Kakashi. He holds the power of Rasengan and Sage mode. He is the protagonist of NARUTO. ";

    document.getElementsByClassName("naruto_para")[1].innerHTML =
      "<ul><li>Anime : Naruto</li><li>Power : All Rounder</li></ul>";
    let btn = document.getElementById("naruto_btn");
    btn.innerHTML = "NAMI";
    btn.id = "nami_button";
    nami();
  });
}

//onizuka and orochi
function orochi() {
  let orochibtn = document.getElementById("orochi_button");
  orochibtn.addEventListener("click", function () {
    let img = document.getElementById("onizuka_img");
    img.src = "photo/orochi.png";
    img.id = "orochi_img";
    document.getElementsByClassName("onizuka")[0].innerText = "OROCHIMARU";
    document.getElementsByClassName("onizuka_para")[0].innerHTML = `One of the three legendary sannin. He was a member of Konoha. He was the murderer of Third Hokage : Hizurin.`;
    document.getElementsByClassName("onizuka_para")[1].innerHTML =
      "<ul><li>Anime : Naruto</li><li>Power : Sannin and Regenerative power</li></ul>";
    let btn = document.getElementById("orochi_button");
    btn.innerHTML = "ONIZUKA";
    btn.id = "onizuka_button";
    onizuka();
  });
}
function onizuka() {
  let onizukabtn = document.getElementById("onizuka_btn");
  onizukabtn.addEventListener("click", function () {
    let img = document.getElementById("orochi_img");
    img.src = "photo/onizuka.png";
    img.id = "onizuka_img";
    document.getElementsByClassName("onizuka")[0].innerText = "ONIZUKA EKICHI";
    document.getElementsByClassName("onizuka_para")[0].innerHTML =
      "The sensei of Class-2, the most troublinh class. He with his own style tackles the problem of his tsudents thereby becoming a role model for them.";

    document.getElementsByClassName("onizuka_para")[1].innerHTML =
      "<ul><li>Anime : GTO</li><li>Role : Teacher of class-2</li></ul>";
    let btn = document.getElementById("onizuka_btn");
    btn.innerHTML = "OROCHIMARU";
    btn.id = "orochi_button";
    orochi();
  });
}
//ponyo and pika
function pika() {
  let pikabtn = document.getElementById("pika_button");
  pikabtn.addEventListener("click", function () {
    let img = document.getElementById("ponyo_img");
    img.src = "photo/pika.png";
    img.id = "pika_img";
    document.getElementsByClassName("ponyo")[0].innerText = "PIKACHU";
    document.getElementsByClassName("ponyo_para")[0].innerHTML = `Ace's Partner. It is covered in yellow fur with two horizontal brown stripes on its back `;
    document.getElementsByClassName("ponyo_para")[1].innerHTML =
      "<ul><li>Anime : Pokemon</li><li>Power : Electricity</li></ul>";
    let btn = document.getElementById("pika_button");
    btn.innerHTML = "PONYO";
    btn.id = "ponyo_btn";
    ponyo();
  });
}
function ponyo() {
  let ponyobtn = document.getElementById("ponyo_btn");
  ponyobtn.addEventListener("click", function () {
    let img = document.getElementById("pika_img");
    img.src = "photo/ponyo.png";
    img.id = "ponyo_img";
    document.getElementsByClassName("ponyo")[0].innerText = "PONYO";
    document.getElementsByClassName("ponyo_para")[0].innerHTML =
      "A small fish when encounters the human child, to become friends and live the lifestyle of a human, she transform into a human from fish.";

    document.getElementsByClassName("ponyo_para")[1].innerHTML =
      "<ul><li>Anime : Ponyo</li><li>Power : Transform to human</li></ul>";
    let btn = document.getElementById("ponyo_btn");
    btn.innerHTML = "PIKACHU";
    btn.id = "pika_button";
    pika();
  });
}
//QUEEN AND Q
function q() {
  let qbtn = document.getElementById("q_button");
  qbtn.addEventListener("click", function () {
    let img = document.getElementById("queen_img");
    img.src = "photo/q.png";
    img.id = "q_img";
    document.getElementsByClassName("queen")[0].innerText = "Q COMISSIONER";
    document.getElementsByClassName("queen_para")[0].innerHTML =`He is the former member of the judges. He is the one whp recruited and later trained Han Daewi. `;
    document.getElementsByClassName("queen_para")[1].innerHTML =
      "<ul><li>Anime : The God Of High School</li><li>Power : Superhuman Strength</li></ul>";
    let btn = document.getElementById("q_button");
    btn.innerHTML = "QUEEN OTOHIME";
    btn.id = "queen_btn";
    queen();
  });
}
function queen() {
  let queenbtn = document.getElementById("queen_btn");
  queenbtn.addEventListener("click", function () {
    let img = document.getElementById("q_img");
    img.src = "photo/queen.png";
    img.id = "queen_img";
    document.getElementsByClassName("queen")[0].innerText = "QUEEN OTOHIME";
    document.getElementsByClassName("queen_para")[0].innerHTML =
      "She is the GoldFish Mermaid, the queen of Ryugu Kingdom, the wife of Neptune Sama.";

    document.getElementsByClassName("queen_para")[1].innerHTML =
      "<ul><li>Anime : One Piece</li><li>Power : Observation Haki</li></ul>";
    let btn = document.getElementById("queen_btn");
    btn.innerHTML = "Q COMISSIONER";
    btn.id = "q_button";
    q();
  });
}
//roger and ren
function ren() {
  let renbtn = document.getElementById("ren_button");
  renbtn.addEventListener("click", function () {
    let img = document.getElementById("roger_img");
    img.src = "photo/ren.png";
    img.id = "ren_img";
    document.getElementsByClassName("roger")[0].innerText = "RENGOKU";
    document.getElementsByClassName("roger_para")[0].innerHTML = `Rengoku was the major supporting character of Demon Slayer: Kimetsu no Yaiba and a major character in the Mugen Train Arc.`;
    document.getElementsByClassName("roger_para")[1].innerHTML =
      "<ul><li>Anime : Demon Slayer</li><li>Power : Fire Breathing</li></ul>";
    let btn = document.getElementById("ren_button");
    btn.innerHTML = "ROGER";
    btn.id = "roger_btn";
    roger();
  });
}
function roger() {
  let rogerbtn = document.getElementById("roger_btn");
  rogerbtn.addEventListener("click", function () {
    let img = document.getElementById("ren_img");
    img.src = "photo/roger.png";
    img.id = "roger_img";
    document.getElementsByClassName("roger")[0].innerText = "ROGER";
    document.getElementsByClassName("roger_para")[0].innerHTML =
      `King of Pirates. His crew was the shoyo crew to ever find the treasure named "One Piece" on LaughTale;`;

    document.getElementsByClassName("roger_para")[1].innerHTML =
      "<ul><li>Anime : One Piece</li><li>Power : Haki of Supreme King</li></ul>";
    let btn = document.getElementById("roger_btn");
    btn.innerHTML = "REN";
    btn.id = "ren_button";
    ren();
  });
}
//shoyo and saitama
function saitama() {
  let saitamabtn = document.getElementById("saitama_button");
  saitamabtn.addEventListener("click", function () {
    let img = document.getElementById("shoyo_img");
    img.src = "photo/saitama.png";
    img.id = "saitama_img";
    document.getElementsByClassName("shoyo")[0].innerText = "SAITAMA";
    document.getElementsByClassName("shoyo_para")[0].innerHTML = `He is a simple human who has broken through his limiters and gained superhuman powers. He is the protagonist of the anime.`;
    document.getElementsByClassName("shoyo_para")[1].innerHTML =
      "<ul><li>Anime : One Punch Man</li><li>Power : Superhuman Power</li></ul>";
    let btn = document.getElementById("saitama_button");
    btn.innerHTML = "SHOYO HINATA";
    btn.id = "shoyo_btn";
    shoyo();
  });
}
function shoyo() {
  let shoyobtn = document.getElementById("shoyo_btn");
  shoyobtn.addEventListener("click", function () {
    let img = document.getElementById("saitama_img");
    img.src = "photo/shoyo.png";
    img.id = "shoyo_img";
    document.getElementsByClassName("shoyo")[0].innerText = "SHOYO HINATA";
    document.getElementsByClassName("shoyo_para")[0].innerHTML =
      `Shoyo Hinata is member of karasuno School Volleyball Team with the upper of number 10, same as that of "little giant"`;

    document.getElementsByClassName("shoyo_para")[1].innerHTML =
      "<ul><li>Anime : Haikyuu</li><li>Power : Freak Quick and Speed</li></ul>";
    let btn = document.getElementById("shoyo_btn");
    btn.innerHTML = "SAITAMA";
    btn.id = "saitama_button";
    saitama();
  });
}
//toru and take
function take() {
  let takebtn = document.getElementById("take_button");
  takebtn.addEventListener("click", function () {
    let img = document.getElementById("toru_img");
    img.src = "photo/take.png";
    img.id = "take_img";
    document.getElementsByClassName("toru")[0].innerText = "TAKEMICHI HINATA";
    document.getElementsByClassName("toru_para")[0].innerHTML = `He is the 2nd Commander of Toman Gang of Tokyo. Nickname is 'takemitchy'. His handshake with Hachibana's brother delivers a time travel.`;
    document.getElementsByClassName("toru_para")[1].innerHTML =
      "<ul><li>Anime : Tokyo Revengers</li><li>Power : Time Travel</li></ul>";
    let btn = document.getElementById("take_button");
    btn.innerHTML = "TORU";
    btn.id = "toru_btn";
    toru();
  });
}
function toru() {
  let torubtn = document.getElementById("toru_btn");
  torubtn.addEventListener("click", function () {
    let img = document.getElementById("take_img");
    img.src = "photo/toru.png";
    img.id = "toru_img";
    document.getElementsByClassName("toru")[0].innerText = "TORU OIKAWA";
    document.getElementsByClassName("toru_para")[0].innerHTML =
      `Toru Oikawa is the captain of Aobe Sehjio. He is the setter of the team : "Everyone! I believe in you" is his fav line.`;

    document.getElementsByClassName("toru_para")[1].innerHTML =
      "<ul><li>Anime : Haikyuu</li><li>Power : Calm and Composed</li></ul>";
    let btn = document.getElementById("toru_btn");
    btn.innerHTML = "TAKEMICHI";
    btn.id = "take_button";
    take();
  });
}
//UZUI USSOP
function ussop() {
  let ussopbtn = document.getElementById("ussop_button");
  ussopbtn.addEventListener("click", function () {
    let img = document.getElementById("uzui_img");
    img.src = "photo/ussop.png";
    img.id = "ussop_img";
    document.getElementsByClassName("uzui")[0].innerText = "USOPP";
    document.getElementsByClassName("uzui_para")[0].innerHTML = `He is the 4th member of the Straw Hat Pirates. He is known for his perfect sling shots and cowardicely brave nature.`;
    document.getElementsByClassName("uzui_para")[1].innerHTML =
      "<ul><li>Anime : One Piece</li><li>Power : Observation Haki</li></ul>";
    let btn = document.getElementById("ussop_button");
    btn.innerHTML = "UZUI";
    btn.id = "uzui_btn";
    uzui();
  });
}
function uzui() {
  let uzuibtn = document.getElementById("uzui_btn");
  uzuibtn.addEventListener("click", function () {
    let img = document.getElementById("ussop_img");
    img.src = "photo/uzui.png";
    img.id = "uzui_img";
    document.getElementsByClassName("uzui")[0].innerText = "UZUI TENGEN";
    document.getElementsByClassName("uzui_para")[0].innerHTML =
      "Uzui is the vio strongest Hashira. He fought against the upper demon 5. He also known to have three wives";

    document.getElementsByClassName("uzui_para")[1].innerHTML =
      "<ul><li>Anime : Demon Slayer</li><li>Power : Sound Hashira</li></ul>";
    let btn = document.getElementById("uzui_btn");
    btn.innerHTML = "USOPP";
    btn.id = "ussop_button";
    ussop();
  });
}
//vin and vio
function vio() {
  let viobtn = document.getElementById("vio_button");
  viobtn.addEventListener("click", function () {
    let img = document.getElementById("vin_img");
    img.src = "photo/vio.png";
    img.id = "vio_img";
    document.getElementsByClassName("vin")[0].innerText = "VIOLET EVERGARDEN";
    document.getElementsByClassName("vin_para")[0].innerHTML = `After losing her beloved, while waiting for him to return, Violet learns to write letters that could connect the hearts.`;
    document.getElementsByClassName("vin_para")[1].innerHTML =
      "<ul><li>Anime : Violet Evergarden</li><li>Power : Writing Letters</li></ul>";
    let btn = document.getElementById("vio_button");
    btn.innerHTML = "VINSMOKE";
    btn.id = "vin_btn";
    vin();
  });
}
function vin() {
  let vinbtn = document.getElementById("vin_btn");
  vinbtn.addEventListener("click", function () {
    let img = document.getElementById("vio_img");
    img.src = "photo/vin.png";
    img.id = "vin_img";
    document.getElementsByClassName("vin")[0].innerText = "VINSMOKE SANJI";
    document.getElementsByClassName("vin_para")[0].innerHTML =
      "He is the 5th member of Straw Hats. He is the cook of the ship. Also the third Prince of the Vinsmoke Family.";

    document.getElementsByClassName("vin_para")[1].innerHTML =
      "<ul><li>Anime : One Piece</li><li>Power : Supereme Haki and Leg kicks</li></ul>";
    let btn = document.getElementById("vin_btn");
    btn.innerHTML = "VIOLET";
    btn.id = "vio_button";
    vio();
  });
}
//white and wing
function wing() {
  let wingbtn = document.getElementById("wing_button");
  wingbtn.addEventListener("click", function () {
    let img = document.getElementById("white_img");
    img.src = "photo/wing.png";
    img.id = "wing_img";
    document.getElementsByClassName("white")[0].innerText = "WING MASTER";
    document.getElementsByClassName("white_para")[0].innerHTML = `Zushi's teacher. He is an Assistant Master of Shingen-ryu kung fu and a former student of Biscuit Krueger.`;
    document.getElementsByClassName("white_para")[1].innerHTML =
      "<ul><li>Anime : One Piece</li><li>Power : Quack Quack Fruit</li></ul>";
    let btn = document.getElementById("wing_button");
    btn.innerHTML = "WHITEBEARD";
    btn.id = "white_btn";
    white();
  });
}
function white() {
  let whitebtn = document.getElementById("white_btn");
  whitebtn.addEventListener("click", function () {
    let img = document.getElementById("wing_img");
    img.src = "photo/white.png";
    img.id = "white_img";
    document.getElementsByClassName("white")[0].innerText = "WHITEBEARD";
    document.getElementsByClassName("white_para")[0].innerHTML =
      "The captain of Whitebeard Pirates. One of the Yonko. He died during the MarineFord Arc, to save ACE.";

    document.getElementsByClassName("white_para")[1].innerHTML =
      "<ul><li>Anime : HunterxHunter</li><li>Power : Superhuman Powers</li></ul>";
    let btn = document.getElementById("white_btn");
    btn.innerHTML = "WING";
    btn.id = "wing_button";
    wing();
  });
 
}
 //ymir and yama
function yama() {
  let yamabtn = document.getElementById("yama_button");
  yamabtn.addEventListener("click", function () {
    let img = document.getElementById("ymir_img");
    img.src = "photo/yama.png";
    img.id = "yama_img";
    document.getElementsByClassName("ymir")[0].innerText = "YAMAMOTO";
    document.getElementsByClassName("ymir_para")[0].innerHTML = `He was the captain of 1st Division in the Gotei 13 and also Captain-Commander of whole Gotei.`;
    document.getElementsByClassName("ymir_para")[1].innerHTML =
      "<ul><li>Anime : Bleach</li><li>Power : Immense Spiritual Power</li></ul>";
    let btn = document.getElementById("yama_button");
    btn.innerHTML = "YMIR";
    btn.id = "ymir_btn";
    ymir();
  });
}
function ymir() {
  let ymirbtn = document.getElementById("ymir_btn");
  ymirbtn.addEventListener("click", function () {
    let img = document.getElementById("yama_img");
    img.src = "photo/ymir.png";
    img.id = "ymir_img";
    document.getElementsByClassName("ymir")[0].innerText = "YMIR";
    document.getElementsByClassName("ymir_para")[0].innerHTML =
      "She was the zoro female titan ever. After her death her body parts were fed to her daughter so that they could inherit the titan.";

    document.getElementsByClassName("ymir_para")[1].innerHTML =
      "<ul><li>Anime : Attack On Titan</li><li>Power : zoro Titan</li></ul>";
    let btn = document.getElementById("ymir_btn");
    btn.innerHTML = "YAMAMOTO";
    btn.id = "yama_button";
    yama();
  });
}
//zoro and zero
function zero() {
  let zerobtn = document.getElementById("zero_button");
  zerobtn.addEventListener("click", function () {
    let img = document.getElementById("zoro_img");
    img.src = "photo/zero.png";
    img.id = "zero_img";
    document.getElementsByClassName("zoro")[0].innerText = "ZERO TWO";
    document.getElementsByClassName("zoro_para")[0].innerHTML = `She is the hybrid between humans and Klaxo-sapiens. She is the lover of Hiro, 016. They both died while fighting the Akiens in the outerspace.`;
    document.getElementsByClassName("zoro_para")[1].innerHTML =
      "<ul><li>Anime : Darling in the Franzz</li><li>Power : Superhuman and Regenration Ability</li></ul>";
    let btn = document.getElementById("zero_button");
    btn.innerHTML = "ZORO";
    btn.id = "zoro_btn";
    zoro();
  });
}
function zoro() {
  let zorobtn = document.getElementById("zoro_btn");
  zorobtn.addEventListener("click", function () {
    let img = document.getElementById("zero_img");
    img.src = "photo/zoro.png";
    img.id = "zoro_img";
    document.getElementsByClassName("zoro")[0].innerText = "ZORO";
    document.getElementsByClassName("zoro_para")[0].innerHTML =
    `Zoro is the 1st mate of the Straw Hat Luffy. He is the Second Strongest crew member. Currently he owns Odens Sword, Enma.`;

    document.getElementsByClassName("zoro_para")[1].innerHTML =
      "<ul><li>Anime : One Piece</li><li>Power : Three Swords User</li></ul>";
    let btn = document.getElementById("zoro_btn");
    btn.innerHTML = "ZERO";
    btn.id = "zero_button";
    zero();
  });
}
let search = document.getElementById("search");
search.addEventListener("input", function s() {
  let inputVal = search.value;

  let card = document.getElementsByClassName("card");
  Array.from(card).forEach(function (element) {
    let cardTxt = element.getElementsByClassName("card-body")[0].innerText;
if(cardTxt.includes(inputVal)){
  element.style.display = "block";
}
else if(cardTxt.includes(inputVal.charAt(0).toUpperCase() + inputVal.slice(1))){
  element.style.display = "block";
}
    else if (cardTxt.includes(inputVal.toLowerCase())) {
      element.style.display = "block";
    }
    else if(cardTxt.includes(inputVal.toUpperCase())){
      element.style.display = "block";
    } 
     else {
      element.style.display = "none";
    }
  });
});