var gulp = require('gulp'),
	requireDir = require('require-dir'),
	runSequence = require('run-sequence');
	
requireDir('./config', { recurse: true });