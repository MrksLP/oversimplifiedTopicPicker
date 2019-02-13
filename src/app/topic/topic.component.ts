import {Component, Input, OnInit} from '@angular/core';
import {environment} from '../../environments/environment';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html'
})
export class TopicComponent implements OnInit {

  clickMessage: string;

  constructor() { }

  ngOnInit() {
  }

  onClickTopic() {
    const topics = environment.topicTechniques
      .concat(environment.topicPlatforms)
      .concat(environment.topicLanguagesFrameworks)
      .concat(environment.topicTools);
    this.clickMessage = topics[this.getRandomInt(1, topics.length)];
  }
  onClickTools() {
    this.clickMessage = environment.topicTools[this.getRandomInt(1, environment.topicTools.length)];
  }
  onClickLanguagesFrameworks() {
    this.clickMessage = environment.topicLanguagesFrameworks[this.getRandomInt(1, environment.topicLanguagesFrameworks.length)];
  }
  onClickPlatforms() {
    this.clickMessage = environment.topicPlatforms[this.getRandomInt(1, environment.topicPlatforms.length)];
  }
  onClickTechniques() {
    this.clickMessage = environment.topicTechniques[this.getRandomInt(1, environment.topicTechniques.length)];
  }

  getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
