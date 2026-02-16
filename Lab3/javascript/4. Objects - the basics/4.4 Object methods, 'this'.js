
function makeUser() {
    return {
      name: "John",
      ref: this
    };
  }
let user = makeUser();
alert( user.ref.name );  

function makeUser(){
    return this; 
  }
alert( makeUser().name ); 

function makeUser() {
    return {
      name: "John",
      ref() {
        return this;
      }
    };
  }
let user2 = makeUser();
alert( user2.ref().name ); // John


let calculator = {
    read() {
        this.a = +prompt('a?', 0);
        this.b = +prompt('b?', 0);
      },

    sum() {
      return this.a + this.b;
    },

    mul() {
      return this.a * this.b;
    }
};


let ladder = {
    step: 0,
    up() {
      this.step++;
      return this;
    },
    down() {
      this.step--;
      return this;
    },
    showStep() {
      alert( this.step );
      return this;
    }
  };
ladder.up().up().down().showStep().down().showStep(); // shows 1 then 0
