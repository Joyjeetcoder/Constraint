class Chain{
    constructor(bodya,bodyb){
        var options={
            bodyA : bodya,
            bodyB : bodyb,
            length : 30,
            stiffness : 1

        }
        this.chain = Constraint.create(options);
        World.add(world,this.chain);
    }
    display(){
        var pointA = this.chain.bodyA.position;
        var pointB = this.chain.bodyB.position;
        strokeWeight(3);
        line(pointA.x,pointA.y,pointB.x,pointB.y); 
    }
}