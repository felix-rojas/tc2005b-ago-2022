// Prices for octopus
const dumbo = 150;
const common = 100;
const squid = 1000;
const taxes = 1.14;
let count_common = 0; 
let count_dumbo = 0;
let count_squid = 0;


// Behaviour for FAB
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.fixed-action-btn');
    var instances = M.FloatingActionButton.init(elems, {
      direction: 'up',
      hoverEnabled: false
    });
  });

const purchase_common = document.getElementById('shop_common');
const purchase_dumbo = document.getElementById('shop_dumbo');
const purchase_squid = document.getElementById('shop_squid');
const accept_purchases = document.getElementById("accept_purchases");

purchase_common.onclick = () => {
    count_common += 1;
}

purchase_dumbo.onclick = () => {
    count_dumbo += 1;
    console.log(count_dumbo);
}

purchase_squid.onclick = () => {
  count_squid += 1;
}

const compras = document.getElementById("purchases");


accept_purchases.onclick = () => {
  let subtotal_purchases = common*count_common + dumbo*count_dumbo;  
  let total_purchases = subtotal_purchases * taxes;
  compras.innerHTML =
      '<h4>Your purchases</h4>'+
      '<ul id ="purchases"  class="collection">'+
      '<li class="collection-item">Costo Dumbos = '+dumbo*count_dumbo+'<a href="#!" class="secondary-content"><i class="material-icons">remove_circle</i></a></div></li>'+
      '<li class="collection-item">Costo Common = '+common*count_common+'<a href="#!" class="secondary-content"><i class="material-icons">remove_circle</i></a></div></li>'+
      '<li class="collection-item">Costo Common = '+squid*count_squid+'<a href="#!" class="secondary-content"><i class="material-icons">remove_circle</i></a></div></li>'+
      '<li class="collection-item">Subtotal = '+subtotal_purchases+'<a href="#!" class="secondary-content"><i class="material-icons">remove_circle</i></a></div></li>'+
      '<li class="collection-item">IVA = '+(taxes*100-100)+' %</li>'+
      '<li class="collection-item">Total = '+total_purchases+'</li>'+
      '</ul>';
}
