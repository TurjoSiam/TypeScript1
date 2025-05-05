type Person = {
    user: string;
    age: number;
    isAvailable: boolean;
    address: string
}

type PickType = Pick<Person, "address">;

type OmitType = Omit<Person, "age">;

type RequiredType = Required<Person>;

type PartialType = Partial<Person>;

type readonlyType = Readonly<Person>;

//record
type Park = Record<string, string>

const park: Park = {
    title: "Hello",
    address: "Sylhet",
    available: "yes"
}

const emptyObj: Record<string, unknown> = {};

emptyObj.name = "siam";