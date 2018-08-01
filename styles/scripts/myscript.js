const grandma = document.getElementsByClassName('grandma')[0];
document.body.style.backgroundColor = "red";
grandma.onclick = function(){myscript};
grandma.addEventListener("click",myscript);
  document.getElementById("demo").innerHTML = "Hello World"
  var canvas = document.getElementById('memecanvas');
  ctx = canvas.getContext('2d');
 
  var deviceWidth = window.innerWidth;;
  canvasWidth = Math.min(600, deviceWidth-20);
  canvasHeight = Math.min(480, deviceWidth-20);
 
  canvas.width = canvasWidth;
  canvas.height = canvasHeight;
  var img = document.getElementById('start-image');
 
  
  img.onload = function() {
    
    x = canvas.width/2 - img.width/2;
    y = canvas.height/2 - img.height/2;
 

    ctx.drawImage(img, x, y);
  }
  scale = document.getElementById('scale');
    scale.addEventListener('change', doTransform, false);
 
    rotate = document.getElementById('rotate');
    rotate.addEventListener('change', doTransform, false);
    function doTransform() {
      ctx.save();
   
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);
   
      // Translate to center so transformations will apply around this point
      ctx.translate(canvas.width/2, canvas.height/2);
   
      // Perform scale
      var val = document.getElementById('scale').value;
      ctx.scale(val, val);
   
      // Perform rotation
      val = document.getElementById('rotate').value;
      ctx.rotate(val*Math.PI/180);
   
      // Reverse the earlier translation
      ctx.translate(-canvas.width/2, -canvas.height/2);
   
      // Finally, draw the image
      ctx.drawImage(img, x, y);
   
      ctx.restore();
    }
    var fileInput = document.getElementById('fileInput');
  fileInput.addEventListener('change', imageLoader(), false);
  
  function imageLoader() {
    var reader = new FileReader();
    reader.onload = function(event) {
      img = new Image();
      img.onload = function(){
        ctx.drawImage(img,0,0);
      }
      img.src = reader.result;
    }
    reader.readAsDataURL(fileInput.files[0]);
   }
    // Set the text style to that to which we are accustomed
    ctx.lineWidth  = 5;
    ctx.font = '20pt sans-serif';
    ctx.strokeStyle = 'black';
    ctx.fillStyle = 'white';
    ctx.textAlign = 'center';
    ctx.lineJoin = 'round';
 
    // Draw the text
    var text = document.getElementById('custom-text').value;
    text = text.toUpperCase();
    x = canvas.width/2;
    y = canvas.height - canvas.height/4.5;
    ctx.strokeText(text, x, y);
    ctx.fillText(text, x, y);
 
    var download = document.getElementById('img-download');
    download.addEventListener('click', prepareDownload, false);
   
    function prepareDownload() {
      var data = canvas.toDataURL();
      download.href = data;
    }