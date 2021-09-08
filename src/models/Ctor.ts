export class Ctor {
    id: number;
    title: string;
    subtitle: string;
    createdAt: Date;
    authorName: string;
    authorId: number;
    thumbId: number;
    tag: string;
    items: CtorItem[];

    constructor() {
        this.items = [new CtorItem()];
    }
}

export class CtorItem {
    id: number;
    /** CtorItemType */
    type: string;
    value: string;
    ctorId: number;

    constructor(ctorId: number = null) {
        this.type = CtorItemType.Text;

        if (ctorId) {
            this.ctorId = ctorId;
        }
    }
}

export const CtorItemType: { [key: string]: string } = {
    Text: 'Text',
    Image: 'Image',
    H1: 'H1',
    H2: 'H2',
    List: 'List',
    Comment: 'Comment'
  }