import { Component, Input, OnInit } from '@angular/core';
import { PanierService } from 'src/app/Shared Components/services/panier.service';
import { catchError, finalize } from 'rxjs/operators';
import { of } from 'rxjs';
import { Creche } from 'src/app/Shared Components/models/global.model';


@Component({
  selector: 'app-cart-visible',
  templateUrl: './cart-visible.component.html',
  styleUrls: ['./cart-visible.component.css']
})
export class CartVisibleComponent implements OnInit {
  @Input() panierId: number | null = null;
  crechesInCart: Creche[] = [];
  isCartVisible: boolean = true;
  isLoading: boolean = false;
  error: string | null = null;

  constructor(private panierService: PanierService) {}

  ngOnInit(): void {
    this.loadCrechesInCart();
  }

  loadCrechesInCart(): void {
    this.isLoading = true;
    this.error = null;

    this.panierService.getCrechesInPanier().pipe(
      catchError(error => {
        this.error = 'Failed to load crèches. Please try again later.';
        console.error('Error fetching crèches in cart', error);
        return of([]);
      }),
      finalize(() => {
        this.isLoading = false;
      })
    ).subscribe((creches: Creche[]) => {
      this.crechesInCart = creches;
    });
  }

  removeCrecheFromCart(creche: any) {
    this.isLoading = true;
    this.panierService.removeCrecheFromCart(creche.id).subscribe(
      () => {
        this.crechesInCart = this.crechesInCart.filter(item => item.id !== creche.id);
        this.isLoading = false;
      },
      (error) => {
      
        this.error = 'Failed to remove the crèche from the cart. Please try again later.';
        this.isLoading = false;
      }
    );
  }

  formatPrice(tarifs: string): string {
    const price = parseFloat(tarifs);
    return `${price.toFixed(2)} €`;
  }

  checkout(): void {
    if (this.crechesInCart.length === 0) {
      this.error = 'Your cart is empty';
      return;
    }
    
    console.log('Proceeding to checkout with items:', this.crechesInCart);
  }

  toggleCartVisibility(): void {
    this.isCartVisible = !this.isCartVisible;
  }

  clearError(): void {
    this.error = null;
  }

  getTotal(): number {
    return this.crechesInCart.length;
  }
}