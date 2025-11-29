export function solve(){
    const user = {
        name: "derrick",
        email: 21,
    };
    //insert
    user.email = "derrick@example.com";
    //lookup
    console.log(user.name);
    //delete
    delete user.age;
    //check instance
    console.log("email" in user);
    return;
}