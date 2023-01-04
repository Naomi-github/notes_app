const NotesModel = require('./NotesModel')

const model = new NotesModel();

describe('Notes Model class', () => {
  it('should return and empty array when the given  array is empty', () => {
    expect(model.getNotes()).toEqual([])
  });

  it('should return buy milk and Go to the gym in the array after adding the new note to the list', () => {
    model.addNote('Buy milk')
    model.addNote('Go to the gym')
    expect(model.getNotes()).toEqual(['Buy milk', 'Go to the gym'])
  });

  it('should return and empty array as the list has been reset', () => {
    model.reset()
    expect(model.getNotes()).toEqual([])
  });

});


// expected outputs
// model.getNotes(); // should return []

// model.addNote('Buy milk');
// model.addNote('Go to the gym');

// model.getNotes(); // should now return ['Buy milk', 'Go to the gym']

// model.reset();

// model.getNotes(); // should now return []
