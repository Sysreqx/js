const developer = {
  name: "Dev #1",
  isJSDev: true
};

setTimeout(() => {
    console.log('setTimeout');
}, 3000);

console.log(developer);

setInterval(() => {
    console.log("setInterval")
}, 1000);

// pending
// fulfilled
// rejected

const promise = new Promise((resolve, reject) => {
   if (developer.isJSDev) {
       setTimeout(() => {
           resolve(`${developer.name} являетсся JS разработчиком`);
       }, 3000);
   } else {
       reject(`${developer.name} НЕ является JS разработчиком`);
   }
});

console.log(promise);

// then, catch, finally

promise
    .then(m => {
        console.log("successMessage", m);
    })
    .catch(e => {
        console.log("error", e);
    })
    .finally(() => {
        console.log("finally");
    });
