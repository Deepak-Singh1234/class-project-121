function setup() {
  canvas = createCanvas(300, 300);
  canvas.center();
  video = createCapture(VIDEO);
  video.hide();
  canvas.position(530,280);
  classifier = classifier.imageClassifier('MobileNet',modelLoaded);
}

function modelLoaded(){
  console.log("modelLoaded!");
}

function draw(){
  image(video,0,0,300,300);
  classifier.Classify(video,gotResult);
}

function gotResult(error,results){
  if(error){
    console.error(error);
  }
  else{
    console.log(results);
    document.getElementById("objectt").innerHTML = results[0].label;
    document.getElementById("objectt").innerHTML = results[0].confidence.toFixed(2);
  }
}



