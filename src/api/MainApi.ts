import HttpClient from "./HttpClient";

export default class MainApi extends HttpClient {
    public constructor(baseURL: string) {
        super(baseURL);
    }

    public getMoviesByRequest = (request: string) => this.instance.get(request);
}
