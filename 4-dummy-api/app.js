"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var Gender;
(function (Gender) {
    Gender["MALE"] = "male";
    Gender["FEMALE"] = "female";
})(Gender || (Gender = {}));
var BloodGroup;
(function (BloodGroup) {
    BloodGroup["A_NEGATIVE"] = "A-";
    BloodGroup["A_POSITIVE"] = "A+";
    BloodGroup["B_NEGATIVE"] = "B-";
    BloodGroup["B_POSITIVE"] = "B+";
    BloodGroup["AB_NEGATIVE"] = "AB-";
    BloodGroup["AB_POSITIVE"] = "AB+";
    BloodGroup["O_NEGATIVE"] = "O-";
    BloodGroup["O_POSITIVE"] = "O+";
})(BloodGroup || (BloodGroup = {}));
var EyesColor;
(function (EyesColor) {
    EyesColor["GREEN"] = "green";
    EyesColor["BROWN"] = "brown";
    EyesColor["BLUE"] = "blue";
    EyesColor["AMBER"] = "amber";
    EyesColor["HAZEL"] = "hazel";
    EyesColor["GRAY"] = "gray";
    EyesColor["DARK"] = "dark";
})(EyesColor || (EyesColor = {}));
function assertIsUsers(res) {
    if (typeof res === 'object' && !!res && 'users' in res) {
        return;
    }
    throw new Error('Структура ответа не соответствует ожидаемому');
}
function getUsers(url) {
    return __awaiter(this, void 0, void 0, function* () {
        const responce = yield fetch(url);
        if (responce.status === 200) {
            const data = yield responce.json();
            assertIsUsers(data);
            return data.users;
        }
        throw new Error('Ошибка запроса');
    });
}
function run(url) {
    return __awaiter(this, void 0, void 0, function* () {
        const users = yield getUsers(url);
        console.log(users[1]);
    });
}
run('https://dummyjson.com/users');
