// object data type

const admin: {
    userName: string,
    email: string,
    isActive: boolean,
    experience?: number,  //optional type
    company: "Console Loggers",  //console loggers is considered as a type
    readonly Location: string   //can not change 'readonly' value. it is called 'literal' type
} = {
    userName: "Siam",
    email: "siam@gmail.com",
    isActive: true,
    experience: 4,
    company: "Console Loggers",
    Location: "Chittagong"
}



// admin.Location = "Dhaka"; 