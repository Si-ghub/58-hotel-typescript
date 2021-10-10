class Hotel {
    public readonly name: string;
    public readonly address: string;
    public readonly stars: number;
    public readonly rooms: Room[] = [];

    public constructor(
        name: string,
        address: string,
        stars: number) {

        this.name = name;
        this.address = address;
        this.stars = stars;
    }

    public addRoom(room: Room): void {
        this.rooms.push(room);
    }

    private printRooms(minComfort?: number): void {
        for (let room of this.rooms) {
            if (room.comfort() > minComfort || minComfort === undefined) {
                room.printData();
            }
        }
    }

    public printData(onlyComfort?: boolean): void {
        console.log('--- HOTEL ---');
        console.log(`Hotel name: '${this.name}'`);
        console.log(`Hotel address: ${this.address}`);
        console.log(`Number of stars: ${this.stars}*`);
        console.log('------------');

        if (onlyComfort) {
            this.printRooms(15)
        } else {
            this.printRooms()
        }
    }
}

class Room {
    public readonly size: number;
    public readonly capacity: number;

    public constructor(
        size: number,
        capacity: number) {

        this.size = size;
        this.capacity = capacity;
    }

    public comfort(): number {
        let m2ForOnePerson = this.size / this.capacity;
        return m2ForOnePerson;
    }

    public printData(onlyComfort?: boolean): void {
        console.log('--- ROOM ---');
        console.log(`Room size: ${this.size} m2`);
        console.log(`Persons in the room: ${this.capacity}`);
        console.log(`Space for one person: ${this.comfort()} m2`);
        console.log('------------');
    }
}

class Spa extends Room {
    public readonly poolSize: number;
    public readonly temperature: number;

    public constructor(
        size: number,
        capacity: number,
        poolSize: number,
        temperature: number) {

        super(size, capacity);
        this.poolSize = poolSize;
        this.temperature = temperature;
    }

    public comfort(): number {
        let m2ForOnePerson = (this.size - this.poolSize) / this.capacity;
        return m2ForOnePerson;
    }

    public printData(): void {
        super.printData();
        console.log('- SPA ROOM -');
        console.log(`Pool size: ${this.poolSize} m2`);
        console.log(`Water temperature in the pool: +${this.temperature}C`);
        console.log('------------');
    }
}

// HOTEL
const hotel = new Hotel('The Surfrider Malibu', '23033 Pacific Coast Highway, Malibu, CA', 5);

// ROOMS 
hotel.addRoom(new Room(40, 2));
hotel.addRoom(new Room(60, 3));

//SPA ROOMS
hotel.addRoom(new Spa(40, 4, 10, 27));
hotel.addRoom(new Spa(80, 6, 10, 25));

hotel.printData(true);