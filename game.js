var health = 100;
var hits = 0;
var safe = 0;

var hitDamage = function (name, damage) {
    this.name = name;
    this.damage = damage;    
}

var hitDamages = {
    slap:   new hitDamage("slap", 10),
    punch:  new hitDamage("punch", 15),
    kick:   new hitDamage("kick", 20)
}


var item = function (name, modifier, description){
    this.name = name;
    this.modifier = modifier;
    this.description = description;
    this.draw = function(){
    }
}

var items = {
    cap: new item("Cap", 1,"an awesome cap!"),
    glass: new item("Sunglasses", 3,"an awesome sunglasses!"),    
    chain: new item("Chain", 5, "an awesome golden chain!"),
}

var player = { items:[] }


function addMods(x) {
      
    var item = items[x];
    $("#btn-"+x).attr('disabled',true);
    
    safe = 0;
    for (var i=0; i < player.items.length; i++ ){
        safe = safe + player.items[i].modifier;
    }
  
    $("#safe").text = safe;
}

function hit(x){
    
    if(health <= 0) return
    var damage = hitDamages[x].damage - safe;
    health = health - damage;
    hits++;
    update();  
}

function update() {
    
    document.getElementById('health').innerText = health;
    document.getElementById('hits').innerText = hits;
    
    
    if(health <= 0){
         document.getElementById("player-box").classList.add("game-over")
    }else{
         document.getElementById("player-box").classList.remove("game-over")
    }
}