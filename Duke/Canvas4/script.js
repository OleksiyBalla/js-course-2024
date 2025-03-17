function upload() {
    const fileinput = document.getElementById("fileinput");
    var canvas = document.getElementById("can1");
    let image = new SimpleImage(fileinput);
    image.drawTo(canvas);
}
