import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  // paises: any[] = [];
  // constructor(private http: HttpClient) {
  //   this.http
  //     .get('https://restcountries.eu/rest/v2/lang/es')
  //     .subscribe((resp:any) => {
  //       console.log(resp);
  //       this.paises = resp;
  //     });
  // }

  nuevasCanciones: any[] = [];
  loading: boolean;
  error: boolean;
  mensajeError:string;
  constructor(private spotify: SpotifyService) {
    this.loading = true;
    this.error = false;


    this.spotify.getNewRelease().subscribe((data: any) => {
      console.log(data);
      this.nuevasCanciones = data;
      this.loading = false;
    }, (errorServicio)=>{
      console.log(errorServicio);
      this.error = true;
      this.loading = false;

      this.mensajeError = errorServicio.error.error.message;
      
    });
  }
}
