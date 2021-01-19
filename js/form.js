class Form{
    constructor(){
    }
    display(){
        var title=createElement("h2");
        title.position(130,0);
        title.html("Car Racing Game");
        var input=createInput("Name");
        input.position(130,160);
        var button=craeteButton("Play");
        button.position(250,200);
        var greeting=createElement("h3")
        button.mousePressed(function(){
            input.hide();
            button.hide();
            var name=input.value();
            playerCount+=1
            player.update(name);
            greeting.html("Hello"+name);
            greeting.position(130,160);
            player.updateCount(playerCount);
        })
    }
}