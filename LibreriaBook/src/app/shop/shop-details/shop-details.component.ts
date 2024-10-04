import { Component, OnInit } from '@angular/core';
import { BookserviceService } from '../../core/bookservice.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-shop-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './shop-details.component.html',
  styleUrl: './shop-details.component.css',
})
export class ShopDetailsComponent implements OnInit {
  public lstPromocion: any[] = [];

  public dtltitulo: string = '';
  public dtldescripcion: string = '';
  public dtlprecio: string = '';
  public dtlsku: string = '';
  public dtltags: string = '';
  public dtlpagina: string = '';
  public dtlpais: string = '';
  public dtlfecha: string = '';
  public dtlalto: string = '';
  public dtlancho: string = '';
  public dtlidioma: string = '';
  public dtlpeso: string = '';
  public dtlEditor: string = '';
  public dtlformato: string = '';
  public dtlimagen: string = '';

  public dtlid: string = localStorage.getItem('idarti')!;

  constructor(private bookservice: BookserviceService) {}

  ngOnInit(): void {
    this.voidListarPromoall();
  }

  voidListarPromoall() {
    this.bookservice.getbmgbookid(this.dtlid).subscribe({
      next: (lst: any) => {
        console.log(lst);
        this.dtltitulo = lst.titulo;
        this.dtldescripcion = lst.resumen;
        this.dtlprecio = lst.pvp;
        this.dtlsku = lst.codigo_bmg;
        this.dtltags = lst.canal_venta;
        this.dtlpagina = lst.paginas;
        this.dtlpais = lst.moneda;
        this.dtlfecha = lst.fecha_publicacion;
        this.dtlalto = lst.alto;
        this.dtlancho = lst.ancho;
        this.dtlidioma = lst.idioma_edicion;
        this.dtlpeso = lst.peso;
        this.dtlEditor = lst.editor;
        this.dtlformato = lst.formato;
        this.dtlimagen = lst.imagen_tapa;
      },
    });
  }
}
