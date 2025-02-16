//Promise
const tryPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const success = true;
        if (success) {
          resolve("success");  
        } else {
            reject("error");
        }
    }, 3000);
});

const asyncAwait = async () => {
    console.log("Task 1");
}

const runAsync = async () => {
await tryPromise
    .then((res) => console.log(res))
    .catch((err) => console.log(err))
    .finally(() => console.log("finally done"));

console.log("Task 3");
}

// try catch
const tryCatch = async () => {
    try {
        console.log("Task 1")
        const res = await tryPromise;
        console.log(res);
        console.log("Task 3");
    } catch (err) {
        console.log(err);
    }
};

tryCatch()

// const fetchData = async () => {
//     try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/users");
//         const users = await response.json();
//         console.log(users);
//     }   catch (err) {
//         console.log(err);
//     }
// }
// fetchData()