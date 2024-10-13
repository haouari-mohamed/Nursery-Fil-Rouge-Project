import { Component, OnInit } from '@angular/core';
import { Creche } from 'src/app/Shared Components/models/global.model';
import { CrecheService } from 'src/app/Shared Components/services/creche.service';
import { PanierService } from 'src/app/Shared Components/services/panier.service';

@Component({
  selector: 'app-nursery-card',
  templateUrl: './nursery-card.component.html',
  styleUrls: ['./nursery-card.component.css']
})
export class NurseryCardComponent implements OnInit {
  creches: Creche[] = [];
  panierId: number | null = null;

  constructor(
    private crecheService: CrecheService,
    private panierService: PanierService
  ) {}

  ngOnInit(): void {
    this.fetchCreches();
    const parentId = 1; 
    this.panierService.createPanier(parentId).subscribe((response) => {
      this.panierId = response.id; // Set panierId when the cart is created
    });
  }

  fetchCreches(): void {
    this.crecheService.getAllCreches().subscribe(
      (data: Creche[]) => {
        this.creches = data;
      },
      (error) => {
        console.error('Error fetching crèches', error);
      }
    );
  }

  addCrecheToCart(creche: Creche): void {
    if (this.panierId !== null) { // Check if panierId is not null
      this.panierService.addCrecheToCart(this.panierId, creche).subscribe(() => {
     
      }, (error) => {
        console.error('Error adding crèche to cart', error);
      });
    } else {
      console.error('Panier ID is not initialized. Please create a cart first.');
  
    }
  }
}
