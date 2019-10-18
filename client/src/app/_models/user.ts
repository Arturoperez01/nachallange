

export class User {

    // Insert here your custom attributes and function

    // Functions for User

    public _id?: string;
    public name?: string;
    public title?: string;
    public age?: number;

    constructor(
        _id?: string,
        name?: string,
        title?: string,
        age?: number
    ) {
        this._id = _id;
        this.name = name;
        this.title = title;
        this.age = age;
    }

}
