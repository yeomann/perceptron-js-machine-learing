# Intro
There are two files, Simple.js for running and tesing one single perceptron. code usage example for single one as follow:

```
let x0 = 1;
let x1 = 1;
let dt = 1;
let p = new SinglePerceptronLearner(x0, x1, dt, threshold=1, learning_rate=.5, weight_one=1, weight_second=2);
p.calcYt();
p.initalWeights(1, 2);
p.calcWt();
p.current_accuracy();
p.display();
```

# Usage

`node simple.js`

and
`node multi.js`


# Example Output

### Simple

```
yeo@yeo-GF63-8RD:~/Development/Machine Learning/perceptron$ node simple.js 
Inputs: x0=1, x1=1, Actual Output(yt):2, Desired Output(yt):1
Accuracy: 0
Next Weights: w0:0.5 and w1:1.5
yeo@yeo-GF63-8RD:~/Development/Machine Learning/perceptron$ node simple.js 
Init Weights: w0:1 and w1:1
Inputs: x0=1, x1=1, Actual Output(yt):2, Desired Output(yt):1
Accuracy: 0
Next Weights: w0:0.5 and w1:1.5
```

### Multi
```
yeo@yeo-GF63-8RD:~/Development/Machine Learning/perceptron$ node multi.js 
x0:1, x1:1, dt:1,-1,-1,-1
Init Weights: w0:1 and w1:1
Inputs: x0=1, x1=1, Actual Output(yt):2, Desired Output(yt):1
Accuracy: 0
Next Weights: w0:0.5 and w1:1.5
x0:1, x1:-1, dt:1,-1,-1,-1
Init Weights: w0:1 and w1:1
Inputs: x0=1, x1=-1, Actual Output(yt):-2, Desired Output(yt):-1
Accuracy: 0
Next Weights: w0:1 and w1:1
x0:-1, x1:1, dt:1,-1,-1,-1
Init Weights: w0:1 and w1:1
Inputs: x0=-1, x1=1, Actual Output(yt):-1, Desired Output(yt):-1
Accuracy: 1
Next Weights: w0:1 and w1:1
x0:-1, x1:-1, dt:1,-1,-1,-1
Init Weights: w0:1 and w1:1
Inputs: x0=-1, x1=-1, Actual Output(yt):-3, Desired Output(yt):-1
Accuracy: 0
Next Weights: w0:0 and w1:0
```