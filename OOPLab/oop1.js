class Toilet
{
  constructor(color, material)
  {
    this._color = color;
    this._material = material;
  }

  get color(){
    return this._color;
  }

  set color(value){//must have a value and will change color
    if(value === "black" || value === "white"){
      this._color = value;
    }
    else {
      alert("Toilets can be black or white.")
    }
  }

    get material(){
    return this._material;
  }

  flush()
  {
    console.log("The toilet is flushed.");
  }
}

class PublicToilet extends Toilet
{
  constructor(color, material, tankless)
  {
    super(color, material);
    this._tankless = tankless;
  }

  get tankless()
  {
    return this._tankless;
  }
}
