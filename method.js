let student = {
  name: "Freda",
  age: 25,
  course: "Web Development",

  introduce: function() {
    console.log("Hi, my name is " + this.name + " and I study " + this.course);
  }
};

student.introduce();