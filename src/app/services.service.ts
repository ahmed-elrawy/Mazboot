import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor() { }

  public conferences: object[][] = [
    [
      { id: 1, name: "one", content: "We would very much like to hear your thoughts and ideas and tell you more about how we can help you. Contact us below" },
      { id: 2, name: "tow", content: "We would very much like to hear your thoughts and ideas and tell you more about how we can help you. Contact us below" },
      { id: 3, name: "tree", content: "We would very much like to hear your thoughts and ideas and tell you more about how we can help you. Contact us below" },
      { id: 4, name: "fore", content: "We would very much like to hear your thoughts and ideas and tell you more about how we can help you. Contact us below" },
      { id: 5, name: "five", content: "We would very much like to hear your thoughts and ideas and tell you more about how we can help you. Contact us below" },
      { id: 6, name: "six", content: "We would very much like to hear your thoughts and ideas and tell you more about how we can help you. Contact us below" },
      { id: 7, name: "seven", content: "We would very much like to hear your thoughts and ideas and tell you more about how we can help you. Contact us below" },
    ],
    [
      { id: 1, name: "one", content: "We would very much like to hear your thoughts and ideas and tell you more about how we can help you. Contact us below" },
      { id: 2, name: "tow", content: "We would very much like to hear your thoughts and ideas and tell you more about how we can help you. Contact us below" },
      { id: 3, name: "tree", content: "We would very much like to hear your thoughts and ideas and tell you more about how we can help you. Contact us below" },
      { id: 4, name: "fore", content: "We would very much like to hear your thoughts and ideas and tell you more about how we can help you. Contact us below" },
      { id: 5, name: "five", content: "We would very much like to hear your thoughts and ideas and tell you more about how we can help you. Contact us below" },
      { id: 6, name: "six", content: "We would very much like to hear your thoughts and ideas and tell you more about how we can help you. Contact us below" },
      { id: 7, name: "seven", content: "We would very much like to hear your thoughts and ideas and tell you more about how we can help you. Contact us below" },
    ],
    [
      { id: 1, name: "one", content: "We would very much like to hear your thoughts and ideas and tell you more about how we can help you. Contact us below" },
      { id: 2, name: "tow", content: "We would very much like to hear your thoughts and ideas and tell you more about how we can help you. Contact us below" },
      { id: 3, name: "tree", content: "We would very much like to hear your thoughts and ideas and tell you more about how we can help you. Contact us below" },
      { id: 4, name: "fore", content: "We would very much like to hear your thoughts and ideas and tell you more about how we can help you. Contact us below" },

    ],
    [
      { id: 1, name: "one", content: "We would very much like to hear your thoughts and ideas and tell you more about how we can help you. Contact us below" },

    ],
    [
      { id: 1, name: "one", content: "We would very much like to hear your thoughts and ideas and tell you more about how we can help you. Contact us below" },
      { id: 2, name: "tow", content: "We would very much like to hear your thoughts and ideas and tell you more about how we can help you. Contact us below" },
      { id: 3, name: "tree", content: "We would very much like to hear your thoughts and ideas and tell you more about how we can help you. Contact us below" },
      { id: 4, name: "fore", content: "We would very much like to hear your thoughts and ideas and tell you more about how we can help you. Contact us below" },
      { id: 5, name: "five", content: "We would very much like to hear your thoughts and ideas and tell you more about how we can help you. Contact us below" },
      { id: 6, name: "six", content: "We would very much like to hear your thoughts and ideas and tell you more about how we can help you. Contact us below" },
      { id: 7, name: "seven", content: "We would very much like to hear your thoughts and ideas and tell you more about how we can help you. Contact us below" },
      { id: 1, name: "one", content: "We would very much like to hear your thoughts and ideas and tell you more about how we can help you. Contact us below" },
      { id: 2, name: "tow", content: "We would very much like to hear your thoughts and ideas and tell you more about how we can help you. Contact us below" },
      { id: 3, name: "tree", content: "We would very much like to hear your thoughts and ideas and tell you more about how we can help you. Contact us below" },
      { id: 4, name: "fore", content: "We would very much like to hear your thoughts and ideas and tell you more about how we can help you. Contact us below" },
      { id: 5, name: "five", content: "We would very much like to hear your thoughts and ideas and tell you more about how we can help you. Contact us below" },
      { id: 6, name: "six", content: "We would very much like to hear your thoughts and ideas and tell you more about how we can help you. Contact us below" },
      { id: 7, name: "seven", content: "We would very much like to hear your thoughts and ideas and tell you more about how we can help you. Contact us below" },
    ],
    [
      { id: 1, name: "one", content: "We would very much like to hear your thoughts and ideas and tell you more about how we can help you. Contact us below" },
      { id: 2, name: "tow", content: "We would very much like to hear your thoughts and ideas and tell you more about how we can help you. Contact us below" },
      { id: 3, name: "tree", content: "We would very much like to hear your thoughts and ideas and tell you more about how we can help you. Contact us below" },
      { id: 4, name: "fore", content: "We would very much like to hear your thoughts and ideas and tell you more about how we can help you. Contact us below" },
      { id: 5, name: "five", content: "We would very much like to hear your thoughts and ideas and tell you more about how we can help you. Contact us below" },
      { id: 6, name: "six", content: "We would very much like to hear your thoughts and ideas and tell you more about how we can help you. Contact us below" },
      { id: 7, name: "seven", content: "We would very much like to hear your thoughts and ideas and tell you more about how we can help you. Contact us below" },
      { id: 1, name: "one", content: "We would very much like to hear your thoughts and ideas and tell you more about how we can help you. Contact us below" },
      { id: 2, name: "tow", content: "We would very much like to hear your thoughts and ideas and tell you more about how we can help you. Contact us below" },
      { id: 3, name: "tree", content: "We would very much like to hear your thoughts and ideas and tell you more about how we can help you. Contact us below" },
      { id: 4, name: "fore", content: "We would very much like to hear your thoughts and ideas and tell you more about how we can help you. Contact us below" },
      { id: 5, name: "five", content: "We would very much like to hear your thoughts and ideas and tell you more about how we can help you. Contact us below" },
      { id: 6, name: "six", content: "We would very much like to hear your thoughts and ideas and tell you more about how we can help you. Contact us below" },
      { id: 7, name: "seven", content: "We would very much like to hear your thoughts and ideas and tell you more about how we can help you. Contact us below" },
      { id: 1, name: "one", content: "We would very much like to hear your thoughts and ideas and tell you more about how we can help you. Contact us below" },
      { id: 2, name: "tow", content: "We would very much like to hear your thoughts and ideas and tell you more about how we can help you. Contact us below" },
      { id: 3, name: "tree", content: "We would very much like to hear your thoughts and ideas and tell you more about how we can help you. Contact us below" },
      { id: 4, name: "fore", content: "We would very much like to hear your thoughts and ideas and tell you more about how we can help you. Contact us below" },
      { id: 5, name: "five", content: "We would very much like to hear your thoughts and ideas and tell you more about how we can help you. Contact us below" },
      { id: 6, name: "six", content: "We would very much like to hear your thoughts and ideas and tell you more about how we can help you. Contact us below" },
      { id: 7, name: "seven", content: "We would very much like to hear your thoughts and ideas and tell you more about how we can help you. Contact us below" },
      { id: 1, name: "one", content: "We would very much like to hear your thoughts and ideas and tell you more about how we can help you. Contact us below" },
      { id: 2, name: "tow", content: "We would very much like to hear your thoughts and ideas and tell you more about how we can help you. Contact us below" },
      { id: 3, name: "tree", content: "We would very much like to hear your thoughts and ideas and tell you more about how we can help you. Contact us below" },
      { id: 4, name: "fore", content: "We would very much like to hear your thoughts and ideas and tell you more about how we can help you. Contact us below" },
      { id: 5, name: "five", content: "We would very much like to hear your thoughts and ideas and tell you more about how we can help you. Contact us below" },
      { id: 6, name: "six", content: "We would very much like to hear your thoughts and ideas and tell you more about how we can help you. Contact us below" },
      { id: 7, name: "seven", content: "We would very much like to hear your thoughts and ideas and tell you more about how we can help you. Contact us below" },
    ],
  ]
}
