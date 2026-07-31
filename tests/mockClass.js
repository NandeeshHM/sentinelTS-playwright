class Dog
{
    constructor(doggyname, doggybreed)
    {
        this.doggyname = doggyname;
        this.doggybreed = doggybreed;
    }

    bark()
    {
        console.log("The " + this.doggyname + " dog barks Whoof Whoof");
    }

    introduce()
    {
        console.log(this.doggyname + " is of breed " + this.doggybreed);
    }
}

const d = new Dog("Rex", "Labrador");
d.bark();
d.introduce();