{
    //type guard with type of
    type together = string | number

    const checkValue = (value1: together, value2: together): together{

        if (typeof value1 === "number" && typeof value2 === "number") {
            return value1 + value2;
        }
        else {
            return value1.toString() + value2.toString()
        }
    };



    //type guard with 'in'
    type User = {
        name: string
    }

    const user: User = {
        name: "siam"
    }

    type Admin = {
        name: string;
        role: string
    }

    const admin = {
        name: "turjo",
        role: "admin"
    }

    const checkUser = (value: User | Admin) => {
        if ("role" in value) {
            return `${value.name} is the out ${value.role}`
        }
        else {
            return `${value.name} is a normal user`
        }
    }

}