function Mouse(name, age, color){
    this.name = name;
    this.age = age;
    this.color = color
}
Mouse.prototype.run = function(){
    console.log(this.name + " is running...");
}
