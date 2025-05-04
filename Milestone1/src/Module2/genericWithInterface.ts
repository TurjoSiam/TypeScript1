{
    //generic with interface

    interface Station<T = null> {
        stationName: string;
        isGood: boolean;
        features?: T
    }

    interface Features1 {
        road: boolean;
        counter: number;
        process: string
    }

    interface Features2 {
        railLine: boolean;
        platform: number;
        process: string
    }


    const station1: Station<Features1> = {
        stationName: "bus",
        isGood: true,
        features: {
            road: true,
            counter: 1,
            process: "ticket"
        }
    }

    const station2: Station<Features2> = {
        stationName: "train",
        isGood: true,
        features: {
            railLine: true,
            platform: 2,
            process: "online"
        }
    }

    const station3: Station = {
        stationName: "boat",
        isGood: true,
    }



}