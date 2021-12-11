function startClassification()   

{
    navigator.mediaDevices.getUserMedia({ audio: true });
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/model.json')
}

function modelReady(){
    clasisfier.classify(gotResults);
}

function gotResults(error, results){
    if (error) {
        console.error(error);
} else {
    console.log(results);
    random_number_r = Math.floor(Math.random()* 255) + 1;
    random_number_g = Math.floor(Math.random()* 255) + 1;
    random_number_b = Math.floor(Math.random()* 255) + 1;

    document.getElementById("result_label").innerHTML = 'I can hear - '+ results[0].label;
    document.getElementById("result_confidence").innerHTML = 'Accuracy - '+ (results[0].confidence*100).toFixed(2)+"%";
    document.getElementById("result_label").style.color = "rgb(" +random_number_r+","+random_number_g+","+random_number_r+")";
    document.getElementById("result_confidence").style.color = "rgb(" +random_number_r+","+random_number_g+","+random_number_r+")";

img1 = document.getElementById('Ear1_img');
img3 = document.getElementById('lion-roar');
img2 = document.getElementById('Cow-Moo_img');
img4 = document.getElementById('unamed.gif');
img5 = document.getElementById('Cat-meow');

if (results[0].label == "Mooing"){
    img2.src = 'Cow-Moo.gif';
} else if (results[0].label == "Roaring"){
    img3.src = 'lion-roar.gif';
} else if (results[0].label == "Barking"){
    img4.src = 'unamed.gif';
} else {
    img5.src = 'Cat-meow';
   
} 




}
}


