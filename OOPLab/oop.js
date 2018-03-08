class Dog {// This is the abstract class and will not be called directly.
  constructor(classGroup, temperament) {
    this._classGroup = classGroup;
    this._temperament = temperament;
  }

  get temperament(){// Getter for temperament
    return this._temperament;
  }
}

class WorkerGroup extends Dog {//child class. It stores the temperament and returns the job of the
  constructor(temperament, job){//super constructor stored the classGroup and returns temperament of this._dog
    super('worker', temperament);
    this._job = job;
  }
  print(){//
    console.log(this._classGroup + ' is a ' + this._job);
  }
}

// class SportingGroup extends Group {}
//
// class WorkingGroup extends Group {}
