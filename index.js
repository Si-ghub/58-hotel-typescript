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
        console.log(`Space for one person: ${this.comfort().toFixed(1)} m2`);
        console.log('------------');
    }
}
class Spa extends Room {
    constructor(size, capacity, poolSize, temperature) {
        super(size, capacity);
        this.poolSize = poolSize;
        this.temperature = temperature;
    }
    comfort() {
        let m2ForOnePerson = (this.size - this.poolSize) / this.capacity;
        return m2ForOnePerson;
    }
    printData() {
        super.printData();
        console.log('--- SPA ROOM ---');
        console.log(`Pool size: ${this.poolSize} m2`);
        console.log(`Water temperature in the pool: +${this.temperature}C`);
        console.log('------------');
    }
}
const hotel = new Hotel('The Surfrider Malibu', '23033 Pacific Coast Highway, Malibu, CA', 5);
const room101 = new Room(40, 4);
const room102 = new Room(50, 3);
const room103 = new Room(60, 5);
hotel.addRoom(room101);
hotel.addRoom(room102);
hotel.addRoom(room103);
const roomSP201 = new Spa(40, 4, 10, 25);
const roomSP202 = new Spa(50, 3, 15, 22);
const roomSP203 = new Spa(60, 2, 12, 23);
hotel.addRoom(roomSP201);
hotel.addRoom(roomSP202);
hotel.addRoom(roomSP203);
hotel.printData(true);
