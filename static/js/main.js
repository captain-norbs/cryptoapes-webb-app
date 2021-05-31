
window.onload = function() {
  function hideAllpages() {
    document.querySelector(".homepage").classList.add("hidden");
    document.querySelector("._8-bit-apes-page").classList.add("hidden");
    document.querySelector(".ape-types-attributes").classList.add("hidden");
    document.querySelector(".ape-specific-type-attribute").classList.add("hidden");
    document.querySelector(".individual-ape-page").classList.add("hidden");
  }

  function showPage(urlPath) {
    if (urlPath.match(/^\/apes\/ape-[0-9][0-9][0-9][0-9]\/$/)) {
      unselectAllNavLinks();
      hideAllpages();
      showIndividualApe(urlPath.substring(10, urlPath.length - 1));
      document.querySelector(".individual-ape-page").classList.remove("hidden");
    }
    else if (urlPath.match(/^\/types\/(?:grey|brown|green|cyborg|golden)\/$/)) {
      unselectAllNavLinks();
      hideAllpages();
      showApeGroup("type", urlPath.substring(7, urlPath.length - 1));
      document.querySelector(".ape-specific-type-attribute").classList.remove("hidden");
    }
    else if (urlPath.match(/^\/attributes\/([a-z|-]+)\/$/)) {
      unselectAllNavLinks();
      hideAllpages();
      showApeGroup("attribute", urlPath.substring(12, urlPath.length - 1));
      document.querySelector(".ape-specific-type-attribute").classList.remove("hidden");
    }
    else if (urlPath == '/ape-types-attributes/') {
      unselectAllNavLinks();
      hideAllpages();
      document.querySelector(".nav-links-right > .nav-link:nth-child(2)").classList.add("selected");
      document.querySelector(".ape-types-attributes").classList.remove("hidden");
    }
    else if (urlPath == '/8-bit-apes/') {
      unselectAllNavLinks();
      hideAllpages();
      document.querySelector(".nav-links-right > .nav-link:nth-child(1)").classList.add("selected");
      document.querySelector("._8-bit-apes-page").classList.remove("hidden");
    }
    else if (urlPath == '/') {
      unselectAllNavLinks();
      hideAllpages();
      document.querySelector(".nav-links > .nav-link").classList.add("selected");
      document.querySelector(".homepage").classList.remove("hidden");
    }
    window.scrollTo(0,0);
  }

  function unselectAllNavLinks() {
    document.querySelector(".nav-links > .nav-link").classList.remove("selected");
    let leftLinks = document.querySelectorAll(".nav-links-right > .nav-link");
    for (let i = 0; i < leftLinks.length; i++) {
      leftLinks[i].classList.remove("selected");
    }
  }

  function shuffle(array) {
    let currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }

  function drawApeImgs(fileName, imgCount, customClass) {
    let apeLink = document.createElement("A");
    apeLink.setAttribute("href", "/apes/" + fileName);
    apeLink.classList.add("internal-link");
    if (customClass)
      apeLink.classList.add("apeLink-group");
    apeLink.classList.add("apeLink");
    if (imgCount > 1) apeLink.classList.add("desktop-only");
    let apeImg = document.createElement("IMG");
    apeImg.classList.add("ape-48x48");
    apeImg.setAttribute("loading", "lazy");
    apeImg.setAttribute("src", "/static/images/apes-2x/" + fileName + ".png");
    apeLink.appendChild(apeImg);
    return apeLink;
  }

  function titleCase(str) {
    var splitStr = str.toLowerCase().split(' ');
    for (var i = 0; i < splitStr.length; i++) {
        // You do not need to check if i is larger than splitStr length, as your for does that for you
        // Assign it back to the array
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
    }
    // Directly return the joined string
    return splitStr.join(' '); 
 }

  const apes = JSON.parse(document.getElementById("apes").innerText);

  // fill random apes in example section of types and attributes page
  let randomArr = [];
  for (let i = 0; i < 10000; i++) {
    randomArr.push(i);
  }
  randomArr = shuffle(randomArr);

  // below is for creating apes types and attributes page
  let beardAttrs = {"Black Beard": {"count": 0, "files": []}, "Brown Beard": {"count": 0, "files": []}, "White Beard": {"count": 0, "files": []}, "Blonde Beard": {"count": 0, "files": []}, "Black Goatee": {"count": 0, "files": []},
    "Red Goatee": {"count": 0, "files": []}, "White Goatee": {"count": 0, "files": []}, "Blonde Goatee": {"count": 0, "files": []}, "Blonde Chin": {"count": 0, "files": []}, "Black Chin": {"count": 0, "files": []}, "Red Chin": {"count": 0, "files": []},
    "Blonde Diamond": {"count": 0, "files": []}, "Black Diamond": {"count": 0, "files": []}, "White Diamond": {"count": 0, "files": []}};
  let noseAttrs = {"Nose Ring": {"count": 0, "files": []}};
  let chainAttrs = {"Gold Chain": {"count": 0, "files": []}};
  let earAttrs = {"Left Earring": {"count": 0, "files": []}, "Right Earring": {"count": 0, "files": []}, "Two Earrings": {"count": 0, "files": []}};
  let shirtAttrs = {"White T": {"count": 0, "files": []}, "Red T": {"count": 0, "files": []}, "Check": {"count": 0, "files": []}, "Stripe": {"count": 0, "files": []}, "Hawaiian": {"count": 0, "files": []}, "Camo": {"count": 0, "files": []}, "Orange T": {"count": 0, "files": []},
    "Fonzie": {"count": 0, "files": []}, "Baseball": {"count": 0, "files": []}, "Spots": {"count": 0, "files": []}};
  let glassesAttrs = {"Wayfarer": {"count": 0, "files": []}, "Classic": {"count": 0, "files": []}, "Neon": {"count": 0, "files": []}, "Big": {"count": 0, "files": []}, "Goggles": {"count": 0, "files": []}, "Hero Mask": {"count": 0, "files": []},
    "Jobs": {"count": 0, "files": []}, "Eye Patch": {"count": 0, "files": []}, "Reading": {"count": 0, "files": []}};
  let headAttrs = {"Elvis": {"count": 0, "files": []}, "Drago": {"count": 0, "files": []}, "Thor": {"count": 0, "files": []}, "Doc Brown": {"count": 0, "files": []}, "Purple Mohawk": {"count": 0, "files": []}, "Green Mohawk": {"count": 0, "files": []},
    "Loki Horns": {"count": 0, "files": []}, "Devil Horns": {"count": 0, "files": []}, "Bowler": {"count": 0, "files": []}, "Tophat": {"count": 0, "files": []}, "Fedora": {"count": 0, "files": []}, "Police Hat": {"count": 0, "files": []}, "Baseball Front": {"count": 0, "files": []},
    "Baseball Back": {"count": 0, "files": []}, "Sweatband": {"count": 0, "files": []}, "Biker Hanky": {"count": 0, "files": []}, "WallStreetBets": {"count": 0, "files": []}, "Gold Crown": {"count": 0, "files": []}, "Wool Hat": {"count": 0, "files": []},
    "Redhead": {"count": 0, "files": []}, "Wonka": {"count": 0, "files": []}, "Robo": {"count": 0, "files": []}, "Space ApeX": {"count": 0, "files": []}, "Afro": {"count": 0, "files": []}, "Dark Spike": {"count": 0, "files": []}, "Purple Buzzcut": {"count": 0, "files": []},
    "Dark Buzzcut": {"count": 0, "files": []}, "Point Break": {"count": 0, "files": []}, "Dark Mess": {"count": 0, "files": []}, "Pink Afro": {"count": 0, "files": []}, "White Afro": {"count": 0, "files": []}, "White Buzzcut": {"count": 0, "files": []}, "Clown": {"count": 0, "files": []}};
  let eyesAttrs = {"Yellow Eyes": {"count": 0, "files": []}, "Laser Eyes": {"count": 0, "files": []}, "Blue Eyes": {"count": 0, "files": []}, "Zombie Eyes": {"count": 0, "files": []}};
  let mouthAttrs = {"Black Mouth": {"count": 0, "files": []}, "Pink Mouth": {"count": 0, "files": []}, "Teeth Smile": {"count": 0, "files": []}, "Gold Tooth": {"count": 0, "files": []}, "Red Lipstick": {"count": 0, "files": []},
    "Purple Lipstick": {"count": 0, "files": []}, "Smile": {"count": 0, "files": []}, "Buck Teeth": {"count": 0, "files": []}};

  let counts = [0, 0, 0, 0, 0];
  let greyCount = 0;
  let brownCount = 0;
  let greenCount = 0;
  let cyborgCount = 0;
  let goldenCount = 0;
  for (let i = 0; i < randomArr.length; i++) {
    if (apes[randomArr[i]][2]) {
      eyesAttrs[apes[randomArr[i]][2]]["count"]++;
      if (eyesAttrs[apes[randomArr[i]][2]]["files"].length < 6)
        eyesAttrs[apes[randomArr[i]][2]]["files"].push(apes[randomArr[i]][20]);
    }
    if (apes[randomArr[i]][3]) {
      mouthAttrs[apes[randomArr[i]][3]]["count"]++;
      if (mouthAttrs[apes[randomArr[i]][3]]["files"].length < 6)
        mouthAttrs[apes[randomArr[i]][3]]["files"].push(apes[randomArr[i]][20]);
    }
    if (apes[randomArr[i]][4]) {
      shirtAttrs[apes[randomArr[i]][4]]["count"]++;
      if (shirtAttrs[apes[randomArr[i]][4]]["files"].length < 6)
        shirtAttrs[apes[randomArr[i]][4]]["files"].push(apes[randomArr[i]][20]);
    }
    if (apes[randomArr[i]][5]) {
      headAttrs[apes[randomArr[i]][5]]["count"]++;
      if (headAttrs[apes[randomArr[i]][5]]["files"].length < 6)
        headAttrs[apes[randomArr[i]][5]]["files"].push(apes[randomArr[i]][20]);
    }
    if (apes[randomArr[i]][6]) {
      beardAttrs[apes[randomArr[i]][6]]["count"]++;
      if (beardAttrs[apes[randomArr[i]][6]]["files"].length < 6)
        beardAttrs[apes[randomArr[i]][6]]["files"].push(apes[randomArr[i]][20]);
    }
    if (apes[randomArr[i]][7]) {
      earAttrs[apes[randomArr[i]][7]]["count"]++;
      if (earAttrs[apes[randomArr[i]][7]]["files"].length < 6)
        earAttrs[apes[randomArr[i]][7]]["files"].push(apes[randomArr[i]][20]);
    }
    if (apes[randomArr[i]][8]) {
      noseAttrs[apes[randomArr[i]][8]]["count"]++;
      if (noseAttrs[apes[randomArr[i]][8]]["files"].length < 6)
        noseAttrs[apes[randomArr[i]][8]]["files"].push(apes[randomArr[i]][20]);
    }
    if (apes[randomArr[i]][9]) {
      glassesAttrs[apes[randomArr[i]][9]]["count"]++;
      if (glassesAttrs[apes[randomArr[i]][9]]["files"].length < 6)
        glassesAttrs[apes[randomArr[i]][9]]["files"].push(apes[randomArr[i]][20]);
    }
    if (apes[randomArr[i]][10]) {
      chainAttrs[apes[randomArr[i]][10]]["count"]++;
      if (chainAttrs[apes[randomArr[i]][10]]["files"].length < 6)
        chainAttrs[apes[randomArr[i]][10]]["files"].push(apes[randomArr[i]][20]);
    }
    let type = apes[randomArr[i]][1];
    if (type == 'Grey Ape') {
      greyCount += 1;
    }
    else if (type == 'Brown Ape') {
      brownCount += 1;
    }
    else if (type == 'Green Ape') {
      greenCount += 1;
    }
    else if (type == 'Cyborg Ape') {
      cyborgCount += 1;
    }
    else if (type == 'Golden Ape') {
      goldenCount += 1;
    }
    if (!(counts[0] == 6 && counts[1] == 6 && counts[2] == 6 && counts[3] == 6 && counts[4] == 6)) {
      let idx;
      switch(type) {
        case 'Grey Ape':
          idx = 0;
          break;
        case 'Brown Ape':
          idx = 1;
          break;
        case 'Green Ape':
          idx = 2;
          break;
        case 'Cyborg Ape':
          idx = 3;
          break;
        case 'Golden Ape':
          idx = 4;
          break;
      }
      if (counts[idx] == 6) continue;
      else counts[idx] = counts[idx] + 1;
      let apeLink = drawApeImgs(apes[randomArr[i]][20], counts[idx]);
      document.querySelector(".apes-types-attributes-table tbody tr:nth-child(" + (idx+1) + ") td:nth-child(4)").appendChild(apeLink);
    }
  }

  document.querySelector(".grey-ape-count").innerText = greyCount;
  document.querySelector(".brown-ape-count").innerText = brownCount;
  document.querySelector(".green-ape-count").innerText = greenCount;
  document.querySelector(".cyborg-ape-count").innerText = cyborgCount;
  document.querySelector(".golden-ape-count").innerText = goldenCount;

  let attrTable = document.querySelector(".apes-types-attributes-table.ape-attributes-table");
    
  let attrKeys = [Object.keys(headAttrs), Object.keys(beardAttrs), Object.keys(mouthAttrs),
    Object.keys(noseAttrs), Object.keys(chainAttrs), Object.keys(eyesAttrs), Object.keys(glassesAttrs),
    Object.keys(earAttrs), Object.keys(shirtAttrs)];
  // sort headKeys by attr count?
  let prevElem = attrTable.querySelector("tbody tr:nth-child(1)");
  for (let j = 0; j < attrKeys.length; j++) {
    for (let i = 0; i < attrKeys[j].length; i++) {
      let rowElem = document.createElement("TR");
      prevElem.insertAdjacentElement('afterend', rowElem);
      let tdAttrName = document.createElement("TD");
      let tdAttrCount = document.createElement("TD");
      let tdAttrMinted = document.createElement("TD");
      let tdAttrExamples = document.createElement("TD");

      let attrLink = document.createElement("A");
      attrLink.innerText = attrKeys[j][i];
      attrLink.setAttribute("href", "/attributes/" + attrKeys[j][i].toLowerCase().replace(" ", "-"));
      attrLink.classList.add("internal-link");
      tdAttrName.appendChild(attrLink);
      if (j == 0) {
        tdAttrCount.innerText = headAttrs[attrKeys[j][i]]["count"];
        for (let k = 0; k < headAttrs[attrKeys[j][i]]["files"].length; k++) {
          let sampleLink = drawApeImgs(headAttrs[attrKeys[j][i]]["files"][k], k+1);
          tdAttrExamples.appendChild(sampleLink);
        }
      }
      if (j == 1) {
        tdAttrCount.innerText = beardAttrs[attrKeys[j][i]]["count"];
        for (let k = 0; k < beardAttrs[attrKeys[j][i]]["files"].length; k++) {
          let sampleLink = drawApeImgs(beardAttrs[attrKeys[j][i]]["files"][k], k+1);
          tdAttrExamples.appendChild(sampleLink);
        }
      }
      if (j == 2) {
        tdAttrCount.innerText = mouthAttrs[attrKeys[j][i]]["count"];
        for (let k = 0; k < mouthAttrs[attrKeys[j][i]]["files"].length; k++) {
          let sampleLink = drawApeImgs(mouthAttrs[attrKeys[j][i]]["files"][k], k+1);
          tdAttrExamples.appendChild(sampleLink);
        }
      }
      if (j == 3) {
        tdAttrCount.innerText = noseAttrs[attrKeys[j][i]]["count"];
        for (let k = 0; k < noseAttrs[attrKeys[j][i]]["files"].length; k++) {
          let sampleLink = drawApeImgs(noseAttrs[attrKeys[j][i]]["files"][k], k+1);
          tdAttrExamples.appendChild(sampleLink);
        }
      }
      if (j == 4) {
        tdAttrCount.innerText = chainAttrs[attrKeys[j][i]]["count"];
        for (let k = 0; k < chainAttrs[attrKeys[j][i]]["files"].length; k++) {
          let sampleLink = drawApeImgs(chainAttrs[attrKeys[j][i]]["files"][k], k+1);
          tdAttrExamples.appendChild(sampleLink);
        }
      }
      if (j == 5) {
        tdAttrCount.innerText = eyesAttrs[attrKeys[j][i]]["count"];
        for (let k = 0; k < eyesAttrs[attrKeys[j][i]]["files"].length; k++) {
          let sampleLink = drawApeImgs(eyesAttrs[attrKeys[j][i]]["files"][k], k+1);
          tdAttrExamples.appendChild(sampleLink);
        }
      }
      if (j == 6) {
        tdAttrCount.innerText = glassesAttrs[attrKeys[j][i]]["count"];
        for (let k = 0; k < glassesAttrs[attrKeys[j][i]]["files"].length; k++) {
          let sampleLink = drawApeImgs(glassesAttrs[attrKeys[j][i]]["files"][k], k+1);
          tdAttrExamples.appendChild(sampleLink);
        }
      }
      if (j == 7) {
        tdAttrCount.innerText = earAttrs[attrKeys[j][i]]["count"];
        for (let k = 0; k < earAttrs[attrKeys[j][i]]["files"].length; k++) {
          let sampleLink = drawApeImgs(earAttrs[attrKeys[j][i]]["files"][k], k+1);
          tdAttrExamples.appendChild(sampleLink);
        }
      }
      if (j == 8) {
        tdAttrCount.innerText = shirtAttrs[attrKeys[j][i]]["count"];
        for (let k = 0; k < shirtAttrs[attrKeys[j][i]]["files"].length; k++) {
          let sampleLink = drawApeImgs(shirtAttrs[attrKeys[j][i]]["files"][k], k+1);
          tdAttrExamples.appendChild(sampleLink);
        }
      }
      tdAttrMinted.innerText = "0";
      // TO DO: populate tdAttrExamples
      rowElem.appendChild(tdAttrName);
      rowElem.appendChild(tdAttrCount);
      rowElem.appendChild(tdAttrMinted);
      rowElem.appendChild(tdAttrExamples);
      rowElem.classList.add("attr-colored-row");
      prevElem = rowElem;
    }
    prevElem = prevElem.nextElementSibling;
  }

  let urlPath = window.location.pathname;
  showPage(urlPath);

  function showApeGroup(typeOrAttr, typeOrAttrName) {
    if (typeOrAttr == "type")
      document.querySelector(".ape-specific-type-attribute a.breadcrumb-type-attr").innerText = "Types";
    else if (typeOrAttr == "attribute")
      document.querySelector(".ape-specific-type-attribute a.breadcrumb-type-attr").innerText = "Attributes";

    typeOrAttrName = typeOrAttrName.replaceAll("-", " ");
    typeOrAttrName = titleCase(typeOrAttrName);

    let typeOrAttrNameElems = document.querySelectorAll(".specific-type-or-attr");
    for (let i = 0; i < typeOrAttrNameElems.length; i++) {
      typeOrAttrNameElems[i].innerText = typeOrAttrName;
    }

    let apesInGroup = apes.filter(function(ape) {
      if (typeOrAttr == "type") {
        return ape[1] == typeOrAttrName + " Ape";
      }
      else if (typeOrAttr == "attribute") {
        return ape[2] == typeOrAttrName || ape[3] == typeOrAttrName || ape[4] == typeOrAttrName || 
        ape[5] == typeOrAttrName || ape[6] == typeOrAttrName || ape[7] == typeOrAttrName || 
        ape[8] == typeOrAttrName || ape[9] == typeOrAttrName || ape[10] == typeOrAttrName;
      }
      else return false;
    });

    document.querySelector(".apes-type-attr-count").innerText = apesInGroup.length;

    while (document.querySelector(".ape-img-group").firstChild) {
      document.querySelector(".ape-img-group").removeChild(document.querySelector(".ape-img-group").firstChild);
    }
    for (let i = 0; i < apesInGroup.length; i++) {
      let apeAnc = drawApeImgs(apesInGroup[i][20], 1, "apeLink-group");
      document.querySelector(".ape-img-group").appendChild(apeAnc);
    }
    
  }

  function getTypePercent(apeType) {
    if (apeType == "Grey Ape") {
      return "43%";
    }
    else if (apeType == "Brown Ape") {
      return "34%";
    }
    else if (apeType == "Green Ape") {
      return "22%";
    }
    else if (apeType == "Cyborg Ape") {
      return "0.88%";
    }
    else if (apeType == "Golden Ape") {
      return "0.09%";
    }
    return;
  }

  function getAttributePercent(count) {
    if (count < 100) {
      return (count/10000 * 100).toFixed(2) + "%";
    }
    else if (count < 1000) {
      return (count/10000 * 100).toFixed(1) + "%";
    }
    else {
      return (count/10000 * 100).toFixed(0) + "%";
    }
  }

  function showIndividualApe(apeId) {
    let ape = apes[parseInt(apeId)];
    let apeType = ape[1].split(" ")[0];
    document.querySelector(".individual-ape-id").innerText = "#" + parseInt(apeId);
    document.querySelector(".individual-breadcrumb-types-specific").innerText = apeType;
    document.querySelector(".individual-breadcrumb-types-specific").setAttribute("href", "/types/" + apeType.toLowerCase());
    document.querySelector(".ape-individual-page-img").style.backgroundImage = "url('/static/images/apes-14x/ape-"+ apeId + ".png')";
    let propertyCards = document.querySelectorAll(".ape-property-card-propname");
    let apeProperties = [ape[1], ape[2], ape[3]];
    for (let i = 0; i < propertyCards.length; i++) {
      propertyCards[i].innerText = apeProperties[i];
    }
    let propertyPercentElems = document.querySelectorAll(".ape-property-card-percent");
    let apePropertyPercents = [getTypePercent(ape[1]), getAttributePercent(eyesAttrs[ape[2]]["count"]), getAttributePercent(mouthAttrs[ape[3]]["count"])];
    for (let i = 0; i < propertyPercentElems.length; i++) {
      propertyPercentElems[i].innerText = apePropertyPercents[i];
    }
    let apeAttrs = [ape[5], ape[9], ape[4], ape[7], ape[10], ape[8], ape[6]];

    for (let i = 0; i < apeAttrs.length; i++) {
      if (apeAttrs[i]) {
        if (i == 2) {
          apeAttrs[i] = {type: "SHIRT", name: apeAttrs[i], percent: getAttributePercent(shirtAttrs[apeAttrs[i]]["count"])};
        }
        else if (i == 0) {
          apeAttrs[i] = {type: "HEAD", name: apeAttrs[i], percent: getAttributePercent(headAttrs[apeAttrs[i]]["count"])};
        }
        else if (i == 6) {
          apeAttrs[i] = {type: "BEARD", name: apeAttrs[i], percent: getAttributePercent(beardAttrs[apeAttrs[i]]["count"])};
        }
        else if (i == 3) {
          apeAttrs[i] = {type: "EARS", name: apeAttrs[i], percent: getAttributePercent(earAttrs[apeAttrs[i]]["count"])};
        }
        else if (i == 5) {
          apeAttrs[i] = {type: "NOSE", name: apeAttrs[i], percent: getAttributePercent(noseAttrs[apeAttrs[i]]["count"])};
        }
        else if (i == 1) {
          apeAttrs[i] = {type: "GLASSES", name: apeAttrs[i], percent: getAttributePercent(glassesAttrs[apeAttrs[i]]["count"])};
        }
        else if (i == 4) {
          apeAttrs[i] = {type: "CHAIN", name: apeAttrs[i], percent: getAttributePercent(chainAttrs[apeAttrs[i]]["count"])};
        }
      }
    }
    document.querySelector(".ape-individual-attr-count").innerText = ape[11] + "/7";
    for (let i = 0; i < apeAttrs.length; i++) {
      if (!apeAttrs[i]) continue;
      let attrCard = document.createElement("DIV");
      attrCard.classList.add("ape-attribute-card");
      let attrType = document.createElement("DIV");
      attrType.innerText = apeAttrs[i].type;
      let attrName = document.createElement("DIV");
      attrName.innerText = apeAttrs[i].name;
      attrName.classList.add("ape-attribute-card-propname");
      let attrPcnt = document.createElement("DIV");
      attrPcnt.innerText = apeAttrs[i].percent;
      attrPcnt.classList.add("ape-attribute-card-percent");

      attrCard.appendChild(attrType);
      attrCard.appendChild(attrName);
      attrCard.appendChild(attrPcnt);
      document.querySelector(".ape-individual-page-attributes-container").appendChild(attrCard);
    }
    document.querySelector(".ape-individual-stat-rating").innerText = ape[12];
  }

  window.onpopstate = function() {
    let urlPath = window.location.pathname;
    showPage(urlPath);
  };

  let internalLinks = document.querySelectorAll(".internal-link");
  for (let i = 0; i < internalLinks.length; i++) {
    internalLinks[i].addEventListener("click", function(evt) {
      evt.preventDefault();
      let newPath;
      try {
        newPath = new URL(evt.target.href);
      }
      catch {
        newPath = new URL(evt.target.parentElement.href);
      }
      newPath = newPath.pathname;
      if (newPath[newPath.length - 1] != "/")
        newPath += "/";
      history.pushState({}, document.title, newPath);
      showPage(newPath);
    })
  }
};

window.onscroll = function() {
  if (window.scrollY==0){
    document.querySelector("nav").style.borderBottom = "none";
  }
  else {
    document.querySelector("nav").style.borderBottom = "solid 4px rgba(0, 0, 0, 0.15)";
  }
};