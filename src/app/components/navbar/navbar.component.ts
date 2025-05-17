import { Component, OnInit } from '@angular/core';
import { Router, RouterModule, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {
  userName: string = '';
  
  constructor(
    public authService: AuthService,
    private router: Router
  ) {}
  
  ngOnInit(): void {
    // Set username when component initializes
    this.updateUserName();
    
    // Subscribe to auth status changes to update username
    this.authService.authStatus$.subscribe(isAuthenticated => {
      if (isAuthenticated) {
        this.updateUserName();
      } else {
        this.userName = '';
      }
    });
  }
  
  private updateUserName(): void {
    const user = this.authService.getCurrentUser();
    if (user) {
      this.userName = user.name || user.username || 'Utilisateur';
    }
  }

  logout(event: Event): void {
    event.preventDefault();
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}

