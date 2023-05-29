// Copyright 2018-2023 the Deno authors. All rights reserved. MIT license.
/**
 * A `LimitedReader` reads from `reader` but limits the amount of data returned to just `limit` bytes.
 * Each call to `read` updates `limit` to reflect the new amount remaining.
 * `read` returns `null` when `limit` <= `0` or
 * when the underlying `reader` returns `null`.
 */ export class LimitedReader {
    constructor(reader, limit){
        this.reader = reader;
        this.limit = limit;
    }
    async read(p) {
        if (this.limit <= 0) {
            return null;
        }
        if (p.length > this.limit) {
            p = p.subarray(0, this.limit);
        }
        const n = await this.reader.read(p);
        if (n == null) {
            return null;
        }
        this.limit -= n;
        return n;
    }
    reader;
    limit;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImh0dHBzOi8vZGVuby5sYW5kL3N0ZEAwLjE3Ny4xL2lvL2xpbWl0ZWRfcmVhZGVyLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAyMDE4LTIwMjMgdGhlIERlbm8gYXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC4gTUlUIGxpY2Vuc2UuXG4vKipcbiAqIEEgYExpbWl0ZWRSZWFkZXJgIHJlYWRzIGZyb20gYHJlYWRlcmAgYnV0IGxpbWl0cyB0aGUgYW1vdW50IG9mIGRhdGEgcmV0dXJuZWQgdG8ganVzdCBgbGltaXRgIGJ5dGVzLlxuICogRWFjaCBjYWxsIHRvIGByZWFkYCB1cGRhdGVzIGBsaW1pdGAgdG8gcmVmbGVjdCB0aGUgbmV3IGFtb3VudCByZW1haW5pbmcuXG4gKiBgcmVhZGAgcmV0dXJucyBgbnVsbGAgd2hlbiBgbGltaXRgIDw9IGAwYCBvclxuICogd2hlbiB0aGUgdW5kZXJseWluZyBgcmVhZGVyYCByZXR1cm5zIGBudWxsYC5cbiAqL1xuaW1wb3J0IHR5cGUgeyBSZWFkZXIgfSBmcm9tIFwiLi4vdHlwZXMuZC50c1wiO1xuXG5leHBvcnQgY2xhc3MgTGltaXRlZFJlYWRlciBpbXBsZW1lbnRzIFJlYWRlciB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyByZWFkZXI6IFJlYWRlciwgcHVibGljIGxpbWl0OiBudW1iZXIpIHt9XG5cbiAgYXN5bmMgcmVhZChwOiBVaW50OEFycmF5KTogUHJvbWlzZTxudW1iZXIgfCBudWxsPiB7XG4gICAgaWYgKHRoaXMubGltaXQgPD0gMCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgaWYgKHAubGVuZ3RoID4gdGhpcy5saW1pdCkge1xuICAgICAgcCA9IHAuc3ViYXJyYXkoMCwgdGhpcy5saW1pdCk7XG4gICAgfVxuICAgIGNvbnN0IG4gPSBhd2FpdCB0aGlzLnJlYWRlci5yZWFkKHApO1xuICAgIGlmIChuID09IG51bGwpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHRoaXMubGltaXQgLT0gbjtcbiAgICByZXR1cm4gbjtcbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDBFQUEwRTtBQUMxRTs7Ozs7Q0FLQyxHQUNELEFBRUEsT0FBTyxNQUFNO0lBQ1gsWUFBbUIsUUFBdUIsTUFBZTtzQkFBdEM7cUJBQXVCO0lBQWdCO0lBRTFELE1BQU0sS0FBSyxDQUFhLEVBQTBCO1FBQ2hELElBQUksSUFBSSxDQUFDLEtBQUssSUFBSSxHQUFHO1lBQ25CLE9BQU8sSUFBSTtRQUNiLENBQUM7UUFFRCxJQUFJLEVBQUUsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDekIsSUFBSSxFQUFFLFFBQVEsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLO1FBQzlCLENBQUM7UUFDRCxNQUFNLElBQUksTUFBTSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQztRQUNqQyxJQUFJLEtBQUssSUFBSSxFQUFFO1lBQ2IsT0FBTyxJQUFJO1FBQ2IsQ0FBQztRQUVELElBQUksQ0FBQyxLQUFLLElBQUk7UUFDZCxPQUFPO0lBQ1Q7SUFqQm1CO0lBQXVCO0FBa0I1QyxDQUFDIn0=