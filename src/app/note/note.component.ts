import { Component, OnInit } from '@angular/core';
import { NoteService } from '../note.service';

import { NoteObject } from '../objects/note';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {

  // private notes :NoteObject[];
  private noteService: NoteService;
  // notes: NoteObject[],
  constructor( private nService: NoteService) { 
    // this.notes = notes;
    this.noteService = nService;
  }

  ngOnInit(): void {
    // this.notes = this.noteService.getNotes();
  }

}
