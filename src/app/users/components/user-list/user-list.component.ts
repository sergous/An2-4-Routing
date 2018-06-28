import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../models/user.model';
import { UserArrayService } from '../../services/user-array.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users$: Observable<Array<User>>;

  constructor(
    private userArrayService: UserArrayService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.users$ = this.userArrayService.getUsers();
  }

  onEditUser(user: User) {
    const link = ['edit', user.id];

    this.router.navigate(link, { relativeTo: this.route });
  }

}
