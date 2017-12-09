import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import {Heroe} from '../interfaces/heroe.interface';
import 'rxjs/Rx'

@Injectable()
export class HeroesService {

  heroesUrl:string = "https://heroes-firebase-1234.firebaseio.com/heroes.json";
  heroeUrl:string = "https://heroes-firebase-1234.firebaseio.com/heroes/";

  constructor(private http:Http) { }

  nuevoHeroe(heroe:Heroe){

    let body= JSON.stringify(heroe);
    let headers = new Headers({
      'Content-type':'application/json'
    });

    return this.http.post(this.heroesUrl, body ,{headers:headers})
            .map(res=>{
              console.log(res.json());
              return res.json();
            })

  }

  actualizarHeroe(heroe:Heroe, key$:string){

    let body= JSON.stringify(heroe);
    let headers = new Headers({
      'Content-type':'application/json'
    });

    let url = `${this.heroeUrl}/${ key$ }.json`
    return this.http.put(url, body, { headers })
            .map(res=>{
              console.log(res.json());
              return res.json();
            })

  }
}
