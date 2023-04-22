// TASK 1:
class Hamster {
    constructor(owner, name, price) {
    this.owner = '',
    this.name = name,
    this.price = price
    }
    wheelRun(){
    console.log("squeak squeak")
    }
    eatFood() {
        console.log("nibble nibble")
    }
    getPrice() {
        return this.price
    }
}

// TASK 2:
class Person {
    constructor(name, age, height, mood, hamsters, bankAccount){
        this.name = name,
        this.age = 0,
        this.height = 0,
        this.weight = 0,
        this.mood = 0, 
        this.hamsters = [],
        this.bankAccount = 0
    }
    getName(){
        return this.name
    }
    getAge(){
        return this.age
    }
    getWeight(){
        return this.weight
    }
    greet(){
        console.log(`Hello, my name is ${this.name}!`)
    }
    eatFood(num){
        this.weight = this.weight + num
        this.mood = this.mood + num
    }
    exercise(num){
        this.weight = this.weight - num
    }
    ageUp(num){
        this.age = this.age + num
        this.height = this.height + num
        this.weight = this.weight + num
        this.mood = this.mood - num
        this.bankAccount = this.bankAccount + (10 * num)
    }
    buyHamster(Hamster){
        this.hamsters.push(Hamster.name)
        this.bankAccount = this.bankAccount - Hamster.price
        Hamster.owner = this.name
    }
}

//TASK 3:

const gus = new Hamster("","Gus", 3)

const timmy = new Person("Timmy", 14, 5, 6, "hamsters", 10)

//age Timmy five years, have Timmy eat five times, have Timmy exercise five times.
timmy.ageUp(5)
timmy.eatFood(5)
timmy.exercise(5)
console.log(`Timmy is ${timmy.getAge()} years old, weighs ${timmy.getWeight()} lbs, and is vibing with ${timmy.bankAccount} dollars in his bank account and a mood value of ${timmy.mood}!`)

//age Timmy nine years.
timmy.ageUp(9)

//have Timmy buy gus, set Gus's owner to Timmy (line 59)
timmy.buyHamster(gus) 
console.log(`${gus.owner} is ${timmy.hamsters[0]}'s new owner!`)

// age Timmy fifteen years
timmy.ageUp(15)

// have Timmy eat twice, have Timmy exercise twice
timmy.eatFood(2)
timmy.exercise(2)
console.log('At last, Timmy is ' + timmy.age + ' and he has a hamster named ' + timmy.hamsters[0] + '!')
//^^I wanted to practice the other method (non-template literal) for concatenating the string. I know I should try to be consistent on professional projects!
//TASK 4:

class Dinner {
    constructor(appetizer, entree, dessert) {
    this.appetizer = appetizer,
    this.entree = entree,
    this.dessert = dessert
    }
}

const createChef = ({firstName, lastName}) => ({
    firstName, 
    lastName, 
    prepareDinner(Dinner){
        return `${Dinner.appetizer}, ${Dinner.entree}, ${Dinner.dessert}`
    }
})

const chef1 = createChef({
    firstName: 'Bobby', 
    lastName: 'Flay'
})

const vegOp = new Dinner('salad', 'black-bean burger', 'gelato')
const fishOp = new Dinner('tuna salad', 'choice of atlantic salmon or cod', 'sweet caviar tots')
const meatOp = new Dinner('wings', 'beef-patty burger with pulled pork', 'maple sausage corndog')

console.log(`${chef1.firstName} ${chef1.lastName} has prepared three courses for the evening. The vegetarian option includes ${chef1.prepareDinner(vegOp)}; the fish option includes ${chef1.prepareDinner(fishOp)}; and the meat option includes ${chef1.prepareDinner(fishOp)}`)
