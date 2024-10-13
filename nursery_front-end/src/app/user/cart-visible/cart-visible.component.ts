import { Component, Input, OnInit } from '@angular/core';
import { PanierService } from 'src/app/Shared Components/services/panier.service';

@Component({
  selector: 'app-cart-visible',
  templateUrl: './cart-visible.component.html',
  styleUrls: ['./cart-visible.component.css']
})
export class CartVisibleComponent implements OnInit {
  @Input() panierId: number | null = null;
  crechesInCart: any[] = [];
  isCartVisible: boolean = true;  

  constructor(private panierService: PanierService) {}

  // Fetch crèches when the component initializes
  ngOnInit(): void {
    if (this.panierId !== null) {
      this.loadCrechesInCart();
    }
  }
  
  loadCrechesInCart(): void {
    if (this.panierId !== null) {
      this.panierService.getCrechesInPanier(this.panierId).subscribe(
        (creches: any[]) => {
          this.crechesInCart = creches;
        },
        (error) => {
          console.error('Error fetching crèches in cart', error);
        }
      );
    }
  }

  // Remove a crèche from the cart
  removeCrecheFromCart(creche: any): void {
    if (this.panierId !== null) {
      this.panierService.removeCrecheFromCart(this.panierId, creche).subscribe(() => {
        this.crechesInCart = this.crechesInCart.filter(item => item !== creche);
      }, (error) => {
        console.error('Error removing crèche from cart', error);
      });
    }
  }

  // Handle checkout logic
  checkout(): void {
    console.log('Proceeding to checkout...');
  }

  // Toggle the visibility of the cart
  toggleCartVisibility(): void {
    this.isCartVisible = !this.isCartVisible;
  }
}
