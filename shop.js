// /*window.addEventListener("load", () => {
//     document.body.classList.remove("preload");
// });

// document.addEventListener("DOMContentLoaded", () => {
//     const nav = document.querySelector(".nav");

//     document.querySelector("#btnNav").addEventListener("click", () => {
//         nav.classList.add("nav--open");
//     });

//     document.querySelector(".nav__overlay").addEventListener("click", () => {
//         nav.classList.remove("nav--open");
//     });
// });
// */
// const img1 = document.getElementById("button1");

// img1.addEventListener("click", () => {
//     document.write("hello world")
// })
// const img2 = document.getElementById("button2");

// img2.addEventListener("click", () => {
//     console.log("hello world")
//     if(document.getElementById('picture2').classList.contains("remove21")){
//         document.getElementById("picture2").classList.remove("remove21")
//     }else{
//         document.getElementById("picture2").classList.add("remove21")
//     }
// })
// const img3 = document.getElementById("button3");

// img3.addEventListener("click", () => {
//     console.log("hello world")
//     if(document.getElementById('picture3').classList.contains("remove20")){
//         document.getElementById("picture3").classList.remove("remove20")
//     }else{
//         document.getElementById("picture3").classList.add("remove20")
//     }
// })
// const img4 = document.getElementById("button4");

//  img4.addEventListener("click", () => {
//    if(document.getElementById("picture4").classList.contains("remove")){
//      document.getElementById("picture4").classList.remove("remove")
//    }else{
//      document.getElementById("picture4").classList.add("remove")
//    }
//  })
//  const img5 = document.getElementById("button5");

//  img5.addEventListener("click", () => {
//      if(document.getElementById("picture5").classList.contains("remove1")){
//         document.getElementById("picture5").classList.remove("remove1")
//      }else{
//          document.getElementById("picture5").classList.add("remove1")

//      }
//  })
// }
// img4.addEventListener("click", () => {
//     if(document.getElementById("picture4").classList.contains("remove2")){
//         document.getElementById("picture4").classList.remove("remove2")
//     }else{
//         document.getElementById("picture4").classList.add("remove2")
//     }
// })
// const shoplist = document.getElementById("button5");
// shoplist.addEventListener("click",() => {
//     if(document.getElementById("shoplist").classList.contains("remove")){
//         document.getElementById("shoplist").classList.remove("remove")
//     }else{
//         document.getElementById("shoplist").classList.add("remove")
//     }
// } )
// button3.addEventListener("click", () => {
//  document.querySelector(".container2").innerHTML =`
//  </span>

//  <span id="picture3">
//      <p1 class="button12">
//          <button class="plus" onclick="totalClick111(1)">+</button>
//          <span id="totalClicks111">0</span>
//          <button class="negative" onclick="totalClick111(-1)">-</button>
//      </p1><span id="totalprice"></span>
//      <p1 class="dis3">the price is : 500$</p1>
//      <img src="https://dkstatics-public.digikala.com/digikala-products/5f2dc80573d25082a1300753cf18734e22a85bae_1653650351.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80"
//          class="pic3">
//  </span>
//  `
// })

// button4.addEventListener("click", () => {
//     document.querySelector(".container1").innerHTML =`
//                                <span id="picture4">

//                                 <p1 class="button10" id="picture5">
//                                     <button class="plus" onclick="totalClick11(1)">+</button>
//                                     <span id="totalClicks11">0</span>
//                                     <button class="negative" onclick="totalClick11(-1)">-</button>
//                                 </p1><span id="totalprice"></span>
//                                 <p1 class="dis4" id="picture5">the price is : 200$</p1>
//                                 <img src="https://dkstatics-public.digikala.com/digikala-products/54d4e0b50b879ed8e4c4a3d64e13b623ae7bf393_1660593785.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80"
//                                     class="pic4" id="picture5">
//     `
// })

// button5.addEventListener("clicl", () => {
//     document.querySelector(".container").innerHTML =`
//     <span id="picture5">
//     <p1 class="button11">
//         <button class="plus" onclick="totalClick1(1)">+</button>
//         <span id="totalClicks1">0</span>
//         <button class="negative" onclick="totalClick1(-1)">-</button>
//     </p1><span id="totalprice"></span>
//     <p1 class="dis5">the price is : 200$</p1>
//     <img src="https://dkstatics-public.digikala.com/digikala-products/8f435cb234a56316906e4384c485db63e58d798e_1598372344.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80"
//         class="pic5">
// </span>`
// })
let button1 = document.getElementById("button1");
let button2 = document.getElementById("button2");
let button3 = document.getElementById("button3");
let button4 = document.getElementById("button4");
let button5 = document.getElementById("button5");
// close1.addEventListener("click", () => {
    //     console.log("hello world");
    // })
let toggle1 = true;
let toggle2 = true;
let toggle3 = true;
let toggle4 = true;
let toggle5 = true;

function close1(el) {
  console.log("something");
  const parentTargetValue = el.getAttribute("parentTarget");
  console.log(`parent target is ${parentTargetValue}`);
  const parent = document.querySelector(`[target="${parentTargetValue}"]`);
  console.log(parent.getAttribute("miaw"));
  const container = document.querySelector(".container1");
  container.removeChild(parent);
  toggle1 =true;
}

function close2(el) {
  console.log("hello world");
  const parenttargetvaluee = el.getAttribute("parentTarget");
  console.log(`parent target is ${parenttargetvaluee}`);
  const parent1 = document.querySelector(`[target="${parenttargetvaluee}"]`);
  console.log(parent1.getAttribute("miaw1"));
  const container = document.querySelector(".container1");
  container.removeChild(parent1);
  toggle2 = true;
}
function close3(el) {
    console.log("hello world");
    const parenttargetvaluee2 = el.getAttribute("parentTarget");
    console.log(`parent target is ${parenttargetvaluee2}`);
    const parent2 = document.querySelector(`[target="${parenttargetvaluee2}"]`);
    console.log(parent2.getAttribute("miaw3"));
    const container = document.querySelector(".container1");
    container.removeChild(parent2);
    toggle3 = true;
  }
  function close4(el) {
    console.log("hello world44");
    const parenttargetvaluee3 = el.getAttribute("parentTarget");
    console.log(`parent target is ${parenttargetvaluee3}`);
    const parent3 = document.querySelector(`[target="${parenttargetvaluee3}"]`);
    console.log(parent3.getAttribute("miaw4"));
    const container = document.querySelector(".container1");
    container.removeChild(parent3);
    toggle4 = true;
  }
  function close5(el) {
    console.log("hello world");
    const parenttargetvaluee5 = el.getAttribute("parentTarget");
    console.log(`parent target is ${parenttargetvaluee5}`);
    const parent5 = document.querySelector(`[target="${parenttargetvaluee5}"]`);
    console.log(parent5.getAttribute("miaw5"));
    const container = document.querySelector(".container1");
    container.removeChild(parent5);
    toggle5 = true;
  }
button1.addEventListener("click", () => {
  console.log("hello world1");
  if(toggle1){ 
     document.querySelector(".container1").innerHTML += `<div target="parent-1" miaw="herche"> <ion-icon  class="close1" name="close-circle-outline" parentTarget="parent-1" onclick="close1(this)"></ion-icon>  <img class="imig1" id="image1"
     src="https://dkstatics-public.digikala.com/digikala-categories/5795b31a635f1e23df96a908c009f31744ede38f_1656160928.png"
     alt="stuff"><p1 class="p1 p3">dish washer</p1><p2 class="p2 p3">best dishwasher ever exist</p2>
     <span class="container">
     <input type="number" disabled value="250" class="price">
      <input type="number" value="0" class="count" id="num"  onchange="sum()" >
</span>
<span id="total"></span>
     </div>`;
    toggle1 = false;
}else{
    document.querySelector(".container1").innerHTML += " ";
}

});

button2.addEventListener("click", () => {
  console.log("hello world2");
  if(toggle2){
  document.querySelector(".container1").innerHTML += `<div target="parent-2" miaw1="miaw"> <ion-icon  class="close1" name="close-circle-outline" parentTarget="parent-2" onclick="close2(this)"></ion-icon><img src="https://dkstatics-public.digikala.com/digikala-products/e4b2145a5e77bdc30aafff78bba4734798ac8d68_1620202335.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80"
  alt="headset's" class="imig1"><p1 class="p3 p1"> Galaxy </p1> <p2 class="p2">a good headset for the ordenary people </p2> 
  <span class="container">
     <input type="number" disabled value="200" class="price">
      <input type="number" value="0" class="count" id="num"  onchange="sum()" >
</span>
<span id="total"></span>
</div>`;
  toggle2 = false;
}else{
    document.querySelector(".container1").innerHTML += " ";
}
});

button3.addEventListener("click", () => {
  console.log("hello world3");
  if(toggle3){ 
     document.querySelector(".container1").innerHTML += ` <div target="parent-3" miaw3="miawww" > <ion-icon  class="close1" name="close-circle-outline" parentTarget="parent-3" onclick="close3(this)"></ion-icon> <img src="https://dkstatics-public.digikala.com/digikala-products/5f2dc80573d25082a1300753cf18734e22a85bae_1653650351.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80"
     alt="headphone" class="imig1"> <p1 class="p1 p2"> sumsung</p1><p2 class="p2"> this is the best headphone ever.......</p2> 
     <span class="container">
     <input type="number" disabled value="150" class="price">
      <input type="number" value="0" class="count" id="num"  onchange="sum()" >
</span>
<span id="total"></span>
 </div>`;
     toggle3 = false;
}else{
    document.querySelector(".container1").innerHTML += " ";
}
});

button4.addEventListener("click", () => {
  console.log("hello world4");
  if(toggle4){ 
     document.querySelector(".container1").innerHTML += `<div target="parent-4" miaw4="herche"> <ion-icon  class="close1" name="close-circle-outline" parentTarget="parent-4" onclick="close4(this)"></ion-icon>  <img src="https://dkstatics-public.digikala.com/digikala-products/54d4e0b50b879ed8e4c4a3d64e13b623ae7bf393_1660593785.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80"
     alt="headset's" class="imig1"> <p1 class="p1"> i phone </p1> <p2> a good headset for progrummers's........</p2> 
     <span class="container">
     <input type="number" disabled value="300" class="price">
      <input type="number" value="0" class="count" id="num"  onchange="sum()" >
</span>
<span id="total"></span>
 </div>`;
     toggle4 = false;
}else{
    document.querySelector(".container1").innerHTML += " ";
}
});

button5.addEventListener("click", () => {
  console.log("hello world5");
  if(toggle5){
      document.querySelector(".container1").innerHTML += `<div target="parent-5" miaw5="herche">
       <ion-icon  class=" close1" name="close-circle-outline" parentTarget="parent-5" onclick="close5(this)"> </ion-icon>
        <img src="https://dkstatics-public.digikala.com/digikala-products/8f435cb234a56316906e4384c485db63e58d798e_1598372344.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80" alt="headset's" class="imig1">
         <p1 class="p1"> i phone </p1> 
         <p2>a good and usefull device for everyone </p2>
  <span class="container">
     <input type="number" disabled value="100" class="price">
      <input type="number" value="0" class="count" id="num"  onchange="sum()" >
</span>
<span id="total"></span>
      <p1 class="numberClass"></p1></div>`;
      toggle5 = false;
}else{
    document.querySelector(".container1").innerHTML += " ";
}
});

function sum(){
  const sum = document.getElementsByClassName("container");
  let result = 0;
  for (i = 0; i < sum.length; i++){
    const price = sum[i].children[0].value;
    const count = sum[i].children[1].value;
    if(count > 0){   
     result += price * count;
    console.log(result);
  }else{
    console.log("hello world");
  }

  }
  document.getElementById("total").innerText= `$${result}`
}