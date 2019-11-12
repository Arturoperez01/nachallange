import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { User } from 'src/app/_models/user';
import { UserService } from 'src/app/_services/user.service';
import { noUndefined } from '@angular/compiler/src/util';

declare var jQuery: any;
/**
 * Edit user by Admin
 */
@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
})
export class UserComponent implements OnInit {

    user: User;
    list: Array<User> = [];
    showError: boolean;
    idDel;

    constructor(
        private userService: UserService,
    ) { }

    ngOnInit(): void {
        this.getAll()
        this.userService.personas.subscribe(user => this.user = user);
    }

    /**
     * Get all users
     */

    getUser(id): void {
        // Get User
        this.userService.getById(id).subscribe(user => this.user = user);
    }

    getAll(): void {
        this.user = new User(null,null,null,null);
        this.userService.getAll().subscribe(list => {this.list = list});
    }
    /**
     * Save or create User
     */
    save(): void {
        if (this.user._id) {
            // Save
            this.userService.update(this.user).subscribe(data => this.getAll());
        } else {
            // Create
            this.userService.create(this.user).subscribe(data => this.getAll());
        }
        //*/
    }


    delete(){
        this.userService.delete(this.user._id).subscribe(data =>{
            this.getAll()
        });
      }
}
