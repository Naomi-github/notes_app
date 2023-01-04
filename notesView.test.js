/**
 * @jest-environment jsdom
 */

const fs = require('fs');

const NotesModel = require('./notesModel');
const NotesView = require('./notesView');

describe('Notes view', () => {
  it('displays two notes', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');

    // 1. Setting up model and view
    const model = new NotesModel();
    const view = new NotesView(model);
    model.addNote('A first note');
    model.addNote('Another one');

    // 2. Display the notes on the page
    view.displayNotes();

    // 3. There should now be 2 div.note on the page
    expect(document.querySelectorAll('div.note').length).toEqual(2);
  });

  it('adds a new note', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');

    const model = new NotesModel();
    const view = new NotesView(model);

    const input = document.querySelector('#add-note-input');
    input.value = 'My new test note';

    const button = document.querySelector('#add-note-button');

    button.click();

    expect(document.querySelectorAll('div.note').length).toEqual(1);

    expect(document.querySelectorAll('div.note')[0].textContent).toEqual('My new test note');
  });

  it('clear the list of previous notes before displaying', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');

    const model = new NotesModel();
    const view = new NotesView(model);
    model.addNote('New note one');
    model.addNote('New note two');

    view.displayNotes();
    view.displayNotes();

    expect(document.querySelectorAll('div.note').length).toEqual(2);
  });
});



