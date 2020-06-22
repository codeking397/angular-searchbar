import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Album } from '../models/album';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItunesService {

  constructor(private httpClient: HttpClient) { }
  url1:string = "https://itunes.apple.com/search?term=${";
  url2:string = "}&media=music&entity=album&attribute=artistTerm&limit=50";

  searchArtist(name):Observable<Album>{
    console.log(name);
    console.log(this.url1 + name + this.url2);
    return this.httpClient.get<Album>(this.url1 + name + this.url2);
  }
}
