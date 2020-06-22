import { Component, OnInit, Input } from '@angular/core';
import { Album } from '../models/album';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
@Input() albums: Album[];
@Input() albumsNumber: number;
@Input() name: string;

@Input() open: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
