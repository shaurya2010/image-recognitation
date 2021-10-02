Webcam.set({
    width:350,
    height:300
    image_format : 'png',
    png_quality:90
});

camera = document.getElementById("camera");

Webcam.attach('#camera');

function take_snapshot()
{
    webcam.snap(function(data_uri) {
        document.getElementById("results"). innerHTML = '<img id="capture_image"src="'+data_uri+'"/>';
    });
}
console.log('ml5 version;',ml5.version );
classifier = ml5.imageclassifier('https://teachablemachine.withgoogle.com/models/v_sl95BzE/model.json',modelloaded);