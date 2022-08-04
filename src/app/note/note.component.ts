import { Component, Inject, Injectable, OnInit } from '@angular/core';
import { NoteService } from '../note.service';

import { NoteObject } from '../objects/note';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
@Injectable()
export class NoteComponent implements OnInit {

  public noteList: NoteObject[];
  private noteService: NoteService;
  
  constructor(private nService: NoteService) { 
    this.noteService = nService;
  }

  ngOnInit(): void {
    this.noteList = this.noteService.getNotes();
  }

}
