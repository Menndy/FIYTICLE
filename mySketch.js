let imgs = [];
let num = 15;
let img;

//经过图片压缩
var list1=[['./allImages/卡农系列/GA802070.MWK正面.png', './allImages/卡农系列/卡农系列GA802059.MWM正面.png', './allImages/卡农系列/卡农系列GA803000.WLW正面.png', './allImages/卡农系列/经典系列GA802058.MWK-正面.png', './allImages/卡农系列/经典系列GA802058.WWW-正面.png', './allImages/卡农系列/经典系列GA802059.WWB-正面.png', './allImages/卡农系列/经典系列LA802058.WWWD-正面.png', './allImages/卡农系列/经典系列LA802059.WWBD-正面.png'], ['./allImages/四叶草系列/L596.WWWD正.png', './allImages/四叶草系列/LA8570.WWWD正.png', './allImages/四叶草系列/LA862006.WSWD正.png', './allImages/四叶草系列/LA862015 拷贝.GWZS正.png', './allImages/四叶草系列/四叶草系列DLA10042 拷贝.WWWD正面.png', './allImages/四叶草系列/四叶草系列DLA862030.MWMD正面.png', './allImages/四叶草系列/四叶草系列LA8262.GWRD（红带）正面.png', './allImages/四叶草系列/四叶草系列LA862026 拷贝.PRRS正面.png', './allImages/四叶草系列/四叶草系列LA862028.PKPD正面.png', './allImages/四叶草系列/四叶草系列LA862029.MWMD正面.png', './allImages/四叶草系列/四叶草系列LA862030.WWBD正面.png', './allImages/四叶草系列/四叶草系列LA862031.MWMD正面.png', './allImages/四叶草系列/四叶草系列LA862031.PWPD正面.png'], ['./allImages/大师系列/E2100.PSB正.png', './allImages/大师系列/E2110 拷贝.PSB正面.png', './allImages/大师系列/E2112 拷贝.PSB正面.png', './allImages/大师系列/E2120 拷贝.png', './allImages/大师系列/E2122 拷贝.PSB正面.png', './allImages/大师系列/E2128 拷贝.png', './allImages/大师系列/GA8046.WWB.png', './allImages/大师系列/GA8066.WWR.png', './allImages/大师系列/GA8068.WHB.png', './allImages/大师系列/GA8086 拷贝.png', './allImages/大师系列/GA8096.TWR.png', './allImages/大师系列/GA8118.WWWD.png', './allImages/大师系列/GA8548.TBB.png', './allImages/大师系列/GA886010.PWB正.png', './allImages/大师系列/GA886016 拷贝.PWB正面.png', './allImages/大师系列/共和国七十周年华诞GA886019 拷贝.PPKD正面.png', './allImages/大师系列/吉猪临门GA886020 拷贝.PWB正面.png', './allImages/大师系列/大师系列GA886030.WHB正面.png', './allImages/大师系列/大师系列GA886031.PBB正面.png', './allImages/大师系列/大师系列GA886032.PWK正面.png', './allImages/大师系列/大师系列敦煌主题心经腕表铝青铜款GA886028.GWB.png', './allImages/大师系列/大师系列敦煌主题心经腕表黑曜石款GA886029.WBB.png', './allImages/大师系列/庚子年纪念款腕表GA886033 拷贝.WBB正面.png', './allImages/大师系列/清蝉正.png', './allImages/大师系列/飞亚达×北京表GA886009 拷贝.PLL正面.png'], ['./allImages/极限系列/759 .png', './allImages/极限系列/971-极限系列-GA866011.BBB.png', './allImages/极限系列/978-极限系列-SGA866011.BBB.png', './allImages/极限系列/G780.WBW.png', './allImages/极限系列/G782.WBW.png', './allImages/极限系列/GA8078.WBB.png', './allImages/极限系列/GA8188.BBB.png', './allImages/极限系列/GA8188.BTB.png', './allImages/极限系列/GA8288.BBB.png', './allImages/极限系列/GA8288.BTB.png', './allImages/极限系列/GA8378.BBB.png', './allImages/极限系列/GA8388.BBB.png', './allImages/极限系列/GA8456.WBB.png', './allImages/极限系列/GA8458.BBB.png', './allImages/极限系列/GA8460.BBB.png', './allImages/极限系列/GA8466.BBB.png', './allImages/极限系列/GA8606.BBB.png', './allImages/极限系列/GA866000.BBB.png', './allImages/极限系列/GA866001.HBB.png', './allImages/极限系列/GA866002.BBB.png', './allImages/极限系列/GA866002.MBR.png', './allImages/极限系列/GA866003.WBW.png', './allImages/极限系列/GA866006.png', './allImages/极限系列/LA8456.WBB.png', './allImages/极限系列/WG1012.WBB.png', './allImages/极限系列/WG1016.WHR.png', './allImages/极限系列/WGA1008.BBB.png', './allImages/极限系列/WGA1008.BBR.png', './allImages/极限系列/WGA8448.BBB.png', './allImages/极限系列/WGA8452.BBB.png', './allImages/极限系列/WGA866002.WHB.png', './allImages/极限系列/WGA866008.png', './allImages/极限系列/WGA868000.BBB正 (2).png', './allImages/极限系列/WGA868000.PBR正.png', './allImages/极限系列/WGA868000.WWB正.png', './allImages/极限系列/WGA868001.BBB正.png', './allImages/极限系列/WGA868002.BBB正.png', './allImages/极限系列/WGA868003.BBB正.png', './allImages/极限系列/极限系列GA866013.BBB正面.png', './allImages/极限系列/极限系列GA866015.BBB正面.png', './allImages/极限系列/极限系列GA866016.MBB正面.png', './allImages/极限系列/极限系列GA866016.QBB正面.png', './allImages/极限系列/极限系列GA866460.BBB正面.png'], ['./allImages/玲珑系列/L501.GGG正.png', './allImages/玲珑系列/L501.WWW正.png', './allImages/玲珑系列/L551.WWWD正.png', './allImages/玲珑系列/L561.WWW正.png', './allImages/玲珑系列/L571.WLWD正.png', './allImages/玲珑系列/L571.WWW正.png', './allImages/玲珑系列/L581.WBCH正.png', './allImages/玲珑系列/L589.WWWD正.png', './allImages/玲珑系列/L591.WWWH正.png', './allImages/玲珑系列/L595.WWWH正.png', './allImages/玲珑系列/L597.PWPH正.png', './allImages/玲珑系列/L864007.WLW正.png', './allImages/玲珑系列/Mini系列DL28001.WWWD正面.png'], ['./allImages/祈福系列/GA8148 拷贝.TGT正面.png', './allImages/祈福系列/GA8430.MWM.png', './allImages/祈福系列/GA8468.TWT.png', './allImages/祈福系列/GA8520 拷贝.TYT-1.png', './allImages/祈福系列/GA8522 拷贝.TYR-1.png', './allImages/祈福系列/GA8526 拷贝.TGR－1.png', './allImages/祈福系列/GA8650.MWR-1.png', './allImages/祈福系列/GA8652 拷贝.MWM-1.png', './allImages/祈福系列/GA8652.MWM.png', './allImages/祈福系列/L960.MWRD.png', './allImages/祈福系列/祈福系列GA888000.TWT正面.png', './allImages/祈福系列/祈福系列GA888001.TGT正面.png', './allImages/祈福系列/祈福系列LA888001.TGT正面.png'], ['./allImages/经典系列/1027-经典系列－G802068 拷贝.png', './allImages/经典系列/1029-经典系列－G802068.WBW.png', './allImages/经典系列/1031-经典系列－G802068.PWK.png', './allImages/经典系列/1033-经典系列－L802068 拷贝.png', './allImages/经典系列/1035-经典系列－L802068.WBW.png', './allImages/经典系列/1037-经典系列－L802068.PWK.png', './allImages/经典系列/811-L802029.TWB.png', './allImages/经典系列/816-L802030.MWM.png', './allImages/经典系列/817-L802030.WBW.png', './allImages/经典系列/891－GA802057 拷贝.png', './allImages/经典系列/892－DGA802056 拷贝.png','./allImages/经典系列/893－GA802057 拷贝.png', './allImages/经典系列/895－DGA10001 拷贝.png', './allImages/经典系列/896－DGA802056 拷贝.png', './allImages/经典系列/906－WGA802055 拷贝.png', './allImages/经典系列/910－WLA802055 拷贝.png', './allImages/经典系列/DGA802056 拷贝.png', './allImages/经典系列/G786.WWR正.png', './allImages/经典系列/G788.BBB正.png', './allImages/经典系列/G788.WWW正.png', './allImages/经典系列/G790.WBW正.png', './allImages/经典系列/GA802001 拷贝.png', './allImages/经典系列/GA802001.MWM.png', './allImages/经典系列/GA802002 拷贝.png', './allImages/经典系列/GA802006 拷贝.png', './allImages/经典系列/GA802015.WBB.png', './allImages/经典系列/GA802018 拷贝.png', './allImages/经典系列/GA802073 拷贝.WBW正面.png', './allImages/经典系列/GA802075 拷贝.BBB正面.png', './allImages/经典系列/GA802075 拷贝.BSB正面.png', './allImages/经典系列/GA804001 拷贝.png', './allImages/经典系列/GA8052.WWR正.png', './allImages/经典系列/GA8152.WWT正.png', './allImages/经典系列/GA8632.MWM.png', './allImages/经典系列/GA8636 拷贝.MSM-1.png', './allImages/经典系列/GA8636.MWM.png', './allImages/经典系列/L792.WWW正.png', './allImages/经典系列/L798.WSS正.png', './allImages/经典系列/L802030.TWTD.png', './allImages/经典系列/LA8306.MWM.png', './allImages/经典系列/LA8308.MWM.png', './allImages/经典系列/LA8312 WWW.png', './allImages/经典系列/LA8340 拷贝.png', './allImages/经典系列/LA8426.MWM.png', './allImages/经典系列/LA8636.MSM.png', './allImages/经典系列/LA8636.MWM.png', './allImages/经典系列/WGA1010.MWM.png', './allImages/经典系列/WGA800015.TWT.png', './allImages/经典系列/WLA800015.MWM.png', './allImages/经典系列/WLA800015.TWT.png', './allImages/经典系列/经典系列DG802002.WBW正面.png', './allImages/经典系列/经典系列DG802002.WWW正面.png', './allImages/经典系列/经典系列DGA29005.MWM正面.png', './allImages/经典系列/经典系列DGA29005.WBW正面.png', './allImages/经典系列/经典系列DGA29005.WLW正面.png', './allImages/经典系列/经典系列DL802002.WBW正面.png', './allImages/经典系列/经典系列DL802002.WWW正面.png', './allImages/经典系列/经典系列G802068.WWB正面.png', './allImages/经典系列/经典系列GA802071 拷贝.BBB正面.png', './allImages/经典系列/经典系列GA802071 拷贝.BSB正面.png', './allImages/经典系列/经典系列GA802071 拷贝.WWW正面.png', './allImages/经典系列/经典系列GA802072 拷贝.WBW正面.png', './allImages/经典系列/经典系列L258 拷贝.png', './allImages/经典系列/经典系列LJ096 拷贝.png', './allImages/经典系列/经典系列TL802002.PWR.png', './allImages/经典系列/经典系列TL802023 拷贝.png'], ['./allImages/航天系列/GA8070.WBW.png', './allImages/航天系列/GA8590.WLW.png', './allImages/航天系列/GA880011.WHW 神十一号纪念款陀飞轮.png', './allImages/航天系列/LA8598.WBR.png', './allImages/航天系列/神5-Z052.png', './allImages/航天系列/神舟6号航天服表 Z062.png', './allImages/航天系列/航天系列GA8370.WBW正面.png', './allImages/航天系列/航天系列GA8470.WBB正面.png', './allImages/航天系列/航天系列GA8500.HBH正面.png', './allImages/航天系列/航天系列GA8592.WBW正面.png', './allImages/航天系列/航天系列GA8596.WBW正面.png', './allImages/航天系列/航天系列GA8600.WHW正面.png', './allImages/航天系列/航天系列GA8602.WBW正面.png', './allImages/航天系列/航天系列GA880001.WLW正面.png', './allImages/航天系列/航天系列GA880018.WBW正面.png', './allImages/航天系列/航天系列GA881005.WHW正面.png', './allImages/航天系列/航天系列GA881005.WLW正面.png', './allImages/航天系列/航天系列Z091(F)正面.png'], ['./allImages/花语系列/花语系列LA802007.WWW正面.png', './allImages/花语系列/花语系列LA802008.MWMD正面.png', './allImages/花语系列/花语系列LA805005.MWMD正面.png', './allImages/花语系列/花语系列LA805005.MWM正面.png', './allImages/花语系列/花语系列LA805005.WWW正面.png', './allImages/花语系列/飞亚达花语系列A2016040C正面.png', './allImages/花语系列/飞亚达花语系列LA802008.PWS正面.png', './allImages/花语系列/飞亚达花语系列LA802008.WWHD正面.png', './allImages/花语系列/飞亚达花语系列LA802009.PWRD正面.png', './allImages/花语系列/飞亚达花语系列LA802010.TWT正面.png', './allImages/花语系列/飞亚达花语系列LA802011.WWBD正面.png', './allImages/花语系列/飞亚达花语系列LA805000.WLLD正面.png', './allImages/花语系列/飞亚达花语系列LA805002.WBB正面.png', './allImages/花语系列/飞亚达花语系列LA805003.PWPD正面.png'], ['./allImages/锋逸系列/G622.WBW.png', './allImages/锋逸系列/G926.WBW.png', './allImages/锋逸系列/G937.WBW.png', './allImages/锋逸系列/G956.WBW.png', './allImages/锋逸系列/GA8208.WBW.png', './allImages/锋逸系列/GA8210.WWW.png','./allImages/锋逸系列/GA8310.MBM.png', './allImages/锋逸系列/GA8310.MWM.png', './allImages/锋逸系列/GA8316.WBW.png', './allImages/锋逸系列/GA8318.WMW.png', './allImages/锋逸系列/GA8318.WWB.png', './allImages/锋逸系列/GA8322.WBW.png', './allImages/锋逸系列/GA8358.WBW.png', './allImages/锋逸系列/GA8358.WWW.png', './allImages/锋逸系列/GA8392.MWM.png', './allImages/锋逸系列/GA8410.TWT.png', './allImages/锋逸系列/GA8630.WBW.png', './allImages/锋逸系列/L622.WBW.png', './allImages/锋逸系列/L862.WBW.png', './allImages/锋逸系列/L882.WHW.png', './allImages/锋逸系列/L923.WHW.png', './allImages/锋逸系列/L926.WBW.png', './allImages/锋逸系列/L937.WBW.png', './allImages/锋逸系列/L950.WWW.png', './allImages/锋逸系列/L956.WBW.png', './allImages/锋逸系列/L958.WBW.png', './allImages/锋逸系列/L968.WWW.png', './allImages/锋逸系列/L970.MBM.png', './allImages/锋逸系列/LA8310.MBM.png', './allImages/锋逸系列/LA8310.MWM.png', './allImages/锋逸系列/LA8322.WBW.png', './allImages/锋逸系列/LA8358.WBW.png', './allImages/锋逸系列/LA8358.WWW.png', './allImages/锋逸系列/LA8392.MWM.png'], ['./allImages/风致系列/风致系列 WGA801001 拷贝.WLL正面.png', './allImages/风致系列/风致系列-GA801006.PLB正面.png', './allImages/风致系列/风致系列GA801000 拷贝.MWM正面.png', './allImages/风致系列/风致系列GA801000 拷贝.WWB正面.png', './allImages/风致系列/风致系列GA801001 拷贝.WBW正面.png', './allImages/风致系列/风致系列GA801001 拷贝.WLW正面.png', './allImages/风致系列/风致系列GA801002 拷贝.PWK正面.png', './allImages/风致系列/风致系列GA801002 拷贝.WWW正面.png', './allImages/风致系列/风致系列GA801003 拷贝.PLB正面.png', './allImages/风致系列/风致系列GA801005 拷贝.WBW正面.png', './allImages/风致系列/风致系列GA801005.WLW正面.png', './allImages/风致系列/风致系列GA801008.WLW正面.png', './allImages/风致系列/风致系列LA801008 拷贝.WLW正面.png', './allImages/风致系列/风致系列LA801008.PLPD正面.png', './allImages/风致系列/风致系列LA801008.WWW正面.png'], ['./allImages/马赫系列/DG31000 拷贝.BBB正面.png', './allImages/马赫系列/DG31000 拷贝.BLB正面.png', './allImages/马赫系列/DGA31001 拷贝.BBB正面.png', './allImages/马赫系列/DGA31001 拷贝.WBK正面.png', './allImages/马赫系列/FSZ09032 拷贝.png', './allImages/马赫系列/GA8540.BBB正面.png', './allImages/马赫系列/GA8540.WBR正面.png', './allImages/马赫系列/GA8542.WBW正面.png', './allImages/马赫系列/GA8546.WBB正面.png', './allImages/马赫系列/GA8546.WBW正面.png', './allImages/马赫系列/马赫系列-GA881011.BBB正面.png', './allImages/马赫系列/马赫系列-GA881011.BBB正面皮带.png', './allImages/马赫系列/马赫系列-GA881011.WBB正面.png', './allImages/马赫系列/马赫系列-GA881011.WBB正面皮带.png', './allImages/马赫系列/马赫系列FSZ09033.X正面.png', './allImages/马赫系列/马赫系列G881006.BNB正面.png', './allImages/马赫系列/马赫系列G881006.CLW正面.png', './allImages/马赫系列/马赫系列G881006.WKK正面.png', './allImages/马赫系列/马赫系列GA881000.WBB正面.png', './allImages/马赫系列/马赫系列GA881007.BBB正面.png', './allImages/马赫系列/马赫系列GA881007.WLL正面.png', './allImages/马赫系列/马赫系列WGA881002 拷贝.BBB正面.png', './allImages/马赫系列/马赫系列WGA881002 拷贝.WBB正面.png', './allImages/马赫系列/马赫系列“歼-20”五级钛款GA881000.WBB正面.png', './allImages/马赫系列/马赫系列“歼-20”大马士革钢款GA881001.WBB正面.png', './allImages/马赫系列/马赫系列”歼-20“大马士革钢款GA881001.WBB正面.png', './allImages/马赫系列/马赫系列海军航空兵表正面.png', './allImages/马赫系列/马赫系列空军不对称表-正面.png']]
function preload() {
  for (let i = 0; i < list1.length; i++) {
    for(let j = 0; j < list1[i].length; j++){
    // img=loadImage("F:/imgMerge/allImages/马赫系列/马赫系列空军不对称表-正面.png")
    // console.log("🚀 ~ file: mySketch.js ~ line 15 ~ preload ~ list1[i][j]", list1[i][j])

    append(imgs,loadImage(list1[i][j]));
    }
  }
}

var watchExploration;
function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  angleMode(DEGREES);
  watchExploration = createButton("探 索").addClass('exploreit');
  watchExploration.position(8, 8);
  watchExploration.mousePressed(watchExplorationNow);
  // watchExplorationNow();
}



function draw() {
  
  background(0,0,0);

  // -----------------------------------------------------

  // --------------------------------------------------------
  orbitControl();
  push();
  translate(-500, 0, -100);
  let n = 0;
  for (let j = 0; j < 40; j++) {
    for (let i = 0; i < 40; i++) {    
      let x = map(i, 0, 20, -500, 500);
      let y = map(j, 0, 20, -500, 500);
      let z = sin(frameCount + j*10 + i * 10)*80+cos(frameCount + j*10 + i * 10)*80+10;
      // let z=0
      push();
      translate(x, y, z);
      texture(imgs[n]);
      plane(50, 50);
      n = (n + 1) % imgs.length;
      pop();
    }
  }
  pop();
}


function watchExplorationNow(){
  window.location.href='/interaction.html'
}