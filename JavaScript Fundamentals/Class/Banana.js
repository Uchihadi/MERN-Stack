class Monkey{
    static eat_banana(){
      console.log("eating banana")
      Monkey.no_of_bananas-=1
       console.log("No. of bananas left ",Monkey.no_of_bananas)
    }
  }

Monkey.no_of_bananas=13
gopher=new Monkey() // It is a function but Monkey is actually a class
doodoo=new Monkey()
Monkey.eat_banana() // Only static function: eat_banana while Monkey is a Class
Monkey.eat_banana()