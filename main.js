function ifCanBuy(name, age) {
    const user = {
        userName: name,
        userAge: age,
    }
    return () => {
        console.log(`Cześć ${name + (age < 18 ? ', nie możesz kupić piwa' : ', możesz kupić piwo')}`)
    }
}

const Mieszko = ifCanBuy("Mieszko", 19);
const Zosia = ifCanBuy("Zosia", 15);
Mieszko();
Zosia();