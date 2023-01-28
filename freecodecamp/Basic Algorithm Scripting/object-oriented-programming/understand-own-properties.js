function Bird(name) {
    this.name = name;
    this.numLegs = 2;
}

let canary = new Bird("Tweety");
let ownProps = [];

for (const canaryKey in canary) {
    if (canary.hasOwnProperty(canaryKey)) {
        ownProps.push(canaryKey);
    }
}

