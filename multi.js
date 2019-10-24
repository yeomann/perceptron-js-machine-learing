const SinglePerceptronLearner = require('./simple');

let nextWeight1, nextWeight2;
const initalWeight1 = 1;
const initalWeight2 = 2;
const thresholdThetha = 1;
const learningRate = 0.5;
const arrayX1 = [1, 1, -1, -1];
const arrayX2 = [1, -1, 1, -1];
const arrayDt = [1, -1, -1, -1];
let p;

for (let i = 0; i < arrayX1.length; i++) {
  const x0 = arrayX1[i];
  const x1 = arrayX2[i];
  const dt = arrayDt[i];
  console.log(`x0:${x0}, x1:${x1}, dt:${arrayDt}`);

  // first iteration use inital wights
  if (i === 0) {
    p = new SinglePerceptronLearner(x0, x1, dt, threshold = thresholdThetha, learning_rate = learningRate, weight_one = initalWeight1, weight_second = initalWeight2);
    p.calcYt();
    p.initalWeights(1, 2);
    p.calcWt();
    nextWeight1 = p.nextWt0();
    nextWeight2 = p.nextWt1();
    p.current_accuracy();
    p.display();
  }
  // rest of iteration will use nextWeight1, nextWeight2 coming from first iteration
  else {
    p = new SinglePerceptronLearner(x0, x1, dt, threshold = thresholdThetha, learning_rate = learningRate, weight_one = nextWeight1, weight_second = nextWeight2);
    p.calcYt();
    p.initalWeights(1, 2);
    p.calcWt();
    nextWeight1 = p.nextWt0();
    nextWeight2 = p.nextWt1();
    p.current_accuracy();
    p.display();
  }
}
