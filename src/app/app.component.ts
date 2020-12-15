import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {filter, map} from 'rxjs/operators';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    isCollapsed = false;
    title = 'Demo App';

    constructor(private router: Router, private activatedRoute: ActivatedRoute, private titleService: Title) {
    }

    ngOnInit(): void {
        const appTitle = this.titleService.getTitle();
        this.router.events.pipe(
            filter(event => event instanceof NavigationEnd),
            map(() => {
                const child = this.activatedRoute.firstChild;
                if (child.snapshot.data.breadcrumb) {
                    return child.snapshot.data.breadcrumb;
                }
                return appTitle;
            })
        ).subscribe((ttl: string) => {
            this.setDocTitle(ttl);
        });
    }

    setDocTitle(title: string): void {
        this.titleService.setTitle(title);
    }
}
