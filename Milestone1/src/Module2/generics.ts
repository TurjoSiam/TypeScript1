{
//generics

const rollNumber: number[] = [12, 11, 53, 43, 77]
const rollNumber1: Array<number> = [12, 11, 53, 43, 77]




type Bikes<T> = Array<T>;


const bikes: Bikes<{brand: string, model: string, CC: number, isAvailable: boolean}> = [
    {
        brand: "honda",
        model: "lovo",
        CC: 110,
        isAvailable: true
    },
    {
        brand: "yamaha",
        model: "saluto",
        CC: 125,
        isAvailable: true
    },
    {
        brand: "suzuki",
        model: "hayate",
        CC: 110,
        isAvailable: false
    }
]

console.log(bikes);





}