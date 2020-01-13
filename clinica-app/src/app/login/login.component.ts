import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication/authentication.module';
import { Authentication } from '../models/authentication.model';
import { UserLogin } from './../models/user-login.model';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent {

	readonly SNACKBAR_MESSAGE_DURATION: number = 3000;
	user: UserLogin = new UserLogin();

	constructor(private authenticationService: AuthenticationService, 
		private router: Router) {
		this.user.username = 'admin';
		this.user.password = 'default-password-0000';
	}

	login(event: Event): void {
		event.preventDefault();
		this.loginServiceCall();
	}

	loginServiceCall(): void {
		this.authenticationService.login(this.user.username, this.user.password)
			.subscribe(
				(authenticationResponse: Authentication) => {
					this.router.navigate(['/citas']);
				}
			);
	}
}
