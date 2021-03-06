import { Template } from 'meteor/templating';

import { Boxes } from '../../api/game.js'
 
import './body.html';

  Meteor.startup(function () {
    //just to be sure, we want to begin with a new collection
    // Boxes.remove({});
    //and fill it with 9 boxes
    if(Boxes.find().count() === 0) {
      for(var i = 0; i < 9; i++){
        Boxes.insert({});
      }
    }
  });


  Template.gameboard.helpers({
    boxes: function(){
      return Boxes.find({});
    }
  });

  Template.gameboard.events({
    click: function() {
      console.log('Clicked the gameboard');
    }
  });

