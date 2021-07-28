// Imported Images in a Array by giving complete url
var imges = ['img/1.png', 'img/2.png', 'img/3.png', 'img/4.png', 'img/5.png'];

var landing_page = "https://campanha.boticario.com.br/cashbackdiadospais/BOAS_VINDAS?utm_source=Nbids&utm_medium=Paid&utm_campaign=OBoticario_Opus_202111_Cashback_Conversao_Nbids_Conversao_CPC_NA_Santa-Catarina_Geoloc&utm_content=OBoticario_Opus_202111_Cashback_Conversao_Nbids_Conversao_CPC_NA_Santa-Catarina_Geoloc_All_INT_Data_INT_18-49_SUL_All_NA&utm_term=OBoticario_Opus_202111_Cashback_Conversao_Nbids_Conversao_CPC_NA_Santa-Catarina_Geoloc_All_INT_Data_INT_18-49_SUL_All_NA_NA_NA_Display_Banner_768x1024_NA_NA"

var location_link = "https://www.google.com/maps/search/o+boticario"


var output = document.getElementById('output');
openfile(imges[0]);
pg1func(output);


// adding Event Listener
document.getElementById("output").addEventListener('click', function() {
                    //console.log('Click');
                    clickpattern();});


// Opening a  file
function openfile(filepath){
    output.src = filepath;
    //console.log("Current Img URL = ", output.src);
};


// click count but it refreshes again as per page loads
function APICall(n){
  // console.log(n,"no")
  var x =JSON.stringify({ key:n})
  fetch('https://demo.infuseads.com:8081/core/key-count/?id=41', {
    method: 'POST',
    body: x,
    headers: {
      'Content-type':  'application/json; charset=UTF-8'
    }
  }).then(function (response) {
    if (response.ok) {
      return response.json();
      // alert("Asd")
    }
    return Promise.reject(response);
  }).then(function (data) {
    console.log(data);
  }).catch(function (error) {
    console.warn('Something went wrong.', error);
  });

};

window.onload = function(){
  var x =JSON.stringify({ key:"impression"})
  fetch('https://demo.infuseads.com:8081/core/key-count/?id=41', {
    method: 'POST',
    body: x,
    headers: {
      'Content-type':  'application/json; charset=UTF-8'
    }
  }).then(function (response) {
    if (response.ok) {
      return response.json();
      // alert("Asd")
    }
    return Promise.reject(response);
  }).then(function (data) {
    console.log(data,"ddddddddddddddddddddddd");
  }).catch(function (error) {
    console.warn('Something went wrong.', error);
  });
}


function pg1func(op){
    document.getElementById("leftarrow").style="display:none !important; border:none;";
    document.getElementById("rightarrow").style="display:none !important; border:none;";
    document.getElementById("btn1").style="display:none !important; border:none;";
    document.getElementById("btn2").style="display:none !important; border:none;";
    window.setTimeout(function(){
        op.src = imges[1];
        pg2func(op);
    }, 4000);
};


function pg2func(op){
    var leftarrow = document.getElementById("leftarrow");
    leftarrow.style = "position: absolute;top: 436px;left: 19px;height: 70px;background: transparent;width: 65px;border-radius: 2%;border: 1px solid transparent;"
    leftarrow.onclick= function(){
      APICall("page1");
        op.src = imges[4];
        pg5func(op);
    };

    var rightarrow = document.getElementById("rightarrow");
    rightarrow.style = "position: absolute;top: 436px;left: 702px;height: 70px;background: transparent;width: 65px;border-radius: 2%;border: 1px solid transparent;";
    rightarrow.onclick= function(){
      APICall("page2");
        op.src = imges[2];
        pg3func(op);
    };

    var btn1 = document.getElementById("btn1");
    btn1.style = "position: absolute;top: 860px;left: 63px;height: 95px;background: transparent;width: 280px;border-radius: 2%;border: 1px solid transparent;";
    btn1.onclick= function(){
      APICall("page2leftkey1");
       window.open(landing_page);
    };

    var btn2 = document.getElementById("btn2");
    btn2.style = "position: absolute;top: 862px;left: 360px;height: 95px;background: transparent;width: 360px;border-radius: 2%;border: 1px solid transparent;";
    btn2.onclick= function(){
      APICall("page2leftkey2");
       window.open(location_link);
    };
};


function pg3func(op){
    var leftarrow = document.getElementById("leftarrow");
    leftarrow.style = "position: absolute;top: 436px;left: 19px;height: 70px;background: transparent;width: 65px;border-radius: 2%;border: 1px solid transparent;"
    leftarrow.onclick= function(){
      APICall("page2leftkey3");
        op.src = imges[1];
        pg2func(op);
    };

    var rightarrow = document.getElementById("rightarrow");
    rightarrow.style = "position: absolute;top: 436px;left: 702px;height: 70px;background: transparent;width: 65px;border-radius: 2%;border: 1px solid transparent;";
    rightarrow.onclick= function(){
      APICall("page2rightkey1");
        op.src = imges[3];
        pg4func(op);
    };

    var btn1 = document.getElementById("btn1");
    btn1.style = "position: absolute;top: 860px;left: 63px;height: 95px;background: transparent;width: 280px;border-radius: 2%;border: 1px solid transparent;";
    btn1.onclick= function(){
      APICall("page2rightkey2");
       window.open(landing_page);
    };

    var btn2 = document.getElementById("btn2");
    btn2.style = "position: absolute;top: 862px;left: 360px;height: 95px;background: transparent;width: 360px;border-radius: 2%;border: 1px solid transparent;";
    btn2.onclick= function(){
      APICall("page2rightkey3");
       window.open(location_link);
    };
};

function pg4func(op){
    var leftarrow = document.getElementById("leftarrow");
    leftarrow.style = "position: absolute;top: 436px;left: 19px;height: 70px;background: transparent;width: 65px;border-radius: 2%;border: 1px solid transparent;"
    leftarrow.onclick= function(){
      APICall("page3");
        op.src = imges[2];
        pg3func(op);
    };

    var rightarrow = document.getElementById("rightarrow");
    rightarrow.style = "position: absolute;top: 436px;left: 702px;height: 70px;background: transparent;width: 65px;border-radius: 2%;border: 1px solid transparent;";
    rightarrow.onclick= function(){
      APICall("page3leftkey1");
        op.src = imges[4];
        pg5func(op);
    };

    var btn1 = document.getElementById("btn1");
    btn1.style = "position: absolute;top: 860px;left: 63px;height: 95px;background: transparent;width: 280px;border-radius: 2%;border: 1px solid transparent;";
    btn1.onclick= function(){
      APICall("page3leftkey2");
       window.open(landing_page);
    };

    var btn2 = document.getElementById("btn2");
    btn2.style = "position: absolute;top: 862px;left: 360px;height: 95px;background: transparent;width: 360px;border-radius: 2%;border: 1px solid transparent;";
    btn2.onclick= function(){
      APICall("page3leftkey3");
       window.open(location_link);
    };
};

function pg5func(op){
    var leftarrow = document.getElementById("leftarrow");
    leftarrow.style = "position: absolute;top: 436px;left: 19px;height: 70px;background: transparent;width: 65px;border-radius: 2%;border: 1px solid transparent;"
    leftarrow.onclick= function(){
      APICall("page3rightkey1");
        op.src = imges[3];
        pg4func(op);
    };

    var rightarrow = document.getElementById("rightarrow");
    rightarrow.style = "position: absolute;top: 436px;left: 702px;height: 70px;background: transparent;width: 65px;border-radius: 2%;border: 1px solid transparent;";
    rightarrow.onclick= function(){
      APICall("page3rightkey2");
        op.src = imges[1];
        pg2func(op);
    };

    var btn1 = document.getElementById("btn1");
    btn1.style = "position: absolute;top: 860px;left: 63px;height: 95px;background: transparent;width: 280px;border-radius: 2%;border: 1px solid transparent;";
    btn1.onclick= function(){
      APICall("page3rightkey3");
       window.open(landing_page);
    };

    var btn2 = document.getElementById("btn2");
    btn2.style = "position: absolute;top: 862px;left: 360px;height: 95px;background: transparent;width: 360px;border-radius: 2%;border: 1px solid transparent;";
    btn2.onclick= function(){
      APICall("page4");
       window.open(location_link);
    };
};

// Clicking of Images
function clickpattern(){
    var op = document.getElementById('output');

    if (op.src.search('1.png') > -1)
    {
        pg1func(op);
    }
};
