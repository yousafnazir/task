import { Component } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css'],
})
export class CardsComponent {
  cards = [
    {
      id: 'card1',
      titleClass: 'p1',
      title: 'Basic',
      pricePerYear: '$9.99 / year',
      r1: '10 GB Storage',
      r2: '10 emails',
      r3: '10 domains',
      r4: '1Gb Bandwidth',
      expandCardValue: 1,
    },
    {
      id: 'card2',
      titleClass: 'g1',
      title: 'Pro',
      pricePerYear: '$24.9 / year',
      r1: '25 GB Storage',
      r2: '25 emails',
      r3: '25 domains',
      r4: '2Gb Bandwidth',
      expandCardValue: 2,
    },
    {
      id: 'card3',
      titleClass: 'p1',
      title: 'Premium',
      pricePerYear: '$59 / year',
      r1: '50 GB Storage',
      r2: '50 emails',
      r3: '50 domains',
      r4: '5Gb Bandwidth',
      expandCardValue: 3, 
    },
  ];
 expandCard(cardNumber: number): void {
    const card = document.getElementById(`card${cardNumber}`) as HTMLElement;

    if (card.classList.contains('expanded')) {
        // If the card is already expanded, collapse it and make others visible
        card.classList.remove('expanded');
        const otherCards = document.querySelectorAll('.card');
        otherCards.forEach((otherCard) => {
            otherCard.classList.remove('invisible');
        });
    } else {
        // Expand the clicked card and make others invisible
        const otherCards = document.querySelectorAll(`.card:not(#card${cardNumber})`);
        otherCards.forEach((otherCard) => {
            otherCard.classList.add('invisible');
        });
        card.classList.add('expanded');
    }
}


}
