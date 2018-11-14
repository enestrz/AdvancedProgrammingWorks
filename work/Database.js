"use strict";
class Course{
  constructor(name,time,date,room) {
    this.name = name;
    this.time = time;
    this.date = date;
    this.room = room;
  }
  toString(){
    return "Name: "+this.name+" Time: "+this.time+" Date: "+this.date+" Room: "+this.room;
  }
}
  class Student  {
    constructor(id,name,gpa,courses){
      this.id = id;
      this.name = name;
      this.gpa = gpa;
      this.courses = courses;
    }
    toString(){
      return "ID: "+this.id+" Name: "+this.name+" GPA: "+this.gpa+" Courses: "+this.courses;
    }

  }
  class Point{
    constructor(x,y){
      this.x = x ;
      this.y = y ;
    }
    toString(){
      return "X = "+this.x+" Y = "+this.y;
    }
  }
  class Point3D extends Point{
    constructor(x ,y ,z){
      super(x,y);

      this.z = z ;
    }
    toString(){
      return "X = "+this.x+" Y = "+this.y+" Z = "+this.z;
    }
  }
  class Distance{
    constructor(km=1){
      this.km = Math.round(km);
    }
    get mile(){
      return Math.round(this.km * 0,621371192);
    }
    set mile(value=0){
      this.km = Math.round(value / 0,621371192);
    }
    toString(){
      return this.km+" km";
    }
    static fromMile(value){
      let m = new Distance();
      m.mile = value;
      return   m ;
    }
  }

  class Database  {
    constructor(){
      super();
    
    }



  }
