// header.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, switchMap } from 'rxjs/operators';
import { UserService } from '../user/user.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

  export class HeaderComponent {
    private searchTerms = new Subject<string>();

    constructor(private userService: UserService, private router: Router) {
      this.searchTerms.pipe(
        debounceTime(300),
        distinctUntilChanged(),
        filter(term => term.length > 0),
        switchMap(term => this.userService.getUser(term))
      ).subscribe(user => {
        if (user && user.data) {
          this.router.navigate(['/user-details', user.data.id]);
        }
      });
    }

    onSearchChange(event: Event): void {
      const term = (event.target as HTMLInputElement).value;
      this.searchTerms.next(term);
    }
}
