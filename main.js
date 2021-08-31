reyes_x = 0;
reyes_y = 0;
rshoulder_x = 0;
rshoulder_y = 0;

function preload()
{
hair = loadImage("https://i.postimg.cc/WbftSq8f/13-132788-saiyan-hair-dragon-ball-hair-png-removebg-preview.png");
aura = loadImage("https://i.postimg.cc/4yTKTDq7/f6224a560e8443312d7f0aab29b7ea5a-removebg-preview.png")
}

function setup()
{
    canvas = createCanvas(400, 400);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(400, 400);
    video.hide()

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet Is Initialized');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        reyes_x = results[0].pose.rightEye.x;
        reyes_y = results[0].pose.rightEye.y;
        rshoulder_x = results[0].pose.rightShoulder.x;
        rshoulder_y = results[0].pose.rightShoulder.y;
        console.log("reyes x = " + results[0].pose.rightEye.x);
        console.log("reyes y = " + results[0].pose.rightEye.y);
        console.log("rshoulder x = " + results[0].pose.rightShoulder.x);
        console.log("rshoulder y = " + results[0].pose.rightShoulder.y);
    }
}

function draw()
{
    image(video, 0, 0, 400, 400);
    image(aura,rshoulder_x-345,rshoulder_y-450,800,800);
    image(hair,reyes_x-130,reyes_y-175,300,200);
}

function take_snapshot()
{
    save('filtered_image.png')
}