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
    helmet: new item("Helmet",  1,"an awesome helmet!"),
    shield: new item("Shield",  3,"an awesome shield!"),    
      vest: new item("Vest",    5,"an awesome vest!"),
}

var player = { items:[] }


function addMods(x) {
      
    var item = items[x];
        
    if(player.items.indexOf(item) < 0) {
        player.items.push(item);
        } else { alert ("He has " + item.description);
    } 
    
    safe = 0;
    for (var i=0; i < player.items.length; i++ ){
        safe = safe + player.items[i].modifier;
    }
  
    document.getElementById('safe').innerText = safe;
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
         document.getElementById("player-panel").classList.add("panel-danger")
    }else{
         document.getElementById("player-panel").classList.remove("panel-danger")
    }
}