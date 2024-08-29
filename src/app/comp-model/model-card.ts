export class card{
  image:string;
  textcontent:string;
  titleContent:string;
  url:string;

  constructor(image:string, textcontent:string, titleContent:string, url:string) {
    this.image = image;
    this.textcontent = textcontent;
    this.titleContent = titleContent;
    this.url = url;
  }
}
