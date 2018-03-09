class Dog
{
  constructor(breed, fur)
  {
    this._breed = breed;
    this._fur = fur;
  }

  get breed(){
    return this._breed;
  }

  set breed(value){
    if(breed == "Pincher") {
      this._breed = value;
    }
    else {
      console.log("This is one of the scariest dogs!")
    }
  }

  get fur()  {
    return this._fur;
  }

  bark()
  {
    console.log("I'm barking.");
  }
}

class BigDog extends Dog
{
  constructor(breed, fur, purpose)
  {
    super(breed, fur);
    this._purpose = purpose;
  }

  get purpose()
  {
    return this._purpose;
  }
}
