export function GetRawObject(object) {
    if (object) {
        return JSON.parse(JSON.stringify(object));
    } else return object;
}