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
  allList: string;

  constructor() { }

  ngOnInit() {
  }

  onClickRandomTopic() {
    this.clear();
    const topics = this.getCombinedTopics();
    this.clickMessage = topics[this.getRandomInt(0, topics.length - 1)];
  }
  onClickAllTopic() {
    this.clear();
    this.allList = this.getLinedArray(this.getCombinedTopics());
  }

  onClickRandomTools() {
    this.clear();
    this.clickMessage = environment.topicTools[this.getRandomInt(0, environment.topicTools.length - 1)];
  }
  onClickAllTools() {
    this.clear();
    this.allList = this.getLinedArray(environment.topicTools);
  }
  onClickRandomLanguagesFrameworks() {
    this.clear();
    this.clickMessage = environment.topicLanguagesFrameworks[this.getRandomInt(0, environment.topicLanguagesFrameworks.length - 1)];
  }
  onClickAllLanguagesFrameworks() {
    this.clear();
    this.allList = this.getLinedArray(environment.topicLanguagesFrameworks);
  }
  onClickRandomPlatforms() {
    this.clear();
    this.clickMessage = environment.topicPlatforms[this.getRandomInt(0, environment.topicPlatforms.length - 1)];
  }
  onClickAllPlatforms() {
    this.clear();
    this.allList = this.getLinedArray(environment.topicPlatforms);
  }
  onClickRandomTechniques() {
    this.clear();
    this.clickMessage = environment.topicTechniques[this.getRandomInt(0, environment.topicTechniques.length - 1)];
  }
  onClickAllTechniques() {
    this.clear();
    this.allList = this.getLinedArray(environment.topicTechniques);
  }

  onClickClear() {
    this.clear();
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
  private getCombinedTopics() {
    const topics = environment.topicTechniques
      .concat(environment.topicPlatforms)
      .concat(environment.topicLanguagesFrameworks)
      .concat(environment.topicTools);
    return topics;
  }
  private clear() {
    this.allList = '';
    this.clickMessage = '';
  }
}
