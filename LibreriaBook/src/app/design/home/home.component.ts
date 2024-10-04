import { Component, OnInit } from '@angular/core';
import { BookserviceService } from '../../core/bookservice.service';

import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  public lstPromocion: any[] = [];

  constructor(private bookservice: BookserviceService) {}

  ngOnInit(): void {
    this.voidListarPromoall();
  }
  voidListarPromoall() {
    this.bookservice.getPromocionDiario().subscribe({
      next: (lst: any) => {
        console.log(lst);
        this.lstPromocion = lst;
      },
    });
  }
}
