class Dog
{
  constructor(breed, bark)
  {
    this._breed = breed;
    this._bark = bark;
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

  get bark()  {
    return this._bark;
  }

  speak()
  {
    console.log("I'm barking.");
  }
}

class BigDog extends Dog
{
  constructor(breed, bark, purpose)
  {
    super(breed, bark);
    this._purpose = purpose;
  }

  get purpose()
  {
    return this._purpose;
  }
}
