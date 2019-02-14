import {Component, Input, OnInit} from '@angular/core';
import {environment} from '../../environments/environment';
import {forEach} from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.css']
})
export class TopicComponent implements OnInit {

  clickMessage: string;

  constructor() { }

  ngOnInit() {
  }

  onClickRandomTopic() {
    const topics = environment.topicTechniques
      .concat(environment.topicPlatforms)
      .concat(environment.topicLanguagesFrameworks)
      .concat(environment.topicTools);
    this.clickMessage = topics[this.getRandomInt(0, topics.length - 1)];
  }

  onClickAllTopic() {
    const topics = environment.topicTechniques
      .concat(environment.topicPlatforms)
      .concat(environment.topicLanguagesFrameworks)
      .concat(environment.topicTools);
    this.clickMessage = this.getLinedArray(topics);
  }

  onClickRandomTools() {
    this.clickMessage = environment.topicTools[this.getRandomInt(0, environment.topicTools.length - 1)];
  }
  onClickAllTools() {
    this.clickMessage = this.getLinedArray(environment.topicTools);
  }
  onClickRandomLanguagesFrameworks() {
    this.clickMessage = environment.topicLanguagesFrameworks[this.getRandomInt(0, environment.topicLanguagesFrameworks.length - 1)];
  }
  onClickAllLanguagesFrameworks() {
    this.clickMessage = this.getLinedArray(environment.topicLanguagesFrameworks);
  }
  onClickRandomPlatforms() {
    this.clickMessage = environment.topicPlatforms[this.getRandomInt(0, environment.topicPlatforms.length - 1)];
  }
  onClickAllPlatforms() {
    this.clickMessage = this.getLinedArray(environment.topicPlatforms);
  }
  onClickRandomTechniques() {
    this.clickMessage = environment.topicTechniques[this.getRandomInt(0, environment.topicTechniques.length - 1)];
  }
  onClickAllTechniques() {
    this.clickMessage = this.getLinedArray(environment.topicTechniques);
  }

  getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  private getLinedArray(stringArray) {
    let linedArray = '';
    for (const s of stringArray) {
      linedArray = s + '\r\n' + linedArray;
    }
    return linedArray;
  }
}
