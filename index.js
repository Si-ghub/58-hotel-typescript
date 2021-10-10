class Hotel {
    constructor(name, address, stars) {
        this.rooms = [];
        this.name = name;
        this.address = address;
        this.stars = stars;
    }
    addRoom(room) {
        this.rooms.push(room);
    }
    printRooms(minComfort) {
        for (let room of this.rooms) {
            if (room.comfort() > minComfort || minComfort === undefined) {
                room.printData();
            }
        }
    }
    printData(onlyComfort) {
        console.log('--- HOTEL ---');
        console.log(`Hotel name: '${this.name}'`);
        console.log(`Hotel address: ${this.address}`);
        console.log(`Number of stars: ${this.stars}*`);
        console.log('------------');
        if (onlyComfort) {
            this.printRooms(15);
        }
        else {
            this.printRooms();
        }
    }
}
class Room {
    constructor(size, capacity) {
        this.size = size;
        this.capacity = capacity;
    }
    comfort() {
        let m2ForOnePerson = this.size / this.capacity;
        return m2ForOnePerson;
    }
    printData(onlyComfort) {
        console.log('--- ROOM ---');
        console.log(`Room size: ${this.size} m2`);
        console.log(`Persons in the room: ${this.capacity}`);
        console.log(`Space for one person: ${this.comfort()} m2`);
        console.log('------------');
    }
}
class Spa extends Room {
    constructor(size, capacity, poolSize, temperature) {
        super(size, capacity);
        this.poolSize = poolSize;
        this.temperature = temperature;
    }
    getcomfort() {
        let m2ForOnePerson = (this.size - this.poolSize) / this.capacity;
        return m2ForOnePerson;
    }
    printData() {
        super.printData();
        console.log('- SPA ROOM -');
        console.log(`Pool size: ${this.poolSize} m2`);
        console.log(`Water temperature in the pool: +${this.temperature}C`);
        console.log('------------');
    }
}
const hotel = new Hotel('The Surfrider Malibu', '23033 Pacific Coast Highway, Malibu, CA', 5);
hotel.addRoom(new Room(40, 2));
hotel.addRoom(new Room(60, 3));
hotel.addRoom(new Spa(40, 4, 10, 27));
hotel.addRoom(new Spa(80, 6, 10, 25));
hotel.printData(true);
