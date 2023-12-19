
enum Gender {
    MALE = 'male',
    FEMALE = 'female'
}

enum BloodGroup {
    A_NEGATIVE = 'A-',
    A_POSITIVE = 'A+',
    B_NEGATIVE = 'B-',
    B_POSITIVE = 'B+',
    AB_NEGATIVE = 'AB-',
    AB_POSITIVE = 'AB+',
    O_NEGATIVE = 'O-',
    O_POSITIVE = 'O+'
}

enum EyesColor {
    GREEN = 'green',
    BROWN = 'brown',
    BLUE = 'blue',
    AMBER = 'amber',
    HAZEL = 'hazel',
    GRAY = 'gray',
    DARK = 'dark'
}

interface Hair {
    color: string;
    type: string;
}

interface Coordinates {
    lat: number,
    lng: number
}

interface Address {
    address: string,
    city: string,
    coordinates: Coordinates,
    postalCode: number,
    state: string
}

interface Bank {
    cardExpire: string,
    cardNumber: string,
    cardType: string,
    currency: string,
    iban: string
}

interface Company {
    address: Address,
    department: string,
    name: string,
    title: string
}


interface User {
    id: number,
    firstName: string,
    lastName: string,
    maidenName: string,
    age: number,
    gender: Gender,
    email: string,
    phone: string,
    username: string,
    password: string,
    birthDate: string,
    image: string,
    bloodGroup: BloodGroup,
    height: number,
    weight: number,
    eyeColor: EyesColor,
    hair: Hair,
    domain: string,
    ip: string,
    address: Address,
    macAddress: string,
    university: string,
    bank: Bank,
    company: Company,
    ein: string,
    ssn: string,
    userAgent: string
}

type Users = User[];

interface Responce {
    users: Users,
    total: number,
    skip: number,
    limit: number,
}

function assertIsUsers(res: unknown): asserts res is Responce {
    if (typeof res === 'object' && !!res && 'users' in res) {
        return;
    }
    throw new Error('Структура ответа не соответствует ожидаемому')

}

async function getUsers(url: string): Promise<Users> {
    const responce = await fetch(url);
    if (responce.status === 200) {
        const data = await responce.json();
        assertIsUsers(data);
        return data.users;
    }
    throw new Error('Ошибка запроса');
}

async function run(url: string) {
    const users = await getUsers(url);
    console.log(users[1]);
}

run('https://dummyjson.com/users');
