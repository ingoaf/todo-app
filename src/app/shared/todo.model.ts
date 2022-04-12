export class Todo {   // shortcut to create a class in typescript
    constructor(  // create properties on the class
        public text: string,
        public completed: boolean=false
    ) {}
}
