export function setUser() {
    // console.log("Setting Demo User");
    const user = {
        email: "demo@terralhotel.com",
        password: "welcomeToTerra"
    }
    return user;
}

// refactor to use async/await
export function animateField(field, text) {
    // console.log("Type out login information");

    let length = text.length;
    const animation = setInterval(() => {
        let subtext = text.slice(0, text.length - length)

        this.setState({ [field]: subtext })
        if(length === 0) {
            clearInterval(animation);
            return true;
        }
        length--;
    }, 100);

}