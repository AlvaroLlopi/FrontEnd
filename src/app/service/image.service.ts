import { Injectable } from '@angular/core';
import { Storage, ref, uploadBytes, list, getDownloadURL } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  url : string = "";

  constructor(private storage: Storage) { }

  public uploadImage($event: any, name: string){
    const file = $event.target.files[0]
    const imgRef = ref(this.storage, 'Imagen/' + name)
    uploadBytes(imgRef, file)
    .then(response => {this.getImage()})
    .catch(error => console.log(error))
  }

  getImage(){
    const imageRef= ref(this.storage,'Imagen')
    list(imageRef)
    .then(async response => {
      for(let item of response.items){
        this.url = await getDownloadURL(item);
        console.log("La URL es : " + this.url)
      }
    })
    .catch(error => console.log(error))
  }

}
