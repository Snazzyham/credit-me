var Jimp = require("jimp");

var lineReader = require("readline").createInterface({
  input: require("fs").createReadStream(process.argv[2])
});

lineReader.on("line", function(line) {
  let arr = line.split(" ");
  console.log("image name: " + arr[0]);
  console.log("user name: " + arr[1]);

  var loadedImage;
  let imageHeight = 0;

  Jimp.read(arr[0])
    .then(function(image) {
      loadedImage = image;
      imageHeight = loadedImage.bitmap.height;
      return Jimp.loadFont("font/font.fnt");
    })
    .then(function(font) {
      console.log(imageHeight);
      loadedImage.print(font, 25, imageHeight - 50, arr[1]).write(arr[0]);
    })
    .catch(function(err) {
      console.error(err);
    });
});
