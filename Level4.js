class Level4 {
    constructor(){

    //Mbottle.image = loadImage("e vehicle.png"); 

    this.base1 = new Ground(840,607,95,10);
    this.box1 = new Vehicles(840,570,85,75);

    this.base2 = new Ground(495,570,95,10);
    this.box2 = new Vehicles(495,550,85,75);
    
    this.base3 = new Ground(980,250,95,10);
    this.box3 = new Vehicles(1060,570,85,75);
    
    this.base4 = new Ground(1310,150,300,10);
    this.box5 = new Vehicles(1310,90,85,75);

    this.base5 = new Ground(1310,150,300,10);
    this.box6 = new Vehicles(1040,500,85,75);
    
    this.base6 = new Ground(1390,425,300,10);
    this.box8 = new Vehicles(1390,390,85,75);


    this.box11 = new Vehicles(960,240,85,75);
    this.box12 = new Vehicles(1040,240,85,75);
    this.box13 = new Vehicles(1140,240,85,75);

    this.box14 = new Vehicles(970.5,220,85,75);
    this.box15 = new Vehicles(990.5,220,85,75);

    this.box16 = new Vehicles(980.5,200,85,75);
    
    }

    display(){
        this.box1.display();
        this.box2.display();
        this.box3.display();

        this.box5.display();
        this.box6.display();

        this.box8.display();

        this.box11.display();
        this.box12.display();
        this.box13.display();

        this.box14.display();
        this.box15.display();

        this.box16.display();

        this.base1.display();
        this.base2.display();
        this.base3.display();
    }

    destroy(){
        this.box1.destroy();
        this.box2.destroy();
        this.box3.destroy();

        this.box5.destroy();
        this.box6.destroy();

        this.box8.destroy();

        this.box11.destroy();
        this.box12.destroy();
        this.box13.destroy();

        this.box14.destroy();
        this.box15.destroy();

        this.box16.destroy();
    }

    score(){
        this.box1.score();
        this.box2.score();
        this.box3.score();

        this.box5.score();
        this.box6.score();

        this.box8.score();

        this.box11.score();
        this.box12.score();
        this.box13.score();

        this.box14.score();
        this.box15.score();

        this.box16.score();
    }
}