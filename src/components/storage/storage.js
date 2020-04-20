// src/storage/storage.js
///
export class Storage {
    constructor(storageName = 'gameScoreboard', initialValue = '[]') {
      this.storageName = storageName
  
          // Check if localStorage contains any data from previous games
      if (!localStorage.getItem(storageName)) {
              // If not, create new item for our  game
        localStorage.setItem(storageName, initialValue)
      }
    }