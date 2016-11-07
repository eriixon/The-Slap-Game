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
    player.items.push(item);

    safe = safe + item.modifier;
    $("#safe").text(safe);
}

function hit(x){
    
    if(health <= 0) return
    var damage = hitDamages[x].damage - safe;
    health = health - damage;
    hits++;
    update();  
}

function update() {
    $("#health").text(health);
    $("#hits").text(hits);
    
    if(health <= 0){
         $("img[src]").attr("src", "./img/dead.png")
    } else $("img[src]").attr("src", "./img/man.png")
};
