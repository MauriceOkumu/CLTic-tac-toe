var chalk  = require('chalk');
var clear = require('clear');
var CLI = require('clui');
var figlet = require('figlet');
var inquirer = require('inquirer');
var Preferences = require('preferences');
var Spinner = CLI.Spinner;
var GitHubApi = require('github');
var _ = require('lodash');
var git = require('simple-git')();
var touch = require('touch');
var fs = require('fs');
var files = require('./lib/files');
// var game = require('/.gameboard')

console.log(
  chalk.yellow(
    figlet.textSync('tic-tac-toe', { horizontalLayout: 'full' })
  )
);

 var board = function() {
   return {
    1: "['_','_','_']",
    2: "['_','_','_']",
    3: "['_','_','_']"
   }
 }

 console.log(board())