//spread operator in array
const friends1: string[] = ["siam", "turjo", "hasan", "hossen", "rahim", "karim"];
const friends2: string[] = ["arif", "sourov", "abdul", "jabed", "sakib"];

const allfriends: string[] = [...friends1, ...friends2];

friends1.push(...allfriends);



//spread operator in object
const information1 = {
    siam: "feni",
    hasan: "ctg",
    hosen: "barisal"
};

const information2 = {
    kabir: "vola",
    bakar: "bagura"
};

const allInformation = {
    ...information1,
    ...information2
};



//rest operator
function currentInformation (...info: string[]) {
    console.log(`all information ara ${info}`);
}

currentInformation("siam", "kabir", "abdul")

