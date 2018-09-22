import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user-service.service';
import { PassportUser } from '../../models/user';
import { Router } from '@angular/router';

@Component({
    selector: 'app-people-page',
    templateUrl: './people-page.component.html',
    styleUrls: ['./people-page.component.css']
})
export class PeoplePageComponent implements OnInit {

    users: PassportUser[];

    constructor(
        private router: Router,
        private userService: UserService
    ) { }

    ngOnInit() {
        this.userService.getAllUsers().subscribe(
            users => {
                this.users = users;
            }
        );
    }

    viewProfile(user: PassportUser) {
        this.router.navigate(['users', user.id]);
    }

}
