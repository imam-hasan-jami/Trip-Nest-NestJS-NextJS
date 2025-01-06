import { AboutService } from './about.service';
export declare class AboutController {
    private readonly aboutService;
    constructor(aboutService: AboutService);
    getAboutInfo(): string;
}
