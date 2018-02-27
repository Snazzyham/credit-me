# Credit Me  

Easily add accreditation to a bunch of images 

## About the project 
Initially built for internal use at Goodstuph, **credit-me** lets you batch add names to photos. Mostly useful if you're using photos from instagram and want to embed the picture takers instagram handle on to the image. Rather than individually opening up each image with an image manipulation program and adding in the name, a simple for-loop and [jimp](https://github.com/oliver-moran/jimp) can get the job done way quicker. 

# Usage 

## Using the provided binary 

Head to the releases page and download the right binary for your OS, which has been packaged using ZEIT's [pkg](https://github.com/zeit/pkg).

Put the binary in the same folder as your images. 

Create a text file called `names.txt` (or whatever you want to name it) in the same directory, put the name of the file first, followed by 1 space, and the text (name) you want to embed. Each line identifies 1 image. 

For example

```
# names.txt
image-1.jpg @selenagomez
image-2.jpg @emrata
```

then, navigate to the directory in your terminal and run the binary.

### On Mac / Linux 
```
./credit-me-macos names.txt
# or
./credit-me-linux names.txt
```

_note: if you get a permissions error, you might have to run `chmod +x credit-me-*` to give it executable permissions._

### On Windows 

```
credit.me.windows.exe names.txt
```

# Extending / Modifying

Clone / Fork this repo and edit the code in `index.js`. For a list of what all you can change (fonts, position of text, font color, etc.), check out the documentation on [Jimp's repo.](https://github.com/oliver-moran/jimp)
