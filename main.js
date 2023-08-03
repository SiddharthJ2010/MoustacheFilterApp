noseX = 0;
noseY = 0;
moustache=""

function preload()
{
    moustache = loadImage("https://i.postimg.cc/K8W7HY1q/zc-X4-Adqoi.png")
}

function setup()
{
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw()
{
    image(video, 0, 0, 300, 300);
    image(moustache, noseX, noseY, 40, 30);
}

function take_snapshot()
{
    save('myFilterImage.png');
}

function modelLoaded()
{
    console.log('PoseNet Is Initialised');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x - 20;
        noseY = results[0].pose.nose.y;
        console.log("image x=" + results[0].pose.nose.x);
        console.log("image y=" + results[0].pose.nose.y);
    }

    console.log(results);
}