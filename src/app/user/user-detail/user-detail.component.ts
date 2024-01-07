import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';
import { User } from 'src/app/User';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  user: User | null = null;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) {}



  ngOnInit() {
    this.loadUser();
  }

  loadUser() {
    const userId = this.route.snapshot.paramMap.get('id');
    if (userId) {
      this.userService.getUser(userId).subscribe(
        (data) => {
          this.user = data.data;
        },
        (error) => {
          // Handle errors here, e.g., user not found or API errors
          console.error(error);
          // Optionally navigate back or to an error page
        }
      );
    } else {
      // Handle the case where userId is not available
      // Optionally navigate back or to a different page
    }
  }



  goBack() {
    this.router.navigate(['/users']); // Adjust the route as per your app's routing
  }
}
