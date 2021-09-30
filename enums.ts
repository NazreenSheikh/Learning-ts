// when we want to give options, we can make make different fields as variables like this, but a better way will be to make enumerations

// const beforeLoad = "beforeLoad"
// const loading = "loading"
// const loaded = "loaded"

enum LoadingState {
    beforeLoad = "beforeLoad",
    loading = "loading",
    loaded = "loaded"
}

// you can use this for creating maps too
const englishLoadingState = {
    [LoadingState.beforeLoad]: "Before Load"
}

console.log(englishLoadingState);

const isLoading = (state: LoadingState) => state === LoadingState.loading

console.log(isLoading(LoadingState.beforeLoad))


// Literal Types

const diceRoll = (dice: number): number => {
    let pip = 0

    for (let i = 0; i < dice; i++) {
        pip += Math.floor(Math.random() * 5) + 1
    }

    return pip
}

// literal types used with union they can be much more useful


const betterDiceRoll = (dice: 1 | 2 | 3): number => {
    let pip = 0

    for (let i = 0; i < dice; i++) {
        pip += Math.floor(Math.random() * 5) + 1
    }

    return pip
}

console.log(diceRoll(4));
console.log(betterDiceRoll(3));

function sendEvent2(name: "addToCart", data: { productId: number }): void
function sendEvent2(name: "checkout", data: { cartCount: number }): void
function sendEvent2(name: string, data: unknown): void {
    console.log(`${name}: ${JSON.stringify(data)}`);
}

sendEvent2("addToCart", { productId: 4 })
