//object destructuring
const transport = {
    name: "starline",
    route: {
        east: "ctg",
        west: "rajshahi"
    },
    isGood: true
};

const {isGood} = transport;
const {route: {west}} = transport;


//array destructuring
const bus = ["star line", "green line", "super sony"];
const [,fav] = bus;