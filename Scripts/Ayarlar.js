 if (navigator.getUserMedia) {
        navigator.getUserMedia({ video:true, audio:false }, function(stream) {
        var output = document.getElementById('cameraPlayer');
        output.src = window.URL.createObjectURL(stream);
    }, function(error) {});
}