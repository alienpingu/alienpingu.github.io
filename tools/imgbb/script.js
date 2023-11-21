const apiUrl = 'https://api.imgbb.com/1/upload';
const apiKey = process.env.IMGBB_KEY;
const expiration = 600;
let imageBase64 = 'R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';

function convertToBase64() {
    var fileInput = document.getElementById('image');

    if (fileInput.files.length > 0) {
      var file = fileInput.files[0];
      var reader = new FileReader();

      reader.onload = function (e) {
        var base64String = e.target.result;
        var parts = base64String.split(",");
        if (parts.length === 2) {
            var base64Only = parts[1];
            console.log('Stringa base64 senza prefisso:', base64Only);
            imageBase64 = base64Only;

        }
      };

      // Leggi il file come URL data (base64)
      reader.readAsDataURL(file);
    }
  }

function submitHandler(e) {
    e.preventDefault(e);
    const formData = new FormData();
    formData.append('expiration', expiration);
    formData.append('key', apiKey);
    formData.append('image', imageBase64);

    console.log('Loading...');

    axios.post(apiUrl, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
        .then(response => {
            render(response.data.data.url_viewer, response.data.data.display_url, response.data.data.delete_url);
            console.log('Success');
        })
        .catch(error => {
          console.error('Error uploading image:', error);
        });
}

function render(openLink, previewLink, deleteLink) {
    document.querySelector('#result').innerHTML+= `
    <div class="col col-12 col-md-4 col-lg-3">
      <div class="card text-bg-dark mb-2">
          <img src="${previewLink}" class="card-img" alt="picsum">
          <div class="card-img-overlay">
              <a href="${openLink}" target="_blank" class="btn btn-primary"><img src="https://icongr.am/clarity/pop-out.svg?size=24&color=FFFFFF" alt="Open" width="24" height="24"></a>
              <a href="${deleteLink}" target="_blank" class="btn btn-danger"><img src="https://icongr.am/clarity/trash.svg?size=24&color=FFFFFF" alt="Open" width="24" height="24"></a>
          </div>
      </div>
    </div>`

}


document.getElementById('form').addEventListener('submit', (e) => submitHandler(e));
document.getElementById('image').addEventListener('change', (e) => convertToBase64())