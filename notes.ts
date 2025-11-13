const myNumber: number = 42;
const myString: string = "Hello, TypeScript!";

type Person = {
    name: string;
    bio: string;
}

type Post  = {
    image: string;
    caption: string;
    mentions: Person;
}

const post: Post = {
    image: "https://blalabal.chom",
    caption: "asdf",
    mentions: {
        name: "asdf",
        bio: "asdf"
    }
}
