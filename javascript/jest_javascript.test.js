// Create a function called hello that returns a string that says hi.

describe("hello", () => {
    test("returns a string that says hi", () => {
        expect(hello()).toEqual("hi")
    })
})

const hello = () => {
    return "hi"
}

// A function called greeter, it will in an argument of a name and return us a string that says "Hello, namehere"

describe("greeter", () => {
    test("return us a string that says Hello, namehere", () =>{
        let myName = "Andee"
        expect(greeter("Brian")).toEqual("Hello, Brian")
        expect(greeter("Diem")).toEqual("Hello, Diem")
        expect(greeter("David")).toEqual("Hello, David")
        expect(greeter(myName)).toEqual("Hello, Andee")
    })
})

const greeter = (name) => {
    return `Hello, ${ name }`
} 

// a function called trafficLight, this will take in an argument of a traffic light color, and return the appropriate traffic action. 

describe("trafficLight", () => {
    test("will take in an argument of a traffic light color, and return the appropriate traffic action.", () => {
        expect(trafficLight("green")).toEqual("GO")
        expect(trafficLight("yellow")).toEqual("Consider stopping, or just gun it.")
        expect(trafficLight("red")).toEqual("STOP")
        expect(trafficLight(42)).toEqual("YOU BROKE IT, HOW?")
    })
})

const trafficLight = (color) => {
    if(color === "green"){
        return "GO"
    } else if(color === "yellow") {
        return "Consider stopping, or just gun it."
    } else if(color === "red") {
        return "STOP"
    } else {
        return "YOU BROKE IT, HOW?"
    }
} 

