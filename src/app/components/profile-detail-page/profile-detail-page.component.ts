import { Component, OnInit } from '@angular/core';
import { PassportUser } from '../../models/user';
import { UserService } from '../../services/user-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile-detail-page',
  templateUrl: './profile-detail-page.component.html',
  styleUrls: ['./profile-detail-page.component.css']
})
export class ProfileDetailPageComponent implements OnInit {

    userID: number;
    profile: PassportUser;

    constructor(
        private userService: UserService,
        private route: ActivatedRoute
    ) { }

    ngOnInit() {
        // Fetch User
        this.userID = +this.route.snapshot.paramMap.get('id');
        this.userService.getUser(this.userID).subscribe(
            user => {
                this.profile = user;
            }
        );
    }

}
