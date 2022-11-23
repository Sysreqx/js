const handleObjects = (obj, key, action) => {
  if (action === "get") {
      return obj[key];
  } else if (action === "add") {
      obj[key] = "";
      return obj;
  } else if (action === "delete") {
      delete obj[key];
      return obj;
  } else {
      return obj;
  }
};

const student = {
    name: "Maxim",
    programmingLanguage: "JavaScript",
}

const result1 = handleObjects(student, "programmingLanguage1",
    "add");
console.log("result", result1);

const result = handleObjects(student, "programmingLanguage",
    "delete");
console.log("result", result);