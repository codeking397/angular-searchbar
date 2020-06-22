import { Component, OnInit } from '@angular/core';
import { ItunesService } from '../service/itunes.service';
import { Album } from '../models/album';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  value:any;
  albumsNumber: number;
  albums:Album[];

  name:string;
  open:boolean;
  constructor(private itunesService: ItunesService) { }

  ngOnInit(): void {
  }
  search(){
    this.itunesService.searchArtist(this.name).subscribe((val)=>{
      this.albums = val.results;
      this.albumsNumber = val.resultCount;
    });
    console.log(this.albums);
    this.open = true;
  }
}
