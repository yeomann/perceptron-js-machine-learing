module.exports = class SinglePerceptronLearner {
  constructor(first_x, second_x, diresed_output, threshold, learning_rate, weight_one, weight_second) {
    
    this.first_x = first_x;
    this.second_x = second_x;
    this.diresed_output = diresed_output;
    this.weight_one = weight_one;
    this.weight_second = weight_second;

    // yt is actual output
    this.yt = 0;

    this.threshold = threshold;
    this.learning_rate = learning_rate;

    // additional var to track learnig accuracy
    this.accuracy = 0;
    this.samples =  0;
  }

  // will create only random 1, -1
  random() {
    return Math.random() * 2 -1
  }

  current_accuracy() {
    // return (this.accuracy / this.samples)*100;
    // Actual output this.yt is EQUAL to desired this.diresed_output
    this.accuracy = this.yt === this.diresed_output ? 1 : 0;
  }

  nextWt0() {
    return this.w0;
  }

  nextWt1() {
    return this.w1;
  }

  activation(n) {
    return n < 0 ? 0 : 1;
  }

  calcYt() {
    this.yt = this.first_x * this.weight_one + this.second_x * this.weight_second - threshold;
    return this.yt;
  }
  calcWt() {
    let error = this.diresed_output - this.yt;
    this.w0 = this.weight_one + this.learning_rate * (error) * this.first_x;
    this.w1 = this.weight_second + this.learning_rate * (error) * this.second_x;
  }
  initalWeights(w0, w1) {
    console.log(`Init Weights: w0:${w0} and w1:${w0}`);
  }
  display() {
    console.log(`Inputs: x0=${this.first_x}, x1=${this.second_x}, Actual Output(yt):${this.yt}, Desired Output(yt):${this.diresed_output}`);
    console.log(`Accuracy: ${this.accuracy}`);
    console.log(`Next Weights: w0:${this.nextWt0()} and w1:${this.nextWt1()}`);
  }
}

// let x0 = 1;
// let x1 = 1;
// let dt = 1;
// let p = new SinglePerceptronLearner(x0, x1, dt, threshold=1, learning_rate=.5, weight_one=1, weight_second=2);
// p.calcYt();
// p.initalWeights(1, 2);
// p.calcWt();
// p.current_accuracy();
// p.display();
