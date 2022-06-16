import {Injectable} from '@angular/core';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  constructor(public router: Router) {
  }

  navigate(path: string): void {
    this.router.navigate([path]).then();
  }

  navigateToUnsecure(): void {
    this.navigate('/signin/user');
  }

  navigateToSecure(): void {
    this.navigate('');
  }
}
