// Copyright 2018-2023 the Deno authors. All rights reserved. MIT license.
/** Reader utility for combining multiple readers */ export class MultiReader {
    #readers;
    #currentIndex = 0;
    constructor(readers){
        this.#readers = [
            ...readers
        ];
    }
    async read(p) {
        const r = this.#readers[this.#currentIndex];
        if (!r) return null;
        const result = await r.read(p);
        if (result === null) {
            this.#currentIndex++;
            return 0;
        }
        return result;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImh0dHBzOi8vZGVuby5sYW5kL3N0ZEAwLjE3Ny4xL2lvL211bHRpX3JlYWRlci50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgMjAxOC0yMDIzIHRoZSBEZW5vIGF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuIE1JVCBsaWNlbnNlLlxuXG5pbXBvcnQgdHlwZSB7IFJlYWRlciB9IGZyb20gXCIuLi90eXBlcy5kLnRzXCI7XG5cbi8qKiBSZWFkZXIgdXRpbGl0eSBmb3IgY29tYmluaW5nIG11bHRpcGxlIHJlYWRlcnMgKi9cbmV4cG9ydCBjbGFzcyBNdWx0aVJlYWRlciBpbXBsZW1lbnRzIFJlYWRlciB7XG4gIHJlYWRvbmx5ICNyZWFkZXJzOiBSZWFkZXJbXTtcbiAgI2N1cnJlbnRJbmRleCA9IDA7XG5cbiAgY29uc3RydWN0b3IocmVhZGVyczogUmVhZGVyW10pIHtcbiAgICB0aGlzLiNyZWFkZXJzID0gWy4uLnJlYWRlcnNdO1xuICB9XG5cbiAgYXN5bmMgcmVhZChwOiBVaW50OEFycmF5KTogUHJvbWlzZTxudW1iZXIgfCBudWxsPiB7XG4gICAgY29uc3QgciA9IHRoaXMuI3JlYWRlcnNbdGhpcy4jY3VycmVudEluZGV4XTtcbiAgICBpZiAoIXIpIHJldHVybiBudWxsO1xuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHIucmVhZChwKTtcbiAgICBpZiAocmVzdWx0ID09PSBudWxsKSB7XG4gICAgICB0aGlzLiNjdXJyZW50SW5kZXgrKztcbiAgICAgIHJldHVybiAwO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsMEVBQTBFO0FBSTFFLGtEQUFrRCxHQUNsRCxPQUFPLE1BQU07SUFDRixDQUFDLE9BQU8sQ0FBVztJQUM1QixDQUFDLFlBQVksR0FBRyxFQUFFO0lBRWxCLFlBQVksT0FBaUIsQ0FBRTtRQUM3QixJQUFJLENBQUMsQ0FBQyxPQUFPLEdBQUc7ZUFBSTtTQUFRO0lBQzlCO0lBRUEsTUFBTSxLQUFLLENBQWEsRUFBMEI7UUFDaEQsTUFBTSxJQUFJLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxZQUFZLENBQUM7UUFDM0MsSUFBSSxDQUFDLEdBQUcsT0FBTyxJQUFJO1FBQ25CLE1BQU0sU0FBUyxNQUFNLEVBQUUsSUFBSSxDQUFDO1FBQzVCLElBQUksV0FBVyxJQUFJLEVBQUU7WUFDbkIsSUFBSSxDQUFDLENBQUMsWUFBWTtZQUNsQixPQUFPO1FBQ1QsQ0FBQztRQUNELE9BQU87SUFDVDtBQUNGLENBQUMifQ==