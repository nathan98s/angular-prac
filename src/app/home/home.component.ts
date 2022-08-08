import { Component, OnInit, Injectable } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { NoteService } from '../note.service';
import { NoteObject } from '../objects/note';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
@Injectable()
export class HomeComponent implements OnInit {

  public notes: NoteObject[];
  private noteService: NoteService;

  constructor(noteService:NoteService) {
    this.noteService = noteService;
   }

  ngOnInit(): void {
    this.notes = this.noteService.getNotes();
  }

}
