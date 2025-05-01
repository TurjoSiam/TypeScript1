{
    //ternary operator
    const age = 17;
    const result = age >= 18 ? "adult" : "child";
    console.log(result);


    //nullish coalescing operator
    const authenticated = undefined;

    const user = authenticated ?? "Error";

    console.log(user);



}
