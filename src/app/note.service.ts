import { Injectable } from '@angular/core';
import { NoteObject } from './objects/note';

@Injectable({
  providedIn: 'root'
})

export class NoteService {

  constructor() {}

  getNotes() {
    var note1 = new NoteObject("Note 1", "this is the message from the first note");
    var note2 = new NoteObject("Note 2", "Wow another message who would have expected that");
    var note3 = new NoteObject("Note 3", "THE FINAL NOTE");

    var notes = [note1, note2, note3];
    return notes;
  }
}
