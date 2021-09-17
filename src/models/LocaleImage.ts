import { environment } from '../environments/environment';
import { Image } from './Image';

export class LocaleImage extends Image {
    // constructor(
    //     id: number,
    //     name: string
    // ) { 
    //     super(id, name)
    // }

    get thumb() {
        return this.localeImage;
    }

    get medium() {
        return this.localeImage;
    }

    get large() {
        return this.localeImage;
    }
    
    get localeImage() {
        return `/${this.name}`;
    }
}